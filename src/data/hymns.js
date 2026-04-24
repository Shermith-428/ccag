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
  ,
  {
    id: 6,
    code: "C-006",
    name: "Christ is Enough",
    key: "C#m",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "C#m         A              E    B/D#", lyric: "Christ is my reward and all of my devotion" },
          { chords: "C#m         A              E    B/D#", lyric: "Now there's nothing in this world that could ever satisfy" },
        ],
      },
      {
        section: "Pre-Chorus",
        lines: [
          { chords: "E/G#  A          B    C#m", lyric: "Through every trial, my soul will sing" },
          { chords: "E/G#  A          B", lyric: "No turning back, I've been set free" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "  E                C#m          B A", lyric: "Christ is enough for me, Christ is enough for me" },
          { chords: "A          B    C#m  A       B", lyric: "Everything I need is in You, everything I need" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "E/G#    A            B. C#m          A                B", lyric: "I have deci. - ded to follow Je- sus, no turning back, no turning back" },
          { chords: "E/G#  A          B. C#m       A      B       E", lyric: "I have deci. - ded to follow Je- sus, no turning back, no turning back" },
        ],
      },
    ],
  },
  ,
  {
    id: 7,
    code: "C-007",
    name: "(Hosanna) I see the King of glory",
    key: "E",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "E                                    C#m", lyric: "I see the King of glory Coming on the clouds with fire" },
          { chords: "    F#m                      C#m   C#m", lyric: "The whole earth shakes, The whole earth shakes" },
          { chords: "E", lyric: "I see His love and mercy, Washing over all our sin" },
          { chords: "    F#m                  C#m   C#m", lyric: "The people sing, The people sing" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "E   A   B   C#m  A       C#m  B", lyric: "Hosanna Hosanna Hosanna in the highest" },
          { chords: "E   A   B   C#m  A       B     E", lyric: "Hosanna Hosanna Hosanna in the highest" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "E                        B", lyric: "Heal my heart and make it clean" },
          { chords: "E                            C#m", lyric: "Open up my eyes to the things unseen" },
          { chords: "A                B              C#m", lyric: "Show me how to love like You have loved me" },
          { chords: "A                            B", lyric: "Break my heart for what breaks Yours" },
          { chords: "E                            C#m", lyric: "Everything I am for Your Kingdom's cause" },
          { chords: "A                B        A", lyric: "As I walk from earth into eternity" },
        ],
      },
    ],
  },
  ,
  {
    id: 8,
    code: "C-008",
    name: "Living Hope",
    key: "C",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "C                          G", lyric: "How great the chasm that lay between us" },
          { chords: "          F       Am          G", lyric: "How high the mountain  I could not climb" },
          { chords: "     C                    G", lyric: "In desperation, I turned to heaven" },
          { chords: "          F        G         C", lyric: "And spoke Your name into the night" },
          { chords: "               F                        C", lyric: "Then through the darkness, Your loving-kindness" },
          { chords: "          Am                G", lyric: "Tore through the shadows of my soul" },
          { chords: "          C              G        F        G    C", lyric: "The work is finished, the end is written Jesus Christ, my living hope" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "F    C              G                Am", lyric: "Hallelu - jah, praise the One who set me free" },
          { chords: "F    C              G                Am", lyric: "Hallelu - jah, death has lost its grip on me" },
          { chords: "          F              C              G              Am", lyric: "You have broken every chain there's salvation in Your name" },
          { chords: "     F         G      C", lyric: "Jesus Christ, my living hope" },
        ],
      },
    ],
  },
];

export default hymns;
