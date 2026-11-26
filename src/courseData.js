// Kursusstruktur hentet direkte fra Moodle: Finansøkonom (online) 1. semester F27 (course id=64)

export const THEME_COLORS = {
  intro: { hex: '#38bdf8', label: 'OPSTART' },
  sektor: { hex: '#f59e0b', label: 'SEKTOR & METODE' },
  statistik: { hex: '#a855f7', label: 'STATISTIK & ANALYSE' },
  finansiering: { hex: '#10b981', label: 'FINANSIERING' },
  mikro: { hex: '#f43f5e', label: 'MIKROØKONOMI' },
  drift: { hex: '#3b82f6', label: 'DRIFTSØKONOMI' },
  eksamen: { hex: '#eab308', label: 'REPETITION & EKSAMEN' }
};

export const WEEKLY_RHYTHM = [
  { step: '01', title: 'Intro til ugen', desc: 'Kort overblik, mål og læringsvideoer' },
  { step: '02', title: 'Aktiviteter & Case', desc: 'Faglige opgaver + aflevering torsdag kl. 08.00' },
  { step: '03', title: 'Løsningsforslag & Kialo', desc: 'Undervisers løsning og faglig debat i Kialo' },
  { step: '04', title: 'Temaprojekt i team', desc: 'Fælles teamaflevering tirsdag kl. 08.00 ugen efter' },
  { step: '05', title: 'TrivselsBarometer', desc: 'Kort ugentlig temperaturmåling på holdet' }
];

