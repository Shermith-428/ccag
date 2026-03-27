const SHARP_NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const FLAT_NOTES  = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

function transposeNote(note, steps) {
  let idx = SHARP_NOTES.indexOf(note);
  if (idx === -1) idx = FLAT_NOTES.indexOf(note);
  if (idx === -1) return note;
  const newIdx = (idx + steps + 12) % 12;
  return SHARP_NOTES[newIdx];
}

export function transposeLine(chordLine, steps) {
  if (steps === 0) return chordLine;
  return chordLine.replace(/[A-G][#b]?/g, (note) => transposeNote(note, steps));
}
