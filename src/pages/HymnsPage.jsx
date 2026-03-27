import { useState } from 'react';
import ChordSheet from '../components/ChordSheet';
import HymnForm from '../components/HymnForm';
import { useAdmin } from '../context/AdminContext';

export default function HymnsPage({ hymns, setHymns, favorites, setFavorites }) {
  const { isAdmin } = useAdmin();
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);

  const filtered = hymns.filter(h =>
    h.name.toLowerCase().includes(search.toLowerCase()) ||
    h.code.toLowerCase().includes(search.toLowerCase())
  );

  function saveHymn(data) {
    if (editing) {
      setHymns(prev => prev.map(h => h.id === editing.id ? { ...h, ...data } : h));
    } else {
      setHymns(prev => [...prev, { id: Date.now(), ...data }]);
    }
    setShowForm(false);
    setEditing(null);
  }

  function deleteHymn(id) {
    if (!confirm('Delete this hymn? This cannot be undone.')) return;
    setHymns(prev => prev.filter(h => h.id !== id));
    setFavorites(prev => prev.filter(f => f !== id));
  }

  function toggleFavorite(id) {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  }

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-4 py-5 md:py-7 page-content">

      {/* Hero Banner */}
      <div className="hero-banner fade-up">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="badge badge-blue">Hymn Library</span>
            </div>
            <h1 className="font-black text-white mb-1" style={{ fontSize: 'clamp(22px, 4vw, 32px)', lineHeight: 1.15 }}>
              Worship <span className="gradient-text">Chord Sheets</span>
            </h1>
            <p style={{ color: 'var(--muted2)', fontSize: '14px' }}>
              {hymns.length} songs available · {favorites.length} in favorites
            </p>
          </div>
          {isAdmin && (
            <button onClick={() => { setEditing(null); setShowForm(true); }}
              className="btn btn-primary shrink-0 self-start sm:self-auto">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
              Add Hymn
            </button>
          )}
        </div>

        {/* Stats row */}
        <div className="relative z-10 grid grid-cols-3 gap-3 mt-5">
          {[
            { icon: '♪', label: 'Total Songs', value: hymns.length, color: 'rgba(79,142,247,0.15)', iconColor: 'var(--accent)' },
            { icon: '★', label: 'Favorites',   value: favorites.length, color: 'rgba(251,191,36,0.12)', iconColor: 'var(--gold)' },
            { icon: '≡', label: 'Showing',     value: filtered.length, color: 'rgba(167,139,250,0.12)', iconColor: 'var(--purple)' },
          ].map(s => (
            <div key={s.label} className="rounded-xl p-3 sm:p-4 flex items-center gap-3"
              style={{ background: s.color, border: '1px solid rgba(255,255,255,0.06)' }}>
              <span className="text-xl hidden sm:block" style={{ color: s.iconColor }}>{s.icon}</span>
              <div className="min-w-0">
                <p className="font-black text-white" style={{ fontSize: 'clamp(16px, 3vw, 22px)', lineHeight: 1 }}>{s.value}</p>
                <p className="text-xs mt-0.5 truncate" style={{ color: 'var(--muted2)' }}>{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-4 fade-up" style={{ animationDelay: '0.05s' }}>
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
          width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <input value={search} onChange={e => setSearch(e.target.value)}
          placeholder="Search by code (C-001) or song name..."
          className="inp" style={{ paddingLeft: '42px', paddingRight: search ? '40px' : '14px' }} />
        {search && (
          <button onClick={() => setSearch('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center text-xs"
            style={{ background: 'var(--surface3)', color: 'var(--muted2)' }}>✕</button>
        )}
      </div>

      {/* Hymn list */}
      <div className="flex flex-col gap-2">
        {filtered.map((h, i) => (
          <div key={h.id} className="hymn-row fade-up" style={{ animationDelay: `${Math.min(i * 0.015, 0.3)}s` }}>

            {/* Favorite star */}
            <button onClick={() => toggleFavorite(h.id)}
              className="shrink-0 w-7 h-7 flex items-center justify-center rounded-lg transition-all"
              style={{
                color: favorites.includes(h.id) ? 'var(--gold)' : 'var(--muted)',
                background: favorites.includes(h.id) ? 'var(--gold-glow)' : 'transparent',
                fontSize: '15px', lineHeight: 1,
              }}>
              {favorites.includes(h.id) ? '★' : '☆'}
            </button>

            {/* Main clickable area */}
            <button onClick={() => setSelected(h)} className="flex-1 flex items-center gap-3 text-left min-w-0">
              <span className="badge badge-blue shrink-0">{h.code}</span>
              <span className="text-white text-sm font-semibold truncate">{h.name}</span>
              <div className="ml-auto shrink-0 flex items-center gap-2">
                <span className="hidden sm:flex items-center gap-1 text-xs px-2 py-0.5 rounded-md"
                  style={{ background: 'var(--surface3)', color: 'var(--muted2)', fontFamily: 'JetBrains Mono' }}>
                  {h.key}
                </span>
                <svg className="hidden sm:block" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </div>
            </button>

            {/* Admin controls */}
            {isAdmin && (
              <div className="flex gap-1.5 shrink-0">
                <button onClick={() => { setEditing(h); setShowForm(true); }} className="btn btn-ghost btn-xs">Edit</button>
                <button onClick={() => deleteHymn(h.id)} className="btn btn-danger btn-xs">Del</button>
              </div>
            )}
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-20 fade-in">
            <div className="text-5xl mb-4" style={{ filter: 'grayscale(1)', opacity: 0.3 }}>♪</div>
            <p className="font-semibold" style={{ color: 'var(--muted2)' }}>No results for "{search}"</p>
            <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>Try searching by code like C-001 or part of the song name</p>
          </div>
        )}
      </div>

      {selected && (
        <ChordSheet hymn={selected} onClose={() => setSelected(null)}
          isFavorite={favorites.includes(selected.id)}
          onToggleFavorite={() => toggleFavorite(selected.id)} />
      )}
      {showForm && (
        <HymnForm existing={editing} onSave={saveHymn}
          onClose={() => { setShowForm(false); setEditing(null); }} />
      )}
    </div>
  );
}
