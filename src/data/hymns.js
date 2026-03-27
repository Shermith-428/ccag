// Hymn data - add your hymns here
const hymns = [
  {
    id: 1,
    code: "C-001",
    name: "We Fall Down",
    key: "C",
    content: [
      {
        section: "Verse 1",
        lines: [
          { chords: "C              G", lyric: "We fall down, we lay our crowns" },
          { chords: "Am         F", lyric: "At the feet of Jesus" },
          { chords: "C              G", lyric: "The greatness of mercy and love" },
          { chords: "Am    F    C", lyric: "At the feet of Jesus" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "F         C", lyric: "And we cry holy, holy, holy" },
          { chords: "F         G", lyric: "We cry holy, holy, holy" },
          { chords: "F         C       Am", lyric: "We cry holy, holy, holy" },
          { chords: "F    G    C", lyric: "Is the Lamb" },
        ],
      },
    ],
  },
  {
    id: 2,
    code: "C-002",
    name: "Blessed Be The Name",
    key: "G",
    content: [
      {
        section: "Verse 1",
        lines: [
          { chords: "G              D", lyric: "Blessed be Your name" },
          { chords: "Em             C", lyric: "In the land that is plentiful" },
          { chords: "G              D", lyric: "Where Your streams of abundance flow" },
          { chords: "Em    C", lyric: "Blessed be Your name" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "G         D", lyric: "Blessed be the name of the Lord" },
          { chords: "Em        C", lyric: "Blessed be Your name" },
          { chords: "G         D", lyric: "Blessed be the name of the Lord" },
          { chords: "Em   C   G", lyric: "Blessed be Your glorious name" },
        ],
      },
    ],
  },
];

export default hymns;
