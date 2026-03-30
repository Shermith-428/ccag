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
  {
    id: 3,
    code: "C-003",
    name: "What A Beautiful Name",
    key: "D",
    content: [
      {
        section: "Verse 1",
        lines: [
          { chords: "D                                    G        Bm      A", lyric: "You were the Word at the beginning one with God the Lord Most High" },
          { chords: "Bm       A/C#      D           G        Bm      A", lyric: "Your hidden glory in creation now revealed in You our Christ" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "                   D                          A", lyric: "What a beautiful name it is what a beautiful name it is" },
          { chords: "            Bm  A          G", lyric: "The Name of Jesus Christ my King" },
          { chords: "                   D/F#                       A", lyric: "What a beautiful Name it is nothing compares to this" },
          { chords: "                Bm  A       G", lyric: "What a beautiful Name it is The Name of Jesus" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "             G                        A", lyric: "Death could not hold You, the veil tore before You" },
          { chords: "          Bm                F#m", lyric: "You silenced the boast, of sin and grave" },
          { chords: "             G                        A", lyric: "The heavens are roaring, the praise of Your glory" },
          { chords: "          Bm       A", lyric: "For You are raised to life again" },
        ],
      },
    ],
  },
];

export default hymns;
