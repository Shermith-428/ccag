import { useState } from 'react';
import { transposeLine } from '../utils/transpose';

const SHARP = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
const FLAT  = ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'];

function shiftKey(key, steps) {
  let idx = SHARP.indexOf(key);
  if (idx === -1) idx = FLAT.indexOf(key);
  if (idx === -1) return key;
  return SHARP[(idx + steps + 12) % 12];
}

async function generatePDF(hymn, steps, fontSize) {
  // load jsPDF from CDN at runtime (Vite 8 / Rolldown compatible)
  if (!window.jspdf) {
    await new Promise((res, rej) => {
      const s = document.createElement('script');
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
      s.onload = res; s.onerror = rej;
      document.head.appendChild(s);
    });
  }
  const { jsPDF } = window.jspdf;
  const doc    = new jsPDF({ unit: 'pt', format: 'a4' });
  const PW     = doc.internal.pageSize.getWidth();   // 595
  const PH     = doc.internal.pageSize.getHeight();  // 842
  const pad    = 40;
  const bodyX  = pad;
  const bodyW  = PW - pad * 2;

  // ── colours ──
  const DARK_BG   = [15, 20, 32];      // header/footer bg
  const ACCENT    = [79, 142, 247];    // blue accent
  const RED       = [220, 38, 38];     // chord colour
  const BLACK     = [20, 20, 20];      // lyric text
  const GOLD      = [251, 191, 36];    // section label
  const WHITE     = [255, 255, 255];
  const LIGHT_BG  = [248, 249, 252];   // body bg
  const MUTED     = [120, 130, 150];

  const fs = Math.max(fontSize, 11);   // min font size for PDF

  // ════════════════════════════════
  // HEADER
  // ════════════════════════════════
  const headerH = 90;
  doc.setFillColor(...DARK_BG);
  doc.rect(0, 0, PW, headerH, 'F');

  // accent top line
  doc.setDrawColor(...ACCENT);
  doc.setLineWidth(3);
  doc.line(0, 0, PW, 0);

  // logo image (if available)
  try {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    await new Promise((res, rej) => {
      img.onload = res; img.onerror = rej;
      img.src = '/CCAG.jpeg';
    });
    const c = document.createElement('canvas');
    c.width = 60; c.height = 60;
    c.getContext('2d').drawImage(img, 0, 0, 60, 60);
    doc.addImage(c.toDataURL('image/jpeg'), 'JPEG', pad, 15, 60, 60);
  } catch { /* skip logo if fails */ }

  // CCAG title
  doc.setTextColor(...WHITE);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.text('CCAG', pad + 70, 42);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...MUTED);
  doc.text('CHORD SHEET APP', pad + 70, 56);

  // song code badge
  const codeW = doc.getTextWidth(hymn.code) + 16;
  doc.setFillColor(...ACCENT);
  doc.roundedRect(PW - pad - codeW - 60, 20, codeW, 18, 4, 4, 'F');
  doc.setTextColor(...WHITE);
  doc.setFont('courier', 'bold');
  doc.setFontSize(9);
  doc.text(hymn.code, PW - pad - codeW - 52, 32);

  // key box
  doc.setFillColor(30, 40, 60);
  doc.roundedRect(PW - pad - 44, 20, 44, 44, 6, 6, 'F');
  doc.setDrawColor(...ACCENT);
  doc.setLineWidth(1);
  doc.roundedRect(PW - pad - 44, 20, 44, 44, 6, 6, 'S');
  doc.setTextColor(...ACCENT);
  doc.setFont('courier', 'bold');
  doc.setFontSize(16);
  const keyLabel = shiftKey(hymn.key, steps);
  doc.text(keyLabel, PW - pad - 22 - doc.getTextWidth(keyLabel) / 2, 48);

  // song title
  doc.setTextColor(...WHITE);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text(hymn.name, pad + 70, 76, { maxWidth: PW - pad * 2 - 120 });

  // ════════════════════════════════
  // BODY
  // ════════════════════════════════
  let y = headerH + 20;

  function checkPage() {
    if (y > PH - 80) {
      doc.addPage();
      // light header strip on continuation pages
      doc.setFillColor(...DARK_BG);
      doc.rect(0, 0, PW, 28, 'F');
      doc.setTextColor(...MUTED);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.text(`${hymn.code}  ·  ${hymn.name}  ·  Key of ${keyLabel}`, pad, 18);
      y = 44;
    }
  }

  hymn.content.forEach(sec => {
    checkPage();

    // section label pill
    const labelText = sec.section.toUpperCase();
    const lw = doc.getTextWidth(labelText) + 20;
    doc.setFillColor(254, 243, 199);
    doc.roundedRect(bodyX, y, lw, 16, 8, 8, 'F');
    doc.setDrawColor(251, 191, 36);
    doc.setLineWidth(0.5);
    doc.roundedRect(bodyX, y, lw, 16, 8, 8, 'S');
    doc.setTextColor(146, 64, 14);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.text(labelText, bodyX + 10, y + 11);
    y += 24;

    sec.lines.forEach(line => {
      checkPage();
      if (line.chords) {
        doc.setTextColor(...RED);
        doc.setFont('courier', 'bold');
        doc.setFontSize(fs);
        doc.text(transposeLine(line.chords, steps), bodyX, y);
        y += fs * 1.4;
      }
      if (line.lyric) {
        doc.setTextColor(...BLACK);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(fs);
        doc.text(line.lyric, bodyX, y, { maxWidth: bodyW });
        const lines = doc.splitTextToSize(line.lyric, bodyW);
        y += fs * 1.7 * lines.length;
      }
      if (!line.chords && !line.lyric) y += 6;
    });
    y += 16;
  });

  // ════════════════════════════════
  // FOOTER (every page)
  // ════════════════════════════════
  const totalPages = doc.internal.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    const fY = PH - 36;

    doc.setFillColor(...DARK_BG);
    doc.rect(0, fY, PW, 36, 'F');

    // accent bottom line
    doc.setDrawColor(...ACCENT);
    doc.setLineWidth(2);
    doc.line(0, PH, PW, PH);

    // left — CCAG
    doc.setTextColor(...MUTED);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text('CCAG Chord Sheet App', pad, fY + 14);

    // right — page + key
    doc.setTextColor(...MUTED);
    doc.setFont('courier', 'normal');
    doc.setFontSize(8);
    doc.text(`${hymn.code}  ·  Key of ${keyLabel}  ·  ${p}/${totalPages}`, PW - pad, fY + 14, { align: 'right' });
  }

  return doc;
}

