const CHORD_RE = /^[A-G][#b]?(m|maj|min|dim|aug|sus|add)?[0-9]*(\/[A-G][#b]?)?(\s+[A-G][#b]?(m|maj|min|dim|aug|sus|add)?[0-9]*(\/[A-G][#b]?)?)*\s*$/;
const SECTION_RE = /^(verse|chorus|bridge|pre-chorus|intro|outro|interlude|tag|coda|refrain|instrumental)/i;

function isChordLine(line) {
  const trimmed = line.trim();
  if (!trimmed) return false;
  return CHORD_RE.test(trimmed);
}

function isSectionHeader(line) {
  return SECTION_RE.test(line.trim());
}

export function parseHymnText(raw) {
  const lines = raw.split('\n');
  const sections = [];
  let currentSection = { section: 'Verse', lines: [] };
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) { i++; continue; }

    if (isSectionHeader(trimmed)) {
      if (currentSection.lines.length > 0) sections.push(currentSection);
      currentSection = { section: trimmed, lines: [] };
      i++;
      continue;
    }

    if (isChordLine(trimmed)) {
      const nextLine = lines[i + 1]?.trim() ?? '';
      const isNextChordOrEmpty = isChordLine(nextLine) || !nextLine;
      currentSection.lines.push({
        chords: trimmed,
        lyric: isNextChordOrEmpty ? '' : nextLine,
      });
      i += isNextChordOrEmpty ? 1 : 2;
    } else {
      // lyric-only line (no chord above)
      currentSection.lines.push({ chords: '', lyric: trimmed });
      i++;
    }
  }

  if (currentSection.lines.length > 0) sections.push(currentSection);
  return sections;
}

