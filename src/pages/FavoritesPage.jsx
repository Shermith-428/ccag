import { useState } from 'react';
import ChordSheet from '../components/ChordSheet';

export default function FavoritesPage({ hymns, favorites, setFavorites }) {
  const [selected, setSelected] = useState(null);
  const favHymns = hymns.filter(h => favorites.includes(h.id));

  function toggleFavorite(id) {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  }

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-4 py-5 md:py-7 page-content">

      {/* Hero */}
      <div className="hero-banner fade-up mb-6">
        <div className="relative z-10">
          <span className="badge badge-gold mb-2">★ Favorites</span>
          <h1 className="font-black text-white mt-1" style={{ fontSize: 'clamp(22px, 4vw, 30px)' }}>
            Your <span className="gradient-text">Saved Hymns</span>
          </h1>
          <p className="text-sm mt-1" style={{ color: 'var(--muted2)' }}>
            {favHymns.length} {favHymns.length === 1 ? 'hymn' : 'hymns'} saved
          </p>
        </div>
      </div>

      {favHymns.length === 0 ? (
        <div className="text-center py-20 fade-in">
          <div className="text-5xl mb-4" style={{ opacity: 0.2 }}>☆</div>
          <p className="font-semibold" style={{ color: 'var(--muted2)' }}>No favorites yet</p>
          <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>
            Tap the ☆ star on any hymn to save it here
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {favHymns.map((h, i) => (
            <div key={h.id} className="hymn-row fade-up" style={{ animationDelay: `${i * 0.02}s` }}>
              <button onClick={() => toggleFavorite(h.id)}
                className="shrink-0 w-7 h-7 flex items-center justify-center rounded-lg transition-all"
                style={{ color: 'var(--gold)', background: 'var(--gold-glow)', fontSize: '15px', lineHeight: 1 }}>
                ★
              </button>
              <button onClick={() => setSelected(h)} className="flex-1 flex items-center gap-3 text-left min-w-0">
                <span className="badge badge-blue shrink-0">{h.code}</span>
                <span className="text-white text-sm font-semibold truncate">{h.name}</span>
                <div className="ml-auto shrink-0 flex items-center gap-2">
                  <span className="hidden sm:flex items-center text-xs px-2 py-0.5 rounded-md"
                    style={{ background: 'var(--surface3)', color: 'var(--muted2)', fontFamily: 'JetBrains Mono' }}>
                    {h.key}
                  </span>
                  <svg className="hidden sm:block" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
              </button>
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