export default function ChordSheet({ hymn, onClose, onToggleFavorite, isFavorite }) {
  const [steps, setSteps]       = useState(0);
  const [fontSize, setFontSize] = useState(16);
  const [saving, setSaving]     = useState(false);

  const currentKey = shiftKey(hymn.key, steps);

  async function saveAsPDF() {
    setSaving(true);
    try {
      const doc = await generatePDF(hymn, steps, fontSize);
      doc.save(`${hymn.code} - ${hymn.name}.pdf`);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="overlay fade-in" style={{ background: 'rgba(0,0,0,0.92)' }}>
      <div className="w-full min-h-screen flex flex-col">

        {/* ── Toolbar ── */}
        <div className="z-10 mb-0 px-3 sm:px-6 py-2 sm:py-3 flex flex-wrap gap-2 items-center"
          style={{ background: 'rgba(12,16,24,0.98)', backdropFilter: 'blur(16px)', borderBottom: '1px solid var(--border2)', boxShadow: '0 4px 24px rgba(0,0,0,0.5)' }}>

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
            {steps !== 0 && <button onClick={() => setSteps(0)} className="btn btn-ghost btn-sm">↺</button>}
          </div>

          <div className="w-px h-5 hidden sm:block" style={{ background: 'var(--border2)' }} />

          {/* Font size */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs hidden sm:block" style={{ color: 'var(--muted2)' }}>Size</span>
            <button onClick={() => setFontSize(s => Math.max(9, s - 1))} className="btn btn-secondary btn-sm">A−</button>
            <span className="text-xs w-5 text-center" style={{ color: 'var(--muted2)' }}>{fontSize}</span>
            <button onClick={() => setFontSize(s => Math.min(22, s + 1))} className="btn btn-secondary btn-sm">A+</button>
          </div>

          <div className="ml-auto flex gap-2">
            <button onClick={onToggleFavorite} className={`btn btn-sm ${isFavorite ? 'btn-gold' : 'btn-ghost'}`}>
              {isFavorite ? '★' : '☆'}
              <span className="hidden sm:inline">{isFavorite ? 'Saved' : 'Save'}</span>
            </button>
            <button onClick={saveAsPDF} disabled={saving} className="btn btn-primary btn-sm">
              {saving
                ? <span style={{ opacity: 0.7 }}>Generating…</span>
                : <>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
                    </svg>
                    <span className="hidden sm:inline">Save PDF</span>
                    <span className="sm:hidden">PDF</span>
                  </>
              }
            </button>
          </div>
        </div>

        {/* ── Sheet preview ── */}
        <div className="fade-up flex-1 overflow-hidden"
          style={{ background: 'var(--surface)', animationDelay: '0.05s' }}>

          {/* Header */}
          <div className="relative px-4 sm:px-8 py-4 sm:py-6 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #252c33 0%, #2e3740 100%)', borderBottom: '1px solid var(--border)' }}>
            <div className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: 'linear-gradient(90deg, transparent, var(--accent), var(--accent2), transparent)' }} />
            <div className="relative z-10 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <img src="/CCAG.jpeg" alt="CCAG" style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#fff', padding: '2px', objectFit: 'contain' }} />
                <div>
                  <span className="badge badge-blue mb-1.5 block w-fit">{hymn.code}</span>
                  <h1 className="text-white font-black leading-tight" style={{ fontSize: `clamp(18px, 3vw, 28px)` }}>
                    {hymn.name}
                  </h1>
                </div>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-xs mb-1" style={{ color: 'var(--muted2)' }}>Key</p>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg"
                  style={{ background: 'linear-gradient(135deg, rgba(79,142,247,0.2), rgba(129,140,248,0.2))', border: '1px solid var(--border3)', color: 'var(--accent)', fontFamily: 'JetBrains Mono' }}>
                  {currentKey}
                </div>
                {steps !== 0 && <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>was {hymn.key}</p>}
              </div>
            </div>
          </div>

          {/* Body — white background, full width, scrollable */}
          <div className="px-4 sm:px-8 md:px-12 lg:px-16 py-6 pb-28 lg:pb-10"
            style={{ background: '#ffffff', fontSize: `${fontSize}px`, overflowX: 'auto' }}>
            {hymn.content.map((sec, si) => (
              <div key={si} className="mb-6">
                <div className="section-label" style={{ color: '#92400e', background: '#fef3c7', borderColor: '#fbbf24' }}>
                  {sec.section}
                </div>
                <div>
                  {sec.lines.map((line, li) => (
                    <div key={li} className="mb-1">
                      {line.chords && (
                        <div className="chord-line" style={{ fontSize: `${fontSize}px`, color: '#dc2626' }}>
                          {transposeLine(line.chords, steps)}
                        </div>
                      )}
                      {line.lyric && (
                        <div className="lyric-line" style={{ fontSize: `${fontSize}px`, color: '#111827' }}>
                          {line.lyric}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="px-4 sm:px-8 py-3 flex items-center justify-between flex-wrap gap-2"
            style={{ background: 'linear-gradient(135deg, #252c33 0%, #2e3740 100%)', borderTop: '1px solid var(--border)' }}>
            <div className="flex items-center gap-2">
              <img src="/CCAG.jpeg" alt="CCAG" style={{ width: '18px', height: '18px', borderRadius: '4px', background: '#fff', padding: '1px', objectFit: 'contain' }} />
              <span className="text-xs font-semibold" style={{ color: 'var(--muted2)', letterSpacing: '0.08em' }}>CCAG</span>
            </div>
            <span className="text-xs font-mono" style={{ color: 'var(--muted)' }}>{hymn.code} · Key of {currentKey}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
