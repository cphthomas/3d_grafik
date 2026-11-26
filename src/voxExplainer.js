import gsap from 'gsap';

/**
 * INTERAKTIV VOX-STYLE EXPLAINER — EK Finansøkonom (online) 1. semester
 * - Studiekvalitet redaktionel motion graphics (Square UI, Space Grotesk / IBM Plex Sans / IBM Plex Mono)
 * - Scene 1: Editorial åbning med 3D-lagdelte Moodle-tiles & live muse-parallax
 * - Scene 2: Interaktiv 15-ugers semester-tidslinje & taktil ECTS-måler
 * - Scene 3: "Torsdag kl. 08.00"-simulator med puls-ur og 3D-tile-oplåsning
 * - Scene 4: Editorial kontrast mellem torsdagens individuelle frist og tirsdagens teamfrist + animeret buet pil
 * - Scene 5: Fuldskærms FAST UGE-LOOP med 4 store kort, animerede buede SVG-pile og glødende markør i urets retning
 * - Scene 6: Fagrejsen — 5 stationer på buet SVG-metrokort med spor-glidende markør og fast infokort
 * - Scene 7: 3 OLA-hæfter med vinklede GODKENDT-stempler (nul overlap) → gult eksamensbanner
 * - Scene 8: 30 min. mundtlig eksamen med live ur-faser (5 + 20 + 5 min.) og "Se filmen igen"
 */
export const VOX_SCENES = [
  { id: 'hook', label: '01 · Finansøkonom online på EK' },
  { id: 'slider', label: '02 · Interaktivt semester-overblik' },
  { id: 'unlock', label: '03 · Sådan åbner dine tiles hver torsdag' },
  { id: 'rhythm_intro', label: '04 · To faste frister hver uge' },
  { id: 'wheel_full', label: '05 · Det fulde uge-loop (animerede pile)' },
  { id: 'metro', label: '06 · Fagrejsen (5 stationer)' },
  { id: 'ola_stamp', label: '07 · Stempl de 3 OLA-hæfter' },
  { id: 'exam_clock', label: '08 · 30 min. mundtlig eksamen' }
];

const METRO_STATIONS = [
  {
    num: '01',
    name: 'Branche & Metode',
    weeks: '2 uger',
    color: '#d97706',
    x: 110,
    y: 162,
    desc: 'Bank, realkredit, forsikring, pension, Excel-pivottabeller og undersøgelsesmetode.'
  },
  {
    num: '02',
    name: 'Statistik',
    weeks: '3 uger',
    color: '#9333ea',
    x: 300,
    y: 92,
    desc: 'Deskriptiv statistik, normalfordeling, konfidensintervaller, hypotesetest, regression og Chi².'
  },
  {
    num: '03',
    name: 'Finansiering',
    weeks: '3 uger',
    color: '#059669',
    x: 510,
    y: 168,
    desc: 'Rentesregning i Excel, kapitalværdimetoden (NPV), annuitetslån, serielån og kreditter.'
  },
  {
    num: '04',
    name: 'Mikroøkonomi',
    weeks: '4 uger',
    color: '#e11d48',
    x: 720,
    y: 92,
    desc: 'Udbud og efterspørgsel, markedsligevægt, markedsformer og offentlig mikropolitik.'
  },
  {
    num: '05',
    name: 'Erhvervsøkonomi',
    weeks: '2 uger',
    color: '#2563eb',
    x: 925,
    y: 162,
    desc: 'Optimering, markedsformer, priselasticitet, knap kapacitet, bidragskalkulation og ABC.'
  }
];

const SVG_ICONS = {
  play: '<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true"><polygon points="3,2 14,8 3,14"/></svg>',
  replay: '<svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M13 8a5 5 0 1 1-1.46-3.54L13 6" stroke-linecap="square"/><polyline points="13,2 13,6 9,6" stroke-linecap="square"/></svg>',
  lock: '<svg viewBox="0 0 14 14" width="11" height="11" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="2.5" y="6" width="9" height="6.5"/><path d="M4.5 6V4.2a2.5 2.5 0 0 1 5 0V6"/></svg>',
  unlock: '<svg viewBox="0 0 14 14" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="2.5" y="6" width="9" height="6.5"/><path d="M4.5 6V4.2a2.5 2.5 0 0 1 4.8-1"/></svg>',
  clock: '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="1.5" y="1.5" width="13" height="13"/><polyline points="8,4.2 8,8.2 11,9.8"/></svg>',
  user: '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="5.5" y="2" width="5" height="5"/><path d="M2.5 14v-2.2a2.5 2.5 0 0 1 2.5-2.5h6a2.5 2.5 0 0 1 2.5 2.5V14"/></svg>',
  team: '<svg viewBox="0 0 18 16" width="16" height="14" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3.5" y="2.5" width="4" height="4"/><rect x="10.5" y="2.5" width="4" height="4"/><path d="M1.5 14v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M9.5 14v-2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2"/></svg>'
};

