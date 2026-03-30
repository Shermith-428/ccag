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
  if (!window.jspdf) {
    await new Promise((res, rej) => {
      const s = document.createElement('script');
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
      s.onload = res; s.onerror = rej;
      document.head.appendChild(s);
    });
  }
  const { jsPDF } = window.jspdf;
  const doc   = new jsPDF({ unit: 'pt', format: 'a4' });
  const PW    = doc.internal.pageSize.getWidth();
  const PH    = doc.internal.pageSize.getHeight();
  const pad   = 40;
  const bodyW = PW - pad * 2;
  const DARK  = [37, 44, 51];
  const ACCENT= [246, 201, 14];
  const RED   = [220, 38, 38];
  const BLACK = [20, 20, 20];
  const WHITE = [255, 255, 255];
  const MUTED = [120, 130, 150];
  const fs    = Math.max(fontSize, 11);
  const keyLabel = shiftKey(hymn.key, steps);

  // Header
  doc.setFillColor(...DARK);
  doc.rect(0, 0, PW, 90, 'F');
  doc.setDrawColor(...ACCENT);
  doc.setLineWidth(3);
  doc.line(0, 0, PW, 0);

  try {
    const img = new Image(); img.crossOrigin = 'anonymous';
    await new Promise((res, rej) => { img.onload = res; img.onerror = rej; img.src = '/Last logo.png'; });
    const c = document.createElement('canvas'); c.width = 60; c.height = 60;
    c.getContext('2d').drawImage(img, 0, 0, 60, 60);
    doc.addImage(c.toDataURL('image/jpeg'), 'JPEG', pad, 15, 60, 60);
  } catch {}

  doc.setTextColor(...WHITE); doc.setFont('helvetica', 'bold'); doc.setFontSize(22);
  doc.text('CCAG', pad + 70, 42);
  doc.setFont('helvetica', 'normal'); doc.setFontSize(9); doc.setTextColor(...MUTED);
  doc.text('CHORD SHEET APP', pad + 70, 56);

  const codeW = doc.getTextWidth(hymn.code) + 16;
  doc.setFillColor(...ACCENT);
  doc.roundedRect(PW - pad - codeW - 60, 20, codeW, 18, 4, 4, 'F');
  doc.setTextColor(...DARK); doc.setFont('courier', 'bold'); doc.setFontSize(9);
  doc.text(hymn.code, PW - pad - codeW - 52, 32);

  doc.setFillColor(50, 60, 70);
  doc.roundedRect(PW - pad - 44, 20, 44, 44, 6, 6, 'F');
  doc.setDrawColor(...ACCENT); doc.setLineWidth(1);
  doc.roundedRect(PW - pad - 44, 20, 44, 44, 6, 6, 'S');
  doc.setTextColor(...ACCENT); doc.setFont('courier', 'bold'); doc.setFontSize(16);
  doc.text(keyLabel, PW - pad - 22 - doc.getTextWidth(keyLabel) / 2, 48);

  doc.setTextColor(...WHITE); doc.setFont('helvetica', 'bold'); doc.setFontSize(18);
  doc.text(hymn.name, pad + 70, 76, { maxWidth: PW - pad * 2 - 120 });

  let y = 110;
  function checkPage() {
    if (y > PH - 80) {
      doc.addPage();
      doc.setFillColor(...DARK); doc.rect(0, 0, PW, 28, 'F');
      doc.setTextColor(...MUTED); doc.setFont('helvetica', 'normal'); doc.setFontSize(8);
      doc.text(`${hymn.code}  ·  ${hymn.name}  ·  Key of ${keyLabel}`, pad, 18);
      y = 44;
    }
  }

  hymn.content.forEach(sec => {
    checkPage();
    const lbl = sec.section.toUpperCase();
    const lw  = doc.getTextWidth(lbl) + 20;
    doc.setFillColor(254, 243, 199);
    doc.roundedRect(pad, y, lw, 16, 8, 8, 'F');
    doc.setDrawColor(246, 201, 14); doc.setLineWidth(0.5);
    doc.roundedRect(pad, y, lw, 16, 8, 8, 'S');
    doc.setTextColor(146, 64, 14); doc.setFont('helvetica', 'bold'); doc.setFontSize(8);
    doc.text(lbl, pad + 10, y + 11);
    y += 24;

    sec.lines.forEach(line => {
      checkPage();
      if (line.chords) {
        doc.setTextColor(...RED); doc.setFont('courier', 'bold'); doc.setFontSize(fs);
        doc.text(transposeLine(line.chords, steps), pad, y);
        y += fs * 1.4;
      }
      if (line.lyric) {
        doc.setTextColor(...BLACK); doc.setFont('helvetica', 'normal'); doc.setFontSize(fs);
        doc.text(line.lyric, pad, y, { maxWidth: bodyW });
        y += fs * 1.7 * doc.splitTextToSize(line.lyric, bodyW).length;
      }
      if (!line.chords && !line.lyric) y += 6;
    });
    y += 16;
  });

  const total = doc.internal.getNumberOfPages();
  for (let p = 1; p <= total; p++) {
    doc.setPage(p);
    const fY = PH - 36;
    doc.setFillColor(...DARK); doc.rect(0, fY, PW, 36, 'F');
    doc.setDrawColor(...ACCENT); doc.setLineWidth(2); doc.line(0, PH, PW, PH);
    doc.setTextColor(...MUTED); doc.setFont('helvetica', 'normal'); doc.setFontSize(8);
    doc.text('CCAG Chord Sheet App', pad, fY + 14);
    doc.setFont('courier', 'normal');
    doc.text(`${hymn.code}  ·  Key of ${keyLabel}  ·  ${p}/${total}`, PW - pad, fY + 14, { align: 'right' });
  }
  return doc;
}