export const COURSE_NODES = [
  {
    id: 'intro',
    code: 'INTRO',
    shortTitle: 'Introprogram',
    fullTitle: 'Velkommen & Introprogram',
    theme: 'intro',
    dates: 'Åbner 20/1 · Undervisning 1/2 2027',
    summary: 'Alt det praktiske før undervisningen starter: studieteknik, værktøjer og teamdannelse.',
    bullets: [
      'Sådan er ugen og studieforløbet bygget op',
      'Quizzer om online-studiet, OLA og eksamen',
      'Opsætning af Zoom, Teams og SharePoint',
      'Gode studievaner, teamsamarbejde og brug af AI'
    ],
    ola: null
  },
  {
    id: 'uge5',
    code: 'UGE 5',
    shortTitle: 'Finanssektoren',
    fullTitle: 'Uge 5 — Den finansielle sektor',
    theme: 'sektor',
    dates: 'Aflevering 4/2 · Temaprojekt 9/2',
    summary: 'Bred introduktion til hele den finansielle branche samt Excel pivottabeller.',
    bullets: [
      'Bank, Finanstilsynet, Realkredit & Pension',
      'Ejendomshandel, Forsikring, Revision & Administration',
      'Excel pivottabeller & Ugens Case (Aktivitet 10)',
      'Første Temaprojekt og Kialo-debat'
    ],
    ola: null
  },
  {
    id: 'uge6',
    code: 'UGE 6',
    shortTitle: 'Metode',
    fullTitle: 'Uge 6 — Undersøgelsesmetode',
    theme: 'sektor',
    dates: 'Aflevering 11/2 · Temaprojekt 16/2',
    summary: 'Hvordan man indsamler, vurderer og arbejder systematisk med viden og data.',
    bullets: [
      'Aktivitet 1–4: Videnskabsteori og metode',
      'Aktivitet 5: Case-opgave',
      'Kialo-diskussion & Ugens hilsen til teamet',
      'Temaprojekt i teamet'
    ],
    ola: null
  },
  {
    id: 'uge7',
    code: 'UGE 7',
    shortTitle: 'Deskriptiv statistik',
    fullTitle: 'Uge 7 — Data, Statistik & Konfidens',
    theme: 'statistik',
    dates: 'Aflevering 18/2 · Temaprojekt 23/2',
    summary: 'Grundlæggende statistik: fra rå datatyper til normalfordeling og konfidensintervaller.',
    bullets: [
      'Data, datatyper og deskriptiv statistik',
      'Normalfordelingen & stikprøvefordelingen',
      'Konfidensintervaller i praksis',
      'Case, Kialo og Temaprojekt'
    ],
    ola: null
  },
  {
    id: 'uge8',
    code: 'UGE 8',
    shortTitle: 'Hypotesetest',
    fullTitle: 'Uge 8 — Hypotesetest & Spørgeskema',
    theme: 'statistik',
    dates: 'Aflevering 25/2 · Temaprojekt 2/3',
    summary: 'Statistiske test af middelværdier og andele samt stikprøvestørrelse.',
    bullets: [
      'Hypotesetest for middelværdi og andel',
      'Sammenligning af to andele og to middelværdier',
      'Stikprøvestørrelse & design af spørgeskemaer',
      'Case og Temaprojekt'
    ],
    ola: null
  },
  {
    id: 'uge9',
    code: 'UGE 9',
    shortTitle: 'Regression & Chi²',
    fullTitle: 'Uge 9 — Regression, Chi² & OLA 1',
    theme: 'statistik',
    dates: 'Aflevering 4/3 · Temaprojekt & OLA 1: 9/3',
    summary: 'Sammenhænge mellem variable med korrelation, regression og Chi²-test — plus første OLA.',
    bullets: [
      'Korrelation samt simpel og lineær regression',
      'Chi² Goodness-of-Fit og uafhængighedstest',
      'Case og Temaprojekt',
      'MILEPÆL: Aflevering af OLA-hæfte 1 (9/3)'
    ],
    ola: { label: 'OLA 1', deadline: '9/3 kl. 08.00' }
  },
  {
    id: 'uge10',
    code: 'UGE 10',
    shortTitle: 'Rente & Investering',
    fullTitle: 'Uge 10 — Rentesregning & Investering',
    theme: 'finansiering',
    dates: 'Aflevering 11/3 · Temaprojekt 16/3',
    summary: 'Opstart på finansiering: tidsmæssig værdi af penge og kapitalværdimetoden.',
    bullets: [
      'Rentesregning i teori og Excel',
      'Centrale investeringsbegreber',
      'Kapitalværdimetoden (NPV)',
      'Case og Temaprojekt'
    ],
    ola: null
  },
  {
    id: 'uge11',
    code: 'UGE 11',
    shortTitle: 'Annuitet & Følsomhed',
    fullTitle: 'Uge 11 — Følsomhedsanalyse & Annuitetslån',
    theme: 'finansiering',
    dates: 'Aflevering 18/3 · Temaprojekt 30/3',
    summary: 'Hvad sker der når forudsætningerne ændrer sig? Samt beregning af annuitetslån.',
    bullets: [
      'Følsomhedsanalyse på investeringer',
      'Annuitet og annuitetslån (ydelse, rente, afdrag)',
      'Case og Temaprojekt (hen over påsken)',
      'Uge 12 er påskeferie'
    ],
    ola: null
  },
  {
    id: 'uge13',
    code: 'UGE 13',
    shortTitle: 'Lån & Kreditter',
    fullTitle: 'Uge 13 — Lånetyper & Kreditter',
    theme: 'finansiering',
    dates: 'Aflevering 1/4 · Temaprojekt 6/4',
    summary: 'Overblik over de vigtigste finansieringsformer til både private og virksomheder.',
    bullets: [
      'Serielån, afdragsfri lån og stående lån',
      'Kassekredit og leverandørkredit',
      'Sammenligning af kassekredit og annuitet',
      'Case og Temaprojekt'
    ],
    ola: null
  },
  {
    id: 'uge14',
    code: 'UGE 14',
    shortTitle: 'Udbud & Efterspørgsel',
    fullTitle: 'Uge 14 — Mikroøkonomi: Grundlag',
    theme: 'mikro',
    dates: 'Aflevering 8/4 · Temaprojekt 13/4',
    summary: 'Hvordan markeder fungerer: knaphed, efterspørgsel, udbud og priselasticitet.',
    bullets: [
      'Ressourceanvendelse og komparative fordele',
      'Efterspørgsel og elasticitet',
      'Produktion og udbudsteori',
      'Case og Temaprojekt'
    ],
    ola: null
  },
  {
    id: 'uge15',
    code: 'UGE 15',
    shortTitle: 'Marked & Mikropolitik',
    fullTitle: 'Uge 15 — Markedsligevægt & Mikropolitik',
    theme: 'mikro',
    dates: 'Aflevering 15/4 · Temaprojekt 20/4',
    summary: 'Prisdannelse i ligevægt, forskellige markedsformer og offentlige indgreb.',
    bullets: [
      'Markedsligevægt og skift i kurverne',
      'Introduktion til markedsformer',
      'Mikropolitik: afgifter, tilskud og regulering',
      'Case og Temaprojekt'
    ],
    ola: null
  },
  {
    id: 'uge16',
    code: 'UGE 16',
    shortTitle: 'Pris & Omkostninger',
    fullTitle: 'Uge 16 — Overskud, Omkostninger & Pris',
    theme: 'mikro',
    dates: 'Aflevering 22/4 · Temaprojekt 27/4',
    summary: 'Virksomhedens omkostningsstruktur og hvordan man fastsætter den optimale pris.',
    bullets: [
      'Overskudsmaksimering og omkostningsfunktioner',
      'Prisoptimering og elasticitet',
      'Aktivitet 5: Case med undervisers løsningsforslag',
      'Temaprojekt i teamet'
    ],
    ola: null
  },
  {
    id: 'uge17',
    code: 'UGE 17',
    shortTitle: 'Markedsformer',
    fullTitle: 'Uge 17 — Konkurrenceformer & OLA 2',
    theme: 'mikro',
    dates: 'Aflevering 29/4 · Temaprojekt & OLA 2: 4/5',
    summary: 'Dybdegående analyse af de fire klassiske markedsformer — plus anden OLA.',
    bullets: [
      'Fuldkommen konkurrence & Monopol',
      'Monopolistisk konkurrence & Oligopol',
      'Ordre, marked og Case',
      'MILEPÆL: Aflevering af OLA-hæfte 2 (4/5 kl. 08.00)'
    ],
    ola: { label: 'OLA 2', deadline: '4/5 kl. 08.00' }
  },
  {
    id: 'uge18',
    code: 'UGE 18',
    shortTitle: 'Knap kapacitet',
    fullTitle: 'Uge 18 — Markedsføringsbidrag & Kapacitet',
    theme: 'drift',
    dates: 'Aflevering 6/5 · Temaprojekt 11/5',
    summary: 'Driftsøkonomisk beslutningstagning når virksomheden har begrænset kapacitet.',
    bullets: [
      'Markedsføringsbidrag og lønsomhed',
      'Optimering ved knap kapacitet',
      'Case, Kialo og Temaprojekt',
      'TrivselsBarometer'
    ],
    ola: null
  },
  {
    id: 'uge19',
    code: 'UGE 19',
    shortTitle: 'Kalkulation & ABC',
    fullTitle: 'Uge 19 — Kalkulationsmetoder',
    theme: 'drift',
    dates: 'Aflevering 13/5 · Temaprojekt 18/5',
    summary: 'Præcis fordeling af virksomhedens omkostninger på produkter og kunder.',
    bullets: [
      'Bidragskalkulation',
      'Fordelingskalkulation',
      'Activity Based Costing (ABC)',
      'Case og sidste Temaprojekt'
    ],
    ola: null
  },
  {
    id: 'uge20',
    code: 'UGE 20',
    shortTitle: 'Repetition & OLA 3',
    fullTitle: 'Uge 20 — Repetition, Eksamensopgave & OLA 3',
    theme: 'eksamen',
    dates: 'Eksamensopgave 18/5 · Case 20/5 · OLA 3: 25/5',
    summary: 'Opsamling på 1. semester, udlevering af eksamensopgaven (18/5) og OLA 3 (25/5).',
    bullets: [
      'Tirsdag 18/5 kl. 08.00: Eksamensopgaven udleveres på Moodle',
      'Repetitionscase 20/5 (ingen temaprojekt i uge 20)',
      'MILEPÆL: OLA-hæfte 3 (uge 17–19) deadline 25/5 kl. 08.00',
      'OLA-opsamling fredag 28/5 · Uge 21–23: Projektskrivning'
    ],
    ola: { label: 'OLA 3', deadline: '25/5 kl. 08.00' }
  },
  {
    id: 'eksamen',
    code: 'UGE 24–25',
    shortTitle: 'Aflevering & Eksamen',
    fullTitle: 'Uge 24–25 — Briefing, WISEflow & Mundtlig Prøve',
    theme: 'eksamen',
    dates: 'Kick-off 14/6 · WISEflow 17/6 · Mundtlig 21–22/6',
    summary: 'Afslutningen på 1. interne eksamen efter projektperioden i uge 21–23.',
    bullets: [
      'Man 14/6 kl. 09.00: Kick-off · Ons 16/6: Eksamensbriefing',
      'Tor 17/6 kl. 09.00: Aflevering af projekt på WISEflow',
      'Man 21/6 & Tir 22/6: Mundtlig prøve på Zoom (23/6 reserve)',
      'Alle 3 OLA-hæfter skal være godkendt · Reeksamen uge 26'
    ],
    ola: null
  }
];