export function initVoxExplainer(container) {
  container.innerHTML = `
    <div class="vox-stage" id="vox-stage">
      <div class="vox-paper-grid" id="vox-paper-grid"></div>
      <div class="vox-reg-marks" aria-hidden="true">
        <span class="vox-reg vox-reg-tl">+</span>
        <span class="vox-reg vox-reg-tr">+</span>
        <span class="vox-reg vox-reg-bl">+</span>
        <span class="vox-reg vox-reg-br">+</span>
      </div>

      <div class="vox-top-strip">
        <div class="vox-brand-left">
          <span class="vox-badge-ek">EK</span>
          <span class="vox-brand-sub">FINANSØKONOM (ONLINE) · 1. SEMESTER</span>
        </div>
        <div class="vox-progress-wrap">
          <span class="vox-step-indicator" id="vox-step-indicator">01 / 08</span>
          <div class="vox-progress-dots" id="vox-progress-dots"></div>
        </div>
      </div>

      <div class="vox-canvas" id="vox-canvas"></div>
    </div>
  `;

  const canvasEl = container.querySelector('#vox-canvas');
  const gridEl = container.querySelector('#vox-paper-grid');
  const dotsEl = container.querySelector('#vox-progress-dots');
  const stepIndEl = container.querySelector('#vox-step-indicator');

  let currentStep = 0;
  let onStepChangeCb = null;
  let onRequestPlayCb = null;
  let activeTimeline = null;
  let auxTweens = [];
  let cleanupFns = [];

  VOX_SCENES.forEach((sc, idx) => {
    const seg = document.createElement('button');
    seg.className = 'vox-prog-seg';
    seg.title = sc.label;
    seg.setAttribute('aria-label', sc.label);
    seg.addEventListener('click', () => goToStep(idx));
    dotsEl.appendChild(seg);
  });

  function updateDots(idx) {
    Array.from(dotsEl.children).forEach((el, i) => {
      el.classList.toggle('is-active', i === idx);
      el.classList.toggle('is-done', i < idx);
    });
    if (stepIndEl) {
      stepIndEl.textContent = `${String(idx + 1).padStart(2, '0')} / ${String(VOX_SCENES.length).padStart(2, '0')}`;
    }
  }

  function trackTween(tw) {
    if (tw) auxTweens.push(tw);
    return tw;
  }

  function runCleanup() {
    cleanupFns.forEach((fn) => fn());
    cleanupFns = [];
    auxTweens.forEach((tw) => {
      try {
        tw.kill();
      } catch (_) {
        // Ignorer afsluttede tweens
      }
    });
    auxTweens = [];
  }

  function animateCameraRig(rigEl, idx) {
    if (!rigEl) return;
    const dir = idx % 2 === 0 ? 1 : -1;
    gsap.killTweensOf(rigEl);
    gsap.killTweensOf(gridEl);

    // Multi-plan 3D-parallax på papirgitteret i baggrunden
    trackTween(
      gsap.fromTo(
        gridEl,
        { x: dir * 8, y: 4 },
        { x: dir * -8, y: -4, duration: 9.5, ease: 'sine.inOut' }
      )
    );

    // Blød 3D-kameraindflyvning inde i den beskyttede viewport (klipper ALDRIG i kanterne)
    trackTween(
      gsap.fromTo(
        rigEl,
        {
          scale: 0.976,
          rotationY: dir * 1.9,
          rotationX: 0.6,
          x: dir * -8,
          opacity: 0.25
        },
        {
          scale: 1.0,
          rotationY: dir * -0.55,
          rotationX: -0.22,
          x: dir * 2,
          opacity: 1,
          duration: 0.58,
          ease: 'power3.out',
          onComplete: () => {
            trackTween(
              gsap.to(rigEl, {
                scale: 1.008,
                rotationY: dir * 0.65,
                rotationX: 0.22,
                x: dir * -2,
                y: -2,
                duration: 8.5,
                ease: 'sine.inOut'
              })
            );
          }
        }
      )
    );
  }

  function renderScene(idx) {
    runCleanup();
    if (activeTimeline) activeTimeline.kill();
    const tl = gsap.timeline();
    activeTimeline = tl;

    if (idx === 0) {
      // SCENE 1: REDAKTIONEL FORSIDE + 3D-LAGDELTE MOODLE-TILES + MUSE-PARALLAX
      canvasEl.innerHTML = `
        <div class="vx-camera-rig">
          <div class="vx-scene vx-hero-split">
            <div class="vx-hero-left">
              <div class="vx-kicker"><span class="vx-fig-tag">FIG. 01</span> EK · INTERAKTIV STUDIEGUIDE</div>
              <h1 class="vx-mega-title">
                Dit 1. semester<br/>
                <span class="vx-hl-wrap"><span class="vx-hl-txt">på ét minut</span><i class="vx-hl-bg"></i></span>
              </h1>
              <p class="vx-lead">Klik, træk og udforsk hvordan online-studiet fungerer — fra første tile i Moodle til den mundtlige prøve.</p>

              <div class="vx-hero-specs" aria-label="Nøgletal for 1. semester">
                <div class="vx-spec-cell"><b>15</b><span>UGER</span></div>
                <div class="vx-spec-cell"><b>30</b><span>ECTS</span></div>
                <div class="vx-spec-cell"><b>3</b><span>OLA-HÆFTER</span></div>
                <div class="vx-spec-cell"><b>100%</b><span>ONLINE</span></div>
              </div>

              <div class="vx-hero-cta-row">
                <button class="vx-cta-btn vx-cta-hero" id="vx-start-btn">
                  <span class="vx-cta-icon">${SVG_ICONS.play}</span>
                  <span>Start turen (med lyd)</span>
                </button>
                <span class="vx-cta-meta">01:30 MIN · DANSK VOICEOVER</span>
              </div>
            </div>

            <div class="vx-hero-fan-wrap">
              <div class="vx-fan-backdrop">
                <div class="vx-fan-bd-head">
                  <span>MOODLE · KURSUSSTRUKTUR</span>
                  <span>4 NØGLETILES</span>
                </div>
                <div class="vx-hero-fan" id="vx-hero-fan">
                  <div class="vx-fan-card" data-card="0" style="--i:-1.5; z-index:2;">
                    <div class="vx-fc-head"><span>TILE 01</span><span>OPSTART</span></div>
                    <img src="./moodle/tile_02.jpg" alt="Introprogram" />
                    <div class="vx-fc-title">Introprogram</div>
                  </div>
                  <div class="vx-fan-card" data-card="1" style="--i:-0.5; z-index:3;">
                    <div class="vx-fc-head"><span>TILE 02</span><span>RYTME</span></div>
                    <img src="./moodle/tile_03.jpg" alt="15 studieuger" />
                    <div class="vx-fc-title">15 studieuger</div>
                  </div>
                  <div class="vx-fan-card" data-card="2" style="--i:0.5; z-index:4;">
                    <div class="vx-fc-head"><span>TILE 03</span><span>MILEPÆLE</span></div>
                    <img src="./moodle/tile_20.jpg" alt="3 OLA-hæfter" />
                    <div class="vx-fc-title">3 OLA-hæfter</div>
                  </div>
                  <div class="vx-fan-card" data-card="3" style="--i:1.5; z-index:5;">
                    <div class="vx-fc-head"><span>TILE 04</span><span>AFSLUTNING</span></div>
                    <img src="./moodle/tile_19.jpg" alt="Eksamen" />
                    <div class="vx-fc-title">Eksamen</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      const fan = canvasEl.querySelector('#vx-hero-fan');
      const cards = fan.querySelectorAll('.vx-fan-card');
      // Staggeret 2x2 redaktionel 3D-kollage skaleret proportionalt til fan-boksen
      const fw = fan.clientWidth || 500;
      const fh = fan.clientHeight || 330;
      const slots = [
        { x: -fw * 0.21, y: -fh * 0.19, r: -2.4 },
        { x: fw * 0.21, y: -fh * 0.14, r: 2.1 },
        { x: -fw * 0.19, y: fh * 0.20, r: 1.8 },
        { x: fw * 0.22, y: fh * 0.23, r: -2.0 }
      ];

      gsap.set(cards, {
        x: (i) => slots[i].x,
        y: (i) => slots[i].y,
        rotation: (i) => slots[i].r
      });

      let floatTweens = [];
      const startFloat = () => {
        floatTweens.forEach((tw) => tw.kill());
        floatTweens = [];
        cards.forEach((card, i) => {
          const b = slots[i];
          floatTweens.push(
            trackTween(
              gsap.to(card, {
                y: b.y + (i % 2 === 0 ? -5 : 5),
                rotation: b.r + (i % 2 === 0 ? -1.0 : 1.0),
                duration: 2.4 + i * 0.15,
                yoyo: true,
                repeat: -1,
                ease: 'sine.inOut'
              })
            )
          );
        });
      };

      const onMove = (e) => {
        const r = fan.getBoundingClientRect();
        const nx = Math.max(-0.5, Math.min(0.5, (e.clientX - r.left) / r.width - 0.5));
        const ny = Math.max(-0.5, Math.min(0.5, (e.clientY - r.top) / r.height - 0.5));
        cards.forEach((card, i) => {
          const b = slots[i];
          const depth = 0.8 + i * 0.25;
          gsap.to(card, {
            x: b.x + nx * 18 * depth,
            y: b.y + ny * 14 * depth,
            rotation: b.r + nx * 3.5,
            duration: 0.45,
            ease: 'power2.out',
            overwrite: 'auto'
          });
        });
      };
      const onLeave = () => startFloat();
      fan.addEventListener('mousemove', onMove);
      fan.addEventListener('mouseleave', onLeave);
      cleanupFns.push(() => {
        fan.removeEventListener('mousemove', onMove);
        fan.removeEventListener('mouseleave', onLeave);
      });

      canvasEl.querySelector('#vx-start-btn').addEventListener('click', () => {
        if (onRequestPlayCb) onRequestPlayCb(false);
        else goToStep(1);
      });

      tl.from('.vx-hero-left > *', { y: 18, opacity: 0, stagger: 0.08, duration: 0.44, ease: 'power3.out' })
        .fromTo('.vx-hl-bg', { scaleX: 0 }, { scaleX: 1, duration: 0.58, ease: 'power3.out' }, '-=0.28')
        .from('.vx-fan-backdrop', { opacity: 0, y: 16, duration: 0.45, ease: 'power2.out' }, '-=0.35')
        .from(cards, { y: 46, opacity: 0, stagger: 0.09, duration: 0.5, ease: 'back.out(1.25)' }, '-=0.3')
        .call(startFloat);
    } else if (idx === 1) {
      // SCENE 2: INTERAKTIV SEMESTER-SLIDER (UGE 1–15 + TAKTIL ECTS-MÅLER)
      const weekData = [
        ['Branche & Metode', '#d97706', 'Den finansielle sektor & Excel', 'Du lærer hele finansbranchen at kende (bank, realkredit, forsikring, pension) og arbejder med Excel-pivottabeller.', false],
        ['Branche & Metode', '#d97706', 'Undersøgelsesmetode', 'Videnskabsteori, dataindsamling, undersøgelsesdesign og kritisk kildevurdering.', false],
        ['Statistik', '#9333ea', 'Deskriptiv statistik & Normalfordeling', 'Datatyper, nøgletal, stikprøver, normalfordeling og konfidensintervaller.', false],
        ['Statistik · OLA 1', '#9333ea', 'Hypotesetest + OLA-hæfte 1', 'Test af middelværdier og andele — samt aflevering af 1. OLA-hæfte (uge 1–4).', 'OLA 1'],
        ['Statistik', '#9333ea', 'Regression & Chi²-test', 'Sammenhænge mellem variable med korrelation, lineær regression og Chi²-test.', false],
        ['Finansiering', '#059669', 'Rentesregning & Investering', 'Tidsmæssig værdi af penge og kapitalværdimetoden (NPV) i Excel.', false],
        ['Finansiering', '#059669', 'Følsomhedsanalyse & Annuitet', 'Beregning af annuitetslån og følsomhedsanalyse på investeringsprojekter.', false],
        ['Finansiering', '#059669', 'Lånetyper & Kreditter', 'Serielån, stående lån, afdragsfrie lån, kassekredit og sammenligning.', false],
        ['Mikroøkonomi', '#e11d48', 'Udbud, Efterspørgsel & Elasticitet', 'Knaphed, komparative fordele og priselasticitet på markeder.', false],
        ['Mikroøkonomi', '#e11d48', 'Markedsligevægt & Mikropolitik', 'Prisdannelse i ligevægt samt afgifter, tilskud og offentlig regulering.', false],
        ['Mikroøkonomi · OLA 2', '#e11d48', 'Omkostninger, Pris + OLA-hæfte 2', 'Prisoptimering og overskud — samt aflevering af 2. OLA-hæfte.', 'OLA 2'],
        ['Mikroøkonomi', '#e11d48', 'Markedsformer i dybden', 'Fuldkommen konkurrence, monopol, monopolistisk konkurrence og oligopol.', false],
        ['Erhvervsøkonomi', '#2563eb', 'Optimering & Knap kapacitet', 'Markedsføringsbidrag, priselasticitet og optimal kapacitetsudnyttelse.', false],
        ['Erhvervsøkonomi · OLA 3', '#2563eb', 'Kalkulation & ABC + OLA-hæfte 3', 'Bidrags- og fordelingskalkulation, ABC — samt aflevering af 3. OLA-hæfte.', 'OLA 3'],
        ['Repetition & Eksamen', '#ca8a04', 'Tværgående repetition & Eksamensstart', 'Repetitionscase på tværs af alle fag og udlevering af eksamensopgaven.', 'EKSAMEN']
      ];

      // 15 radiale tick-streger på ydersiden af ECTS-måleren
      const ticksSvg = Array.from({ length: 15 }, (_, k) => {
        const angle = (k / 15) * 360;
        return `<line x1="90" y1="10" x2="90" y2="17" stroke="#cbd5e1" stroke-width="2.5" transform="rotate(${angle} 90 90)" class="vx-ring-tick" data-tick="${k + 1}" />`;
      }).join('');

      canvasEl.innerHTML = `
        <div class="vx-camera-rig">
          <div class="vx-scene vx-slider-scene">
            <div class="vx-kicker"><span class="vx-fig-tag">FIG. 02</span> INTERAKTIVT OVERBLIK · TRÆK I SLIDEREN</div>
            <h2 class="vx-title">Se hele rejsen: <span class="vx-hl-wrap"><span class="vx-hl-txt">15 uger · 3 OLA · 30 ECTS</span><i class="vx-hl-bg"></i></span></h2>

            <div class="vx-interactive-box">
              <div class="vx-ring-col">
                <svg viewBox="0 0 180 180" class="vx-ring-svg">
                  <g class="vx-ring-ticks">${ticksSvg}</g>
                  <circle cx="90" cy="90" r="64" class="vx-ring-bg" transform="rotate(-90 90 90)" />
                  <circle cx="90" cy="90" r="64" class="vx-ring-fg" id="vx-ring-fg" transform="rotate(-90 90 90)" />
                </svg>
                <div class="vx-ring-center">
                  <div class="vx-ring-big" id="vx-ects-val">2</div>
                  <div class="vx-ring-sub">ECTS OPBYGGET</div>
                  <div class="vx-ring-week" id="vx-ring-week">UGE 01 / 15</div>
                </div>
              </div>

              <div class="vx-slider-col">
                <div class="vx-week-readout">
                  <span class="vx-week-pill" id="vx-week-pill">STUDIEUGE 01 / 15</span>
                  <span class="vx-phase-pill" id="vx-phase-pill">Branche & Metode</span>
                  <span class="vx-ola-live-pill" id="vx-ola-live-pill">MILEPÆL</span>
                </div>

                <h3 class="vx-slider-topic" id="vx-slider-topic">Den finansielle sektor & Excel</h3>
                <p class="vx-slider-note" id="vx-slider-note">Du lærer hele finansbranchen at kende.</p>

                <div class="vx-week-blocks" id="vx-week-blocks">
                  ${weekData
                    .map(([_, col, __, ___, mile], i) => {
                      const wk = i + 1;
                      return `
                        <button class="vx-wk-btn ${mile ? 'has-mile' : ''}" data-wk="${wk}" style="--wk-col:${col}" title="Uge ${wk}">
                          ${mile ? `<span class="vx-wk-star">${mile}</span>` : ''}
                          <span class="vx-wk-num">${wk}</span>
                        </button>
                      `;
                    })
                    .join('')}
                </div>

                <div class="vx-range-wrap">
                  <input type="range" min="1" max="15" value="1" id="vx-week-range" class="vx-range" aria-label="Vælg studieuge fra 1 til 15" />
                </div>

                <div class="vx-range-marks">
                  <span>UGE 1 · OPSTART</span>
                  <span class="vx-mark-ola" id="m-ola1">★ OLA 1 (UGE 4)</span>
                  <span class="vx-mark-ola" id="m-ola2">★ OLA 2 (UGE 11)</span>
                  <span class="vx-mark-ola" id="m-ola3">★ OLA 3 (UGE 14)</span>
                  <span>UGE 15 · EKSAMEN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      const rangeEl = canvasEl.querySelector('#vx-week-range');
      const ringFg = canvasEl.querySelector('#vx-ring-fg');
      const ectsEl = canvasEl.querySelector('#vx-ects-val');
      const ringWeekEl = canvasEl.querySelector('#vx-ring-week');
      const weekPill = canvasEl.querySelector('#vx-week-pill');
      const phasePill = canvasEl.querySelector('#vx-phase-pill');
      const olaLivePill = canvasEl.querySelector('#vx-ola-live-pill');
      const topicEl = canvasEl.querySelector('#vx-slider-topic');
      const noteEl = canvasEl.querySelector('#vx-slider-note');
      const wkBtns = canvasEl.querySelectorAll('.vx-wk-btn');
      const ticks = canvasEl.querySelectorAll('.vx-ring-tick');
      const circ = 2 * Math.PI * 64;
      ringFg.style.strokeDasharray = String(circ);

      let displayedEcts = { val: 2 };
      let currentWeek = 1;

      function updateWeek(w, smoothEcts = true) {
        currentWeek = w;
        const [phase, col, topic, note, mile] = weekData[w - 1];
        const pct = w / 15;
        const pctTrack = ((w - 1) / 14) * 100;

        ringFg.style.strokeDashoffset = String(circ * (1 - pct));
        ringFg.style.stroke = col;
        rangeEl.style.setProperty('--pct', `${pctTrack}%`);
        rangeEl.style.setProperty('--thumb-col', col);

        const targetEcts = w * 2;
        if (smoothEcts) {
          gsap.to(displayedEcts, {
            val: targetEcts,
            duration: 0.25,
            ease: 'power2.out',
            onUpdate: () => {
              ectsEl.textContent = String(Math.round(displayedEcts.val));
            }
          });
        } else {
          displayedEcts.val = targetEcts;
          ectsEl.textContent = String(targetEcts);
        }

        const wkStr = String(w).padStart(2, '0');
        weekPill.textContent = `STUDIEUGE ${wkStr} / 15`;
        ringWeekEl.textContent = `UGE ${wkStr} / 15`;
        phasePill.textContent = phase;
        phasePill.style.background = col;
        topicEl.textContent = topic;
        noteEl.textContent = note;

        if (mile) {
          olaLivePill.textContent = `★ ${mile}`;
          olaLivePill.classList.add('is-visible');
        } else {
          olaLivePill.classList.remove('is-visible');
        }

        wkBtns.forEach((btn, i) => {
          const wk = i + 1;
          btn.classList.toggle('is-passed', wk <= w);
          btn.classList.toggle('is-current', wk === w);
        });

        ticks.forEach((t, i) => {
          t.setAttribute('stroke', i + 1 <= w ? col : '#cbd5e1');
        });

        canvasEl.querySelector('#m-ola1').classList.toggle('reached', w >= 4);
        canvasEl.querySelector('#m-ola2').classList.toggle('reached', w >= 11);
        canvasEl.querySelector('#m-ola3').classList.toggle('reached', w >= 14);
      }

      const stopSweep = () => {
        if (sweepTween) sweepTween.kill();
      };

      rangeEl.addEventListener('input', (e) => {
        stopSweep();
        updateWeek(Number(e.target.value), false);
      });

      wkBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          stopSweep();
          const wk = Number(btn.dataset.wk);
          rangeEl.value = String(wk);
          updateWeek(wk, true);
        });
      });

      updateWeek(1, false);

      const demoObj = { w: 1 };
      let sweepTween = null;
      tl.from('.vx-kicker, .vx-title, .vx-interactive-box', { y: 16, opacity: 0, stagger: 0.08, duration: 0.42 })
        .fromTo('.vx-hl-bg', { scaleX: 0 }, { scaleX: 1, duration: 0.52, ease: 'power3.out' }, '-=0.22')
        .call(() => {
          sweepTween = trackTween(
            gsap.to(demoObj, {
              w: 15,
              duration: 7.4,
              ease: 'power1.inOut',
              onUpdate: () => {
                const v = Math.round(demoObj.w);
                if (v !== currentWeek) {
                  rangeEl.value = String(v);
                  updateWeek(v, true);
                }
              }
            })
          );
        }, null, '+=0.15');
    } else if (idx === 2) {
      // SCENE 3: TORSDAG KL. 08.00 — TILES LÅSES OP MED SKARP PULS & 3D-FLIP
      const sampleTiles = [
        { title: 'Information om semester', img: './moodle/tile_01.jpg', open: true },
        { title: 'Introprogram', img: './moodle/tile_02.jpg', open: true },
        { title: 'Uge 1 · Branche', img: './moodle/tile_03.jpg', open: true },
        { title: 'Uge 2 · Metode', img: './moodle/tile_04.jpg', open: false },
        { title: 'Uge 3 · Statistik', img: './moodle/tile_05.jpg', open: false },
        { title: 'Uge 4 · Hypotesetest', img: './moodle/tile_06.jpg', open: false },
        { title: 'Uge 5 · Regression', img: './moodle/tile_07.jpg', open: false },
        { title: 'Uge 6 · Rente & NPV', img: './moodle/tile_08.jpg', open: false }
      ];

      canvasEl.innerHTML = `
        <div class="vx-camera-rig">
          <div class="vx-scene vx-moodle-map">
            <div class="vx-map-left">
              <div class="vx-kicker"><span class="vx-fig-tag">FIG. 03</span> MOODLE-RYTME · PRØV SELV</div>
              <h2 class="vx-title">Én ny tile åbner<br/><span class="vx-hl-wrap"><span class="vx-hl-txt">hver torsdag</span><i class="vx-hl-bg"></i></span></h2>

              <div class="vx-thursday-clock" id="vx-thursday-clock">
                <span class="vx-tc-icon">${SVG_ICONS.clock}</span>
                <span class="vx-tc-time">TORSDAG KL. 08:00</span>
                <span class="vx-tc-status" id="vx-tc-status">KLAR</span>
              </div>

              <p class="vx-lead-sm">Materialet frigives løbende hver torsdag kl. 08.00, så næste tile bliver åben — én uge ad gangen.</p>

              <button class="vx-cta-btn" id="vx-unlock-btn">
                <span class="vx-cta-icon">${SVG_ICONS.unlock}</span>
                <span>Frigiv næste torsdags-tile</span>
              </button>
            </div>

            <div class="vx-map-right">
              <div class="vx-browser-frame">
                <div class="vx-bf-top">
                  <div class="vx-bf-brand">
                    <img src="./moodle/logo.png" alt="EK" />
                    <span>Moodle · EK Finansøkonom (online)</span>
                  </div>
                  <span class="vx-bf-count" id="vx-tile-counter">3 / 8 ÅBNE</span>
                </div>
                <div class="vx-unlock-grid" id="vx-unlock-grid">
                  ${sampleTiles
                    .map(
                      (t, i) => `
                    <div class="vx-u-tile ${t.open ? 'is-open' : 'is-locked'}" data-i="${i}">
                      <div class="vx-u-img" style="background-image:url('${t.img}')">
                        <span class="vx-u-lock">
                          ${t.open ? '<span>ÅBEN</span>' : `${SVG_ICONS.lock}<span>LÅST</span>`}
                        </span>
                      </div>
                      <div class="vx-u-cap">${t.title}</div>
                    </div>
                  `
                    )
                    .join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      let unlockedCount = 3;
      const clockBox = canvasEl.querySelector('#vx-thursday-clock');
      const clockStatus = canvasEl.querySelector('#vx-tc-status');
      const counterEl = canvasEl.querySelector('#vx-tile-counter');

      const pulseClock = (label) => {
        clockStatus.textContent = label;
        clockBox.classList.add('is-pulsing');
        trackTween(
          gsap.fromTo(
            clockBox,
            { scale: 1 },
            {
              scale: 1.04,
              duration: 0.22,
              yoyo: true,
              repeat: 1,
              ease: 'power2.out',
              onComplete: () => clockBox.classList.remove('is-pulsing')
            }
          )
        );
      };

      const unlockNext = () => {
        if (unlockedCount >= sampleTiles.length) {
          unlockedCount = 3;
          canvasEl.querySelectorAll('.vx-u-tile').forEach((el, i) => {
            const open = i < 3;
            el.classList.toggle('is-open', open);
            el.classList.toggle('is-locked', !open);
            el.classList.remove('is-just-opened');
            el.querySelector('.vx-u-lock').innerHTML = open
              ? '<span>ÅBEN</span>'
              : `${SVG_ICONS.lock}<span>LÅST</span>`;
          });
          counterEl.textContent = '3 / 8 ÅBNE';
          pulseClock('NULSTIL');
          return;
        }
        const target = canvasEl.querySelector(`.vx-u-tile[data-i="${unlockedCount}"]`);
        if (target) {
          target.classList.remove('is-locked');
          target.classList.add('is-open', 'is-just-opened');
          target.querySelector('.vx-u-lock').innerHTML = `${SVG_ICONS.unlock}<span>08:00 · ÅBEN</span>`;
          unlockedCount++;
          counterEl.textContent = `${unlockedCount} / 8 ÅBNE`;
          pulseClock('FRIGIVET!');
          trackTween(
            gsap.fromTo(
              target,
              { scale: 0.86, rotationY: -90, transformPerspective: 850 },
              {
                scale: 1.05,
                rotationY: 0,
                duration: 0.52,
                ease: 'back.out(1.4)',
                onComplete: () => gsap.to(target, { scale: 1, duration: 0.24, ease: 'power2.out' })
              }
            )
          );
        }
      };

      canvasEl.querySelector('#vx-unlock-btn').addEventListener('click', unlockNext);
      canvasEl.querySelectorAll('.vx-u-tile').forEach((el) => el.addEventListener('click', unlockNext));

      tl.from('.vx-map-left > *', { x: -18, opacity: 0, stagger: 0.08, duration: 0.42 })
        .fromTo('.vx-hl-bg', { scaleX: 0 }, { scaleX: 1, duration: 0.52, ease: 'power3.out' }, '-=0.22')
        .from('.vx-browser-frame', { scale: 0.95, opacity: 0, duration: 0.45, ease: 'power2.out' }, '-=0.25')
        .call(unlockNext, null, '+=0.8')
        .call(unlockNext, null, '+=2.1')
        .call(unlockNext, null, '+=2.1')
        .call(unlockNext, null, '+=2.1');
    } else if (idx === 3) {
      // SCENE 4: TO FASTE FRISTER HVER UGE + ANIMERET BUET SVG-FORBINDELSESPIL
      canvasEl.innerHTML = `
        <div class="vx-camera-rig">
          <div class="vx-scene vx-rhythm-intro">
            <div class="vx-kicker"><span class="vx-fig-tag">FIG. 04</span> UGERYTMEN · TO FASTE FRISTER</div>
            <h2 class="vx-title">Samme <span class="vx-hl-wrap"><span class="vx-hl-txt">faste rytme</span><i class="vx-hl-bg"></i></span> hver uge</h2>

            <div class="vx-two-deadlines-wrap">
              <div class="vx-dl-card vx-dl-red">
                <div class="vx-dl-head">
                  <span class="vx-dl-badge">TORSDAG KL. 08.00</span>
                  <span class="vx-dl-role">${SVG_ICONS.user}<span>INDIVIDUEL</span></span>
                </div>
                <h3>Aktiviteter & ny tile</h3>
                <p>Du afleverer ugens individuelle aktiviteter — og i samme øjeblik åbner løsningsforslag, Kialo og næste uges tile i Moodle.</p>
                <div class="vx-dl-chips">
                  <span>Individuel aflevering</span>
                  <span>Løsningsforslag</span>
                  <span>Ny tile åbner</span>
                </div>
              </div>

              <div class="vx-dl-arrow" aria-hidden="true">
                <svg viewBox="0 0 180 120" class="vx-dl-svg">
                  <defs>
                    <marker id="dl-arr" viewBox="0 0 12 12" refX="9" refY="6" markerWidth="7.5" markerHeight="7.5" orient="auto">
                      <path d="M 1 1.5 L 10.5 6 L 1 10.5 z" fill="#111317" />
                    </marker>
                  </defs>
                  <path d="M 12 64 C 52 16, 128 16, 166 64" fill="none" stroke="rgba(17,19,23,0.18)" stroke-width="3" stroke-dasharray="5 5" />
                  <path id="vx-dl-path" d="M 12 64 C 52 16, 128 16, 166 64" fill="none" stroke="#111317" stroke-width="4" marker-end="url(#dl-arr)" />
                  <g id="vx-dl-pulse" opacity="0">
                    <circle r="9" fill="rgba(247, 232, 27, 0.55)" />
                    <circle r="4.5" fill="#f7e81b" stroke="#111317" stroke-width="2" />
                  </g>
                  <rect x="34" y="84" width="112" height="24" fill="#111317" />
                  <text x="90" y="100" text-anchor="middle" fill="#f7e81b" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700" letter-spacing="1.2">UGEN EFTER</text>
                </svg>
              </div>

              <div class="vx-dl-card vx-dl-navy">
                <div class="vx-dl-head">
                  <span class="vx-dl-badge vx-dl-gold">TIRSDAG KL. 08.00</span>
                  <span class="vx-dl-role vx-dl-role-light">${SVG_ICONS.team}<span>STUDIETEAM</span></span>
                </div>
                <h3>Temaprojekt i teamet</h3>
                <p>Sammen med dit faste studieteam afleverer I ugens virkelighedsnære temaprojekt og udfylder TrivselsBarometer.</p>
                <div class="vx-dl-chips vx-dl-chips-dark">
                  <span>Fast studieteam</span>
                  <span>Temaprojekt</span>
                  <span>TrivselsBarometer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      const dlPath = canvasEl.querySelector('#vx-dl-path');
      const dlPulse = canvasEl.querySelector('#vx-dl-pulse');
      const dlLen = dlPath.getTotalLength();

      const startBridgePulse = () => {
        const travelObj = { t: 0 };
        gsap.set(dlPulse, { opacity: 1 });
        trackTween(
          gsap.to(travelObj, {
            t: 1,
            duration: 1.75,
            repeat: -1,
            repeatDelay: 0.45,
            ease: 'power2.inOut',
            onUpdate: () => {
              const pt = dlPath.getPointAtLength(travelObj.t * (dlLen - 6));
              dlPulse.setAttribute('transform', `translate(${pt.x}, ${pt.y})`);
            }
          })
        );
      };

      tl.from('.vx-kicker, .vx-title', { y: 16, opacity: 0, stagger: 0.08, duration: 0.4 })
        .fromTo('.vx-hl-bg', { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: 'power3.out' }, '-=0.2')
        .from('.vx-dl-card', { y: 22, opacity: 0, stagger: 0.16, duration: 0.46, ease: 'back.out(1.2)' }, '-=0.15')
        .fromTo(dlPath, { strokeDasharray: dlLen, strokeDashoffset: dlLen }, { strokeDashoffset: 0, duration: 0.68, ease: 'power2.out' }, '-=0.2')
        .call(startBridgePulse);
    } else if (idx === 4) {
      // SCENE 5: FULDSKÆRMS ANIMERET UGE-LOOP (4 KORT + 4 BUEDE PILE + GLØDENDE MARKØR I URETS RETNING)
      const wheelSteps = [
        { tag: 'UGE-START', sub: 'Introvideo & individuelle aktiviteter', color: '#0284c7' },
        { tag: 'TORSDAG KL. 08.00', sub: 'Aflevering + næste tile åbner', color: '#dc2626' },
        { tag: 'TEAMSAMARBEJDE', sub: 'Case-arbejde i dit studieteam', color: '#d97706' },
        { tag: 'TIRSDAG KL. 08.00', sub: 'Temaprojekt & TrivselsBarometer', color: '#002e6d' }
      ];

      // Koordinater i 960x480 SVG-lærred med matematisk garanteret nul-overlap og ren pil-afstand
      const arcPaths = [
        { d: 'M 642 62 C 756 62, 816 104, 816 164', color: '#dc2626', marker: 'arr-red' },
        { d: 'M 816 316 C 816 376, 756 418, 642 418', color: '#d97706', marker: 'arr-gold' },
        { d: 'M 318 418 C 204 418, 144 376, 144 316', color: '#002e6d', marker: 'arr-navy' },
        { d: 'M 144 164 C 144 104, 204 62, 318 62', color: '#0284c7', marker: 'arr-blue' }
      ];

      canvasEl.innerHTML = `
        <div class="vx-camera-rig">
          <div class="vx-scene vx-loop-full">
            <div class="vx-loop-top-kicker"><span class="vx-fig-tag">FIG. 05</span> FAST UGE-LOOP · KLIK PÅ ET TRIN</div>
            <div class="vx-loop-stage-full">
              <svg viewBox="0 0 960 480" class="vx-loop-svg" aria-hidden="true">
                <defs>
                  <marker id="arr-dark" viewBox="0 0 12 12" refX="9" refY="6" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 1 1.5 L 10.5 6 L 1 10.5 z" fill="rgba(17,19,23,0.35)" />
                  </marker>
                  <marker id="arr-red" viewBox="0 0 12 12" refX="9" refY="6" markerWidth="9" markerHeight="9" orient="auto-start-reverse">
                    <path d="M 1 1.5 L 10.5 6 L 1 10.5 z" fill="#dc2626" />
                  </marker>
                  <marker id="arr-gold" viewBox="0 0 12 12" refX="9" refY="6" markerWidth="9" markerHeight="9" orient="auto-start-reverse">
                    <path d="M 1 1.5 L 10.5 6 L 1 10.5 z" fill="#d97706" />
                  </marker>
                  <marker id="arr-navy" viewBox="0 0 12 12" refX="9" refY="6" markerWidth="9" markerHeight="9" orient="auto-start-reverse">
                    <path d="M 1 1.5 L 10.5 6 L 1 10.5 z" fill="#002e6d" />
                  </marker>
                  <marker id="arr-blue" viewBox="0 0 12 12" refX="9" refY="6" markerWidth="9" markerHeight="9" orient="auto-start-reverse">
                    <path d="M 1 1.5 L 10.5 6 L 1 10.5 z" fill="#0284c7" />
                  </marker>
                </defs>

                <!-- Subtil redaktionel guide-cirkel i baggrunden -->
                <ellipse cx="480" cy="240" rx="336" ry="178" fill="none" stroke="rgba(17,19,23,0.06)" stroke-width="1.5" stroke-dasharray="4 6" />

                <!-- 4 baggrundsspor -->
                ${arcPaths.map((a) => `<path class="vx-loop-arc" d="${a.d}" marker-end="url(#arr-dark)" />`).join('')}

                <!-- 4 animerede aktive pile -->
                ${arcPaths
                  .map(
                    (a, k) =>
                      `<path id="arc-flow-${k}" class="vx-loop-flow" d="${a.d}" stroke="${a.color}" marker-end="url(#${a.marker})" />`
                  )
                  .join('')}

                <!-- Glødende bevægende markør der følger ruten i urets retning -->
                <g id="vx-loop-traveler" opacity="0">
                  <circle r="15" fill="rgba(247, 232, 27, 0.42)" />
                  <circle r="7.5" fill="#f7e81b" stroke="#111317" stroke-width="2.5" />
                </g>

                <!-- Center-emblem -->
                <rect x="382" y="192" width="196" height="96" fill="#111317" />
                <rect x="382" y="192" width="196" height="6" fill="#f7e81b" />
                <text x="480" y="228" text-anchor="middle" fill="#f7e81b" font-family="IBM Plex Mono, monospace" font-size="16" font-weight="700" letter-spacing="2.5">FAST</text>
                <text x="480" y="252" text-anchor="middle" fill="#ffffff" font-family="Space Grotesk, sans-serif" font-size="18" font-weight="700" letter-spacing="1.2">UGE-LOOP</text>
                <text id="vx-loop-hub-step" x="480" y="274" text-anchor="middle" fill="#94a3b8" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="600" letter-spacing="1.5">TRIN 01 / 04</text>
              </svg>

              ${wheelSteps
                .map(
                  (s, i) => `
                <button class="vx-loop-node vx-loop-node-lg ln-${i}" data-i="${i}" style="--c:${s.color}">
                  <span class="vx-ln-tag">0${i + 1} · ${s.tag}</span>
                  <span class="vx-ln-sub">${s.sub}</span>
                </button>
              `
                )
                .join('')}
            </div>
          </div>
        </div>
      `;

      const traveler = canvasEl.querySelector('#vx-loop-traveler');
      const hubStep = canvasEl.querySelector('#vx-loop-hub-step');
      const flowArcs = [0, 1, 2, 3].map((k) => {
        const p = canvasEl.querySelector(`#arc-flow-${k}`);
        const len = p.getTotalLength();
        p.style.strokeDasharray = String(len);
        p.style.strokeDashoffset = String(len);
        return { p, len };
      });

      const selectWheel = (i, animateArc = true) => {
        canvasEl.querySelectorAll('.vx-loop-node').forEach((n, idx2) => n.classList.toggle('is-active', idx2 === i));
        hubStep.textContent = `TRIN 0${i + 1} / 04`;
        const arcIdx = (i + 3) % 4;
        const activeArc = flowArcs[arcIdx];

        flowArcs.forEach((fa, k) => {
          gsap.killTweensOf(fa.p);
          if (k === arcIdx) {
            if (animateArc) {
              gsap.set(fa.p, { opacity: 1, strokeDashoffset: fa.len });
              trackTween(gsap.to(fa.p, { strokeDashoffset: 0, duration: 0.78, ease: 'power2.out' }));
            } else {
              gsap.set(fa.p, { opacity: 1, strokeDashoffset: 0 });
            }
          } else {
            gsap.to(fa.p, { opacity: 0.14, strokeDashoffset: 0, duration: 0.25 });
          }
        });

        if (animateArc && activeArc) {
          const travel = { t: 0 };
          gsap.killTweensOf(travel);
          gsap.set(traveler, { opacity: 1 });
          trackTween(
            gsap.to(travel, {
              t: 1,
              duration: 0.85,
              ease: 'power2.inOut',
              onUpdate: () => {
                const pt = activeArc.p.getPointAtLength(travel.t * (activeArc.len - 4));
                traveler.setAttribute('transform', `translate(${pt.x}, ${pt.y})`);
              }
            })
          );
        }
      };

      canvasEl.querySelectorAll('.vx-loop-node').forEach((btn) => {
        btn.addEventListener('click', () => selectWheel(Number(btn.dataset.i), true));
      });
      selectWheel(0, false);

      tl.from('.vx-loop-top-kicker', { y: 12, opacity: 0, duration: 0.35 })
        .from('.vx-loop-node', { scale: 0.82, opacity: 0, stagger: 0.09, duration: 0.38, ease: 'back.out(1.35)' }, '-=0.15')
        .call(() => selectWheel(1, true), null, '+=1.4')
        .call(() => selectWheel(2, true), null, '+=1.85')
        .call(() => selectWheel(3, true), null, '+=1.85')
        .call(() => selectWheel(0, true), null, '+=1.85');
    } else if (idx === 5) {
      // SCENE 6: FAGREJSEN — 5 STATIONER PÅ BUET SVG-METROKORT MED GLIDENDE MARKØR
      const pathD =
        `M ${METRO_STATIONS[0].x} ${METRO_STATIONS[0].y} ` +
        METRO_STATIONS.slice(1)
          .map((s, i) => {
            const p = METRO_STATIONS[i];
            const mx = (p.x + s.x) / 2;
            return `C ${mx} ${p.y}, ${mx} ${s.y}, ${s.x} ${s.y}`;
          })
          .join(' ');

      canvasEl.innerHTML = `
        <div class="vx-camera-rig">
          <div class="vx-scene vx-metro-scene">
            <div class="vx-kicker"><span class="vx-fig-tag">FIG. 06</span> FAGREJSEN · KLIK PÅ EN STATION</div>
            <h2 class="vx-title">Fra finanssektoren til <span class="vx-hl-wrap"><span class="vx-hl-txt">erhvervsøkonomi</span><i class="vx-hl-bg"></i></span></h2>

            <div class="vx-metro-board">
              <svg viewBox="0 0 1040 260" class="vx-metro-svg">
                <defs>
                  <marker id="metro-arrow" viewBox="0 0 12 12" refX="9" refY="6" markerWidth="7" markerHeight="7" orient="auto">
                    <path d="M 1 1.5 L 10.5 6 L 1 10.5 z" fill="#111317" />
                  </marker>
                </defs>

                <!-- Subtile redaktionelle kolonne-akser -->
                ${METRO_STATIONS.map(
                  (s) => `<line x1="${s.x}" y1="22" x2="${s.x}" y2="238" stroke="rgba(17,19,23,0.06)" stroke-width="1" stroke-dasharray="3 4" />`
                ).join('')}

                <path d="${pathD}" class="vx-metro-line-bg" />
                <path d="${pathD}" class="vx-metro-line-fg" id="vx-metro-line" marker-end="url(#metro-arrow)" />

                <!-- Glødende bevægende markør bag station-noden der rejser langs den buede metrolinje -->
                <g id="vx-metro-pulse" transform="translate(${METRO_STATIONS[0].x}, ${METRO_STATIONS[0].y})">
                  <circle r="29" fill="rgba(247, 232, 27, 0.52)" />
                  <circle r="22" fill="none" stroke="#111317" stroke-width="2" />
                </g>

                ${METRO_STATIONS.map(
                  (s, i) => `
                  <g class="vx-station" data-i="${i}" transform="translate(${s.x}, ${s.y})">
                    <circle r="19" fill="#ffffff" stroke="${s.color}" stroke-width="5.5" class="vx-st-circle" />
                    <text y="4" text-anchor="middle" class="vx-st-num">${s.num}</text>
                    <text y="${i % 2 === 0 ? 44 : -32}" text-anchor="middle" class="vx-st-label">${s.name}</text>
                    <text y="${i % 2 === 0 ? 63 : -51}" text-anchor="middle" class="vx-st-weeks">${s.weeks.toUpperCase()}</text>
                  </g>
                `
                ).join('')}
              </svg>
            </div>

            <div class="vx-station-detail" id="vx-station-detail">
              <span class="vx-sd-badge" id="vx-sd-badge">01 · BRANCHE & METODE · 2 UGER</span>
              <span class="vx-sd-text" id="vx-sd-text">${METRO_STATIONS[0].desc}</span>
            </div>
          </div>
        </div>
      `;

      const line = canvasEl.querySelector('#vx-metro-line');
      const pulseDot = canvasEl.querySelector('#vx-metro-pulse');
      const detailBox = canvasEl.querySelector('#vx-station-detail');
      const badgeEl = canvasEl.querySelector('#vx-sd-badge');
      const textEl = canvasEl.querySelector('#vx-sd-text');
      const len = line.getTotalLength();

      // Find eksakt kurvelængde for hver station langs SVG-stien
      const stationLengths = METRO_STATIONS.map((s) => {
        let bestL = 0;
        let bestD = Infinity;
        for (let sample = 0; sample <= len; sample += 4) {
          const pt = line.getPointAtLength(sample);
          const dist = Math.hypot(pt.x - s.x, pt.y - s.y);
          if (dist < bestD) {
            bestD = dist;
            bestL = sample;
          }
        }
        return bestL;
      });

      const pulseTravel = { l: stationLengths[0] };
      let activeStationIdx = 0;

      const selectStation = (i, animateTravel = true) => {
        const s = METRO_STATIONS[i];
        activeStationIdx = i;

        badgeEl.textContent = `${s.num} · ${s.name.toUpperCase()} · ${s.weeks.toUpperCase()}`;
        badgeEl.style.background = s.color;
        detailBox.style.borderLeftColor = s.color;
        textEl.textContent = s.desc;
        canvasEl.querySelectorAll('.vx-station').forEach((g, idx2) => g.classList.toggle('is-active', idx2 === i));

        gsap.killTweensOf(pulseTravel);
        if (animateTravel) {
          trackTween(
            gsap.to(pulseTravel, {
              l: stationLengths[i],
              duration: 0.72,
              ease: 'power2.inOut',
              onUpdate: () => {
                const pt = line.getPointAtLength(pulseTravel.l);
                pulseDot.setAttribute('transform', `translate(${pt.x}, ${pt.y})`);
              }
            })
          );
        } else {
          pulseTravel.l = stationLengths[i];
          const pt = line.getPointAtLength(pulseTravel.l);
          pulseDot.setAttribute('transform', `translate(${pt.x}, ${pt.y})`);
        }
      };

      canvasEl.querySelectorAll('.vx-station').forEach((g) => {
        g.addEventListener('click', () => selectStation(Number(g.dataset.i), true));
        g.addEventListener('mouseenter', () => {
          const idxHovered = Number(g.dataset.i);
          if (idxHovered !== activeStationIdx) selectStation(idxHovered, true);
        });
      });

      selectStation(0, false);

      tl.from('.vx-kicker, .vx-title', { y: 16, opacity: 0, stagger: 0.08, duration: 0.4 })
        .fromTo('.vx-hl-bg', { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: 'power3.out' }, '-=0.2')
        .fromTo(line, { strokeDasharray: len, strokeDashoffset: len }, { strokeDashoffset: 0, duration: 1.05, ease: 'power2.inOut' }, '-=0.15')
        .from('.vx-station', { scale: 0.6, opacity: 0, stagger: 0.09, duration: 0.38, ease: 'back.out(1.4)' }, '-=0.8')
        .call(() => selectStation(1, true), null, '+=0.8')
        .call(() => selectStation(2, true), null, '+=1.75')
        .call(() => selectStation(3, true), null, '+=1.75')
        .call(() => selectStation(4, true), null, '+=1.75');
    } else if (idx === 6) {
      // SCENE 7: 3 OLA-HÆFTER → EKSAMEN (VINKLEDE STEMPLER MED NUL OVERLAP + SAMLENDE PIL + GULT BANNER)
      canvasEl.innerHTML = `
        <div class="vx-camera-rig">
          <div class="vx-scene vx-olas">
            <div class="vx-kicker"><span class="vx-fig-tag">FIG. 07</span> OBLIGATORISKE MILEPÆLE</div>
            <h2 class="vx-title">Tre <span class="vx-hl-wrap"><span class="vx-hl-txt">OLA-hæfter</span><i class="vx-hl-bg"></i></span> låser eksamen op</h2>

            <div class="vx-ola-cards">
              <button class="vx-ola-card vx-ola-btn" data-ola="1">
                <div class="vx-ola-head">
                  <div class="vx-ola-date">TEMA 1 · 4 UGER</div>
                  <div class="vx-stamp-slot">
                    <span class="vx-stamp-placeholder">AFVENTER</span>
                    <span class="vx-stamp">GODKENDT ✓</span>
                  </div>
                </div>
                <h3>OLA-hæfte 1</h3>
                <p>Finanssektoren, metode, statistik og hypotesetest.</p>
                <div class="vx-ola-foot">Klik for at stemple</div>
              </button>

              <button class="vx-ola-card vx-ola-btn" data-ola="2">
                <div class="vx-ola-head">
                  <div class="vx-ola-date">TEMA 2 · 7 UGER</div>
                  <div class="vx-stamp-slot">
                    <span class="vx-stamp-placeholder">AFVENTER</span>
                    <span class="vx-stamp">GODKENDT ✓</span>
                  </div>
                </div>
                <h3>OLA-hæfte 2</h3>
                <p>Regression, finansiering og mikroøkonomi.</p>
                <div class="vx-ola-foot">Klik for at stemple</div>
              </button>

              <button class="vx-ola-card vx-ola-btn" data-ola="3">
                <div class="vx-ola-head">
                  <div class="vx-ola-date">TEMA 3 · 3 UGER</div>
                  <div class="vx-stamp-slot">
                    <span class="vx-stamp-placeholder">AFVENTER</span>
                    <span class="vx-stamp">GODKENDT ✓</span>
                  </div>
                </div>
                <h3>OLA-hæfte 3</h3>
                <p>Erhvervsøkonomi: optimering, markedsformer og kalkulation.</p>
                <div class="vx-ola-foot">Klik for at stemple</div>
              </button>
            </div>

            <div class="vx-ola-down-arrow" aria-hidden="true">
              <svg viewBox="0 0 600 58" class="vx-ola-arrow-svg">
                <defs>
                  <marker id="ola-down-arr" viewBox="0 0 12 12" refX="9" refY="6" markerWidth="7.5" markerHeight="7.5" orient="auto">
                    <path d="M 1 1.5 L 10.5 6 L 1 10.5 z" fill="#111317" />
                  </marker>
                </defs>
                <!-- Samlende arkitektonisk bøjle fra de 3 OLA-kort -->
                <path d="M 100 2 L 100 20 L 500 20 L 500 2" fill="none" stroke="rgba(17,19,23,0.42)" stroke-width="2.5" />
                <line x1="300" y1="2" x2="300" y2="20" stroke="rgba(17,19,23,0.42)" stroke-width="2.5" />
                <path id="vx-ola-arrow" d="M 300 20 L 300 50" fill="none" stroke="#111317" stroke-width="3.5" marker-end="url(#ola-down-arr)" />
              </svg>
            </div>

            <div class="vx-exam-gate" id="vx-exam-gate">
              <span class="vx-gate-icon" id="vx-gate-icon">${SVG_ICONS.lock}</span>
              <span id="vx-gate-text">Indstilling til eksamen: Alle 3 OLA-hæfter skal godkendes</span>
            </div>
          </div>
        </div>
      `;

      const stamped = new Set();
      const gateEl = canvasEl.querySelector('#vx-exam-gate');
      const gateIcon = canvasEl.querySelector('#vx-gate-icon');
      const gateText = canvasEl.querySelector('#vx-gate-text');

      const toggleStamp = (btn) => {
        if (!btn) return;
        const id = btn.dataset.ola;
        if (stamped.has(id)) return;
        stamped.add(id);
        btn.classList.add('is-stamped');
        btn.querySelector('.vx-ola-foot').textContent = '✓ Godkendt til eksamen';

        trackTween(
          gsap.fromTo(
            btn.querySelector('.vx-stamp'),
            { scale: 1.85, opacity: 0, rotation: -18 },
            { scale: 1, opacity: 1, rotation: -7, duration: 0.34, ease: 'back.out(1.7)' }
          )
        );

        if (stamped.size === 3) {
          gateEl.classList.add('is-unlocked');
          gateIcon.innerHTML = SVG_ICONS.unlock;
          gateText.textContent = 'ALLE 3 OLA GODKENDT — DU ER INDSTILLET TIL 1. INTERNE EKSAMEN!';
          trackTween(gsap.fromTo(gateEl, { scale: 0.97 }, { scale: 1.015, duration: 0.28, yoyo: true, repeat: 1 }));
        } else {
          gateText.textContent = `${stamped.size} af 3 OLA godkendt — på vej mod indstilling til eksamen`;
        }
      };

      canvasEl.querySelectorAll('.vx-ola-btn').forEach((btn) => btn.addEventListener('click', () => toggleStamp(btn)));

      tl.from('.vx-kicker, .vx-title', { y: 16, opacity: 0, stagger: 0.08, duration: 0.4 })
        .fromTo('.vx-hl-bg', { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: 'power3.out' }, '-=0.2')
        .from('.vx-ola-btn', { y: 20, opacity: 0, stagger: 0.12, duration: 0.42, ease: 'back.out(1.2)' }, '-=0.15')
        .from('.vx-ola-down-arrow, .vx-exam-gate', { y: 12, opacity: 0, duration: 0.36 }, '-=0.1')
        .call(() => toggleStamp(canvasEl.querySelector('.vx-ola-btn[data-ola="1"]')), null, '+=0.75')
        .call(() => toggleStamp(canvasEl.querySelector('.vx-ola-btn[data-ola="2"]')), null, '+=1.45')
        .call(() => toggleStamp(canvasEl.querySelector('.vx-ola-btn[data-ola="3"]')), null, '+=1.45');
    } else {
      // SCENE 8: 30 MIN. MUNDTLIG EKSAMEN (ROTERENDE UR + OPLYSTE FASER + SE FILMEN IGEN)
      const clockTicks = Array.from({ length: 6 }, (_, k) => {
        const min = k * 5;
        const deg = k * 60;
        return `
          <line x1="110" y1="22" x2="110" y2="30" stroke="#111317" stroke-width="2.2" transform="rotate(${deg} 110 110)" />
        `;
      }).join('');

      canvasEl.innerHTML = `
        <div class="vx-camera-rig">
          <div class="vx-scene vx-exam-split">
            <div class="vx-exam-left">
              <div class="vx-kicker"><span class="vx-fig-tag">FIG. 08</span> EKSAMEN · 1. INTERNE</div>
              <h2 class="vx-title">Sådan forløber din <span class="vx-hl-wrap"><span class="vx-hl-txt">mundtlige prøve</span><i class="vx-hl-bg"></i></span></h2>
              <div class="vx-exam-steps">
                <div class="vx-es-row"><b>01 · MOODLE</b><span>Eksamensopgaven udleveres — herefter skriver I projektet.</span></div>
                <div class="vx-es-row"><b>02 · ZOOM</b><span>Fælles kick-off om formalia og mundtlig eksamensbriefing.</span></div>
                <div class="vx-es-row"><b>03 · WISEFLOW</b><span>Aflevering af det skriftlige projekt på WISEflow.</span></div>
                <div class="vx-es-row is-highlight"><b>04 · 30 MIN.</b><span>Individuel mundtlig prøve på Zoom (7-trinsskalaen).</span></div>
              </div>
              <button class="vx-replay-btn" id="vx-replay-btn">
                <span class="vx-cta-icon">${SVG_ICONS.replay}</span>
                <span>Se filmen igen</span>
              </button>
            </div>

            <div class="vx-exam-right">
              <div class="vx-clock-card">
                <div class="vx-clock-header">
                  <span class="vx-clock-phase-badge" id="vx-clock-phase">00–05 MIN · PRÆSENTATION</span>
                  <span class="vx-clock-total-badge">30 MIN</span>
                </div>

                <svg viewBox="0 0 220 220" class="vx-clock-svg">
                  <!-- Ydre arkitektonisk ramme -->
                  <circle cx="110" cy="110" r="88" fill="#ffffff" stroke="#111317" stroke-width="2.5" />
                  <g>${clockTicks}</g>

                  <!-- 3 tids-segmenter (5 + 20 + 5 min på r=62, omkreds = 389.56) -->
                  <circle id="seg-0" cx="110" cy="110" r="62" fill="none" stroke="#f7e81b" stroke-width="30" stroke-dasharray="64.93 389.56" stroke-dashoffset="0" transform="rotate(-90 110 110)" class="vx-pie-seg" />
                  <circle id="seg-1" cx="110" cy="110" r="62" fill="none" stroke="#002e6d" stroke-width="30" stroke-dasharray="259.7 389.56" stroke-dashoffset="-64.93" transform="rotate(-90 110 110)" class="vx-pie-seg" />
                  <circle id="seg-2" cx="110" cy="110" r="62" fill="none" stroke="#94a3b8" stroke-width="30" stroke-dasharray="64.93 389.56" stroke-dashoffset="-324.63" transform="rotate(-90 110 110)" class="vx-pie-seg" />

                  <!-- Urskive skillelinjer -->
                  <circle cx="110" cy="110" r="47" fill="#ffffff" stroke="#111317" stroke-width="1.5" />

                  <!-- Minutmarkeringer ved ydre ring -->
                  <text x="110" y="15" text-anchor="middle" class="vx-dial-num">0'</text>
                  <text x="197" y="65" text-anchor="start" class="vx-dial-num">5'</text>
                  <text x="110" y="213" text-anchor="middle" class="vx-dial-num">15'</text>
                  <text x="22" y="65" text-anchor="end" class="vx-dial-num">25'</text>

                  <!-- Viser & centralt nav (roteres præcist i SVG-koordinatsystem om 110,110) -->
                  <line id="vx-clock-hand" x1="110" y1="110" x2="110" y2="34" stroke="#111317" stroke-width="3.5" stroke-linecap="square" transform="rotate(0 110 110)" />
                  <rect x="104" y="104" width="12" height="12" fill="#f7e81b" stroke="#111317" stroke-width="2" />
                </svg>

                <div class="vx-clock-legend" id="vx-clock-legend">
                  <button class="vx-cl-row is-active" data-phase="0">
                    <i style="background:#f7e81b"></i>
                    <span><b>5 min.</b> Egen præsentation (nye vinkler)</span>
                  </button>
                  <button class="vx-cl-row" data-phase="1">
                    <i style="background:#002e6d"></i>
                    <span><b>20 min.</b> Samtale om projekt & læringsmål</span>
                  </button>
                  <button class="vx-cl-row" data-phase="2">
                    <i style="background:#94a3b8"></i>
                    <span><b>5 min.</b> Votering & karakter</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      const phaseBadge = canvasEl.querySelector('#vx-clock-phase');
      const clockHand = canvasEl.querySelector('#vx-clock-hand');
      const legendRows = canvasEl.querySelectorAll('.vx-cl-row');
      const segEls = [0, 1, 2].map((k) => canvasEl.querySelector(`#seg-${k}`));

      const phases = [
        { label: '00–05 MIN · PRÆSENTATION', bg: '#f7e81b', fg: '#111317', deg: 30 },
        { label: '05–25 MIN · SAMTALE', bg: '#002e6d', fg: '#ffffff', deg: 180 },
        { label: '25–30 MIN · VOTERING', bg: '#94a3b8', fg: '#111317', deg: 330 }
      ];

      let activePhase = -1;
      const setPhaseUI = (pIdx) => {
        if (pIdx === activePhase) return;
        activePhase = pIdx;
        const p = phases[pIdx];
        phaseBadge.textContent = p.label;
        phaseBadge.style.background = p.bg;
        phaseBadge.style.color = p.fg;
        legendRows.forEach((r, idx2) => r.classList.toggle('is-active', idx2 === pIdx));
        segEls.forEach((s, idx2) => {
          s.style.opacity = idx2 === pIdx ? '1' : '0.45';
        });
      };

      const handState = { deg: 0 };
      const updateHandFromDeg = (deg) => {
        clockHand.setAttribute('transform', `rotate(${deg} 110 110)`);
        const norm = ((deg % 360) + 360) % 360;
        if (norm < 60) setPhaseUI(0);
        else if (norm < 300) setPhaseUI(1);
        else setPhaseUI(2);
      };

      legendRows.forEach((row) => {
        row.addEventListener('click', () => {
          const pIdx = Number(row.dataset.phase);
          gsap.killTweensOf(handState);
          trackTween(
            gsap.to(handState, {
              deg: phases[pIdx].deg,
              duration: 0.5,
              ease: 'power2.out',
              onUpdate: () => updateHandFromDeg(handState.deg)
            })
          );
        });
      });

      canvasEl.querySelector('#vx-replay-btn').addEventListener('click', () => {
        if (onRequestPlayCb) {
          onRequestPlayCb(true);
        } else {
          goToStep(0);
        }
      });

      setPhaseUI(0);

      tl.from('.vx-exam-left > *', { x: -16, opacity: 0, stagger: 0.08, duration: 0.4 })
        .fromTo('.vx-hl-bg', { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: 'power3.out' }, '-=0.2')
        .from('.vx-clock-card', { scale: 0.94, opacity: 0, duration: 0.46, ease: 'back.out(1.2)' }, '-=0.28')
        .from('.vx-pie-seg', { opacity: 0, stagger: 0.2, duration: 0.42 }, '-=0.2')
        .call(() => {
          trackTween(
            gsap.to(handState, {
              deg: 360,
              duration: 7.5,
              ease: 'power1.inOut',
              onUpdate: () => updateHandFromDeg(handState.deg)
            })
          );
        }, null, '-=0.1');
    }

    // Kør den forfinede 3D-kamerabevægelse på `.vx-camera-rig`
    const rigEl = canvasEl.querySelector('.vx-camera-rig');
    animateCameraRig(rigEl, idx);
  }

  function goToStep(idx) {
    currentStep = Math.max(0, Math.min(VOX_SCENES.length - 1, idx));
    updateDots(currentStep);
    renderScene(currentStep);
    if (onStepChangeCb) onStepChangeCb(currentStep, VOX_SCENES.length);
  }

  return {
    totalSteps: VOX_SCENES.length,
    getStepLabel: (i) => VOX_SCENES[i]?.label || '',
    goToStep,
    getCurrentStep: () => currentStep,
    onStepChange(cb) {
      onStepChangeCb = cb;
    },
    onRequestPlay(cb) {
      onRequestPlayCb = cb;
    }
  };
}
