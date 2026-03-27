import { useState } from 'react';
import ChordSheet from '../components/ChordSheet';

export default function SetlistsPage({ hymns, setlists, setSetlists, favorites, setFavorites }) {
  const [activeId, setActiveId] = useState(null);
  const [newName, setNewName] = useState('');
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const active = setlists.find(s => s.id === activeId);

  function createSetlist() {
    if (!newName.trim()) return;
    const s = { id: Date.now(), name: newName.trim(), hymnIds: [], createdAt: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) };
    setSetlists(prev => [...prev, s]);
    setActiveId(s.id);
    setNewName('');
  }

  function deleteSetlist(id) {
    if (!confirm('Delete this setlist?')) return;
    setSetlists(prev => prev.filter(s => s.id !== id));
    if (activeId === id) setActiveId(null);
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
    <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-4 py-5 md:py-7 page-content">

      {/* Header */}
      <div className="hero-banner fade-up mb-6">
        <div className="relative z-10">
          <span className="badge badge-purple mb-2">Worship Sessions</span>
          <h1 className="font-black text-white mt-1" style={{ fontSize: 'clamp(22px, 4vw, 30px)' }}>
            <span className="gradient-text">Setlists</span>
          </h1>
          <p className="text-sm mt-1" style={{ color: 'var(--muted2)' }}>
            {setlists.length} session{setlists.length !== 1 ? 's' : ''} · Organize your worship order
          </p>
        </div>
      </div>

      {/* Create input */}
      <div className="flex gap-2 mb-6 fade-up" style={{ animationDelay: '0.05s' }}>
        <div className="relative flex-1">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
            width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          <input value={newName} onChange={e => setNewName(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && createSetlist()}
            placeholder="e.g. 29th Sunday Worship Session..."
            className="inp" style={{ paddingLeft: '40px' }} />
        </div>
        <button onClick={createSetlist} className="btn btn-primary">Create</button>
      </div>

      {/* Setlist cards grid */}
      {setlists.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {setlists.map((s, i) => (
            <div key={s.id} className="fade-up" style={{ animationDelay: `${i * 0.04}s` }}>
              <div onClick={() => setActiveId(s.id === activeId ? null : s.id)}
                className="rounded-xl p-4 cursor-pointer transition-all"
                style={activeId === s.id
                  ? { background: 'rgba(79,142,247,0.1)', border: '1px solid var(--border3)', boxShadow: '0 0 20px rgba(79,142,247,0.1)' }
                  : { background: 'var(--surface2)', border: '1px solid var(--border)', }}>
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base" style={{ color: activeId === s.id ? 'var(--accent)' : 'var(--muted2)' }}>≡</span>
                      <p className="text-white font-semibold text-sm truncate">{s.name}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="badge badge-blue" style={{ fontSize: '10px' }}>{s.hymnIds.length} hymns</span>
                      {s.createdAt && <span className="text-xs" style={{ color: 'var(--muted)' }}>{s.createdAt}</span>}
                    </div>
                  </div>
                  <button onClick={e => { e.stopPropagation(); deleteSetlist(s.id); }}
                    className="btn btn-danger btn-xs shrink-0">✕</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {setlists.length === 0 && (
        <div className="text-center py-20 fade-in">
          <div className="text-5xl mb-4" style={{ opacity: 0.2 }}>≡</div>
          <p className="font-semibold" style={{ color: 'var(--muted2)' }}>No setlists yet</p>
          <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>Create a session above to organize your worship order</p>
        </div>
      )}

      {/* Active setlist detail */}
      {active && (
        <div className="glow-card fade-up">
          {/* Header */}
          <div className="px-5 py-4 flex items-center justify-between gap-3"
            style={{ borderBottom: '1px solid var(--border)', background: 'linear-gradient(135deg, var(--surface2), var(--surface))' }}>
            <div className="min-w-0">
              <h2 className="text-white font-bold truncate">{active.name}</h2>
              <p className="text-xs mt-0.5" style={{ color: 'var(--muted2)' }}>
                {activeHymns.length} {activeHymns.length === 1 ? 'hymn' : 'hymns'}
                {active.createdAt && ` · ${active.createdAt}`}
              </p>
            </div>
            <button onClick={() => setShowPicker(p => !p)}
              className={`btn btn-sm shrink-0 ${showPicker ? 'btn-secondary' : 'btn-primary'}`}>
              {showPicker ? '✕ Done' : '+ Add Hymns'}
            </button>
          </div>

          {/* Picker */}
          {showPicker && (
            <div className="px-5 py-4" style={{ borderBottom: '1px solid var(--border)', background: 'var(--surface2)' }}>
              <input value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Search hymns to add..." className="inp mb-3" />
              <div className="flex flex-col gap-1.5 max-h-56 overflow-y-auto pr-1">
                {pickerHymns.length === 0
                  ? <p className="text-xs text-center py-5" style={{ color: 'var(--muted)' }}>All hymns added or no results.</p>
                  : pickerHymns.map(h => (
                    <button key={h.id} onClick={() => addHymn(h.id)}
                      className="hymn-row text-left" style={{ cursor: 'pointer' }}>
                      <span className="badge badge-blue shrink-0">{h.code}</span>
                      <span className="text-white text-sm flex-1 truncate">{h.name}</span>
                      <span className="text-xs shrink-0" style={{ color: 'var(--accent)' }}>+ Add</span>
                    </button>
                  ))
                }
              </div>
            </div>
          )}

          {/* Hymn list */}
          <div className="p-4 flex flex-col gap-2">
            {activeHymns.length === 0 ? (
              <p className="text-center py-10 text-sm" style={{ color: 'var(--muted)' }}>
                No hymns yet — click "+ Add Hymns" above
              </p>
            ) : activeHymns.map((h, idx) => (
              <div key={h.id} className="hymn-row fade-up" style={{ animationDelay: `${idx * 0.02}s` }}>
                <span className="text-xs w-5 text-center shrink-0 font-mono" style={{ color: 'var(--muted)' }}>{idx + 1}</span>
                <button onClick={() => setSelected(h)} className="flex-1 flex items-center gap-3 text-left min-w-0">
                  <span className="badge badge-blue shrink-0">{h.code}</span>
                  <span className="text-white text-sm font-semibold truncate">{h.name}</span>
                  <span className="text-xs shrink-0 ml-auto hidden sm:block"
                    style={{ color: 'var(--muted2)', fontFamily: 'JetBrains Mono', background: 'var(--surface3)', padding: '2px 8px', borderRadius: '6px' }}>
                    {h.key}
                  </span>
                </button>
                <button onClick={() => removeHymn(h.id)} className="btn btn-danger btn-xs shrink-0">Remove</button>
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