// Filmiske kapitler i præsentationen (styr med piletaster eller auto-play)
export const STORY_STEPS = [
  { type: 'overview', title: 'Hele 1. semester F27', subtitle: 'Finansøkonom (online) · Overblik over forløbet' },
  { type: 'node', nodeIndex: 0 }, // Introprogram
  { type: 'rhythm', nodeIndex: 1, title: 'Sådan er hver uge bygget op', subtitle: 'Den faste uge-rytme fra mandag til mandag' },
  { type: 'node', nodeIndex: 1 }, // Uge 5
  { type: 'node', nodeIndex: 2 }, // Uge 6
  { type: 'node', nodeIndex: 3 }, // Uge 7
  { type: 'node', nodeIndex: 4 }, // Uge 8
  { type: 'node', nodeIndex: 5 }, // Uge 9 + OLA 1
  { type: 'node', nodeIndex: 6 }, // Uge 10
  { type: 'node', nodeIndex: 7 }, // Uge 11
  { type: 'node', nodeIndex: 8 }, // Uge 13
  { type: 'node', nodeIndex: 9 }, // Uge 14
  { type: 'node', nodeIndex: 10 }, // Uge 15
  { type: 'node', nodeIndex: 11 }, // Uge 16
  { type: 'node', nodeIndex: 12 }, // Uge 17 + OLA 2
  { type: 'node', nodeIndex: 13 }, // Uge 18
  { type: 'node', nodeIndex: 14 }, // Uge 19
  { type: 'node', nodeIndex: 15 }, // Uge 20 + OLA 3
  { type: 'node', nodeIndex: 16 }, // Uge 24 + Eksamen
  { type: 'ola_summary', title: 'De 3 OLA-milepæle', subtitle: 'Obligatoriske LæringsAktiviteter mod eksamen' }
];
