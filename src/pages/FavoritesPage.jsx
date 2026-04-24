import { useState } from 'react';
import ChordSheet from '../components/ChordSheet';

export default function FavoritesPage({ hymns, favorites, setFavorites }) {
  const [selected, setSelected] = useState(null);
  const favHymns = hymns.filter(h => favorites.includes(h.id));

  function toggleFavorite(id) {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  }

  return (
    <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 20px' }} className="py-8 page-content">

      {/* ── Hero ── */}
      <div className="hero-banner fade-up mb-8">
        <div className="relative z-10">
          <span className="badge badge-gold mb-3 block w-fit">★ Favourites</span>
          <h1 className="font-black mb-2" style={{ fontSize: 'clamp(24px, 5vw, 36px)', lineHeight: 1.1 }}>
            Your <span className="gradient-text">Saved Hymns</span>
          </h1>
          <p style={{ color: 'var(--muted2)', fontSize: '15px' }}>
            {favHymns.length} {favHymns.length === 1 ? 'hymn' : 'hymns'} saved
          </p>
        </div>
      </div>

      {favHymns.length === 0 ? (
        <div className="text-center py-24 fade-in">
          <div className="text-6xl mb-5" style={{ opacity: 0.2 }}>☆</div>
          <p className="font-bold text-lg" style={{ color: 'var(--muted2)' }}>No favourites yet</p>
          <p className="mt-2" style={{ color: 'var(--muted)', fontSize: '14px' }}>
            Tap the ☆ star on any hymn to save it here
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {favHymns.map((h, i) => (
            <div key={h.id} className="hymn-row fade-up" style={{ animationDelay: `${i * 0.02}s`, padding: '16px 18px', borderRadius: '14px' }}>
              <button onClick={() => toggleFavorite(h.id)}
                className="shrink-0 w-9 h-9 flex items-center justify-center rounded-xl transition-all"
                style={{ color: 'var(--gold)', background: 'var(--gold-glow)', fontSize: '18px', lineHeight: 1 }}>
                ★
              </button>
              <button onClick={() => setSelected(h)} className="flex-1 flex flex-col gap-1 text-left min-w-0">
                <div className="flex items-center gap-2">
                  <span className="badge badge-blue shrink-0">{h.code}</span>
                  <span className="text-white font-bold truncate" style={{ fontSize: '15px' }}>{h.name}</span>
                </div>
                <span style={{ color: 'var(--muted2)', fontSize: '12px', fontFamily: 'JetBrains Mono' }}>Key of {h.key}</span>
              </button>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </div>
          ))}
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
