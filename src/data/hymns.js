// Hymn data - add your hymns here
const hymns = [
  {
    id: 1,
    code: "C-001",
    name: "We Fall Down",
    key: "E",
    content: [
      {
        section: "Verse 1",
        lines: [
          { chords: "E                    B        C#min", lyric: "We fall down we lay our crowns" },
          { chords: "     A  E/G#  Bsus    B", lyric: "At the fe  -  et of Je    - sus" },
          { chords: "     E                    B        C#min", lyric: "The greatness of His mercy and Love" },
          { chords: "     A  E/G#  Bsus    B", lyric: "At the fe  - et of Je   -   sus" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "E/G#     A    E/G#  Bsus   B", lyric: "We  cry Holy Holy Ho    ly" },
          { chords: "E/G#     A    E/G#  Bsus   B", lyric: "We  cry Holy Holy Ho    ly" },
          { chords: "E/G#     A    C#m   Bsus   B        A2       B", lyric: "We  cry Holy Holy Ho    ly  Is the Lamb" },
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
  {
    id: 4,
    code: "C-004",
    name: "We Want to See Jesus Lifted High",
    key: "G",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "G                D        Em", lyric: "We want to see Jesus lifted high" },
          { chords: "          C        D          G", lyric: "A banner that flies across this land" },
          { chords: "                    D              Em", lyric: "That all men might see the truth and know" },
          { chords: "          C    D    G", lyric: "He is the way to heaven" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "             D              Em", lyric: "We want to see, we want to see" },
          { chords: "          C        D          G", lyric: "We want to see Jesus lifted high" },
          { chords: "             D              Em", lyric: "We want to see, we want to see" },
          { chords: "          C        D          G", lyric: "We want to see Jesus lifted high" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "             D                   Em", lyric: "Step by step we're moving forward" },
          { chords: "D        Em", lyric: "Little by little taking ground" },
          { chords: "               D              Em", lyric: "Every prayer a powerful weapon" },
          { chords: "C              D", lyric: "Strongholds come tumbling down and down and down" },
        ],
      },
    ],
  },
  ,
  {
    id: 5,
    code: "C-005",
    name: "Days of Elijah",
    key: "A",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "A              D    A           E          A", lyric: "These are the days of Elijah, Declaring the Word of the Lord." },
          { chords: "A                    D           A              E        A", lyric: "And these are the days of your servant Moses, Righteousness being restored." },
          { chords: "C#m                      F#m       D                    E", lyric: "And though these are days of great trials, Of famine and darkness and sword." },
          { chords: "A                  D         A           E          A", lyric: "Still we are the voice in the desert crying, Prepare ye the way of the lord!" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "A                          D", lyric: "Behold He comes, riding on the clouds," },
          { chords: "A                    E", lyric: "Shining like the sun, at the trumpet call," },
          { chords: "A                        D", lyric: "So lift your voice it's the year of Jubilee," },
          { chords: "A          E        A", lyric: "and out of Zion's hill Salvation comes!" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "A                          D", lyric: "There's no God like Jehovah There's no God like Jehovah" },
          { chords: "A                    E", lyric: "There's no God like Jehovah There's no God like Jehovah" },
        ],
      },
    ],
  },
];

export default hymns;
