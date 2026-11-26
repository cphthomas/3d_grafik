// Komplet Moodle F27-flisedata inkl. de ægte flisebilleder hentet fra course/view.php?id=64
export const MOODLE_TILES = [
  {
    id: 'info',
    title: 'Information om semester',
    count: '5 aktiviteter',
    img: './moodle/tile_01.jpg',
    accent: '#002e6d',
    tag: 'OVERBLIK',
    dates: 'Forår 2027 · 15 undervisningsuger',
    summary: 'Samlet overblik over ugeplan, frister, indhold på 1. semester og krav til den mundtlige prøve.',
    activities: [
      { kind: 'page', label: 'Ugeplan LiveLearning' },
      { kind: 'link', label: 'Indhold på 1. semester' },
      { kind: 'link', label: 'Frister (alle deadlines F27)' },
      { kind: 'link', label: 'Den mundtlige prøve (1. interne)' },
      { kind: 'link', label: 'AI-notat & gode retningslinjer' }
    ]
  },
  {
    id: 'intro',
    title: 'Introprogram',
    count: '20 aktiviteter',
    img: './moodle/tile_02.jpg',
    accent: '#0284c7',
    tag: 'OPSTART',
    dates: 'Åbner onsdag 20. januar 2027',
    summary: 'Alt du skal igennem før undervisningen starter mandag 1. februar: struktur, quizzer, Zoom/Teams og teamdannelse.',
    activities: [
      { kind: 'page', label: 'Velkommen til dit studie & Start her: Intro' },
      { kind: 'link', label: 'Sådan er ugen bygget & Studieforløbet' },
      { kind: 'quiz', label: 'Quiz: Ugen, OLA, Studieforløb og eksamen' },
      { kind: 'assign', label: 'Spørgeskema om tider til teamsamarbejde' },
      { kind: 'page', label: 'Zoom, Teams, SharePoint & brug af AI' }
    ]
  },
  {
    id: 'uge5',
    title: 'Uge 5',
    subtitle: 'Den finansielle sektor',
    count: '19 aktiviteter',
    img: './moodle/tile_03.jpg',
    accent: '#d97706',
    tag: 'SEKTOR & METODE',
    dates: 'Aktiviteter 4/2 kl. 08.00 · Temaprojekt 9/2 kl. 08.00',
    summary: 'Introduktion til hele den finansielle branche + Excel pivottabeller og første case.',
    activities: [
      { kind: 'page', label: 'Intro til uge 5' },
      { kind: 'link', label: 'Aktivitet 1–8: Bank, Finanstilsynet, Ejendom, Forsikring, Realkredit, Revision, Pension' },
      { kind: 'link', label: 'Aktivitet 9–10: Excel pivottabeller & Case' },
      { kind: 'assign', label: 'Afleveringsmappe Aktivitet 10 · Deadline 4/2 kl. 08.00' },
      { kind: 'assign', label: 'Temaprojekt (team) · Deadline 9/2 kl. 08.00 + Kialo & TrivselsBarometer' }
    ]
  },
  {
    id: 'uge6',
    title: 'Uge 6',
    subtitle: 'Metode',
    count: '14 aktiviteter',
    img: './moodle/tile_04.jpg',
    accent: '#d97706',
    tag: 'SEKTOR & METODE',
    dates: 'Aktiviteter 11/2 kl. 08.00 · Temaprojekt 16/2 kl. 08.00',
    summary: 'Videnskabsteori, undersøgelsesdesign og systematisk arbejde med kilder og data.',
    activities: [
      { kind: 'page', label: 'Intro til uge 6' },
      { kind: 'link', label: 'Aktivitet 1–4: Metode & undersøgelsesdesign' },
      { kind: 'link', label: 'Aktivitet 5: Case' },
      { kind: 'assign', label: 'Afleveringsmappe Aktiviteterne uge 6 · Deadline 11/2 kl. 08.00' },
      { kind: 'assign', label: 'Temaprojekt · Deadline 16/2 kl. 08.00 + Kialo & Ugens hilsen' }
    ]
  },
  {
    id: 'uge7',
    title: 'Uge 7',
    subtitle: 'Statistik: Grundlag',
    count: '16 aktiviteter',
    img: './moodle/tile_05.jpg',
    accent: '#9333ea',
    tag: 'STATISTIK',
    dates: 'Aktiviteter 18/2 kl. 08.00 · Temaprojekt 23/2 kl. 08.00',
    summary: 'Data og datatyper, deskriptiv statistik, normalfordelingen, stikprøvefordeling og konfidensintervaller.',
    activities: [
      { kind: 'page', label: 'Intro til uge 7' },
      { kind: 'link', label: 'Aktivitet 1–3: Datatyper & deskriptiv statistik' },
      { kind: 'link', label: 'Aktivitet 4–6: Normalfordeling, stikprøver & konfidensinterval' },
      { kind: 'assign', label: 'Afleveringsmappe Aktiviteterne uge 7 · Deadline 18/2 kl. 08.00' },
      { kind: 'assign', label: 'Temaprojekt · Deadline 23/2 kl. 08.00 + Kialo & TrivselsBarometer' }
    ]
  },
  {
    id: 'uge8',
    title: 'Uge 8',
    subtitle: 'Hypotesetest',
    count: '19 aktiviteter',
    img: './moodle/tile_06.jpg',
    accent: '#9333ea',
    tag: 'STATISTIK',
    dates: 'Aktiviteter 25/2 kl. 08.00 · Temaprojekt 2/3 kl. 08.00',
    summary: 'Hypotesetest for middelværdier og andele, stikprøvestørrelse og spørgeskemaer.',
    activities: [
      { kind: 'page', label: 'Intro til uge 8' },
      { kind: 'link', label: 'Aktivitet 1–6: Hypotesetest (middel, andel, to andele, to middelværdier)' },
      { kind: 'link', label: 'Aktivitet 7–9: Stikprøvestørrelse, spørgeskemaer & Case' },
      { kind: 'assign', label: 'Afleveringsmappe Aktiviteterne uge 8 · Deadline 25/2 kl. 08.00' },
      { kind: 'assign', label: 'Temaprojekt · Deadline 2/3 kl. 08.00 (sidste uge i OLA 1)' }
    ]
  },
  {
    id: 'uge9',
    title: 'Uge 9',
    subtitle: 'Regression & Chi²',
    count: '18 aktiviteter',
    img: './moodle/tile_07.jpg',
    accent: '#9333ea',
    tag: 'STATISTIK · OLA 1',
    ola: 'OLA 1 · 9/3',
    dates: 'Aktiviteter 4/3 · Temaprojekt & OLA-hæfte 1: 9/3 kl. 08.00',
    summary: 'Korrelation, lineær regression og Chi²-test — plus aflevering af første OLA-hæfte (uge 5–8).',
    activities: [
      { kind: 'page', label: 'Intro til uge 9' },
      { kind: 'link', label: 'Aktivitet 1–5: Korrelation, simpel & lineær regression' },
      { kind: 'link', label: 'Aktivitet 6–9: Chi² GOF, Chi² uafhængighed & Case' },
      { kind: 'assign', label: 'Afleveringsmappe uge 9 (4/3) & Temaprojekt (9/3)' },
      { kind: 'ola', label: 'MILEPÆL: OLA-hæfte 1 (uge 5–8) · Deadline tirsdag 9/3 kl. 08.00' }
    ]
  },
  {
    id: 'uge10',
    title: 'Uge 10',
    subtitle: 'Rente & Investering',
    count: '14 aktiviteter',
    img: './moodle/tile_08.jpg',
    accent: '#059669',
    tag: 'FINANSIERING',
    dates: 'Aktiviteter 11/3 kl. 08.00 · Temaprojekt 16/3 kl. 08.00',
    summary: 'Rentesregning i Excel, investeringsbegreber og kapitalværdimetoden (NPV).',
    activities: [
      { kind: 'page', label: 'Intro til uge 10' },
      { kind: 'link', label: 'Aktivitet 1–3: Rentesregning i teori og Excel' },
      { kind: 'link', label: 'Aktivitet 4–6: Investeringsbegreber, kapitalværdimetoden & Case' },
      { kind: 'assign', label: 'Afleveringsmappe uge 10 · Deadline 11/3 kl. 08.00' },
      { kind: 'assign', label: 'Temaprojekt · Deadline 16/3 kl. 08.00 + Kialo' }
    ]
  },
  {
    id: 'uge11',
    title: 'Uge 11',
    subtitle: 'Annuitet & Følsomhed',
    count: '16 aktiviteter',
    img: './moodle/tile_09.jpg',
    accent: '#059669',
    tag: 'FINANSIERING',
    dates: 'Aktiviteter 18/3 · Temaprojekt rykket til 30/3 efter påske',
    summary: 'Følsomhedsanalyse på investeringer og beregning af annuitetslån. Uge 12 er påskeferie.',
    activities: [
      { kind: 'page', label: 'Intro til uge 11' },
      { kind: 'link', label: 'Aktivitet 1–3: Følsomhedsanalyse & investering' },
      { kind: 'link', label: 'Aktivitet 4–7: Annuitet, annuitetslån & Case' },
      { kind: 'assign', label: 'Afleveringsmappe uge 11 · Deadline 18/3 kl. 08.00' },
      { kind: 'assign', label: 'Temaprojekt · Deadline 30/3 kl. 08.00 (Uge 12 er påskeferie)' }
    ]
  },
  {
    id: 'uge13',
    title: 'Uge 13',
    subtitle: 'Lån & Kreditter',
    count: '17 aktiviteter',
    img: './moodle/tile_10.jpg',
    accent: '#059669',
    tag: 'FINANSIERING',
    dates: 'Aktiviteter 1/4 kl. 08.00 · Temaprojekt 6/4 kl. 08.00',
    summary: 'Serielån, afdragsfri lån, stående lån, kassekredit og leverandørkredit.',
    activities: [
      { kind: 'page', label: 'Intro til uge 13' },
      { kind: 'link', label: 'Aktivitet 1–4: Serielån, afdragsfrit & stående lån' },
      { kind: 'link', label: 'Aktivitet 5–9: Kassekredit, leverandørkredit, sammenligning & Case' },
      { kind: 'assign', label: 'Afleveringsmappe uge 13 · Deadline 1/4 kl. 08.00' },
      { kind: 'assign', label: 'Temaprojekt · Deadline 6/4 kl. 08.00 + Kialo' }
    ]
  },
  {
    id: 'uge14',
    title: 'Uge 14',
    subtitle: 'Udbud & Efterspørgsel',
    count: '15 aktiviteter',
    img: './moodle/tile_11.jpg',
    accent: '#e11d48',
    tag: 'MIKROØKONOMI',
    dates: 'Aktiviteter 8/4 kl. 08.00 · Temaprojekt 13/4 kl. 08.00',
    summary: 'Ressourceanvendelse, komparative fordele, efterspørgsel, elasticitet og udbudsteori.',
    activities: [
      { kind: 'page', label: 'Intro til uge 14' },
      { kind: 'link', label: 'Aktivitet 1–4: Ressourcer, komparative fordele, efterspørgsel & elasticitet' },
      { kind: 'link', label: 'Aktivitet 5–7: Produktion, udbudsteori & Case' },
      { kind: 'assign', label: 'Afleveringsmappe uge 14 · Deadline 8/4 kl. 08.00' },
      { kind: 'assign', label: 'Temaprojekt · Deadline 13/4 kl. 08.00' }
    ]
  },
  {
    id: 'uge15',
    title: 'Uge 15',
    subtitle: 'Marked & Mikropolitik',
    count: '16 aktiviteter',
    img: './moodle/tile_12.jpg',
    accent: '#e11d48',
    tag: 'MIKROØKONOMI',
    dates: 'Aktiviteter 15/4 kl. 08.00 · Temaprojekt 20/4 kl. 08.00',
    summary: 'Markedsligevægt, markedsformer og mikropolitik (afgifter, tilskud og regulering).',
    activities: [
      { kind: 'page', label: 'Intro til uge 15' },
      { kind: 'link', label: 'Aktivitet 1–4: Markedsligevægt & markedsformer' },
      { kind: 'link', label: 'Aktivitet 5–8: Mikropolitik & Case' },
      { kind: 'assign', label: 'Afleveringsmappe uge 15 · Deadline 15/4 kl. 08.00' },
      { kind: 'assign', label: 'Temaprojekt · Deadline 20/4 kl. 08.00' }
    ]
  },
  {
    id: 'uge16',
    title: 'Uge 16',
    subtitle: 'Pris & Omkostninger',
    count: '13 aktiviteter',
    img: './moodle/tile_13.jpg',
    accent: '#e11d48',
    tag: 'MIKROØKONOMI',
    dates: 'Aktiviteter 22/4 kl. 08.00 · Temaprojekt 27/4 kl. 08.00',
    summary: 'Overskud, omkostninger, prisoptimering og elasticitet i virksomheden.',
    activities: [
      { kind: 'page', label: 'Intro til uge 16' },
      { kind: 'link', label: 'Aktivitet 1–4: Overskud, omkostninger, pris & elasticitet' },
      { kind: 'link', label: 'Aktivitet 5: Case med løsningsforslag' },
      { kind: 'assign', label: 'Afleveringsmappe uge 16 · Deadline 22/4 kl. 08.00' },
      { kind: 'assign', label: 'Temaprojekt · Deadline 27/4 kl. 08.00 (sidste uge i OLA 2)' }
    ]
  },
  {
    id: 'uge17',
    title: 'Uge 17',
    subtitle: 'Markedsformer',
    count: '15 aktiviteter',
    img: './moodle/tile_14.jpg',
    accent: '#e11d48',
    tag: 'MIKROØKONOMI · OLA 2',
    ola: 'OLA 2 · 4/5',
    dates: 'Aktiviteter 29/4 · Temaprojekt & OLA-hæfte 2: 4/5 kl. 08.00',
    summary: 'Fuldkommen konkurrence, monopol, monopolistisk konkurrence og oligopol — plus OLA-hæfte 2.',
    activities: [
      { kind: 'page', label: 'Intro til uge 17' },
      { kind: 'link', label: 'Aktivitet 1–5: De fire markedsformer' },
      { kind: 'link', label: 'Aktivitet 6–7: Ordre, marked & Case' },
      { kind: 'assign', label: 'Afleveringsmappe uge 17 (29/4) & Temaprojekt (4/5)' },
      { kind: 'ola', label: 'MILEPÆL: OLA-hæfte 2 (uge 9–11 & 13–16) · Deadline 4/5 kl. 08.00' }
    ]
  },
  {
    id: 'uge18',
    title: 'Uge 18',
    subtitle: 'Knap kapacitet',
    count: '11 aktiviteter',
    img: './moodle/tile_15.jpg',
    accent: '#2563eb',
    tag: 'DRIFTSØKONOMI',
    dates: 'Aktiviteter 6/5 kl. 08.00 · Temaprojekt 11/5 kl. 08.00',
    summary: 'Markedsføringsbidrag og optimal produktionsplanlægning ved knap kapacitet.',
    activities: [
      { kind: 'page', label: 'Intro til uge 18' },
      { kind: 'link', label: 'Aktivitet 1: Markedsføringsbidrag' },
      { kind: 'link', label: 'Aktivitet 2–3: Knap kapacitet & Case' },
      { kind: 'assign', label: 'Afleveringsmappe uge 18 · Deadline 6/5 kl. 08.00' },
      { kind: 'assign', label: 'Temaprojekt · Deadline 11/5 kl. 08.00' }
    ]
  },
  {
    id: 'uge19',
    title: 'Uge 19',
    subtitle: 'Kalkulation & ABC',
    count: '12 aktiviteter',
    img: './moodle/tile_16.jpg',
    accent: '#2563eb',
    tag: 'DRIFTSØKONOMI',
    dates: 'Aktiviteter 13/5 kl. 08.00 · Temaprojekt 18/5 kl. 08.00',
    summary: 'Bidragskalkulation, fordelingskalkulation og Activity Based Costing (ABC).',
    activities: [
      { kind: 'page', label: 'Intro til uge 19' },
      { kind: 'link', label: 'Aktivitet 1–2: Bidrags- og fordelingskalkulation' },
      { kind: 'link', label: 'Aktivitet 3–4: Activity Based Costing (ABC) & Case' },
      { kind: 'assign', label: 'Afleveringsmappe uge 19 · Deadline 13/5 kl. 08.00' },
      { kind: 'assign', label: 'Sidste Temaprojekt · Deadline 18/5 kl. 08.00' }
    ]
  },
  {
    id: 'uge20',
    title: 'Uge 20 Repetition',
    subtitle: 'Repetition & OLA 3',
    count: '5 aktiviteter',
    img: './moodle/tile_17.jpg',
    accent: '#ca8a04',
    tag: 'REPETITION · OLA 3',
    ola: 'OLA 3 · 25/5',
    dates: 'Eksamensopgave 18/5 · Case 20/5 · OLA 3: 25/5 kl. 08.00',
    summary: 'Tværgående repetition, udlevering af eksamensopgaven på Moodle og sidste OLA-hæfte.',
    activities: [
      { kind: 'page', label: 'Intro til uge 20 & repetitionscase (ingen temaprojekt)' },
      { kind: 'ola', label: 'Tirsdag 18/5 kl. 08.00: Eksamensopgaven udleveres på Moodle' },
      { kind: 'assign', label: 'Afleveringsmappe uge 20 · Deadline 20/5 kl. 08.00' },
      { kind: 'ola', label: 'MILEPÆL: OLA-hæfte 3 (uge 17–19) · Deadline 25/5 kl. 08.00' },
      { kind: 'page', label: 'OLA-opsamling 28/5 · Derefter 3 ugers projektskrivning (uge 21–23)' }
    ]
  },
  {
    id: 'uge24',
    title: 'Uge 24 Eksamensbriefing',
    subtitle: 'Kick-off & Briefing',
    count: '1 aktivitet',
    img: './moodle/tile_18.jpg',
    accent: '#ca8a04',
    tag: 'EKSAMENSKLAR',
    dates: 'Kick-off 14/6 · Briefing 16/6 · WISEflow 17/6 kl. 09.00',
    summary: 'Sidste finpudsning før aflevering af det skriftlige eksamensprojekt på WISEflow.',
    activities: [
      { kind: 'page', label: 'Mandag 14/6 kl. 09.00: Kick-off om formalia på Zoom' },
      { kind: 'page', label: 'Onsdag 16/6 kl. 09.00: Eksamensbriefing om det mundtlige format' },
      { kind: 'assign', label: 'Torsdag 17/6 kl. 09.00: Aflevering af eksamensprojekt i WISEflow' }
    ]
  },
  {
    id: 'eksamen',
    title: 'Eksamen',
    subtitle: '1. interne mundtlige prøve',
    count: '5 aktiviteter',
    img: './moodle/tile_19.jpg',
    accent: '#ca8a04',
    tag: 'EKSAMEN',
    dates: 'Mundtlig prøve 21.–22. juni 2027 (23/6 reserve)',
    summary: 'Individuel 30 minutters mundtlig prøve på Zoom (5 min. præsentation + 20 min. samtale).',
    activities: [
      { kind: 'link', label: 'Eksamensinfo & krav til 1. interne (30 ECTS)' },
      { kind: 'page', label: 'AI Chatbot til eksamensspørgsmål på 1. semester' },
      { kind: 'link', label: 'Tidligere eksamensopgave (januar 2026)' },
      { kind: 'ola', label: 'Mundtlige dage: Man 21/6 & Tir 22/6 på Zoom (Reeksamen uge 26)' }
    ]
  },
  {
    id: 'ola',
    title: 'OLA (Obligatoriske LæringsAktiviteter)',
    subtitle: 'De 3 OLA-hæfter',
    count: '12 aktiviteter',
    img: './moodle/tile_20.jpg',
    accent: '#eab308',
    tag: 'OBLIGATORISK',
    ola: '3 OLA-HÆFTER',
    dates: '9/3 · 4/5 · 25/5 · Opsamling 28/5',
    summary: 'Alle tre OLA-hæfter skal godkendes, før du kan blive indstillet til den ordinære eksamen.',
    activities: [
      { kind: 'page', label: 'Hvad er en OLA? & Kriterier for godkendelse' },
      { kind: 'ola', label: 'OLA-hæfte 1 (uge 5–8) · Deadline tirsdag 9/3 kl. 08.00' },
      { kind: 'ola', label: 'OLA-hæfte 2 (uge 9–11 & 13–16) · Deadline tirsdag 4/5 kl. 08.00' },
      { kind: 'ola', label: 'OLA-hæfte 3 (uge 17–19) · Deadline tirsdag 25/5 kl. 08.00' },
      { kind: 'assign', label: 'Opsamlingsmappe til ordinær eksamen · Fredag 28/5 kl. 08.00' }
    ]
  },
  {
    id: 'evalueringer',
    title: 'Evalueringer',
    subtitle: 'Feedback & Studiesamtale',
    count: '5 aktiviteter',
    img: './moodle/tile_21.jpg',
    accent: '#475569',
    tag: 'EVALUERING',
    dates: 'Løbende gennem 1. semester',
    summary: 'Løbende evalueringer og kort studiesamtale, så vi sammen gør online-studiet endnu bedre.',
    activities: [
      { kind: 'quiz', label: 'Studiesamtale — 5 korte spørgsmål' },
      { kind: 'quiz', label: 'Evaluering efter de første 4–5 uger' },
      { kind: 'quiz', label: 'Evaluering af Tema 1 & hele 1. semester' }
    ]
  }
];
