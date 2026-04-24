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
  ,
  {
    id: 9,
    code: "C-009",
    name: "My Redeemer Lives",
    key: "E",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "E7          A7               E7             A7", lyric: "I know He rescued my soul, His blood has covered my sin," },
          { chords: "     E7  A7     E7   A7", lyric: "I believe,    I believe;" },
          { chords: "E7          A7               E7             A7", lyric: "My shame He's taken away, my pain is healed in His name," },
          { chords: "     E7  A7     E7  A7", lyric: "I believe,    I believe." },
        ],
      },
      {
        section: "Pre-Chorus",
        lines: [
          { chords: "Bsus               A2              Bsus", lyric: "I'll raise a banner; my Lord has conquered the grave." },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "  E        A          C#m7      Bsus", lyric: "My Redeemer lives, my Redeemer lives;" },
          { chords: "  E        A          C#m7      Bsus", lyric: "My Redeemer lives, my Redeemer lives." },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "D              A/C#", lyric: "You lift my burden, I'll rise with You;" },
          { chords: "     E/B          F#m7          E/G#              Bsus", lyric: "I'm dancing on this mountaintop to see Your kingdom come." },
        ],
      },
    ],
  },
  ,
  {
    id: 10,
    code: "C-010",
    name: "Nothing is Impossible",
    key: "C",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "C                          G                    Am7", lyric: "Through You I can do anything, I can do all things" },
          { chords: "                                    F", lyric: "Cause it's You who gives me strength, nothing is impossible" },
          { chords: "C                          G                    Am7", lyric: "Through You blind eyes are opened, strongholds are broken" },
          { chords: "                    F", lyric: "I am living by faith nothing is impossible" },
        ],
      },
      {
        section: "Interlude",
        lines: [
          { chords: "F   C   Dm7   F", lyric: "" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "C              Dm7          F", lyric: "I'm not gonna live by what I see" },
          { chords: "Am7            G            F", lyric: "I'm not gonna live by what I feel" },
          { chords: "Am7            G            F", lyric: "Deep down I know that You're here with me" },
          { chords: "Am7            G         Dm7  F", lyric: "And I know that You can do anything" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "F              C", lyric: "I believe, I believe" },
          { chords: "  Dm7          F", lyric: "I believe, I believe in You" },
        ],
      },
    ],
  },
  ,
  {
    id: 101,
    code: "C-010E",
    name: "Nothing is Impossible (E)",
    key: "E",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "E                          B                    C#m7", lyric: "Through You I can do anything, I can do all things" },
          { chords: "                                    A", lyric: "Cause it's You who gives me strength, nothing is impossible" },
          { chords: "E                          B                    C#m7", lyric: "Through You blind eyes are opened, strongholds are broken" },
          { chords: "                    A", lyric: "I am living by faith nothing is impossible" },
        ],
      },
      {
        section: "Interlude",
        lines: [
          { chords: "A   E   F#m7   A", lyric: "" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "E              F#m7         A", lyric: "I'm not gonna live by what I see" },
          { chords: "C#m7           B            A", lyric: "I'm not gonna live by what I feel" },
          { chords: "C#m7           B            A", lyric: "Deep down I know that You're here with me" },
          { chords: "C#m7           B         F#m  A", lyric: "And I know that You can do anything" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "A              E", lyric: "I believe, I believe" },
          { chords: "  C#m          A", lyric: "I believe, I believe in You" },
        ],
      },
    ],
  },
  ,
  {
    id: 11,
    code: "C-011",
    name: "Your Presence is Heaven to Me",
    key: "C#m",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "C#m              A              E", lyric: "Who is like You Lord in all the earth" },
          { chords: "C#m              A              E", lyric: "Matchless love and beauty, endless worth" },
          { chords: "C#m              A              E", lyric: "Nothing in this world will satisfy" },
          { chords: "C#m              A              E", lyric: "Jesus You're the cup that won't run dry" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "     B        A           E", lyric: "Your presence is heaven to me" },
          { chords: "     B        A           E", lyric: "Your presence is heaven to me" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "E        C#m   B", lyric: "Oh Jesus, Oh Jesus" },
          { chords: "A", lyric: "Your presence is heaven to me" },
          { chords: "E        C#m   B", lyric: "Oh Jesus, Oh Jesus" },
          { chords: "A", lyric: "Your presence is heaven to me" },
        ],
      },
    ],
  },
  ,
  {
    id: 12,
    code: "C-012",
    name: "Alpha and Omega",
    key: "Db",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "Db                                  F#        Db", lyric: "You    are  Alpha and      O - me -  ga" },
          { chords: "F#                        Db", lyric: "We  wor -  ship You, our Lord" },
          { chords: "                Ab              Db", lyric: "You        are   worthy to be praised" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "          Bbm     Ab  F#  Db", lyric: "We give You all -  the  glo - ry" },
          { chords: "F#                        Db", lyric: "We worship You our Lord" },
          { chords: "                Ab              Db", lyric: "You are worthy to be praised" },
        ],
      },
    ],
  },
  ,
  {
    id: 13,
    code: "C-013",
    name: "Celebrate, Jesus Celebrate",
    key: "E",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "E   A    B    E      A B E", lyric: "Celebrate, Jesus celebrate" },
          { chords: "E   A    B    E      A B E", lyric: "Celebrate, Jesus celebrate" },
          { chords: "E   A    B    E      A B E", lyric: "Celebrate, Jesus celebrate" },
          { chords: "E   A    B    E      A B E", lyric: "Celebrate, Jesus celebrate" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "     B              C#m", lyric: "He is risen, He is risen" },
          { chords: "          B              C#m", lyric: "And He lives forevermore" },
          { chords: "     B              C#m", lyric: "He is risen, He is risen" },
          { chords: "          B", lyric: "Come on and celebrate" },
          { chords: "     A       B    E", lyric: "The resurrection of our Lord" },
        ],
      },
    ],
  },
  ,
  {
    id: 14,
    code: "C-014",
    name: "I Speak Jesus",
    key: "E",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "E", lyric: "I just want to speak the Name of Jesus" },
          { chords: "C#m", lyric: "Over every heart and every mind" },
          { chords: "A", lyric: "I know there is peace within Your presence" },
          { chords: "          E", lyric: "I speak Jesus" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "          B        E           A                    E", lyric: "Your name is power Your name is healingYour name is life" },
          { chords: "          B              E           A              E", lyric: "Break every stronghold shine through the shadows burn like a fire" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "E", lyric: "Shout Jesus from the mountains" },
          { chords: "E", lyric: "And Jesus in the streets" },
          { chords: "C#m", lyric: "Jesus in the darkness over every enemy" },
          { chords: "A", lyric: "Jesus for my family" },
          { chords: "          E", lyric: "I speak the holy name Jesus" },
        ],
      },
    ],
  },
  ,
  {
    id: 15,
    code: "C-015",
    name: "O Praise the Name of the Lord our God",
    key: "G",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "G", lyric: "I cast my mind to Calvary" },
          { chords: "          D              Em", lyric: "Where Jesus bled and died for me" },
          { chords: "     C                   G", lyric: "I see His wounds, His hands, His feet" },
          { chords: "     D              G", lyric: "My Saviour on that cursed tree" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "G                    C        G", lyric: "O praise the Name of the Lord our God" },
          { chords: "  Em           Dsus    D", lyric: "O praise His Name forevermore" },
          { chords: "     G                    C        Fm", lyric: "For endless days we will sing Your praise" },
          { chords: "     C       D        G", lyric: "Oh Lord, oh Lord our God" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "C        D        Em", lyric: "Oh Lord, oh Lord our God" },
          { chords: "D        C        D       G", lyric: "Oh Lord, oh Lord our God" },
        ],
      },
    ],
  },
  ,
  {
    id: 15,
    code: "C-015",
    name: "O Praise the Name of the Lord our God",
    key: "G",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "G", lyric: "I cast my mind to Calvary" },
          { chords: "          D              Em", lyric: "Where Jesus bled and died for me" },
          { chords: "     C                   G", lyric: "I see His wounds, His hands, His feet" },
          { chords: "     D              G", lyric: "My Saviour on that cursed tree" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "G                    C        G", lyric: "O praise the Name of the Lord our God" },
          { chords: "  Em           Dsus    D", lyric: "O praise His Name forevermore" },
          { chords: "     G                    C        Fm", lyric: "For endless days we will sing Your praise" },
          { chords: "     C       D        G", lyric: "Oh Lord, oh Lord our God" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "C        D        Em", lyric: "Oh Lord, oh Lord our God" },
          { chords: "D        C        D       G", lyric: "Oh Lord, oh Lord our God" },
        ],
      },
    ],
  },
  {
    id: 16,
    code: "C-016",
    name: "Our God is Greater",
    key: "Em",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "Em       C          G    Em       C          G", lyric: "Water You turned into wine - Opened the eyes of the blind" },
          { chords: "               Am                  D", lyric: "There's no one like you  - None like you" },
          { chords: "Em       C       G    Em       C          G", lyric: "Into the darkness You shine - Out of the ashes we rise" },
          { chords: "               Am                  D", lyric: "There's No one like you - None like you" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "Em              C", lyric: "Our God is greater, - our God is stronger" },
          { chords: "G                        D", lyric: "God You are higher than any other" },
          { chords: "Em                       C", lyric: "Our God is Healer, -  awesome in power" },
          { chords: "     G       D", lyric: "Our God, Our God" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "Em              C", lyric: "And if Our God is for us, then who could ever stop us?" },
          { chords: "G                    D", lyric: "And if our God is with us, then what can stand against?" },
          { chords: "Em              C", lyric: "And if Our God is for us, then who could ever stop us?" },
          { chords: "G                    D              Em  C  G  D", lyric: "And if our God is with us, then what can stand against?" },
        ],
      },
    ],
  },
];

export default hymns;