export default function ChordSheet({ hymn, onClose, onToggleFavorite, isFavorite, onSaveTranspose, savedSteps }) {
  const [steps, setSteps]       = useState(savedSteps ?? 0);
  const [fontSize, setFontSize] = useState(17);
  const [saving, setSaving]     = useState(false);
  const currentKey = shiftKey(hymn.key, steps);

  async function saveAsPDF() {
    setSaving(true);
    try {
      const doc = await generatePDF(hymn, steps, fontSize);
      const filename = `${hymn.code} - ${hymn.name}.pdf`;
      const blob = doc.output('blob');
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => { URL.revokeObjectURL(url); document.body.removeChild(a); }, 1000);
    } finally { setSaving(false); }
  }

  return (
    <div className="overlay fade-in" style={{ background: 'rgba(15,18,24,0.96)' }}>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

        {/* ── Toolbar row 1: close + actions ── */}
        <div style={{ background: '#231815', borderBottom: '1px solid var(--border2)', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', position: 'sticky', top: 0, zIndex: 10 }}>
          <button onClick={onClose} className="btn btn-secondary" style={{ padding: '10px 16px', fontSize: '14px', gap: '8px' }}>
            <svg width="13" height="13" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M1 1l10 10M11 1L1 11"/>
            </svg>
            Close
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button onClick={onToggleFavorite}
              className={`btn ${isFavorite ? 'btn-gold' : 'btn-ghost'}`}
              style={{ padding: '10px 14px', fontSize: '14px' }}>
              {isFavorite ? '★' : '☆'}
              <span className="hidden sm:inline" style={{ marginLeft: '4px' }}>{isFavorite ? 'Saved' : 'Save'}</span>
            </button>
            {onSaveTranspose && (
              <button onClick={() => onSaveTranspose(steps)}
                className="btn btn-secondary"
                style={{ padding: '10px 14px', fontSize: '13px' }}>
                ✓ Save Key
              </button>
            )}
            <button onClick={saveAsPDF} disabled={saving} className="btn btn-primary" style={{ padding: '10px 16px', fontSize: '14px' }}>
              {saving ? 'Generating…' : (
                <>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                  </svg>
                  PDF
                </>
              )}
            </button>
          </div>
        </div>

        {/* ── Toolbar row 2: transpose + font ── */}
        <div style={{ background: '#2e1f1a', borderBottom: '1px solid var(--border)', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>

          {/* Transpose */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--muted2)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.06em' }}>TRANSPOSE</span>
            <button onClick={() => setSteps(s => s - 1)} className="btn btn-secondary" style={{ padding: '8px 14px', fontSize: '16px', fontWeight: 700 }}>−</button>
            <span style={{ color: steps === 0 ? 'var(--muted2)' : 'var(--accent)', fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: '16px', minWidth: '36px', textAlign: 'center' }}>
              {steps > 0 ? `+${steps}` : steps}
            </span>
            <button onClick={() => setSteps(s => s + 1)} className="btn btn-secondary" style={{ padding: '8px 14px', fontSize: '16px', fontWeight: 700 }}>+</button>
            {steps !== 0 && (
              <button onClick={() => setSteps(0)} className="btn btn-ghost" style={{ padding: '8px 12px', fontSize: '13px' }}>↺ Reset</button>
            )}
          </div>

          <div style={{ width: '1px', height: '28px', background: 'var(--border2)' }} className="hidden sm:block" />

          {/* Font size */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--muted2)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.06em' }}>SIZE</span>
            <button onClick={() => setFontSize(s => Math.max(12, s - 1))} className="btn btn-secondary" style={{ padding: '8px 14px', fontSize: '14px', fontWeight: 700 }}>A−</button>
            <span style={{ color: 'var(--muted2)', fontFamily: 'JetBrains Mono', fontSize: '14px', minWidth: '28px', textAlign: 'center' }}>{fontSize}</span>
            <button onClick={() => setFontSize(s => Math.min(26, s + 1))} className="btn btn-secondary" style={{ padding: '8px 14px', fontSize: '14px', fontWeight: 700 }}>A+</button>
          </div>
        </div>

        {/* ── Sheet ── */}
        <div style={{ flex: 1, background: '#fff' }}>

          {/* Song header */}
          <div style={{ background: 'linear-gradient(135deg, #231815, #2e1f1a)', padding: '20px 20px', borderBottom: '3px solid var(--accent)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, transparent, var(--accent), transparent)' }} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: 0 }}>
                <img src="/Last logo.png" alt="CCAG"
                  style={{ width: '52px', height: '52px', borderRadius: '12px', background: '#fff', padding: '3px', objectFit: 'contain', flexShrink: 0 }} />
                <div style={{ minWidth: 0 }}>
                  <span className="badge badge-blue" style={{ marginBottom: '6px', display: 'inline-flex' }}>{hymn.code}</span>
                  <h1 style={{ color: '#fff', fontWeight: 900, fontSize: 'clamp(18px, 4vw, 26px)', lineHeight: 1.15, margin: 0 }}>
                    {hymn.name}
                  </h1>
                </div>
              </div>
              <div style={{ textAlign: 'center', flexShrink: 0 }}>
                <p style={{ color: 'var(--muted2)', fontSize: '11px', marginBottom: '6px', letterSpacing: '0.06em' }}>KEY</p>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 900, fontSize: '20px', color: '#1a1f24', background: 'var(--accent)', boxShadow: '0 4px 16px rgba(246,201,14,0.4)' }}>
                  {currentKey}
                </div>
                {steps !== 0 && <p style={{ color: 'var(--muted)', fontSize: '11px', marginTop: '4px' }}>was {hymn.key}</p>}
              </div>
            </div>
          </div>

          {/* Lyrics body */}
          <div style={{ padding: '24px 20px 100px', fontSize: `${fontSize}px`, background: '#ffffff' }}>
            {hymn.content.map((sec, si) => (
              <div key={si} style={{ marginBottom: '32px' }}>
                <div className="section-label" style={{ color: '#92400e', background: '#fef3c7', borderColor: '#fbbf24', marginBottom: '14px' }}>
                  {sec.section}
                </div>
                <div>
                  {sec.lines.map((line, li) => (
                    <div key={li} style={{ marginBottom: '4px' }}>
                      {line.chords && (
                        <div style={{ fontFamily: 'JetBrains Mono, monospace', color: '#dc2626', fontWeight: 700, fontSize: `${fontSize}px`, lineHeight: 1.5, whiteSpace: 'pre', letterSpacing: '0.02em' }}>
                          {transposeLine(line.chords, steps)}
                        </div>
                      )}
                      {line.lyric && (
                        <div style={{ color: '#111827', fontSize: `${fontSize}px`, lineHeight: 1.9, whiteSpace: 'pre-wrap' }}>
                          {line.lyric}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Sheet footer */}
          <div style={{ background: 'linear-gradient(135deg, #231815, #2e1f1a)', padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img src="/Last logo.png" alt="CCAG" style={{ width: '20px', height: '20px', borderRadius: '4px', background: '#fff', padding: '1px', objectFit: 'contain' }} />
              <span style={{ color: 'var(--muted2)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em' }}>CCAG</span>
            </div>
            <span style={{ color: 'var(--muted)', fontSize: '12px', fontFamily: 'JetBrains Mono' }}>{hymn.code} · Key of {currentKey}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
