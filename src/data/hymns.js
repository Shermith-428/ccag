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
  ,
  {
    id: 31,
    code: "C-031",
    name: "For Your Name is Holy (Your Glory Fall)",
    key: "Em",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "Em                D", lyric: "I enter the Holy of Holies" },
          { chords: "Am          D          Em", lyric: "I enter through the blood of the Lamb" },
          { chords: "D                    Am    D    Em", lyric: "I enter to worship You only I enter to honor I Am" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "G       D    Am       Em", lyric: "Lord I  worship You I worship You" },
          { chords: "     G       D    Am       Em", lyric: "Lord I  worship You I worship You" },
          { chords: "D       C    D    Em    D  Em", lyric: "For Your name is holy holy Lord" },
          { chords: "D       C    D    Em    D  Em", lyric: "For Your name is holy holy Lord" },
        ],
      },
      {
        section: "Ending",
        lines: [
          { chords: "Em    D       C    D    Em", lyric: "For Your name is holy holy Lord" },
        ],
      },
    ],
  },
  {
    id: 32,
    code: "C-032",
    name: "This is the Air I Breathe",
    key: "A",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "A              D", lyric: "  This is the air I breathe" },
          { chords: "A              D", lyric: "  This is the air I breathe" },
          { chords: "A       E    F#m    D    F#m  E", lyric: "  Your holy presence living in  me" },
          { chords: "A              D", lyric: "  This is my daily bread" },
          { chords: "A              D", lyric: "  This is my daily bread" },
          { chords: "A       E    F#m    D    F#m  E", lyric: "  Your very word spoken to  me" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "A  E  F#m  E", lyric: "And I" },
          { chords: "          D         F#m  E", lyric: "I'm desperate for you" },
          { chords: "A  E  F#m  E", lyric: "And I" },
          { chords: "          D         E", lyric: "Im lost without you" },
        ],
      },
    ],
  },
  {
    id: 33,
    code: "C-033",
    name: "Graves into Gardens",
    key: "A",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "D/A        A    D/A        A", lyric: "I searched the world but it couldn't fill me" },
          { chords: "          F#m              E              D", lyric: "Man's empty praise and treasures that fade are never enough" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "          A                              F#m", lyric: "Oh there's nothing better than You, There's nothing better than You" },
          { chords: "          D                    A", lyric: "Lord there's nothing, nothing is better than You" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "A                   D  A", lyric: "You turn mourning to dancing" },
          { chords: "A                   D  A", lyric: "You give beauty for ashes" },
          { chords: "A", lyric: "You turn shame into glory" },
          { chords: "          F#m  D        A", lyric: "You're the only one who can" },
          { chords: "          F#m  D        A", lyric: "You're the only one who can" },
        ],
      },
    ],
  },
  {
    id: 34,
    code: "C-034",
    name: "Who You Say I Am",
    key: "A",
    content: [
      {
        section: "Verse 1",
        lines: [
          { chords: "A                    F#m  E    A", lyric: " Who am I that the highest King would wel - come me" },
          { chords: "A                    F#m  E    D", lyric: "I was lost but He brought me in, oh His love for me" },
          { chords: "          F#m  E  D", lyric: "Oh His love for me" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "          A                    E", lyric: "Who the Son sets free, oh is free indeed" },
          { chords: "F#m  E  D              A", lyric: "I'm a child of God, Yes I am" },
          { chords: "          A                    E", lyric: "In my Father's house, there's a place for me" },
          { chords: "F#m  E  D              A", lyric: "I'm a child of God, Yes I am" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "F#m       E          A                D", lyric: "I am chosen, not forsaken, I am who You say I am" },
          { chords: "F#m       E          A                D", lyric: "You are for me, not against me, I am who You say I am" },
        ],
      },
    ],
  },
  {
    id: 35,
    code: "C-035",
    name: "Revelation Song",
    key: "A",
    content: [
      {
        section: "Verse 1",
        lines: [
          { chords: "A              Em", lyric: "  Worthy is the Lamb who was slain" },
          { chords: "G              D", lyric: "  Holy Holy is He" },
          { chords: "A              Em", lyric: "  Sing a new song to him who sits on" },
          { chords: "G              D", lyric: "  Heaven's mercy seat" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "A", lyric: "  Holy, Holy, Holy" },
          { chords: "Em", lyric: "  Is the Lord God Almighty" },
          { chords: "G              D", lyric: "  Who was and is and is to come" },
          { chords: "A", lyric: "  With all creation I sing" },
          { chords: "Em", lyric: "  Praise to the King of Kings" },
          { chords: "G", lyric: "  You are my everything" },
          { chords: "D              A", lyric: "  And I will adore You" },
        ],
      },
    ],
  },
  {
    id: 36,
    code: "C-036",
    name: "In Jesus Name (God is Fighting for Us)",
    key: "G",
    content: [
      {
        section: "Verse 1",
        lines: [
          { chords: "          G                    Em", lyric: "God is fighting for us, God is on our side" },
          { chords: "Bm              D", lyric: "He has overcome, Yes he has overcome" },
          { chords: "          G                    Em       D", lyric: "We will not be shaken, we will not be moved Jesus You are here" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "A       G       D              Bm          C", lyric: "I will live, I will not die The resurrection power of Christ alive in me" },
          { chords: "                    D", lyric: "And I am free in Jesus Name" },
          { chords: "A       G       D              Bm          C", lyric: "I will live, I will not die I will declare and lift You high, Christ revealed" },
          { chords: "D              Bm       C", lyric: "I will declare and lift You high, Christ revealed" },
          { chords: "          G       D    C    D", lyric: "And I am healed in Jesus Name" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "          G                    A", lyric: "God is fighting for us, pushing back the darkness" },
          { chords: "Bm                    D", lyric: "Lighting up the Kingdom that cannot be shaken" },
          { chords: "          G       A", lyric: "In the Name of Jesus, enemy's defeated" },
          { chords: "Bm              D", lyric: "And we will shout it out, shout it out (repeat)" },
        ],
      },
    ],
  },
  {
    id: 37,
    code: "C-037",
    name: "Way Maker",
    key: "C",
    content: [
      {
        section: "Intro",
        lines: [
          { chords: "C  F  C  G  Am  (Repeat)", lyric: "" },
        ],
      },
      {
        section: "Verse",
        lines: [
          { chords: "C    F              C", lyric: "You are here  - moving in our midst" },
          { chords: "     G         Am", lyric: "I worship you  - I worship you" },
          { chords: "F              C", lyric: "You are here  - Working in this place" },
          { chords: "     G         Am", lyric: "I worship you  - I worship you" },
          { chords: "F", lyric: "(And we say) Way maker    - Miracle worker" },
          { chords: "C              C", lyric: "Promise keeper-Light in the darkness" },
          { chords: "     G         Am", lyric: "My God       - That is who you are" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "F", lyric: "  Even when I don't feel it you're working" },
          { chords: "C", lyric: "  Even when I don't see it You're working" },
          { chords: "G", lyric: "  You never stop, you never stop working" },
          { chords: "Am", lyric: "  You never stop, you never stop working" },
        ],
      },
    ],
  },
  {
    id: 38,
    code: "C-038",
    name: "Every Day (It's You I Live For)",
    key: "E",
    content: [
      {
        section: "Intro",
        lines: [
          { chords: "E - B - G#m - F# (2X)", lyric: "" },
        ],
      },
      {
        section: "Verse",
        lines: [
          { chords: "E        B   G#m          F#       E", lyric: "What to say LordIt's you who gave me life and I" },
          { chords: "B        G#m  F#", lyric: "Can't explain just howMuch You mean to me now that" },
          { chords: "B              G#m  F#", lyric: "You have saved me Lord. I give all that I am to You" },
          { chords: "B        G#m  F#              E", lyric: "That everyday I can. Be a light that shines Your name" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "B    E  G#m    F#", lyric: "Every dayIt's you I'll live for" },
          { chords: "B    E  G#m    F#    B", lyric: "Every dayI'll follow after You" },
          { chords: "B    E  G#m    F#    E", lyric: "Every dayI'll walk with You my Lord  (B - E - G#m - F#)" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "B.       E  G#m - F#", lyric: "It's You I live for every day / / /" },
        ],
      },
    ],
  },
  {
    id: 39,
    code: "C-039",
    name: "This is How We Overcome (You Have Turned)",
    key: "G",
    content: [
      {
        section: "Intro",
        lines: [
          { chords: "Fmaj9  G  Am7   Fmaj9  G  C / /", lyric: "" },
        ],
      },
      {
        section: "Verse",
        lines: [
          { chords: "Fmaj9      G              Am7", lyric: "Your light broke through my night," },
          { chords: "Fmaj9      G         C", lyric: "Restored exceeding joy." },
          { chords: "Fmaj9      G         Am7", lyric: "Your grace fell like the rain," },
          { chords: "     Fmaj9      G", lyric: "And made this desert live." },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "G       C       G              F    G", lyric: "You have turned  my mourning into dancing." },
          { chords: "G       C       G              F    G", lyric: "You have turned my sorrow into joy." },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "Fmaj9          G       Fmaj9  G  Am7", lyric: "This is how we overcome." },
          { chords: "Fmaj9          G       Fmaj9  G  Am7", lyric: "This is how we overcome." },
        ],
      },
    ],
  },
  {
    id: 40,
    code: "C-040",
    name: "Great Are You Lord",
    key: "E",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "E       A       C#m", lyric: "You give life, You are love" },
          { chords: "          B", lyric: "You bring light to the darkness" },
          { chords: "          A       C#m", lyric: "You give hope, You restore" },
          { chords: "          B", lyric: "Every heart that is broken" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "A    C#m          B", lyric: "Great are You, Lord" },
          { chords: "          A       C#m", lyric: "It's Your breath in our lungs" },
          { chords: "B", lyric: "So we pour out our praise" },
          { chords: "B", lyric: "We pour out our praise" },
          { chords: "          A       C#m", lyric: "It's Your breath in our lungs" },
          { chords: "B              A", lyric: "So we pour out our praise to You only" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "E", lyric: "And all the earth will shout Your praise" },
          { chords: "Esus", lyric: "Our hearts will cry, these bones will sing" },
          { chords: "A              E", lyric: "Great are You, Lord" },
        ],
      },
    ],
  },
  ,
  {
    id: 41,
    code: "C-041",
    name: "Do It Again",
    key: "F",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "F                              C", lyric: "Walking around these walls, I thought by now they'd fall" },
          { chords: "F                   C", lyric: "But you have never failed me yet" },
          { chords: "F                              C", lyric: "Waiting for change to come, Knowing the battle's won" },
          { chords: "F                   C", lyric: "For you have never failed me yet" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "F       G              C              F", lyric: "Your promise still stands, Great is your faithfulness, faithfulness" },
          { chords: "F       G              C         F       C", lyric: "I'm still in your hands, This is my confidence, You've never failed me yet" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "C  F       C  F              G  C", lyric: "I've seen You move,    You move the mountains" },
          { chords: "G  C              C  F", lyric: "And I believe I'll see you do it again" },
          { chords: "C  F       G  C", lyric: "You made a way    Where there was no way" },
          { chords: "G  C              C", lyric: "And I believe I'll see you do it again" },
        ],
      },
    ],
  },
  {
    id: 42,
    code: "C-042",
    name: "Let it Rain",
    key: "G",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "Em         C", lyric: "Let it rain, let it rain" },
          { chords: "G              D", lyric: "Open the flood gates of heaven" },
        ],
      },
    ],
  },
  {
    id: 43,
    code: "C-043",
    name: "I Came for You",
    key: "E",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "E          A          C#m                A", lyric: "All it takes is one moment and just one touch from You" },
          { chords: "E          A          C#m", lyric: "I put aside all distractions I came for You" },
          { chords: "B       A", lyric: "I came for You" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "     E       F#m              C#m          A", lyric: "Holy Spirit, You are welcome Come and move upon this place" },
          { chords: "     E       F#m          A", lyric: "We desire an encounter once again" },
          { chords: "          E       F#m", lyric: "Send Your fire, release Your power" },
          { chords: "C#m          A", lyric: "So we'll never be the same" },
          { chords: "     E       F#m          A", lyric: "We desire, an encounter once again" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "     B              C#m  A          E", lyric: "We make way, we make room Lord let Your spirit move" },
          { chords: "     B          C#m  A       B", lyric: "Have Your way, in this place Lord we have come for You" },
        ],
      },
    ],
  },
  {
    id: 44,
    code: "C-044",
    name: "Oh Sweet Wind (There's a Wind a Blowin')",
    key: "D",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "D", lyric: "There's a wind a blowin' all across the land" },
          { chords: "D", lyric: "A fragrant breeze of heaven, blowin' once again" },
          { chords: "G", lyric: "Don't know where it comes from" },
          { chords: "G", lyric: "Don't know where it goes" },
          { chords: "               D", lyric: "But let it blow over me" },
          { chords: "A       G       D", lyric: "Oh sweet wind, come and blow over me" },
        ],
      },
    ],
  },
  {
    id: 45,
    code: "C-045",
    name: "Be Magnified",
    key: "Dm",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "Dm       C              Gm  F/A  Bb  C    Dm", lyric: "I have made You too small in my eyes  O   Lord,   forgive me" },
          { chords: "Dm       C       Gm  F/A  Bb       C    Dm", lyric: "I have believed in a lie  that   You were unable to help me" },
          { chords: "C/E       F       C       Gm", lyric: "But now, O Lord, I see my wrong" },
          { chords: "F/A  Bb       C       F       C", lyric: "Heal my heart and show Yourself strong" },
          { chords: "F       C       Gm", lyric: "And in my eyes and with my song" },
          { chords: "F/A  Bb    C       Dm  Gm    C    F       C", lyric: "O   Lord, be magnified O Lord, be magnified" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "F       C       Gm  F/A  Bb       F/A  Eb  Csus", lyric: "Be magnified, O Lord        You are highly exalted" },
          { chords: "Am       Dm       Bb", lyric: "And there is nothing You can't do" },
          { chords: "Gm       C       Dm       C", lyric: "O   Lord, my eyes are on You" },
          { chords: "Bb  C    Dm  Gm    C    F", lyric: "Be magnified O Lord, be magnified" },
        ],
      },
    ],
  },
  {
    id: 46,
    code: "C-046",
    name: "Shekinah Glory Come",
    key: "F",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "     F              Bb", lyric: "We wait for You, We wait for You" },
          { chords: "Dm              C", lyric: "We wait for You, To walk in the room" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "F                                   Bb", lyric: "Here we are standing in Your presence, Shekinah glory come down (x2)" },
          { chords: "Dm                   C", lyric: "Here we are standing in Your presence Shekinah glory come down (x2)" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "     F              C", lyric: "Release the fullness of Your Spirit" },
          { chords: "Gm              Bb", lyric: "Shekinah glory come Shekinah glory come" },
        ],
      },
      {
        section: "Bridge 2",
        lines: [
          { chords: "F", lyric: "When You move, we want more" },
          { chords: "C", lyric: "And when You speak, we want more" },
          { chords: "Gm", lyric: "When You move, we want more" },
          { chords: "Bb", lyric: "We want the fullness" },
        ],
      },
    ],
  },
  {
    id: 47,
    code: "C-047",
    name: "No One Beside You",
    key: "E",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "E                        C#m", lyric: "Within my heart is a melody that was not taught" },
          { chords: "          A", lyric: "In the darkest night it still goes on" },
          { chords: "C#m       B", lyric: "The anthem of my God" },
          { chords: "E                             C#m", lyric: "Within my heart is a treasure that cannot be bought" },
          { chords: "          A", lyric: "When all else is faded it will not" },
          { chords: "C#m       B", lyric: "The presence of my God" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "A       E       B", lyric: "Oh magnify the Lord" },
          { chords: "A       E    C#m    B", lyric: "Let us exalt His name together" },
          { chords: "A       E       B", lyric: "No one beside You Lord" },
          { chords: "A       E    C#m    B", lyric: "Honor and praise are Yours forever" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "E    B       C#m  A    E/B    B", lyric: "Holy holy is the Lord God almigh - ty" },
          { chords: "E    B       C#m  A    E/B    B", lyric: "Holy holy is the Lord God almigh - ty" },
        ],
      },
    ],
  },
  {
    id: 48,
    code: "C-048",
    name: "Glory",
    key: "F",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "F              Bb", lyric: "Great is the Lord God almighty" },
          { chords: "F              Bb", lyric: "Great is the Lord on high" },
          { chords: "F              Bb", lyric: "The train of His robefills the temple" },
          { chords: "C    Dm    Bb", lyric: "And we cry out highest praise" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "Bb  F/A    Dm    C       Bb  F/A          G    Bb", lyric: "Glo - ry to the risen king    - Glo- ryto the Son - Glorious Son" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "F", lyric: "Lift up your heads  - Open the doors" },
          { chords: "Dm       Bb  F/A    C", lyric: "Let the king of glory come in - and forever he our God" },
        ],
      },
    ],
  },
  {
    id: 49,
    code: "C-049",
    name: "Lord I Need You",
    key: "E",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "E    A    E", lyric: "Lord I come, I confess" },
          { chords: "C#m  B       A", lyric: "Bowing here, I find my rest" },
          { chords: "     E    A    E", lyric: "Without You, I fall apart" },
          { chords: "E/B  B       A", lyric: "You're the one that guides my heart" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "E       A    E       B/D#", lyric: "Lord, I need You, oh, I need You" },
          { chords: "C#m  A    E    B", lyric: "Every hour, I need You" },
          { chords: "E/G#       A    E/B       A", lyric: "My one defense, my righteousness" },
          { chords: "  E/B    B    E", lyric: "Oh God, how I need You" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "A          E/G#    B       C#m", lyric: "So teach my song to rise to You" },
          { chords: "A          E/G#       A", lyric: "When temptation comes my way" },
          { chords: "A          E/G#    B       C#m", lyric: "And when I cannot stand, I'll fall on You" },
          { chords: "A          B    E    A", lyric: "Jesus, You're my hope and stay" },
        ],
      },
    ],
  },
  {
    id: 50,
    code: "C-050",
    name: "I Surrender (Here I Am)",
    key: "C#m",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "C#m                    E", lyric: "Here I am,  down on my knees again" },
          { chords: "B       A", lyric: "Surrendering all surrendering all" },
          { chords: "C#m                    E", lyric: "And find me here,  Lord as You draw me near" },
          { chords: "B             A", lyric: "Desperate for You desperate for You" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "C#m          E", lyric: "I surrenderI surrender" },
          { chords: "F#m", lyric: "I want to know You more" },
          { chords: "A", lyric: "I want to know You more" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "A    E", lyric: "Like a rushing wind" },
          { chords: "     B", lyric: "Jesus breathe within" },
          { chords: "     F#m", lyric: "Lord have your way" },
          { chords: "     C#mB", lyric: "Lord have your way in me" },
        ],
      },
    ],
  },
  ,
  {
    id: 51,
    code: "C-051",
    name: "Hosanna (Praise is Rising)",
    key: "G",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "G                    C              G", lyric: "Praise is rising, eyes are turning to You, we turn to You" },
          { chords: "G                         C              G", lyric: "Hope is stirring, hearts are yearning for You, we long for You" },
        ],
      },
      {
        section: "Pre-Chorus",
        lines: [
          { chords: "     D              C              G", lyric: "'Cause when we see You we find strength to face the day" },
          { chords: "     D              C         G       D", lyric: "In Your presence all our fears are washed away, washed away" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "C/G  G    Em  C              G          D", lyric: "Hosanna, Hosanna - You are the God who saves us" },
          { chords: "     Em       C", lyric: "Worthy of all our praises" },
          { chords: "C/G  G    Em  C              G          D", lyric: "Hosanna, Hosanna - Come have Your way among us" },
          { chords: "     Em       C", lyric: "We welcome You here, Lord Jesus" },
        ],
      },
    ],
  },
  {
    id: 52,
    code: "C-052",
    name: "Forever (His Love Endures Forever)",
    key: "G",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "G", lyric: "Give thanks to the Lord our God and King" },
          { chords: "G", lyric: "His love endures forever" },
          { chords: "C                              G", lyric: "For He is good, He is above all things His love endures forever" },
          { chords: "D              C", lyric: "Sing praise, sing praise" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "G", lyric: "Forever God is faithful" },
          { chords: "Em7", lyric: "Forever God is strong" },
          { chords: "D", lyric: "Forever God is with us" },
          { chords: "C", lyric: "Forever and ever forever" },
          { chords: "G", lyric: "His love endures forever" },
        ],
      },
    ],
  },
  {
    id: 53,
    code: "C-053",
    name: "I Could Sing of Your Love Forever",
    key: "F",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "F                    Dm", lyric: "Over the mountains and the sea" },
          { chords: "               Bb", lyric: "Your river runs with love for me" },
          { chords: "               C              F", lyric: "And I will open up my heart and let the healer set me free" },
          { chords: "F              Dm       Bb", lyric: "I'm happy to be in the truth and I will daily lift my hands" },
          { chords: "               C", lyric: "And I will always always sing of when your love came down" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "F                    Gm", lyric: "I could sing of Your love forever" },
          { chords: "Bb       C          F", lyric: "I could sing of Your love forever" },
        ],
      },
    ],
  },
  {
    id: 54,
    code: "C-054",
    name: "As the Deer",
    key: "C",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "C       G              Am", lyric: "As the deer panteth for the water" },
          { chords: "     F       G7    C    G", lyric: "So my soul longs after Thee" },
          { chords: "C       G              Am", lyric: "You alone are my heart's desire" },
          { chords: "     F       G       C", lyric: "And I long to worship Thee" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "Am       F          C", lyric: "You alone are my strength, my shield" },
          { chords: "     F       Dm  F", lyric: "To you alone may my spirit yield" },
          { chords: "C       G          Am", lyric: "You alone are my heart's desire" },
          { chords: "     F       G       C", lyric: "And I long to worship Thee" },
        ],
      },
    ],
  },
  {
    id: 55,
    code: "C-055",
    name: "You Are Worthy of It All",
    key: "G",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "C       D    C              D", lyric: "All the saints and angels bow before Your throne" },
          { chords: "C       D              C       D    G", lyric: "All the elders cast their crowns before the Lamb of God and sing" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "G                              D", lyric: "You are worthy of it all -You are worthy of it all" },
          { chords: "          C                    D", lyric: "For from You are all things - And to You are all things" },
          { chords: "G", lyric: "You deserve the glory" },
        ],
      },
    ],
  },
  ,
  {
    id: 56,
    code: "C-056",
    name: "Praise (I'll Praise in the Valley)",
    key: "E",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "D(E)                    G(A)D(E)", lyric: "I'll praise in the valley    Praise on the mountain" },
          { chords: "A(B)          G(A)       D(E)", lyric: "I'll praise when I'm sure Praise when I'm doubting" },
          { chords: "D(E)          G(A)       D(E)", lyric: "I'll praise when outnumbered Praise when surrounded" },
          { chords: "A(B)G(A)      D(E)", lyric: "Cause praise is the waters My enemies drown in" },
          { chords: "A(B)          G(A)", lyric: "As long as I'm breathing I've got a reason to" },
          { chords: "(C#m)  (A)    (E)        (B)", lyric: "" },
          { chords: "Bm  G     D              A", lyric: "Pra-ise the Lord oh my soul //" },
        ],
      },
      {
        section: "After 2nd Chorus",
        lines: [
          { chords: "Bm(C#m)          G(A)", lyric: "I won't be quietMy God is alive" },
          { chords: "D(E)      A(B)", lyric: "How could I keep it inside" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "D(E)                         Em(F#m)", lyric: "I'll praise cause You're sovereign Praise cause You reign" },
          { chords: "D/F#(E/G#)                   G(A)", lyric: "Praise cause You rose and defeated the grave" },
        ],
      },
    ],
  },
  {
    id: 57,
    code: "C-057",
    name: "God is Here (Jesus be Revealed)",
    key: "D",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "D              G    D", lyric: "Open our eyes Lord, we want to see You" },
          { chords: "A              G       Em", lyric: "Open our hearts Lord, we want to know You" },
          { chords: "D              G    D", lyric: "Open our ears Lord, we need to hear You" },
          { chords: "     A    G       D", lyric: "Jesus be revealed, Jesus be revealed" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "     D       A          Bm          D", lyric: "God is here, God is here, God is here, He is able" },
          { chords: "          G       Bm       A", lyric: "We draw near, to see Jesus face to face" },
          { chords: "     D       A          Bm          D", lyric: "God is here, God is here, God is here, He is faithful" },
          { chords: "          F#m       Bm    G       D", lyric: "We draw near, to see Jesus, Oh Jesus be revealed" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "G       Bm       Em  G       A", lyric: "Holy, we cry holy Hallelujah, God is here" },
          { chords: "G       Bm       Em       D", lyric: "Holy, we cry holy Hallelujah, God is here" },
        ],
      },
    ],
  },
  {
    id: 58,
    code: "C-058",
    name: "Heart of Worship",
    key: "E",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "E              B", lyric: "When the music fades" },
          { chords: "               F#m          B", lyric: "All is stripped away and I simply come" },
          { chords: "E                        F#m", lyric: "Longing just to bring something that's of worth" },
          { chords: "               B", lyric: "That will bless your heart" },
        ],
      },
      {
        section: "Pre Chorus",
        lines: [
          { chords: "F#m       E          B", lyric: "I'll bring you more than a song for a song in itself" },
          { chords: "F#m       E          B", lyric: "Is not what You have required" },
          { chords: "F#m       E          B                    F#m", lyric: "You search much deeper within through the way things appear" },
          { chords: "     E          B", lyric: "You're looking into my heart" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "E              B", lyric: "I'm coming back to the heart of worship" },
          { chords: "     F#m    A       B    E", lyric: "And it's all about You it's all about You, Jesus" },
          { chords: "E              B", lyric: "I'm sorry Lord for the thing I've made it" },
          { chords: "     F#m    A       B    E", lyric: "When it's all about You it's all about You, Jesus" },
        ],
      },
    ],
  },
  {
    id: 59,
    code: "C-059",
    name: "Broken Vessels",
    key: "Em",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "Em              G", lyric: "All these pieces broken and scattered" },
          { chords: "Em              G", lyric: "In mercy gathered mended and whole" },
          { chords: "Em              G", lyric: "Empty handed but not forsaken" },
          { chords: "          D          Em  D", lyric: "I've been set free, I've been set free" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "C              D", lyric: "Amazing grace, how sweet the sound" },
          { chords: "     Em          C", lyric: "That saved a wretch like me" },
          { chords: "C              D", lyric: "Oh I once was lost but now I am found" },
          { chords: "     Em          C", lyric: "Was blind but now I see" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "          G  D              Em          C", lyric: "Oh I can see You no- w, oh I can see the love in Your eyes" },
          { chords: "          G  D          Em       C    Em  G  Em  G", lyric: "Laying Yourself do-wn, raising up the broken to life" },
        ],
      },
    ],
  },
  {
    id: 60,
    code: "C-060",
    name: "Desert Song",
    key: "Bm",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "Bm       A       G  D", lyric: "This is my prayer in the desert" },
          { chords: "     Bm          A       G  D", lyric: "When all that's within me feels dry" },
          { chords: "Bm       A       G       D", lyric: "This is my prayer in my hunger and need" },
          { chords: "Bm       A       G", lyric: "My God is the God who provides" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "          D       A", lyric: "I will bring praise; I will bring praise" },
          { chords: "G                    D", lyric: "No weapon formed against me shall remain" },
          { chords: "A/C#    A       Bm", lyric: "I will rejoice; I will declare" },
          { chords: "     G       D       Bm", lyric: "God is my victory and He  is here" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "D                         Bm", lyric: "All of my life in every season, You are still God" },
          { chords: "          A    G          D", lyric: "I have a reason to sing; I have a reason to worship" },
        ],
      },
    ],
  },
  ,
  {
    id: 61,
    code: "C-061",
    name: "See a Victory",
    key: "E",
    content: [
      {
        section: "Intro",
        lines: [
          { chords: "C#m  A    E", lyric: "" },
        ],
      },
      {
        section: "Verse 1",
        lines: [
          { chords: "     C#m              A              E", lyric: "The weapon may be formed but it won't prosper" },
          { chords: "C#m              A              E", lyric: "When the darkness falls it won't prevail" },
          { chords: "          C#m              A              E", lyric: "Cause the God I serve knows only how to triumph" },
          { chords: "C#m       A    E", lyric: "My God will never fail" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "          C#m                        A", lyric: "I'm gonna see a victory, I'm gonna see a victory" },
          { chords: "E              B", lyric: "For the battle belongs to You Lord" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "A                         B", lyric: "You take what the enemy meant for evil" },
          { chords: "          A", lyric: "And you turn it for good" },
          { chords: "          B", lyric: "You turn it for good" },
        ],
      },
    ],
  },
  {
    id: 62,
    code: "C-062",
    name: "Down at Your Feet (No Higher Calling)",
    key: "A",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "A       C#m  D", lyric: "Down at Your feet, O Lord" },
          { chords: "     E          A", lyric: "Is the most high place" },
          { chords: "C#m       D", lyric: "In Your presence Lord" },
          { chords: "F       A    F    G    A", lyric: "I seek Your face, I seek Your face" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "D       E", lyric: "There is no higher calling" },
          { chords: "C#m       F#m", lyric: "No greater honour" },
          { chords: "     Bm       E          A", lyric: "Than to bow and kneel before Your throne" },
          { chords: "D       E", lyric: "I'm amazed at Your glory" },
          { chords: "C#m       F#m", lyric: "Embraced by Your mercy" },
          { chords: "  Bm7    E          A", lyric: "O Lord, I live to worship You" },
        ],
      },
    ],
  },
  {
    id: 63,
    code: "C-063",
    name: "Come Holy Spirit (Fall Afresh on Me)",
    key: "E",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "E    B       C#m", lyric: "Come Holy Spirit" },
          { chords: "A    B       E", lyric: "Fall afresh on me" },
          { chords: "E    B       C#m", lyric: "Fill me with your power" },
          { chords: "F#          B", lyric: "Satisfy my needs" },
          { chords: "C#m  B       A", lyric: "Only You can make me whole" },
          { chords: "C#m  B       A", lyric: "Give me strength to make me grow" },
          { chords: "E    B       C#m", lyric: "Come Holy Spirit" },
          { chords: "A    B       E", lyric: "Fall afresh on me" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "E    B", lyric: "Pour it out Lord" },
          { chords: "A", lyric: "Pour it out Lord" },
          { chords: "C#m  B       A", lyric: "Pour it out Your Spirit on me" },
        ],
      },
    ],
  },
  {
    id: 64,
    code: "C-064",
    name: "This is the Day (He Goes Before Me)",
    key: "F",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "F", lyric: "This is the day that the Lord has made" },
          { chords: "               C", lyric: "I will rejoice and celebrate" },
          { chords: "F", lyric: "This is the day that the Lord has made" },
          { chords: "Bb  F/A    Bb    F       C    F", lyric: "I will rejoice, I will rejoice and celebrate" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "Bb       F       Bb          F", lyric: "He goes before me He goes before me" },
          { chords: "Bb       F       Bb          F", lyric: "He walks beside me He walks beside me" },
          { chords: "Bb       F       Dm7          C", lyric: "He lives within me; He's the Lover of my soul" },
          { chords: "     F       Bb       F", lyric: "He's my defender He's my defender" },
          { chords: "Bb       F       Bb          F", lyric: "He's my provider He's my provider" },
          { chords: "Bb       C              F", lyric: "His overflowing mercies are brand new every day" },
        ],
      },
    ],
  },
  {
    id: 65,
    code: "C-065",
    name: "I Love to be in Your Presence",
    key: "F",
    content: [
      {
        section: "Chorus",
        lines: [
          { chords: "     F              Bb              F       C", lyric: "I love to be in Your presence With Your people singing praises" },
          { chords: "     F              Bb", lyric: "I love to stand and rejoice" },
          { chords: "     F       C       F", lyric: "Lift my hands and raise my voice" },
        ],
      },
      {
        section: "Verse",
        lines: [
          { chords: "Bb       F       Bb          F", lyric: "You set my feet to dancing, You fill my heart with song" },
          { chords: "Eb2       Bb       C", lyric: "You give me reason to rejoice, rejoice" },
        ],
      },
    ],
  },
  {
    id: 66,
    code: "C-066",
    name: "Majesty, Worship His Majesty",
    key: "G",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "G              C    Am", lyric: "Majesty, worship His majesty," },
          { chords: "     G       Em          D7", lyric: "Unto Jesus be all glory, power, and praise." },
          { chords: "G              C    Am", lyric: "Majesty, kingdom, authority" },
          { chords: "          G              D7", lyric: "Flow from His throne unto His own," },
          { chords: "G", lyric: "His anthem raise." },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "D7                        G", lyric: "So exalt, lift up on high the name of Jesus." },
          { chords: "     D7                        G    D", lyric: "Magnify, come glorify Christ Jesus, the King." },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "G    C    G    C       Am", lyric: "Majesty, worship His majesty." },
          { chords: "     G              D7", lyric: "Jesus, who died, now glorified," },
          { chords: "G", lyric: "King of all Kings." },
        ],
      },
    ],
  },
  {
    id: 67,
    code: "C-067",
    name: "God I Look to You",
    key: "Bb",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "Bb                   F", lyric: "God I look to You, I won't be overwhelmed" },
          { chords: "Eb       Gm          F", lyric: "Give me vision to see things like You do" },
          { chords: "Bb                   F", lyric: "God I look to You, You're where my help comes from" },
          { chords: "Eb       Gm          F", lyric: "Give me wisdom; You know just what to do" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "Eb       Cm       F", lyric: "I will love You Lord my strength" },
          { chords: "Eb       Cm       F", lyric: "I will love You Lord my shield" },
          { chords: "Eb       Cm       F    Bb", lyric: "I will love You Lord my rock forever" },
          { chords: "Eb       F       Bb", lyric: "All my days I will love You God" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "Eb       Gm       F", lyric: "Hallelujah our God reigns" },
          { chords: "Eb       Gm       F", lyric: "Hallelujah our God reigns" },
          { chords: "Eb       Gm       F       Bb", lyric: "Hallelujah our God reigns forever" },
          { chords: "Eb       F    Bb", lyric: "All my days Hallelujah" },
        ],
      },
    ],
  },
  {
    id: 68,
    code: "C-068",
    name: "Open the Eyes of My Heart",
    key: "E",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "E                             B/D#", lyric: "Open the eyes of my heart Lord Open the eyes of my heart" },
          { chords: "A/C#    A              E", lyric: "I want to see You    I want to see You" },
          { chords: "     B              C#m", lyric: "To see You high and lifted up" },
          { chords: "A              B", lyric: "Shining in the light of Your glory" },
          { chords: "B       C#m       A              B", lyric: "Pour out Your power & love , as we sing Holy Holy Holy" },
          { chords: "E       B/D#       A              E", lyric: "Holy HolyHoly - Holy HolyHoly - Holy HolyHoly I want to see You" },
        ],
      },
      {
        section: "On F",
        lines: [
          { chords: "F                             C/E", lyric: "Open the eyes of my heart Lord Open the eyes of my heart" },
          { chords: "Bb/D    Bb              F", lyric: "I want to see You    I want to see You" },
          { chords: "     C              Dm", lyric: "To see You high and lifted up" },
          { chords: "Bb              C", lyric: "Shining in the light of Your glory" },
          { chords: "C       Dm       Bb              C", lyric: "Pour out Your power & love , as we sing Holy HolyHoly" },
          { chords: "F       C/E       Bb              F", lyric: "Holy HolyHoly - Holy HolyHoly - Holy HolyHoly I want to see You" },
        ],
      },
    ],
  },
  {
    id: 69,
    code: "C-069",
    name: "Great in Power",
    key: "D",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "D", lyric: "Praise Him you heavens and all that's above" },
          { chords: "D", lyric: "Praise Him you angels and heavenly hosts" },
          { chords: "G              D", lyric: "Let the whole earth praise Him" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "D              Bm", lyric: "Great in  power, great in  glory" },
          { chords: "G       Bm       A", lyric: "Great in mercy, King of hea - ven" },
          { chords: "D              Bm", lyric: "Great in  battle, great in  wonder" },
          { chords: "G       Bm       A       D", lyric: "Great in Zion, King over all  the earth" },
        ],
      },
    ],
  },
  {
    id: 70,
    code: "C-070",
    name: "Here for You",
    key: "C",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "C", lyric: "Let our praise be Your welcome, Let our songs be a sign" },
          { chords: "F              C", lyric: "We are here for You, we are here for You" },
          { chords: "C", lyric: "Let Your breath come from heaven, Fill our hearts with Your life" },
          { chords: "F              C", lyric: "We are here for You, we are here for You" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "     F              G", lyric: "To You our hearts are open nothing here is hidden" },
          { chords: "C/E          F    Dm", lyric: "You are our one desire You alone are holy" },
          { chords: "G/B       C/E          F", lyric: "Only You are worthy God, let Your fire fall down" },
        ],
      },
      {
        section: "Ending",
        lines: [
          { chords: "C", lyric: "We welcome You with praise, we welcome You with praise" },
          { chords: "Am              F", lyric: "Almighty God of love, be welcome in this place" },
          { chords: "C", lyric: "Let every heart adore, let every soul awake" },
          { chords: "Am              F", lyric: "Almighty God of love, Be welcome in this place" },
        ],
      },
    ],
  },
  ,
  {
    id: 71,
    code: "C-071",
    name: "Just Be",
    key: "Ab",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "Ab              Eb", lyric: "  Everything else can wait" },
          { chords: "Ab       Eb          Bb", lyric: "  I've come to seek Your face" },
          { chords: "Ab              Eb", lyric: "  So everything else can wait" },
          { chords: "     Ab       Eb", lyric: "  I'm here for You" },
          { chords: "  Bb", lyric: "I want to" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "     Eb  Bb", lyric: "Just be, here at Your feet" },
          { chords: "     Eb  Bb", lyric: "Just be, here on my knees" },
          { chords: "Cm       Bb       Ab       Eb", lyric: "Here in Your presence I am complete" },
          { chords: "  Ab       Bb       Eb", lyric: "Jesus, You're all that I need" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "Ab              Bb", lyric: "  There's nothing I want more" },
          { chords: "Gm       Ab", lyric: "  'Cause nothing matters more" },
        ],
      },
    ],
  },
  {
    id: 72,
    code: "C-072",
    name: "In the Shadow of Your Wings",
    key: "Am",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "Am                   F", lyric: "Oh my heart aches for Your presence" },
          { chords: "Am                   F", lyric: "Oh my soul cries for Your love" },
          { chords: "Am                   F", lyric: "You are the God of my salvation" },
          { chords: "Am                        F", lyric: "You are my strength and my song" },
        ],
      },
      {
        section: "Pre-Chorus",
        lines: [
          { chords: "     E       Am", lyric: "So I lift up my hands" },
          { chords: "     E7          F", lyric: "And I pour out my heart" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "F                   C", lyric: "In the shadow of Your wings" },
          { chords: "  G       Am", lyric: "I sing to You" },
          { chords: "F                   C", lyric: "You are all my heart desires" },
          { chords: "Am       G", lyric: "You're all I want" },
        ],
      },
    ],
  },
  {
    id: 73,
    code: "C-073",
    name: "Good Good Father",
    key: "G",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "G", lyric: "I've heard a thousand stories of what they think You're like" },
          { chords: "G", lyric: "But I've heard the tender whisper of love in the dead of night" },
          { chords: "C       G       Am       D", lyric: "You tell me that Your pleased and that I'm never alone" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "          C              G", lyric: "You're a good, good Father it's who You are" },
          { chords: "     Am          D", lyric: "It's who You are, it's who You are" },
          { chords: "          C", lyric: "And I'm loved by you" },
          { chords: "G", lyric: "It's who I am" },
          { chords: "     Am          D", lyric: "It's who I am, it's who I am" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "C                        Em", lyric: "You are perfect in all of your ways" },
          { chords: "Am                   G", lyric: "You are perfect in all of your ways" },
          { chords: "C                   Em  D", lyric: "You are perfect in all of your ways to us" },
        ],
      },
    ],
  },
  {
    id: 74,
    code: "C-074",
    name: "King of Majesty",
    key: "A",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "A", lyric: "You know that I love You" },
          { chords: "F#m", lyric: "You know that I want to" },
          { chords: "E", lyric: "Know You so much more" },
          { chords: "D", lyric: "More than I have before" },
        ],
      },
      {
        section: "Prechorus",
        lines: [
          { chords: "          E", lyric: "King of majesty" },
          { chords: "               F#m", lyric: "I have one desire" },
          { chords: "     E       F#m    D", lyric: "Just to be with You my Lord" },
          { chords: "     E       F#m    D", lyric: "Just to be with You my Lord" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "A    D       E    D       A", lyric: "Jesus You are the Saviour of my soul" },
          { chords: "     A          D", lyric: "And forever and ever" },
          { chords: "     E    D       A", lyric: "I'll give my praises to You" },
        ],
      },
    ],
  },
  {
    id: 75,
    code: "C-075",
    name: "Nothing Else",
    key: "F",
    content: [
      {
        section: "Verse",
        lines: [
          { chords: "          Gm       Bb", lyric: "I'm caught up in Your presence" },
          { chords: "     F", lyric: "I just want to sit here at Your feet" },
          { chords: "          Gm       Bb", lyric: "I'm caught up in this holy moment" },
          { chords: "     F", lyric: "I never want to leave" },
        ],
      },
      {
        section: "Chorus",
        lines: [
          { chords: "  Bb", lyric: "I'm sorry when I've just gone through the motions" },
          { chords: "  F", lyric: "I'm sorry when I just sang another song" },
          { chords: "  Bb", lyric: "Take me back to where we started" },
          { chords: "  F", lyric: "I open up my heart to You" },
        ],
      },
      {
        section: "Bridge",
        lines: [
          { chords: "     Gm          Bb", lyric: "I just want You nothing else" },
          { chords: "Dm          C", lyric: "Nothing else Nothing else will do" },
        ],
      },
    ],
  },
];

export default hymns;



