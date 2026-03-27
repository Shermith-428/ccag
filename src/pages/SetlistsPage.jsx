import { useState } from 'react';
import ChordSheet from '../components/ChordSheet';

export default function SetlistsPage({ hymns, setlists, setSetlists, favorites, setFavorites }) {
  const [activeId, setActiveId] = useState(() => {
    try { return JSON.parse(localStorage.getItem('ccag_active_setlist')); } catch { return null; }
  });

  function handleSetActive(id) {
    setActiveId(id);
    localStorage.setItem('ccag_active_setlist', JSON.stringify(id));
  }
  const [newName, setNewName] = useState('');
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const active = setlists.find(s => s.id === activeId);

  function createSetlist() {
    if (!newName.trim()) return;
    const s = { id: Date.now(), name: newName.trim(), hymnIds: [], createdAt: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) };
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

  function toggleFavorite(id) {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  }

  const activeHymns = active
    ? hymns.filter(h => active.hymnIds.includes(h.id)).sort((a, b) => active.hymnIds.indexOf(a.id) - active.hymnIds.indexOf(b.id))
    : [];

  const pickerHymns = hymns.filter(h =>
    !active?.hymnIds.includes(h.id) &&
    (h.name.toLowerCase().includes(search.toLowerCase()) || h.code.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-8 page-content">

      {/* ── Hero ── */}
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

      {/* ── Create ── */}
      <div className="flex gap-3 mb-8 fade-up" style={{ animationDelay: '0.05s' }}>
        <input value={newName} onChange={e => setNewName(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && createSetlist()}
          placeholder="e.g. 29th Sunday Worship Session..."
          className="inp flex-1" style={{ fontSize: '15px', padding: '14px 16px' }} />
        <button onClick={createSetlist} className="btn btn-primary" style={{ padding: '14px 22px', fontSize: '14px' }}>
          Create
        </button>
      </div>

      {/* ── Setlist cards ── */}
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

      {/* ── Active setlist ── */}
      {active && (
        <div className="glow-card fade-up" style={{ borderRadius: '18px', overflow: 'hidden' }}>

          {/* Header */}
          <div className="px-6 py-5 flex items-center justify-between gap-4"
            style={{ background: 'linear-gradient(135deg, var(--surface2), var(--surface))', borderBottom: '1px solid var(--border)' }}>
            <div className="min-w-0">
              <h2 className="text-white font-bold truncate" style={{ fontSize: '17px' }}>{active.name}</h2>
              <p className="mt-1" style={{ color: 'var(--muted2)', fontSize: '13px' }}>
                {activeHymns.length} {activeHymns.length === 1 ? 'hymn' : 'hymns'}
                {active.createdAt && ` · ${active.createdAt}`}
              </p>
            </div>
            <button onClick={() => setShowPicker(p => !p)}
              className={`btn shrink-0 ${showPicker ? 'btn-secondary' : 'btn-primary'}`}
              style={{ padding: '10px 18px' }}>
              {showPicker ? '✕ Done' : '+ Add Hymns'}
            </button>
          </div>

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

          {/* Hymn list */}
          <div className="p-5 flex flex-col gap-3">
            {activeHymns.length === 0 ? (
              <p className="text-center py-12" style={{ color: 'var(--muted)', fontSize: '14px' }}>
                No hymns yet — tap "+ Add Hymns" above
              </p>
            ) : activeHymns.map((h, idx) => (
              <div key={h.id} className="hymn-row fade-up" style={{ animationDelay: `${idx * 0.02}s`, padding: '15px 16px', borderRadius: '12px' }}>
                <span className="shrink-0 w-7 h-7 flex items-center justify-center rounded-lg font-bold"
                  style={{ background: 'var(--surface3)', color: 'var(--muted2)', fontSize: '12px' }}>{idx + 1}</span>
                <button onClick={() => setSelected(h)} className="flex-1 flex flex-col gap-1 text-left min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="badge badge-blue shrink-0">{h.code}</span>
                    <span className="text-white font-bold truncate" style={{ fontSize: '14px' }}>{h.name}</span>
                  </div>
                  <span style={{ color: 'var(--muted2)', fontSize: '12px', fontFamily: 'JetBrains Mono' }}>Key of {h.key}</span>
                </button>
                <button onClick={() => removeHymn(h.id)} className="btn btn-danger btn-sm shrink-0">Remove</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {selected && (
        <ChordSheet hymn={selected} onClose={() => setSelected(null)}
          isFavorite={favorites.includes(selected.id)}
          onToggleFavorite={() => toggleFavorite(selected.id)} />
      )}
    </div>
  );
}
