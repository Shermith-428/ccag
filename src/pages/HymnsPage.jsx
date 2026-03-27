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
    if (editing) setHymns(prev => prev.map(h => h.id === editing.id ? { ...h, ...data } : h));
    else setHymns(prev => [...prev, { id: Date.now(), ...data }]);
    setShowForm(false); setEditing(null);
  }

  function deleteHymn(id) {
    if (!confirm('Delete this hymn?')) return;
    setHymns(prev => prev.filter(h => h.id !== id));
    setFavorites(prev => prev.filter(f => f !== id));
  }

  function toggleFavorite(id) {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  }

  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-8 page-content">

      {/* ── Hero ── */}
      <div className="hero-banner fade-up">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <span className="badge badge-blue mb-3 block w-fit">Hymn Library</span>
            <h1 className="font-black text-white mb-2" style={{ fontSize: 'clamp(24px, 5vw, 36px)', lineHeight: 1.1 }}>
              Worship <span className="gradient-text">Chord Sheets</span>
            </h1>
            <p style={{ color: 'var(--muted2)', fontSize: '15px' }}>
              {hymns.length} songs · {favorites.length} favourited
            </p>
          </div>
          {isAdmin && (
            <button onClick={() => { setEditing(null); setShowForm(true); }}
              className="btn btn-primary self-start sm:self-auto" style={{ padding: '12px 22px', fontSize: '14px' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
              Add Hymn
            </button>
          )}
        </div>

        {/* Stats */}
        <div className="relative z-10 grid grid-cols-3 gap-3 mt-6">
          {[
            { icon: '♪', label: 'Total', value: hymns.length, bg: 'rgba(246,201,14,0.1)' },
            { icon: '★', label: 'Favourites', value: favorites.length, bg: 'rgba(246,201,14,0.07)' },
            { icon: '≡', label: 'Showing', value: filtered.length, bg: 'rgba(246,201,14,0.05)' },
          ].map(s => (
            <div key={s.label} className="rounded-2xl p-4 flex flex-col gap-1"
              style={{ background: s.bg, border: '1px solid rgba(246,201,14,0.12)' }}>
              <span style={{ color: 'var(--accent)', fontSize: '20px' }}>{s.icon}</span>
              <p className="font-black text-white" style={{ fontSize: 'clamp(20px, 4vw, 28px)', lineHeight: 1 }}>{s.value}</p>
              <p style={{ color: 'var(--muted2)', fontSize: '12px' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Search ── */}
      <div className="relative mb-6 fade-up" style={{ animationDelay: '0.05s' }}>
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <input value={search} onChange={e => setSearch(e.target.value)}
          placeholder="Search by code (C-001) or song name..."
          className="inp" style={{ paddingLeft: '46px', paddingRight: search ? '44px' : '16px', fontSize: '15px', padding: '14px 16px 14px 46px' }} />
        {search && (
          <button onClick={() => setSearch('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center"
            style={{ background: 'var(--surface3)', color: 'var(--muted2)', fontSize: '12px' }}>✕</button>
        )}
      </div>

      {/* ── List ── */}
      <div className="flex flex-col gap-3">
        {filtered.map((h, i) => (
          <div key={h.id} className="hymn-row fade-up" style={{ animationDelay: `${Math.min(i * 0.015, 0.3)}s`, padding: '16px 18px', borderRadius: '14px' }}>

            <button onClick={() => toggleFavorite(h.id)}
              className="shrink-0 w-9 h-9 flex items-center justify-center rounded-xl transition-all"
              style={{
                color: favorites.includes(h.id) ? 'var(--gold)' : 'var(--muted)',
                background: favorites.includes(h.id) ? 'var(--gold-glow)' : 'var(--surface2)',
                fontSize: '18px', lineHeight: 1,
              }}>
              {favorites.includes(h.id) ? '★' : '☆'}
            </button>

            <button onClick={() => setSelected(h)} className="flex-1 flex flex-col gap-1 text-left min-w-0">
              <div className="flex items-center gap-2">
                <span className="badge badge-blue shrink-0">{h.code}</span>
                <span className="text-white font-bold truncate" style={{ fontSize: '15px' }}>{h.name}</span>
              </div>
              <span style={{ color: 'var(--muted2)', fontSize: '12px', fontFamily: 'JetBrains Mono' }}>Key of {h.key}</span>
            </button>

            <div className="flex items-center gap-2 shrink-0">
              {isAdmin && (
                <>
                  <button onClick={() => { setEditing(h); setShowForm(true); }} className="btn btn-ghost btn-sm">Edit</button>
                  <button onClick={() => deleteHymn(h.id)} className="btn btn-danger btn-sm">Del</button>
                </>
              )}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-24 fade-in">
            <div className="text-6xl mb-5" style={{ opacity: 0.2 }}>♪</div>
            <p className="font-bold text-lg" style={{ color: 'var(--muted2)' }}>No results for "{search}"</p>
            <p className="mt-2" style={{ color: 'var(--muted)', fontSize: '14px' }}>Try the song code like C-001 or part of the name</p>
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
