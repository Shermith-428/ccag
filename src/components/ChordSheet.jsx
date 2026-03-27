import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { transposeLine } from '../utils/transpose';

const SHARP = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
const FLAT  = ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'];

function shiftKey(key, steps) {
  let idx = SHARP.indexOf(key);
  if (idx === -1) idx = FLAT.indexOf(key);
  if (idx === -1) return key;
  return SHARP[(idx + steps + 12) % 12];
}

export default function ChordSheet({ hymn, onClose, onToggleFavorite, isFavorite }) {
  const [steps, setSteps] = useState(0);
  const [fontSize, setFontSize] = useState(15);
  const [saving, setSaving] = useState(false);
  const sheetRef = useRef();

  const currentKey = shiftKey(hymn.key, steps);

  async function saveAsImage() {
    setSaving(true);
    try {
      const canvas = await html2canvas(sheetRef.current, { backgroundColor: '#05070f', scale: 2, useCORS: true, logging: false });
      const link = document.createElement('a');
      link.download = `${hymn.code} - ${hymn.name}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="overlay fade-in">
      <div className="max-w-2xl mx-auto px-3 sm:px-4 md:px-6 lg:px-4 py-4 pb-28 lg:pb-10">

        {/* ── Toolbar ── */}
        <div className="sticky top-3 z-10 mb-4 fade-up rounded-2xl p-2 sm:p-3 flex flex-wrap gap-2 items-center"
          style={{ background: 'rgba(12,16,24,0.95)', backdropFilter: 'blur(16px)', border: '1px solid var(--border2)', boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}>

          <button onClick={onClose} className="btn btn-secondary btn-sm">
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M1 1l10 10M11 1L1 11"/>
            </svg>
            <span className="hidden sm:inline">Close</span>
          </button>

          <div className="w-px h-5 hidden sm:block" style={{ background: 'var(--border2)' }} />

          {/* Transpose */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs hidden sm:block" style={{ color: 'var(--muted2)' }}>Transpose</span>
            <button onClick={() => setSteps(s => s - 1)} className="btn btn-secondary btn-sm" style={{ padding: '5px 10px' }}>−</button>
            <div className="w-10 text-center">
              <span className="text-sm font-bold font-mono" style={{ color: steps === 0 ? 'var(--muted2)' : 'var(--accent)' }}>
                {steps > 0 ? `+${steps}` : steps}
              </span>
            </div>
            <button onClick={() => setSteps(s => s + 1)} className="btn btn-secondary btn-sm" style={{ padding: '5px 10px' }}>+</button>
            {steps !== 0 && (
              <button onClick={() => setSteps(0)} className="btn btn-ghost btn-sm">↺</button>
            )}
          </div>

          <div className="w-px h-5 hidden sm:block" style={{ background: 'var(--border2)' }} />

          {/* Font size */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs hidden sm:block" style={{ color: 'var(--muted2)' }}>Size</span>
            <button onClick={() => setFontSize(s => Math.max(10, s - 1))} className="btn btn-secondary btn-sm">A−</button>
            <span className="text-xs w-5 text-center" style={{ color: 'var(--muted2)' }}>{fontSize}</span>
            <button onClick={() => setFontSize(s => Math.min(30, s + 1))} className="btn btn-secondary btn-sm">A+</button>
          </div>

          <div className="ml-auto flex gap-2">
            <button onClick={onToggleFavorite} className={`btn btn-sm ${isFavorite ? 'btn-gold' : 'btn-ghost'}`}>
              {isFavorite ? '★' : '☆'}
              <span className="hidden sm:inline">{isFavorite ? 'Saved' : 'Save'}</span>
            </button>
            <button onClick={saveAsImage} disabled={saving} className="btn btn-primary btn-sm">
              {saving
                ? <span style={{ opacity: 0.7 }}>Saving…</span>
                : <>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    <span className="hidden sm:inline">Save Image</span>
                    <span className="sm:hidden">PNG</span>
                  </>
              }
            </button>
          </div>
        </div>

        {/* ── Sheet ── */}
        <div ref={sheetRef} className="fade-up rounded-2xl overflow-hidden"
          style={{ background: 'var(--surface)', border: '1px solid var(--border2)', animationDelay: '0.05s' }}>

          {/* Sheet header */}
          <div className="relative px-6 py-5 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, var(--surface2) 0%, var(--surface) 100%)', borderBottom: '1px solid var(--border)' }}>
            {/* Glow blob */}
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(79,142,247,0.08) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
            <div className="relative z-10 flex items-start justify-between gap-4">
              <div>
                <span className="badge badge-blue mb-2">{hymn.code}</span>
                <h1 className="text-white font-black mt-1.5 leading-tight" style={{ fontSize: `${Math.max(fontSize + 4, 18)}px` }}>
                  {hymn.name}
                </h1>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-xs mb-1" style={{ color: 'var(--muted2)' }}>Key</p>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg"
                  style={{ background: 'linear-gradient(135deg, rgba(79,142,247,0.15), rgba(129,140,248,0.15))', border: '1px solid var(--border3)', color: 'var(--accent)', fontFamily: 'JetBrains Mono' }}>
                  {currentKey}
                </div>
                {steps !== 0 && <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>was {hymn.key}</p>}
              </div>
            </div>
          </div>

          {/* Sheet body */}
          <div className="px-6 py-5" style={{ fontSize: `${fontSize}px` }}>
            {hymn.content.map((sec, si) => (
              <div key={si} className="mb-7">
                <div className="section-label">{sec.section}</div>
                <div>
                  {sec.lines.map((line, li) => (
                    <div key={li} className="mb-1.5">
                      {line.chords && (
                        <div className="chord-line" style={{ fontSize: `${fontSize}px` }}>
                          {transposeLine(line.chords, steps)}
                        </div>
                      )}
                      {line.lyric && (
                        <div className="lyric-line" style={{ fontSize: `${fontSize}px` }}>
                          {line.lyric}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Watermark footer */}
            <div className="mt-4 pt-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--border)' }}>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded flex items-center justify-center text-white font-black text-xs"
                  style={{ background: 'linear-gradient(135deg, #4f8ef7, #818cf8)', fontSize: '9px' }}>C</div>
                <span className="text-xs font-semibold" style={{ color: 'var(--muted)', letterSpacing: '0.08em' }}>CCAG</span>
              </div>
              <span className="text-xs font-mono" style={{ color: 'var(--muted)' }}>{hymn.code} · Key of {currentKey}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
