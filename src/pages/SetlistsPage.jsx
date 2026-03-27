import { useState } from 'react';
import {
  DndContext, closestCenter, PointerSensor, TouchSensor,
  useSensor, useSensors, DragOverlay,
} from '@dnd-kit/core';
import {
  SortableContext, verticalListSortingStrategy,
  useSortable, arrayMove,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import ChordSheet from '../components/ChordSheet';
import { generateSetlistPDF } from '../utils/setlistPDF';

function SortableHymnRow({ h, idx, onOpen, onRemove, transposedKey }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: h.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
  };

  return (
    <div ref={setNodeRef} style={style}
      className="hymn-row fade-up"
      style={{ ...style, padding: '15px 16px', borderRadius: '12px', cursor: 'default' }}>

      {/* Drag handle */}
      <button {...attributes} {...listeners}
        style={{ cursor: 'grab', padding: '4px 6px', color: 'var(--muted)', background: 'transparent', border: 'none', touchAction: 'none', flexShrink: 0 }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
          <circle cx="4" cy="3" r="1.2"/><circle cx="10" cy="3" r="1.2"/>
          <circle cx="4" cy="7" r="1.2"/><circle cx="10" cy="7" r="1.2"/>
          <circle cx="4" cy="11" r="1.2"/><circle cx="10" cy="11" r="1.2"/>
        </svg>
      </button>

      <span className="shrink-0 w-7 h-7 flex items-center justify-center rounded-lg font-bold"
        style={{ background: 'var(--surface3)', color: 'var(--muted2)', fontSize: '12px' }}>{idx + 1}</span>

      <button onClick={() => onOpen(h)} className="flex-1 flex flex-col gap-1 text-left min-w-0">
        <div className="flex items-center gap-2">
          <span className="badge badge-blue shrink-0">{h.code}</span>
          <span className="text-white font-bold truncate" style={{ fontSize: '14px' }}>{h.name}</span>
        </div>
        <span style={{ color: transposedKey !== h.key ? 'var(--accent)' : 'var(--muted2)', fontSize: '12px', fontFamily: 'JetBrains Mono' }}>
          Key of {transposedKey} {transposedKey !== h.key ? `(orig. ${h.key})` : ''}
        </span>
      </button>

      <button onClick={() => onRemove(h.id)} className="btn btn-danger btn-sm shrink-0">Remove</button>
    </div>
  );
}

const SHARP = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
const FLAT  = ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'];
function shiftKey(key, steps) {
  let idx = SHARP.indexOf(key); if (idx === -1) idx = FLAT.indexOf(key);
  if (idx === -1) return key;
  return SHARP[(idx + steps + 12) % 12];
}

export default function SetlistsPage({ hymns, setlists, setSetlists, favorites, setFavorites }) {
  const [activeId, setActiveId] = useState(() => {
    try { return JSON.parse(localStorage.getItem('ccag_active_setlist')); } catch { return null; }
  });
  const [newName, setNewName]   = useState('');
  const [selected, setSelected] = useState(null);
  const [search, setSearch]     = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [savedMsg, setSavedMsg] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor,   { activationConstraint: { delay: 150, tolerance: 5 } })
  );

  function handleSetActive(id) {
    setActiveId(id);
    localStorage.setItem('ccag_active_setlist', JSON.stringify(id));
  }

  const active = setlists.find(s => s.id === activeId);

  function createSetlist() {
    if (!newName.trim()) return;
    const s = { id: Date.now(), name: newName.trim(), hymnIds: [], transposeMap: {}, createdAt: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) };
    setSetlists(prev => [...prev, s]);
    handleSetActive(s.id);
    setNewName('');
  }

  function deleteSetlist(id) {
    if (!confirm('Delete this setlist?')) return;
    setSetlists(prev => prev.filter(s => s.id !== id));
    if (activeId === id) handleSetActive(null);
  }

  function addHymn(hymnId) {
    setSetlists(prev => prev.map(s =>
      s.id === activeId && !s.hymnIds.includes(hymnId)
        ? { ...s, hymnIds: [...s.hymnIds, hymnId] } : s
    ));
  }

  function removeHymn(hymnId) {
    setSetlists(prev => prev.map(s =>
      s.id === activeId ? { ...s, hymnIds: s.hymnIds.filter(id => id !== hymnId) } : s
    ));
  }

  function saveTranspose(hymnId, steps) {
    setSetlists(prev => prev.map(s =>
      s.id === activeId
        ? { ...s, transposeMap: { ...(s.transposeMap ?? {}), [hymnId]: steps } }
        : s
    ));
    setSavedMsg(true);
    setTimeout(() => setSavedMsg(false), 2000);
    setSelected(null);
  }

  function handleDragEnd(event) {
    const { active: dragActive, over } = event;
    if (!over || dragActive.id === over.id) return;
    setSetlists(prev => prev.map(s => {
      if (s.id !== activeId) return s;
      const oldIdx = s.hymnIds.indexOf(dragActive.id);
      const newIdx = s.hymnIds.indexOf(over.id);
      return { ...s, hymnIds: arrayMove(s.hymnIds, oldIdx, newIdx) };
    }));
  }

  async function downloadSetlistPDF() {
    if (!active || activeHymns.length === 0) return;
    setDownloading(true);
    try {
      const doc = await generateSetlistPDF(active, activeHymns);
      const blob = doc.output('blob');
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement('a');
      a.href = url; a.download = `${active.name}.pdf`;
      a.style.display = 'none';
      document.body.appendChild(a); a.click();
      setTimeout(() => { URL.revokeObjectURL(url); document.body.removeChild(a); }, 1000);
    } finally { setDownloading(false); }
  }

  function toggleFavorite(id) {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  }

  const activeHymns = active
    ? hymns.filter(h => active.hymnIds.includes(h.id))
        .sort((a, b) => active.hymnIds.indexOf(a.id) - active.hymnIds.indexOf(b.id))
    : [];

  const pickerHymns = hymns.filter(h =>
    !active?.hymnIds.includes(h.id) &&
    (h.name.toLowerCase().includes(search.toLowerCase()) || h.code.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-8 page-content">

      {/* Hero */}
      <div className="hero-banner fade-up mb-8">
        <div className="relative z-10">
          <span className="badge badge-gold mb-3 block w-fit">Worship Sessions</span>
          <h1 className="font-black text-white mb-2" style={{ fontSize: 'clamp(24px, 5vw, 36px)', lineHeight: 1.1 }}>
            <span className="gradient-text">Setlists</span>
          </h1>
          <p style={{ color: 'var(--muted2)', fontSize: '15px' }}>
            {setlists.length} session{setlists.length !== 1 ? 's' : ''} · Organise your worship order
          </p>
        </div>
      </div>

      {/* Create */}
      <div className="flex gap-3 mb-8 fade-up" style={{ animationDelay: '0.05s' }}>
        <input value={newName} onChange={e => setNewName(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && createSetlist()}
          placeholder="e.g. 29th Sunday Worship Session..."
          className="inp flex-1" style={{ fontSize: '15px', padding: '14px 16px' }} />
        <button onClick={createSetlist} className="btn btn-primary" style={{ padding: '14px 22px', fontSize: '14px' }}>
          Create
        </button>
      </div>

      {/* Setlist cards */}
      {setlists.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {setlists.map((s, i) => (
            <div key={s.id} onClick={() => handleSetActive(s.id === activeId ? null : s.id)}
              className="fade-up rounded-2xl p-5 cursor-pointer transition-all"
              style={{
                animationDelay: `${i * 0.04}s`,
                background: activeId === s.id ? 'rgba(246,201,14,0.1)' : 'var(--surface2)',
                border: activeId === s.id ? '1px solid var(--border3)' : '1px solid var(--border)',
                boxShadow: activeId === s.id ? '0 0 24px rgba(246,201,14,0.08)' : 'none',
              }}>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span style={{ fontSize: '20px', color: activeId === s.id ? 'var(--accent)' : 'var(--muted2)' }}>≡</span>
                    <p className="text-white font-bold truncate" style={{ fontSize: '15px' }}>{s.name}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="badge badge-blue">{s.hymnIds.length} hymns</span>
                    {s.createdAt && <span style={{ color: 'var(--muted)', fontSize: '12px' }}>{s.createdAt}</span>}
                  </div>
                </div>
                <button onClick={e => { e.stopPropagation(); deleteSetlist(s.id); }}
                  className="btn btn-danger btn-sm shrink-0">✕</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {setlists.length === 0 && (
        <div className="text-center py-24 fade-in">
          <div className="text-6xl mb-5" style={{ opacity: 0.2 }}>≡</div>
          <p className="font-bold text-lg" style={{ color: 'var(--muted2)' }}>No setlists yet</p>
          <p className="mt-2" style={{ color: 'var(--muted)', fontSize: '14px' }}>Create a session above to organise your worship order</p>
        </div>
      )}

      {/* Active setlist */}
      {active && (
        <div className="glow-card fade-up" style={{ borderRadius: '18px', overflow: 'hidden' }}>

          {/* Header */}
          <div className="px-6 py-5 flex items-center justify-between gap-3 flex-wrap"
            style={{ background: 'linear-gradient(135deg, var(--surface2), var(--surface))', borderBottom: '1px solid var(--border)' }}>
            <div className="min-w-0">
              <h2 className="text-white font-bold truncate" style={{ fontSize: '17px' }}>{active.name}</h2>
              <p className="mt-1" style={{ color: 'var(--muted2)', fontSize: '13px' }}>
                {activeHymns.length} {activeHymns.length === 1 ? 'hymn' : 'hymns'}
                {active.createdAt && ` · ${active.createdAt}`}
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {activeHymns.length > 0 && (
                <button onClick={downloadSetlistPDF} disabled={downloading}
                  className="btn btn-primary" style={{ padding: '10px 16px', fontSize: '13px' }}>
                  {downloading ? 'Generating…' : (
                    <>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                      </svg>
                      Download PDF
                    </>
                  )}
                </button>
              )}
              <button onClick={() => setShowPicker(p => !p)}
                className={`btn ${showPicker ? 'btn-secondary' : 'btn-ghost'}`}
                style={{ padding: '10px 16px', fontSize: '13px' }}>
                {showPicker ? '✕ Done' : '+ Add Hymns'}
              </button>
            </div>
          </div>

          {/* Saved key toast */}
          {savedMsg && (
            <div style={{ background: 'rgba(246,201,14,0.12)', borderBottom: '1px solid var(--border3)', padding: '10px 20px', fontSize: '13px', color: 'var(--accent)', fontWeight: 600, textAlign: 'center' }}>
              ✓ Transpose key saved to setlist
            </div>
          )}

          {/* Picker */}
          {showPicker && (
            <div className="px-6 py-5" style={{ borderBottom: '1px solid var(--border)', background: 'var(--surface2)' }}>
              <input value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Search hymns to add..." className="inp mb-4"
                style={{ fontSize: '15px', padding: '13px 16px' }} />
              <div className="flex flex-col gap-2 max-h-64 overflow-y-auto pr-1">
                {pickerHymns.length === 0
                  ? <p className="text-center py-6" style={{ color: 'var(--muted)', fontSize: '14px' }}>All hymns added or no results.</p>
                  : pickerHymns.map(h => (
                    <button key={h.id} onClick={() => addHymn(h.id)}
                      className="hymn-row text-left" style={{ padding: '14px 16px', borderRadius: '12px' }}>
                      <span className="badge badge-blue shrink-0">{h.code}</span>
                      <span className="text-white font-semibold flex-1 truncate" style={{ fontSize: '14px' }}>{h.name}</span>
                      <span style={{ color: 'var(--accent)', fontSize: '13px', fontWeight: 600 }}>+ Add</span>
                    </button>
                  ))
                }
              </div>
            </div>
          )}

          {/* Drag hint */}
          {activeHymns.length > 1 && (
            <div style={{ padding: '10px 20px 0', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ color: 'var(--muted)', fontSize: '12px' }}>⠿ Drag to reorder · Tap a song to open and set its key</span>
            </div>
          )}

          {/* Sortable hymn list */}
          <div className="p-5 flex flex-col gap-3">
            {activeHymns.length === 0 ? (
              <p className="text-center py-12" style={{ color: 'var(--muted)', fontSize: '14px' }}>
                No hymns yet — tap "+ Add Hymns" above
              </p>
            ) : (
              <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={activeHymns.map(h => h.id)} strategy={verticalListSortingStrategy}>
                  {activeHymns.map((h, idx) => {
                    const steps = active.transposeMap?.[h.id] ?? 0;
                    const transposedKey = shiftKey(h.key, steps);
                    return (
                      <SortableHymnRow key={h.id} h={h} idx={idx}
                        transposedKey={transposedKey}
                        onOpen={h => setSelected(h)}
                        onRemove={removeHymn} />
                    );
                  })}
                </SortableContext>
              </DndContext>
            )}
          </div>
        </div>
      )}

      {selected && (
        <ChordSheet
          hymn={selected}
          onClose={() => setSelected(null)}
          isFavorite={favorites.includes(selected.id)}
          onToggleFavorite={() => toggleFavorite(selected.id)}
          savedSteps={active?.transposeMap?.[selected.id] ?? 0}
          onSaveTranspose={(steps) => saveTranspose(selected.id, steps)}
        />
      )}
    </div>
  );
}
