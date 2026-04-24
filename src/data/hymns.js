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
  {
    id: 17,
    code: "C-017",
    name: "Every Praise",
    key: "Db",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "Db                    Bbm", lyric: "Every praise is to our God, Every word of worship with one accord" },
          { chords: "Gb          Ab          Db", lyric: "Every praise, every praise is to our God" },
          { chords: "Db                    Bbm", lyric: "Sing Hallelujah to our God, Glory Hallelujah unto our God" },
          { chords: "Gb          Ab          Db", lyric: "Every praise, every praise is to our God" },
        ],
      },
      {
        section: "1st Modulation (Key:D)",
        lines: [
          { chords: "D                     Bm", lyric: "Every praise is to our God, Every word of worship with one accord" },
          { chords: "G           A           D", lyric: "Every praise, every praise is to our God" },
          { chords: "D                     Bm", lyric: "Sing Hallelujah to our God Glory Hallelujah unto our God" },
          { chords: "G           A           D", lyric: "Every praise, every praise is to our God" },
        ],
      },
      {
        section: "2nd Modulation (Key:Eb)",
        lines: [
          { chords: "Eb                    Cm", lyric: "Every praise is to our God, Every word of worship with one accord" },
          { chords: "Ab          Bb          Eb", lyric: "Every praise, every praise is to our God" },
          { chords: "Eb                    Cm", lyric: "Sing Hallelujah to our God Glory Hallelujah unto our God" },
          { chords: "Eb                    Cm", lyric: "Every praise, every praise is to our God" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "Eb              Cm", lyric: "God my Savior, God my Healer" },
          { chords: "Ab              Fm       Db       Eb", lyric: "God my Deliverer, Yes He is, yes He is" },
        ],
      },
    ],
  },
  {
    id: 18,
    code: "C-018",
    name: "Eagle's Wings",
    key: "G",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "Am7       Dsus  D", lyric: "Here I am waiting" },
          { chords: "  G               C", lyric: "Abide in me I pray" },
          { chords: "Am7       Dsus  D   G", lyric: "Here I am longing for You" },
          { chords: "Am7       Dsus    D", lyric: "Hide me in Your love" },
          { chords: "G               C", lyric: "Bring me to my knees" },
          { chords: "Am7       Dsus  D    G     Gsus  D", lyric: "May I know Jesus more and more" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "G               C          Am7    D", lyric: "Come live in me all my life take o-ver" },
          { chords: "G               C          Am7  C  D  G", lyric: "Come breathe in me I will rise on eagle's wings" },
        ],
      },
    ],
  },
  {
    id: 19,
    code: "C-019",
    name: "Worthy is the Lamb",
    key: "G",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "G      G/B       C        G/B", lyric: "Thank You for the cross Lord" },
          { chords: "               C    D    G", lyric: "Thank You for the price You paid" },
          { chords: "               D         Em", lyric: "Bearing all my sin and shame" },
          { chords: "     D          C     Am  G/B    D", lyric: "In love You came and gave amazing grace" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "G            D/F#   Am   G/B  C", lyric: "Worthy is the Lamb seated on the throne" },
          { chords: "D          C      G/B   C       Am    G     D   D/F#", lyric: "Crown You now with many crowns, You reign victori - ous" },
          { chords: "G            D/F#    Am  G/B  C", lyric: "High and lifted up,  Jesus Son of God" },
          { chords: "     D          C      G/B  C    D", lyric: "The Darling of heaven crucified" },
          { chords: "          Am  G/B   C", lyric: "Worthy is the Lamb" },
          { chords: "          Am  G/B  D", lyric: "Worthy is the Lamb" },
        ],
      },
    ],
  },
  {
    id: 20,
    code: "C-020",
    name: "O Come to the Altar",
    key: "B",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "B        E2               B", lyric: "Are you hurting and broken within" },
          { chords: "     E2              G#m          E2", lyric: "Overwhelmed by the weight of your sin, Jesus is calling" },
          { chords: "B        E2               B", lyric: "Have you come to the end of yourself?" },
          { chords: "     E2              G#m          E2", lyric: "Do you thirst for a drink from the well, Jesus is calling" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "B            C#m7  G#m               E    B", lyric: "O come to  the altar,  the Father's arms are open wide" },
          { chords: "     C#m          G#m          E       B", lyric: "Forgiveness  was bought with the precious blood  of Jesus Christ" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "Bsus  B              G#m", lyric: "Oh what a Sav--ior, isn't He wonderful" },
          { chords: "E2              B", lyric: "Sing alleluia, Christ is risen" },
          { chords: "Bsus  B              G#m", lyric: "Bow down before Him for He is Lord of all" },
          { chords: "E2              B", lyric: "Sing alleluia, Christ is risen" },
        ],
      },
    ],
  },
  {
    id: 22,
    code: "C-022",
    name: "More Than Able",
    key: "Eb",
    content: [
      {
        section: "Verse 1",
        lines: [
          { chords: "Eb              Ab", lyric: "When did I start to forget" },
          { chords: "Eb                   Ab", lyric: "All of the great things you did" },
          { chords: "Cm          Bb", lyric: "When did I throw away" },
          { chords: "Ab       Eb      Ab", lyric: "Faith for the impossible" },
        ],
      },
      {
        section: "Chorus 1",
        lines: [
          { chords: "Eb        Ab  Eb", lyric: "You are more than able" },
          { chords: "Cm     Bb       Ab  Eb", lyric: "You are more than able" },
          { chords: "Eb        Ab  Eb", lyric: "You are more than able" },
          { chords: "Cm     Bb       Ab", lyric: "You are more than able" },
          { chords: "     Cm      Bb", lyric: "Who am I to deny" },
          { chords: "Ab       Fm      Eb", lyric: "What the Lord can do" },
        ],
      },
      {
        section: "Bridge 1",
        lines: [
          { chords: "Eb", lyric: "Can you imagine" },
          { chords: "", lyric: "With all of the faith in the room" },
          { chords: "          Ab", lyric: "What the Lord can do, what the Lord can do" },
          { chords: "Eb", lyric: "It's gonna happen" },
          { chords: "          Ab", lyric: "Just let the Way Maker through" },
          { chords: "          Ab", lyric: "He's gonna move, He's gonna move" },
        ],
      },
      {
        section: "Chorus 2",
        lines: [
          { chords: "Eb       Ab", lyric: "Anything is possible" },
          { chords: "Eb       Ab", lyric: "Anything is possible" },
          { chords: "Eb       Bb", lyric: "Anything is possible" },
          { chords: "     Ab      Bb  Eb", lyric: "What the Lord can do" },
        ],
      },
      {
        section: "Bridge 2",
        lines: [
          { chords: "          Eb", lyric: "I've come a long way" },
          { chords: "          Eb", lyric: "I've seen how you work" },
          { chords: "", lyric: "There's so much goodness and grace" },
          { chords: "Ab      Fm", lyric: "Much more than I deserve" },
          { chords: "          Eb", lyric: "I know who I am" },
          { chords: "          Eb", lyric: "I can't stay where I'm at" },
          { chords: "          Fb", lyric: "We've come this far by faith" },
          { chords: "Ab      Fm", lyric: "And I just can't turn back" },
        ],
      },
      {
        section: "Chorus 3",
        lines: [
          { chords: "          Eb", lyric: "You're not done with me yet" },
          { chords: "          Eb", lyric: "You're not done with me yet" },
          { chords: "Ab", lyric: "There's so much more to the story" },
          { chords: "Ab", lyric: "You're not done with me yet" },
        ],
      },
    ],
  },
  {
    id: 23,
    code: "C-023",
    name: "Only You Will I Adore (Adonai)",
    key: "B",
    content: [
      {
        section: "Intro",
        lines: [
          { chords: "G#m7  B  E  C#m7  B  E  C#m7  G#m7", lyric: "" },
        ],
      },
      {
        section: "Verse",
        lines: [
          { chords: "     B              E", lyric: "I lift my voice, I lift my praise to You" },
          { chords: "     B              E       F#", lyric: "I lift my hands, I lift my worship to You" },
          { chords: "G#m7        C#/F          E       F#", lyric: "And I  love You more  than I can say" },
          { chords: "G#m7        C#/F          E", lyric: "Oh I  love You more  than I can say" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "     B    B/D#       E              F#", lyric: "Ever I will sing, only You will I adore" },
          { chords: "     B       C#m7        E          F#", lyric: "Glorify my Lord Only You will I serve" },
          { chords: "          G#m      F#/A#    B   E  F#", lyric: "For the world will fade away" },
          { chords: "          G#m      F#/A#  B    E  F#", lyric: "Still my song to You remains" },
          { chords: "F#              B", lyric: "Only You will I adore" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "  B/D#      E       F#  G#m", lyric: "Oh I  love You always" },
        ],
      },
    ],
  },
  {
    id: 24,
    code: "C-024",
    name: "Jesus Jesus (Holy and Anointed One)",
    key: "G",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "G  Bm  C    G  D   C", lyric: "Je-sus,      Je-sus," },
          { chords: "G     D      C       Am", lyric: "Holy and Anointed One," },
          { chords: "G  D  G", lyric: "Je- su s" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "                    C           G", lyric: "Your name is like honey on my lips" },
          { chords: "               C           G", lyric: "Your Spirit like water to my soul" },
          { chords: "               C    D    Em", lyric: "Your word is a lamp unto my feet" },
          { chords: "Am    C          D", lyric: "Jesus I love You, I love You" },
        ],
      },
    ],
  },
  {
    id: 25,
    code: "C-025",
    name: "Bless the Lord Oh My Soul",
    key: "A",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "A        E        B         C#m", lyric: "The sun comes up, it's a new day dawning" },
          { chords: "A        E        B    C#m", lyric: "It's time to sing Your song again" },
          { chords: "     A        E        B         C#m", lyric: "Whatever may pass, and whatever lies before me" },
          { chords: "A        E             B         E", lyric: "Let me be singing when the evening comes" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "E        A        E   B          C#m", lyric: "Bless the Lord, oh my soul oh my soul" },
          { chords: "A             E    B", lyric: "Worship His holy name" },
          { chords: "     A   E  A.  B       C#m", lyric: "Sing like never before oh my soul" },
          { chords: "A        B        E", lyric: "I'll worship Your holy name" },
        ],
      },
    ],
  },
  {
    id: 26,
    code: "C-026",
    name: "Arise",
    key: "E",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "E          B          D6               A2", lyric: "One thing we ask of You,  one thing that we desire" },
          { chords: "E          B          D6               A2", lyric: "That as we worship You,  Lord, come and change our lives" },
          { chords: "E    B/E   E    A/E", lyric: "Arise, arise, arise, arise" },
        ],
      },
      {
        section: "Chorus 1",
        lines: [
          { chords: "E              B          C#m7              A2", lyric: "Arise, take Your place, be enthroned on our praise" },
          { chords: "E              B          C#m7      A2   E", lyric: "Arise, King of kings, Holy God, as we sing arise" },
          { chords: "E     B      C#m7  A2", lyric: "Ar - ise,   ar -  ise" },
          { chords: "E     B      C#m7  A2", lyric: "Ar - ise,   ar -  ise" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "E                                        D/F#    A2", lyric: "We lift You up, we lift You up, we lift You up on our prai - ses" },
        ],
      },
      {
        section: "Chorus 2",
        lines: [
          { chords: "F              C          Dm7    Dm        Bb2", lyric: "Arise, take Your place, be enthroned   on our praise" },
          { chords: "F              C          Dm7        Bb2   F", lyric: "Arise, King of kings, Holy God, as we sing arise" },
          { chords: "F    C    Dm7  Bb2", lyric: "Ar - ise,  ar -  ise" },
        ],
      },
    ],
  },
  {
    id: 27,
    code: "C-027",
    name: "Lamb (You Did Not Suffer for Nothing)",
    key: "G",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "Em                    C", lyric: "You did not suffer for nothing" },
          { chords: "G/D                   C", lyric: "When You shed your blood" },
          { chords: "Em                    C", lyric: "Every drop was on purpose" },
          { chords: "G/D          D/F#", lyric: "What amazing love" },
        ],
      },
      {
        section: "Pre-Chorus",
        lines: [
          { chords: "D          Em              C", lyric: "I will make my boast in Your cross alone" },
          { chords: "D          Em              C", lyric: "Laying every crown at Your feet" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "G       D/F#   Em7    C", lyric: "Lamb of God  Worthy is the" },
          { chords: "G       D/F#   Em7    C", lyric: "Lamb of God  Worthy is the" },
          { chords: "G       D/F#   Em7    C      G     D/F#  Em7  C", lyric: "Lamb of God  Worthy is the Lamb" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "          Em7      D          C          G", lyric: "And may the Lamb receive His reward in me" },
          { chords: "          Em7      D          C          G", lyric: "And may the Lamb receive all the glo-ry" },
        ],
      },
    ],
  },
  {
    id: 28,
    code: "C-028",
    name: "Thank You Lord",
    key: "E",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "E              B", lyric: "I come before you today" },
          { chords: "F#m         C#m        B", lyric: "And there's just one thing that I want to say" },
          { chords: "          B", lyric: "Thank you, Lord Thank you, Lord" },
          { chords: "F#m                  C#m   B", lyric: "For all You've given to me," },
          { chords: "F#m                  C#m   B", lyric: "For all the blessing that I cannot see" },
          { chords: "A      B/A    B", lyric: "Thank you, Lord Thank you, Lord" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "E/F#        B", lyric: "With a grateful heart, with a song of praise" },
          { chords: "C#m        A", lyric: "With an outstretched arm, I will bless your name" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "E       B       F#m        B", lyric: "Thank you, Lord, I just want to thank you Lord" },
          { chords: "E       B       F#m    B       E", lyric: "Thank you, Lord, I just want to thank you Lord, Thank You, Lord" },
        ],
      },
      {
        section: "Verse 2",
        lines: [
          { chords: "F                    C", lyric: "For all you've done in my life" },
          { chords: "Gm              Bbm         C", lyric: "You took my darkness and gave me your light" },
          { chords: "Bb   C   Bb        C", lyric: "Thank you, Lord Thank you, Lord" },
          { chords: "Gm                    C", lyric: "You took my sin and my shame" },
          { chords: "Gm              Bbm         C", lyric: "You took my sickness and healed all my pain" },
          { chords: "Bb      C    Bb        C", lyric: "Thank you, Lord Thank you, Lord" },
        ],
      },
      {
        section: "Chorus 2",
        lines: [
          { chords: "F       C       Gm          C", lyric: "Thank you, Lord, I just want to thank you Lord" },
          { chords: "F       C       Gm      C       F", lyric: "Thank you, Lord, I just want to thank you Lord, Thank You, Lord" },
        ],
      },
    ],
  },
  {
    id: 29,
    code: "C-029",
    name: "What the Lord Has Done in Me (Hosanna)",
    key: "C",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "     C       G    C          F          Am", lyric: "Let the weak say I am strong; let the poor say I am rich" },
          { chords: "G/B   C       G          C", lyric: "Let the blind say I can see" },
          { chords: "          Dm7      G          C", lyric: "It's what the Lord has done in me" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "Am  G     Am          F                C", lyric: "Hosanna, hosanna, to the Lamb that was slain" },
          { chords: "Am  G     Am   G/B      C          G    C", lyric: "Hosanna, hosanna, Jesus died and rose again" },
        ],
      },
    ],
  },
  {
    id: 30,
    code: "C-030",
    name: "Chosen Generation",
    key: "C",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "C              G       D                    Am7", lyric: "We are a chosen generation called forth to show His excellence" },
          { chords: "C              G       D          Am7", lyric: "All I require for life, God has given me, I know I am" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "          C                   G", lyric: "I know who God says I am, what He says I am," },
          { chords: "          D              Am7", lyric: "Where He says I'm at, I know who I am" },
        ],
      },
      {
        section: "Chorus 2",
        lines: [
          { chords: "          C                   G", lyric: "I'm walking power, I work in miracles," },
          { chords: "          D              Am7", lyric: "I live a life of favor, I know who I am" },
        ],
      },
      {
        section: "Chorus 3",
        lines: [
          { chords: "                    C", lyric: "Take a look at me, I'm a wonder" },
          { chords: "          G", lyric: "It doesn't matter what you see now" },
          { chords: "          D                    Am7", lyric: "Can you see His glory, 'Cause I know who I am" },
        ],
      },
    ],
  },
];

export default hymns;

