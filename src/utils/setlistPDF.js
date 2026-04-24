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
      s.integrity = 'sha512-qZvrmS2ekKPF2mSznTQsxqPgnpkI4DNTlrdUmTzrDgektczlKNRRhy5X5AAOnx5S09ydFYWWNSfcEqDTTHgtNA==';
      s.crossOrigin = 'anonymous';
      s.onload = res; s.onerror = rej;
      document.head.appendChild(s);
    });
  }

  const { jsPDF } = window.jspdf;
  const doc   = new jsPDF({ unit: 'pt', format: 'a4' });
  const PW    = doc.internal.pageSize.getWidth();   // 595
  const PH    = doc.internal.pageSize.getHeight();  // 842
  const PAD   = 50;   // left/right margin
  const BODY_W = PW - PAD * 2;

  // ── Colours ──
  const DARK  = [26, 18, 16];
  const ACCENT = [31, 63, 195];
  const RED    = [210, 30, 30];
  const BLACK  = [25, 25, 25];
  const WHITE  = [255, 255, 255];
  const MUTED  = [130, 140, 155];
  const MUTED2 = [180, 188, 198];

  const coverSongs = hymns
    .filter(h => setlist.hymnIds.includes(h.id))
    .sort((a, b) => setlist.hymnIds.indexOf(a.id) - setlist.hymnIds.indexOf(b.id));

  // ══════════════════════════════════════
  // COVER PAGE
  // ══════════════════════════════════════
  doc.setFillColor(...DARK);
  doc.rect(0, 0, PW, PH, 'F');

  // top accent bar
  doc.setFillColor(...ACCENT);
  doc.rect(0, 0, PW, 8, 'F');

  // CCAG heading — vertically centred in top third
  doc.setTextColor(...ACCENT);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(42);
  doc.text('CCAG', PW / 2, 120, { align: 'center' });

  doc.setTextColor(...MUTED);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.text('CHORD SHEET APP', PW / 2, 142, { align: 'center' });

  // divider
  doc.setDrawColor(...ACCENT);
  doc.setLineWidth(0.8);
  doc.line(PAD * 2, 165, PW - PAD * 2, 165);

  // setlist name
  doc.setTextColor(...WHITE);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(30);
  const nameLines = doc.splitTextToSize(setlist.name, PW - PAD * 2);
  doc.text(nameLines, PW / 2, 210, { align: 'center', lineHeightFactor: 1.4 });

  // date
  const afterName = 210 + nameLines.length * 42;
  if (setlist.createdAt) {
    doc.setTextColor(...MUTED2);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(13);
    doc.text(setlist.createdAt, PW / 2, afterName, { align: 'center' });
  }

  // "SONGS IN THIS SETLIST" label
  let cy = afterName + 50;
  doc.setTextColor(...MUTED);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('SONGS IN THIS SETLIST', PW / 2, cy, { align: 'center' });
  cy += 6;

  // thin divider under label
  doc.setDrawColor(...MUTED);
  doc.setLineWidth(0.4);
  doc.line(PAD * 2, cy, PW - PAD * 2, cy);
  cy += 18;

  // song rows
  coverSongs.forEach((h, i) => {
    if (cy > PH - 80) return;
    const steps = setlist.transposeMap?.[h.id] ?? 0;
    const key   = shiftKey(h.key, steps);

    // row number
    doc.setTextColor(...ACCENT);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text(`${i + 1}`, PAD * 2, cy);

    // song name
    doc.setTextColor(...WHITE);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.text(h.name, PAD * 2 + 22, cy, { maxWidth: BODY_W - 80 });

    // key badge
    doc.setTextColor(...ACCENT);
    doc.setFont('courier', 'bold');
    doc.setFontSize(11);
    doc.text(`Key: ${key}`, PW - PAD * 2, cy, { align: 'right' });

    cy += 26;

    // subtle row divider
    doc.setDrawColor(60, 70, 80);
    doc.setLineWidth(0.3);
    doc.line(PAD * 2, cy - 8, PW - PAD * 2, cy - 8);
  });

  // bottom accent bar
  doc.setFillColor(...ACCENT);
  doc.rect(0, PH - 8, PW, 8, 'F');

  // ══════════════════════════════════════
  // SONG PAGES
  // ══════════════════════════════════════
  const HEADER_H  = 80;
  const FOOTER_H  = 32;
  const BODY_TOP  = HEADER_H + 20;
  const BODY_BOT  = PH - FOOTER_H - 16;
  const CHORD_FS  = 12;
  const LYRIC_FS  = 12;
  const CHORD_LH  = 16;
  const LYRIC_LH  = 20;
  const SEC_H     = 28;  // section label block height
  const SEC_GAP   = 20;  // gap after section

  coverSongs.forEach((hymn, songIdx) => {
    doc.addPage();
    const steps    = setlist.transposeMap?.[hymn.id] ?? 0;
    const keyLabel = shiftKey(hymn.key, steps);

    function drawHeader() {
      doc.setFillColor(...DARK);
      doc.rect(0, 0, PW, HEADER_H, 'F');
      doc.setFillColor(...ACCENT);
      doc.rect(0, 0, PW, 5, 'F');

      // song number circle
      doc.setFillColor(...ACCENT);
      doc.circle(PAD + 16, HEADER_H / 2, 16, 'F');
      doc.setTextColor(...DARK);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.text(`${songIdx + 1}`, PAD + 16, HEADER_H / 2 + 5, { align: 'center' });

      // song name
      doc.setTextColor(...WHITE);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(22);
      doc.text(hymn.name, PAD + 42, HEADER_H / 2 - 6, { maxWidth: PW - PAD * 2 - 90 });

      // code + setlist
      doc.setTextColor(...MUTED);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.text(`${hymn.code}  ·  ${setlist.name}`, PAD + 42, HEADER_H / 2 + 12);

      // key box
      const KBX = PW - PAD - 52;
      doc.setFillColor(55, 65, 78);
      doc.roundedRect(KBX, 14, 52, 52, 7, 7, 'F');
      doc.setDrawColor(...ACCENT);
      doc.setLineWidth(1.5);
      doc.roundedRect(KBX, 14, 52, 52, 7, 7, 'S');
      doc.setTextColor(...ACCENT);
      doc.setFont('courier', 'bold');
      doc.setFontSize(20);
      doc.text(keyLabel, KBX + 26, 46, { align: 'center' });
      doc.setTextColor(...MUTED);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.text('KEY', KBX + 26, 58, { align: 'center' });
      if (steps !== 0) {
        doc.setFontSize(7);
        doc.text(`orig. ${hymn.key}`, KBX + 26, 68, { align: 'center' });
      }
    }

    function drawFooter() {
      doc.setFillColor(...DARK);
      doc.rect(0, PH - FOOTER_H, PW, FOOTER_H, 'F');
      doc.setFillColor(...ACCENT);
      doc.rect(0, PH - 4, PW, 4, 'F');
      doc.setTextColor(...MUTED);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.text('CCAG Chord Sheet App', PAD, PH - 10);
      doc.setFont('courier', 'normal');
      doc.text(`${hymn.code}  ·  Key of ${keyLabel}  ·  ${setlist.name}`, PW - PAD, PH - 10, { align: 'right' });
    }

    drawHeader();
    drawFooter();

    let y = BODY_TOP;

    function checkPage() {
      if (y > BODY_BOT) {
        drawFooter();
        doc.addPage();
        // continuation mini header
        doc.setFillColor(...DARK);
        doc.rect(0, 0, PW, 28, 'F');
        doc.setFillColor(...ACCENT);
        doc.rect(0, 0, PW, 3, 'F');
        doc.setTextColor(...MUTED);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.text(`${hymn.code}  ·  ${hymn.name}  ·  Key of ${keyLabel}`, PAD, 18);
        drawFooter();
        y = 44;
      }
    }

    hymn.content.forEach((sec, si) => {
      // extra gap between sections (not before first)
      if (si > 0) { y += 10; checkPage(); }

      checkPage();

      // section label pill
      const lbl = sec.section.toUpperCase();
      const lw  = doc.getTextWidth(lbl) + 22;
      doc.setFillColor(254, 243, 199);
      doc.roundedRect(PAD, y, lw, 18, 9, 9, 'F');
      doc.setDrawColor(246, 201, 14);
      doc.setLineWidth(0.5);
      doc.roundedRect(PAD, y, lw, 18, 9, 9, 'S');
      doc.setTextColor(120, 53, 15);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.text(lbl, PAD + 11, y + 12);
      y += SEC_H;

      sec.lines.forEach(line => {
        checkPage();
        if (line.chords) {
          doc.setTextColor(...RED);
          doc.setFont('courier', 'bold');
          doc.setFontSize(CHORD_FS);
          doc.text(transposeLine(line.chords, steps), PAD, y);
          y += CHORD_LH;
        }
        if (line.lyric) {
          doc.setTextColor(...BLACK);
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(LYRIC_FS);
          const wrapped = doc.splitTextToSize(line.lyric, BODY_W);
          doc.text(wrapped, PAD, y);
          y += LYRIC_LH * wrapped.length;
        }
        if (!line.chords && !line.lyric) y += 6;
      });

      y += SEC_GAP;
    });
  });

  return doc;
}

