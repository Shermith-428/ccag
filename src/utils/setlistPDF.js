import { transposeLine } from './transpose';

const SHARP = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
const FLAT  = ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'];

function shiftKey(key, steps) {
  let idx = SHARP.indexOf(key);
  if (idx === -1) idx = FLAT.indexOf(key);
  if (idx === -1) return key;
  return SHARP[(idx + steps + 12) % 12];
}

export async function generateSetlistPDF(setlist, hymns) {
  if (!window.jspdf) {
    await new Promise((res, rej) => {
      const s = document.createElement('script');
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
      s.onload = res; s.onerror = rej;
      document.head.appendChild(s);
    });
  }

  const { jsPDF } = window.jspdf;
  const doc  = new jsPDF({ unit: 'pt', format: 'a4' });
  const PW   = doc.internal.pageSize.getWidth();
  const PH   = doc.internal.pageSize.getHeight();
  const pad  = 40;
  const bodyW = PW - pad * 2;

  const DARK  = [37, 44, 51];
  const ACCENT= [246, 201, 14];
  const RED   = [220, 38, 38];
  const BLACK = [20, 20, 20];
  const WHITE = [255, 255, 255];
  const MUTED = [120, 130, 150];
  const GREY  = [240, 242, 245];

  // ── load logo ──
  let logoDataUrl = null;
  try {
    const img = new Image(); img.crossOrigin = 'anonymous';
    await new Promise((res, rej) => { img.onload = res; img.onerror = rej; img.src = '/CCAG.jpeg'; });
    const c = document.createElement('canvas'); c.width = 80; c.height = 80;
    c.getContext('2d').drawImage(img, 0, 0, 80, 80);
    logoDataUrl = c.toDataURL('image/jpeg');
  } catch {}

  // ════════════════════════════
  // COVER PAGE
  // ════════════════════════════
  doc.setFillColor(...DARK);
  doc.rect(0, 0, PW, PH, 'F');

  // gold top bar
  doc.setFillColor(...ACCENT);
  doc.rect(0, 0, PW, 6, 'F');

  // logo
  if (logoDataUrl) doc.addImage(logoDataUrl, 'JPEG', PW / 2 - 40, 120, 80, 80);

  // CCAG
  doc.setTextColor(...ACCENT);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(28);
  doc.text('CCAG', PW / 2, 230, { align: 'center' });

  doc.setTextColor(...MUTED);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.text('CHORD SHEET APP', PW / 2, 248, { align: 'center' });

  // divider
  doc.setDrawColor(...ACCENT);
  doc.setLineWidth(1);
  doc.line(pad * 2, 270, PW - pad * 2, 270);

  // setlist name
  doc.setTextColor(...WHITE);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(26);
  const nameLines = doc.splitTextToSize(setlist.name, PW - pad * 3);
  doc.text(nameLines, PW / 2, 310, { align: 'center' });

  // date
  if (setlist.createdAt) {
    doc.setTextColor(...MUTED);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(setlist.createdAt, PW / 2, 310 + nameLines.length * 32, { align: 'center' });
  }

  // song list on cover
  const coverSongs = hymns.filter(h => setlist.hymnIds.includes(h.id))
    .sort((a, b) => setlist.hymnIds.indexOf(a.id) - setlist.hymnIds.indexOf(b.id));

  let cy = 380 + nameLines.length * 20;
  doc.setTextColor(...MUTED);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text('SONGS IN THIS SETLIST', PW / 2, cy, { align: 'center' });
  cy += 20;

  coverSongs.forEach((h, i) => {
    const steps = setlist.transposeMap?.[h.id] ?? 0;
    const key   = shiftKey(h.key, steps);
    doc.setTextColor(...WHITE);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text(`${i + 1}.  ${h.name}`, PW / 2 - 80, cy);
    doc.setTextColor(...ACCENT);
    doc.setFont('courier', 'bold');
    doc.setFontSize(11);
    doc.text(`Key: ${key}`, PW / 2 + 80, cy);
    cy += 22;
    if (cy > PH - 60) { cy = PH - 60; }
  });

  // gold bottom bar
  doc.setFillColor(...ACCENT);
  doc.rect(0, PH - 6, PW, 6, 'F');

  // ════════════════════════════
  // SONG PAGES
  // ════════════════════════════
  coverSongs.forEach((hymn, songIdx) => {
    doc.addPage();
    const steps    = setlist.transposeMap?.[hymn.id] ?? 0;
    const keyLabel = shiftKey(hymn.key, steps);

    // song header
    doc.setFillColor(...DARK);
    doc.rect(0, 0, PW, 90, 'F');
    doc.setFillColor(...ACCENT);
    doc.rect(0, 0, PW, 4, 'F');

    if (logoDataUrl) doc.addImage(logoDataUrl, 'JPEG', pad, 12, 56, 56);

    // song number badge
    doc.setFillColor(...ACCENT);
    doc.circle(pad + 28, 40, 14, 'F');
    doc.setTextColor(...DARK);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.text(`${songIdx + 1}`, pad + 28, 45, { align: 'center' });

    // song name
    doc.setTextColor(...WHITE);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.text(hymn.name, pad + 76, 36, { maxWidth: PW - pad * 2 - 120 });

    // code + setlist name
    doc.setTextColor(...MUTED);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text(`${hymn.code}  ·  ${setlist.name}`, pad + 76, 52);

    // key box
    doc.setFillColor(50, 60, 70);
    doc.roundedRect(PW - pad - 48, 16, 48, 48, 6, 6, 'F');
    doc.setDrawColor(...ACCENT);
    doc.setLineWidth(1.5);
    doc.roundedRect(PW - pad - 48, 16, 48, 48, 6, 6, 'S');
    doc.setTextColor(...ACCENT);
    doc.setFont('courier', 'bold');
    doc.setFontSize(18);
    doc.text(keyLabel, PW - pad - 24 - doc.getTextWidth(keyLabel) / 2, 46);
    doc.setTextColor(...MUTED);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text('KEY', PW - pad - 24 - doc.getTextWidth('KEY') / 2, 58);

    if (steps !== 0) {
      doc.setTextColor(...MUTED);
      doc.setFontSize(7);
      doc.text(`(orig. ${hymn.key})`, PW - pad - 24 - doc.getTextWidth(`(orig. ${hymn.key})`) / 2, 68);
    }

    let y = 108;

    function checkPage() {
      if (y > PH - 60) {
        doc.addPage();
        doc.setFillColor(...DARK);
        doc.rect(0, 0, PW, 24, 'F');
        doc.setTextColor(...MUTED);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.text(`${hymn.code}  ·  ${hymn.name}  ·  Key of ${keyLabel}  ·  ${setlist.name}`, pad, 16);
        y = 36;
      }
    }

    hymn.content.forEach(sec => {
      checkPage();
      const lbl = sec.section.toUpperCase();
      const lw  = doc.getTextWidth(lbl) + 20;
      doc.setFillColor(254, 243, 199);
      doc.roundedRect(pad, y, lw, 16, 8, 8, 'F');
      doc.setDrawColor(...ACCENT);
      doc.setLineWidth(0.5);
      doc.roundedRect(pad, y, lw, 16, 8, 8, 'S');
      doc.setTextColor(146, 64, 14);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.text(lbl, pad + 10, y + 11);
      y += 24;

      sec.lines.forEach(line => {
        checkPage();
        if (line.chords) {
          doc.setTextColor(...RED);
          doc.setFont('courier', 'bold');
          doc.setFontSize(11);
          doc.text(transposeLine(line.chords, steps), pad, y);
          y += 15;
        }
        if (line.lyric) {
          doc.setTextColor(...BLACK);
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(11);
          doc.text(line.lyric, pad, y, { maxWidth: bodyW });
          y += 11 * 1.7 * doc.splitTextToSize(line.lyric, bodyW).length;
        }
        if (!line.chords && !line.lyric) y += 5;
      });
      y += 14;
    });

    // footer on each song page
    const total = doc.internal.getNumberOfPages();
    doc.setPage(doc.internal.getNumberOfPages());
    doc.setFillColor(...DARK);
    doc.rect(0, PH - 30, PW, 30, 'F');
    doc.setFillColor(...ACCENT);
    doc.rect(0, PH - 3, PW, 3, 'F');
    doc.setTextColor(...MUTED);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text('CCAG Chord Sheet App', pad, PH - 12);
    doc.setFont('courier', 'normal');
    doc.text(`${hymn.code}  ·  Key of ${keyLabel}`, PW - pad, PH - 12, { align: 'right' });
  });

  return doc;
}
