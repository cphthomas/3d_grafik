import gsap from 'gsap';
import { MOODLE_TILES } from './moodleData.js';

/**
 * INTERAKTIV VOX-STYLE EXPLAINER — EK Finansøkonom (online) 1. semester
 * - Ikke PowerPoint: levende interaktive widgets på hver scene!
 * - Scene 1: 3D-vifte af ægte Moodle-tiles med live muse-parallax
 * - Scene 2: Interaktiv semester-slider (træk fra uge 1 til 15 og se ECTS + OLA lyse op)
 * - Scene 3: "Torsdag kl. 08.00"-simulator der låser Moodle-tiles op én efter én med 3D-flip
 * - Scene 4: Animeret uge-hjul (klik på dagene og se den faste rytme)
 * - Scene 5: Interaktivt metro-kort over de 5 fagområder (inkl. Erhvervsøkonomi: optimering, markedsformer & priselasticitet)
 * - Scene 6: Interaktiv OLA-stempel-maskine (stempl alle 3 OLA-hæfter godkendt for at låse Eksamen op!)
 * - Scene 7: Animeret 30-minutters eksamens-ur (5 min. oplæg + 20 min. samtale + 5 min. votering)
 */
export const VOX_SCENES = [
  { id: 'hook', label: '01 · Finansøkonom online på EK' },
  { id: 'slider', label: '02 · Interaktivt semester-overblik' },
  { id: 'unlock', label: '03 · Sådan åbner dine tiles hver torsdag' },
  { id: 'wheel', label: '04 · Det levende uge-hjul' },
  { id: 'metro', label: '05 · Fagrejsen (5 stationer)' },
  { id: 'ola_stamp', label: '06 · Stempl de 3 OLA-hæfter' },
  { id: 'exam_clock', label: '07 · 30 min. mundtlig eksamen' }
];

const METRO_STATIONS = [
  {
    name: 'Branche & Metode',
    weeks: '2 uger',
    color: '#d97706',
    x: 110,
    y: 165,
    desc: 'Bank, realkredit, forsikring, pension, Excel-pivottabeller og undersøgelsesmetode.'
  },
  {
    name: 'Statistik',
    weeks: '3 uger',
    color: '#9333ea',
    x: 295,
    y: 82,
    desc: 'Deskriptiv statistik, normalfordeling, konfidensintervaller, hypotesetest, regression og Chi².'
  },
  {
    name: 'Finansiering',
    weeks: '3 uger',
    color: '#059669',
    x: 495,
    y: 175,
    desc: 'Rentesregning i Excel, kapitalværdimetoden (NPV), annuitetslån, serielån og kreditter.'
  },
  {
    name: 'Mikroøkonomi',
    weeks: '4 uger',
    color: '#e11d48',
    x: 695,
    y: 86,
    desc: 'Udbud og efterspørgsel, markedsligevægt, markedsformer og offentlig mikropolitik.'
  },
  {
    name: 'Erhvervsøkonomi',
    weeks: '2 uger',
    color: '#2563eb',
    x: 890,
    y: 162,
    desc: 'Optimering, markedsformer, priselasticitet, knap kapacitet, bidragskalkulation og ABC.'
  }
];

export function initVoxExplainer(container) {
  container.innerHTML = `
    <div class="vox-stage" id="vox-stage">
      <div class="vox-paper-grid"></div>
      <div class="vox-top-strip">
        <div class="vox-brand-left">
          <span class="vox-badge-ek">EK</span>
          <span class="vox-brand-sub">FINANSØKONOM (ONLINE) · 1. SEMESTER</span>
        </div>
        <div class="vox-progress-dots" id="vox-progress-dots"></div>
      </div>

      <div class="vox-canvas" id="vox-canvas"></div>
    </div>
  `;

  const canvasEl = container.querySelector('#vox-canvas');
  const dotsEl = container.querySelector('#vox-progress-dots');

  let currentStep = 0;
  let onStepChangeCb = null;
  let onRequestPlayCb = null;
  let activeTimeline = null;
  let cleanupFns = [];

  VOX_SCENES.forEach((sc, idx) => {
    const seg = document.createElement('button');
    seg.className = 'vox-prog-seg';
    seg.title = sc.label;
    seg.addEventListener('click', () => goToStep(idx));
    dotsEl.appendChild(seg);
  });

  function updateDots(idx) {
    Array.from(dotsEl.children).forEach((el, i) => {
      el.classList.toggle('is-active', i === idx);
      el.classList.toggle('is-done', i < idx);
    });
  }

  function runCleanup() {
    cleanupFns.forEach((fn) => fn());
    cleanupFns = [];
  }

  function renderScene(idx) {
    runCleanup();
    if (activeTimeline) activeTimeline.kill();
    const tl = gsap.timeline();
    activeTimeline = tl;

    // Dramatisk 3D-kameraindflyvning + filmisk zoom/pan (aldrig fladt PowerPoint-kamera!)
    gsap.killTweensOf(canvasEl);
    const dir = idx % 2 === 0 ? 1 : -1;
    gsap.fromTo(
      canvasEl,
      { scale: 0.92, rotationY: dir * 7, rotationX: 2.5, x: dir * -24, opacity: 0.25 },
      {
        scale: 1.04,
        rotationY: dir * -3.5,
        rotationX: -1.2,
        x: dir * 16,
        opacity: 1,
        duration: 0.75,
        ease: 'power3.out',
        onComplete: () => {
          // Kontinuerlig dokumentar-kamerakørsel gennem hele scenen
          gsap.to(canvasEl, {
            scale: 1.11,
            rotationY: dir * 3.8,
            rotationX: 1.6,
            x: dir * -14,
            y: -8,
            duration: 7.5,
            ease: 'sine.inOut'
          });
        }
      }
    );

    if (idx === 0) {
      // SCENE 1: INTERAKTIV 3D-VIFTE AF MOODLE-TILES + PARALLAX
      canvasEl.innerHTML = `
        <div class="vx-scene vx-hero-split">
          <div class="vx-hero-left">
            <div class="vx-kicker">EK · INTERAKTIV STUDIEGUIDE</div>
            <h1 class="vx-mega-title">
              Dit 1. semester<br/>
              <span class="vx-hl-wrap"><span class="vx-hl-txt">på ét minut</span><i class="vx-hl-bg"></i></span>
            </h1>
            <p class="vx-lead">Klik, træk og udforsk hvordan online-studiet fungerer — fra første tile i Moodle til den mundtlige prøve.</p>
            <button class="vx-cta-btn vx-cta-hero" id="vx-start-btn">▶ Start turen (med lyd)</button>
          </div>
          <div class="vx-hero-fan" id="vx-hero-fan">
            <div class="vx-fan-card" style="--i:-1.5"><img src="./moodle/tile_02.jpg" alt="" /><span>Introprogram</span></div>
            <div class="vx-fan-card" style="--i:-0.5"><img src="./moodle/tile_03.jpg" alt="" /><span>15 studieuger</span></div>
            <div class="vx-fan-card" style="--i:0.5"><img src="./moodle/tile_20.jpg" alt="" /><span>3 OLA-hæfter</span></div>
            <div class="vx-fan-card" style="--i:1.5"><img src="./moodle/tile_19.jpg" alt="" /><span>Eksamen</span></div>
          </div>
        </div>
      `;

      const fan = canvasEl.querySelector('#vx-hero-fan');
      const onMove = (e) => {
        const r = fan.getBoundingClientRect();
        const dx = ((e.clientX - r.left) / r.width - 0.5) * 22;
        const dy = ((e.clientY - r.top) / r.height - 0.5) * 14;
        gsap.to(fan.querySelectorAll('.vx-fan-card'), {
          x: (i) => (i - 1.5) * 16 + dx * (i - 1.5) * 0.45,
          y: (i) => Math.abs(i - 1.5) * 8 + dy * 0.5,
          rotation: (i) => (i - 1.5) * 6 + dx * 0.25,
          duration: 0.4,
          ease: 'power2.out'
        });
      };
      fan.addEventListener('mousemove', onMove);
      cleanupFns.push(() => fan.removeEventListener('mousemove', onMove));

      canvasEl.querySelector('#vx-start-btn').addEventListener('click', () => {
        if (onRequestPlayCb) onRequestPlayCb();
        else goToStep(1);
      });

      tl.from('.vx-hero-left > *', { y: 20, opacity: 0, stagger: 0.08, duration: 0.45, ease: 'power3.out' })
        .fromTo('.vx-hl-bg', { scaleX: 0 }, { scaleX: 1, duration: 0.6, ease: 'power3.out' }, '-=0.25')
        .from('.vx-fan-card', { y: 40, opacity: 0, rotation: 0, stagger: 0.1, duration: 0.55, ease: 'back.out(1.3)' }, '-=0.35')
        .call(() => {
          // Levende, kontinuerlig 3D-svæven på de 4 Moodle-tiles allerede på forsiden!
          gsap.to(fan.querySelectorAll('.vx-fan-card'), {
            y: (i) => (i % 2 === 0 ? -10 : 10),
            rotation: (i) => (i - 1.5) * 8,
            duration: 2.4,
            stagger: 0.18,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut'
          });
        });
    } else if (idx === 1) {
      // SCENE 2: INTERAKTIV SEMESTER-SLIDER (TRÆK FRA UGE 1 TIL 15)
      canvasEl.innerHTML = `
        <div class="vx-scene vx-slider-scene">
          <div class="vx-kicker">INTERAKTIVT OVERBLIK · TRÆK I SLIDEREN</div>
          <h2 class="vx-title">Se hele rejsen: <span class="vx-hl-wrap"><span class="vx-hl-txt">15 uger · 3 OLA · 30 ECTS</span><i class="vx-hl-bg"></i></span></h2>

          <div class="vx-interactive-box">
            <div class="vx-ring-col">
              <svg viewBox="0 0 160 160" class="vx-ring-svg">
                <circle cx="80" cy="80" r="64" class="vx-ring-bg" />
                <circle cx="80" cy="80" r="64" class="vx-ring-fg" id="vx-ring-fg" />
              </svg>
              <div class="vx-ring-center">
                <div class="vx-ring-big" id="vx-ects-val">2</div>
                <div class="vx-ring-sub">ECTS OPBYGGET</div>
              </div>
            </div>

            <div class="vx-slider-col">
              <div class="vx-week-readout">
                <span class="vx-week-pill" id="vx-week-pill">STUDIEUGE 1 / 15</span>
                <span class="vx-phase-pill" id="vx-phase-pill">Branche & Metode</span>
              </div>
              <h3 class="vx-slider-topic" id="vx-slider-topic">Den finansielle sektor & Excel</h3>
              <p class="vx-slider-note" id="vx-slider-note">Du lærer hele finansbranchen at kende og afleverer din første case torsdag kl. 08.00.</p>

              <input type="range" min="1" max="15" value="1" id="vx-week-range" class="vx-range" />
              <div class="vx-range-marks">
                <span>Uge 1</span>
                <span class="vx-mark-ola" id="m-ola1">★ OLA 1 (Uge 4)</span>
                <span class="vx-mark-ola" id="m-ola2">★ OLA 2 (Uge 11)</span>
                <span class="vx-mark-ola" id="m-ola3">★ OLA 3 (Uge 14)</span>
                <span>Uge 15</span>
              </div>
            </div>
          </div>
        </div>
      `;

      const weekData = [
        ['Branche & Metode', '#d97706', 'Den finansielle sektor & Excel', 'Bank, realkredit, forsikring, pension og første case-aflevering.'],
        ['Branche & Metode', '#d97706', 'Undersøgelsesmetode', 'Videnskabsteori, dataindsamling og kritisk kildevurdering.'],
        ['Statistik', '#9333ea', 'Deskriptiv statistik & Normalfordeling', 'Datatyper, nøgletal, stikprøver og konfidensintervaller.'],
        ['Statistik · OLA 1', '#9333ea', 'Hypotesetest + OLA-hæfte 1', 'Test af middelværdier og andele — saml første OLA-hæfte (uge 1–4).'],
        ['Statistik', '#9333ea', 'Regression & Chi²-test', 'Sammenhænge mellem variable med korrelation og lineær regression.'],
        ['Finansiering', '#059669', 'Rentesregning & Investering', 'Tidsmæssig værdi af penge og kapitalværdimetoden (NPV) i Excel.'],
        ['Finansiering', '#059669', 'Følsomhedsanalyse & Annuitet', 'Beregning af annuitetslån og følsomhed på investeringer.'],
        ['Finansiering', '#059669', 'Lånetyper & Kreditter', 'Serielån, stående lån, afdragsfrie lån og kassekredit.'],
        ['Mikroøkonomi', '#e11d48', 'Udbud, Efterspørgsel & Elasticitet', 'Knaphed, komparative fordele og priselasticitet på markeder.'],
        ['Mikroøkonomi', '#e11d48', 'Markedsligevægt & Mikropolitik', 'Prisdannelse i ligevægt samt afgifter, tilskud og regulering.'],
        ['Mikroøkonomi · OLA 2', '#e11d48', 'Omkostninger, Pris + OLA-hæfte 2', 'Prisoptimering og overskud — saml andet OLA-hæfte (7 uger).'],
        ['Mikroøkonomi', '#e11d48', 'Markedsformer i dybden', 'Fuldkommen konkurrence, monopol, monopolistisk konkurrence og oligopol.'],
        ['Erhvervsøkonomi', '#2563eb', 'Optimering & Knap kapacitet', 'Markedsføringsbidrag, priselasticitet og optimal kapacitetsudnyttelse.'],
        ['Erhvervsøkonomi · OLA 3', '#2563eb', 'Kalkulation & ABC + OLA-hæfte 3', 'Bidrags- og fordelingskalkulation, ABC — saml tredje OLA-hæfte.'],
        ['Repetition & Eksamen', '#ca8a04', 'Tværgående repetition & Eksamensstart', 'Repetitionscase på tværs af hele semestret og udlevering af eksamensopgaven.']
      ];

      const rangeEl = canvasEl.querySelector('#vx-week-range');
      const ringFg = canvasEl.querySelector('#vx-ring-fg');
      const ectsEl = canvasEl.querySelector('#vx-ects-val');
      const weekPill = canvasEl.querySelector('#vx-week-pill');
      const phasePill = canvasEl.querySelector('#vx-phase-pill');
      const topicEl = canvasEl.querySelector('#vx-slider-topic');
      const noteEl = canvasEl.querySelector('#vx-slider-note');
      const circ = 2 * Math.PI * 64;
      ringFg.style.strokeDasharray = String(circ);

      function updateWeek(w) {
        const [phase, col, topic, note] = weekData[w - 1];
        const pct = w / 15;
        ringFg.style.strokeDashoffset = String(circ * (1 - pct));
        ringFg.style.stroke = col;
        ectsEl.textContent = String(w * 2);
        weekPill.textContent = `STUDIEUGE ${w} / 15`;
        phasePill.textContent = phase;
        phasePill.style.background = col;
        topicEl.textContent = topic;
        noteEl.textContent = note;
        canvasEl.querySelector('#m-ola1').classList.toggle('reached', w >= 4);
        canvasEl.querySelector('#m-ola2').classList.toggle('reached', w >= 11);
        canvasEl.querySelector('#m-ola3').classList.toggle('reached', w >= 14);
      }

      rangeEl.addEventListener('input', (e) => updateWeek(Number(e.target.value)));
      updateWeek(1);

      // Automatisk filmisk gennemløb gennem alle 15 uger (kan også trækkes manuelt)
      const demoObj = { w: 1 };
      tl.from('.vx-kicker, .vx-title, .vx-interactive-box', { y: 18, opacity: 0, stagger: 0.08, duration: 0.42 })
        .fromTo('.vx-hl-bg', { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: 'power3.out' }, '-=0.2')
        .to(demoObj, {
          w: 15,
          duration: 6.2,
          delay: 0.25,
          ease: 'none',
          onUpdate: () => {
            const v = Math.round(demoObj.w);
            rangeEl.value = String(v);
            updateWeek(v);
          }
        });
    } else if (idx === 2) {
      // SCENE 3: INTERAKTIV "TORSDAG KL. 08.00"-FRIGIVELSESSIMULATOR MED TILES!
      const sampleTiles = [
        { title: 'Information om semester', img: './moodle/tile_01.jpg', open: true },
        { title: 'Introprogram', img: './moodle/tile_02.jpg', open: true },
        { title: 'Tema 1.1 · Branche', img: './moodle/tile_03.jpg', open: true },
        { title: 'Tema 1.2 · Metode', img: './moodle/tile_04.jpg', open: false },
        { title: 'Tema 1.3 · Statistik', img: './moodle/tile_05.jpg', open: false },
        { title: 'Tema 1.4 · Hypotesetest', img: './moodle/tile_06.jpg', open: false },
        { title: 'Tema 2.1 · Regression', img: './moodle/tile_07.jpg', open: false },
        { title: 'Tema 2.2 · Rente & NPV', img: './moodle/tile_08.jpg', open: false }
      ];

      canvasEl.innerHTML = `
        <div class="vx-scene vx-moodle-map">
          <div class="vx-map-left">
            <div class="vx-kicker">DIT MOODLE-RUM · PRØV SELV</div>
            <h2 class="vx-title">Én ny <span class="vx-hl-wrap"><span class="vx-hl-txt">tile åbner hver torsdag</span><i class="vx-hl-bg"></i></span></h2>
            <p class="vx-lead-sm">Materialet frigives løbende hver torsdag kl. 08.00, så næste tile bliver åben — én uge ad gangen.</p>
            <button class="vx-cta-btn" id="vx-unlock-btn">🔓 Frigiv næste torsdags-tile</button>
          </div>
          <div class="vx-map-right">
            <div class="vx-browser-frame">
              <div class="vx-bf-top"><img src="./moodle/logo.png" alt="EK" /><span>Moodle · Klik på knappen for at åbne næste tile</span></div>
              <div class="vx-unlock-grid" id="vx-unlock-grid">
                ${sampleTiles
                  .map(
                    (t, i) => `
                  <div class="vx-u-tile ${t.open ? 'is-open' : 'is-locked'}" data-i="${i}">
                    <div class="vx-u-img" style="background-image:url('${t.img}')">
                      <span class="vx-u-lock">${t.open ? 'ÅBEN' : '🔒 LÅST'}</span>
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
      `;

      let unlockedCount = 3;
      const unlockNext = () => {
        if (unlockedCount >= sampleTiles.length) {
          unlockedCount = 3;
          canvasEl.querySelectorAll('.vx-u-tile').forEach((el, i) => {
            const open = i < 3;
            el.classList.toggle('is-open', open);
            el.classList.toggle('is-locked', !open);
            el.querySelector('.vx-u-lock').textContent = open ? 'ÅBEN' : '🔒 LÅST';
          });
          return;
        }
        const target = canvasEl.querySelector(`.vx-u-tile[data-i="${unlockedCount}"]`);
        if (target) {
          target.classList.remove('is-locked');
          target.classList.add('is-open');
          target.querySelector('.vx-u-lock').textContent = 'NY · TORSDAG';
          gsap.fromTo(
            target,
            { scale: 0.85, rotationY: -90 },
            { scale: 1.06, rotationY: 0, duration: 0.5, ease: 'back.out(1.4)', onComplete: () => gsap.to(target, { scale: 1, duration: 0.25 }) }
          );
          unlockedCount++;
        }
      };

      canvasEl.querySelector('#vx-unlock-btn').addEventListener('click', unlockNext);
      canvasEl.querySelectorAll('.vx-u-tile').forEach((el) => el.addEventListener('click', unlockNext));

      tl.from('.vx-map-left > *', { x: -20, opacity: 0, stagger: 0.08, duration: 0.42 })
        .fromTo('.vx-hl-bg', { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: 'power3.out' }, '-=0.22')
        .from('.vx-browser-frame', { scale: 0.94, opacity: 0, duration: 0.45 }, '-=0.25')
        .call(unlockNext, null, '+=0.6')
        .call(unlockNext, null, '+=1.4')
        .call(unlockNext, null, '+=1.4');
    } else if (idx === 3) {
      // SCENE 4: INTERAKTIVT UGE-HJUL (KLIK PÅ DAGENE I RYTMEN)
      const wheelSteps = [
        { tag: 'UGE-START', title: 'Intro & Aktiviteter', desc: 'Du ser ugens korte introvideo og løser aktiviteterne individuelt i dit eget tempo.', color: '#0284c7' },
        { tag: 'TORSDAG KL. 08.00', title: 'Aflevering + ny tile åbner', desc: 'Du uploader ugens aktiviteter i Moodle — samtidig åbner løsningsforslag, Kialo og næste uges tile!', color: '#dc2626' },
        { tag: 'TEAMSAMARBEJDE', title: 'Temaprojekt i team', desc: 'I mødes online i jeres faste studieteam og bruger teorien på en virkelighedsnær case.', color: '#d97706' },
        { tag: 'TIRSDAG KL. 08.00', title: 'Temaprojekt-deadline', desc: 'Teamet afleverer temaprojektet ugen efter og svarer hurtigt på ugens TrivselsBarometer.', color: '#002e6d' }
      ];

      canvasEl.innerHTML = `
        <div class="vx-scene vx-wheel-scene">
          <div class="vx-wheel-left">
            <div class="vx-kicker">UGERYTMEN · KLIK PÅ ET TRIN</div>
            <h2 class="vx-title">Samme <span class="vx-hl-wrap"><span class="vx-hl-txt">faste rytme</span><i class="vx-hl-bg"></i></span> hver uge</h2>
            <div class="vx-wheel-card" id="vx-wheel-card">
              <div class="vx-wc-tag" id="vx-wc-tag">TORSDAG KL. 08.00</div>
              <h3 id="vx-wc-title">Aflevering + ny tile åbner</h3>
              <p id="vx-wc-desc">Du uploader ugens aktiviteter i Moodle — samtidig åbner løsningsforslag, Kialo og næste uges tile!</p>
            </div>
          </div>
          <div class="vx-wheel-right">
            <div class="vx-orbit-wrap">
              <div class="vx-orbit-ring"></div>
              <div class="vx-orbit-center">FAST<br/>UGE-LOOP</div>
              ${wheelSteps
                .map(
                  (s, i) => `
                <button class="vx-orbit-node pos-${i}" data-i="${i}" style="--c:${s.color}">
                  <b>0${i + 1}</b>
                  <span>${s.tag}</span>
                </button>
              `
                )
                .join('')}
            </div>
          </div>
        </div>
      `;

      const selectWheel = (i) => {
        const s = wheelSteps[i];
        canvasEl.querySelectorAll('.vx-orbit-node').forEach((n, idx2) => n.classList.toggle('is-active', idx2 === i));
        const tag = canvasEl.querySelector('#vx-wc-tag');
        tag.textContent = s.tag;
        tag.style.background = s.color;
        canvasEl.querySelector('#vx-wc-title').textContent = s.title;
        canvasEl.querySelector('#vx-wc-desc').textContent = s.desc;
        gsap.fromTo('#vx-wheel-card', { y: 8, opacity: 0.7 }, { y: 0, opacity: 1, duration: 0.28, ease: 'power2.out' });
      };

      canvasEl.querySelectorAll('.vx-orbit-node').forEach((btn) => {
        btn.addEventListener('click', () => selectWheel(Number(btn.dataset.i)));
      });
      selectWheel(1);

      tl.from('.vx-wheel-left > *', { x: -18, opacity: 0, stagger: 0.08, duration: 0.4 })
        .fromTo('.vx-hl-bg', { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: 'power3.out' }, '-=0.2')
        .from('.vx-orbit-node', { scale: 0.7, opacity: 0, stagger: 0.1, duration: 0.42, ease: 'back.out(1.4)' }, '-=0.25')
        // Automatisk film-skift gennem alle 4 trin i uge-hjulet!
        .call(() => selectWheel(0), null, '+=0.2')
        .call(() => selectWheel(1), null, '+=1.6')
        .call(() => selectWheel(2), null, '+=1.8')
        .call(() => selectWheel(3), null, '+=1.8');
    } else if (idx === 4) {
      // SCENE 5: INTERAKTIVT METRO-KORT OVER DE 5 FAGOMRÅDER (INGEN BARCHARTS!)
      const pathD = `M ${METRO_STATIONS[0].x} ${METRO_STATIONS[0].y} ` +
        METRO_STATIONS.slice(1)
          .map((s, i) => {
            const p = METRO_STATIONS[i];
            const mx = (p.x + s.x) / 2;
            return `C ${mx} ${p.y}, ${mx} ${s.y}, ${s.x} ${s.y}`;
          })
          .join(' ');

      canvasEl.innerHTML = `
        <div class="vx-scene vx-metro-scene">
          <div class="vx-kicker">FAGREJSEN · KLIK PÅ EN STATION</div>
          <h2 class="vx-title">Fra finanssektoren til <span class="vx-hl-wrap"><span class="vx-hl-txt">erhvervsøkonomi</span><i class="vx-hl-bg"></i></span></h2>

          <div class="vx-metro-board">
            <svg viewBox="0 0 1000 240" class="vx-metro-svg">
              <path d="${pathD}" class="vx-metro-line-bg" />
              <path d="${pathD}" class="vx-metro-line-fg" id="vx-metro-line" />
              ${METRO_STATIONS.map(
                (s, i) => `
                <g class="vx-station" data-i="${i}" transform="translate(${s.x}, ${s.y})">
                  <circle r="18" fill="#ffffff" stroke="${s.color}" stroke-width="6" class="vx-st-circle" />
                  <circle r="7" fill="${s.color}" />
                  <text y="${i % 2 === 0 ? 40 : -28}" text-anchor="middle" class="vx-st-label">${s.name}</text>
                  <text y="${i % 2 === 0 ? 57 : -45}" text-anchor="middle" class="vx-st-weeks">${s.weeks}</text>
                </g>
              `
              ).join('')}
            </svg>
          </div>

          <div class="vx-station-detail" id="vx-station-detail">
            <span class="vx-sd-badge" id="vx-sd-badge">ERHVERVSØKONOMI</span>
            <span class="vx-sd-text" id="vx-sd-text">Optimering, markedsformer, priselasticitet, knap kapacitet, bidragskalkulation og ABC.</span>
          </div>
        </div>
      `;

      const selectStation = (i) => {
        const s = METRO_STATIONS[i];
        const badge = canvasEl.querySelector('#vx-sd-badge');
        badge.textContent = `${s.name.toUpperCase()} · ${s.weeks.toUpperCase()}`;
        badge.style.background = s.color;
        canvasEl.querySelector('#vx-sd-text').textContent = s.desc;
        canvasEl.querySelectorAll('.vx-station').forEach((g, idx2) => g.classList.toggle('is-active', idx2 === i));
      };

      canvasEl.querySelectorAll('.vx-station').forEach((g) => {
        g.addEventListener('click', () => selectStation(Number(g.dataset.i)));
        g.addEventListener('mouseenter', () => selectStation(Number(g.dataset.i)));
      });
      selectStation(4);

      const line = canvasEl.querySelector('#vx-metro-line');
      const len = line.getTotalLength();
      tl.from('.vx-kicker, .vx-title', { y: 16, opacity: 0, stagger: 0.08, duration: 0.4 })
        .fromTo('.vx-hl-bg', { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: 'power3.out' }, '-=0.2')
        .fromTo(line, { strokeDasharray: len, strokeDashoffset: len }, { strokeDashoffset: 0, duration: 1.1, ease: 'power2.inOut' }, '-=0.15')
        .from('.vx-station', { scale: 0.5, opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.5)' }, '-=0.85')
        // Automatisk film-kørsel langs alle 5 stationer i takt med talen!
        .call(() => selectStation(0), null, '+=0.15')
        .call(() => selectStation(1), null, '+=1.35')
        .call(() => selectStation(2), null, '+=1.35')
        .call(() => selectStation(3), null, '+=1.35')
        .call(() => selectStation(4), null, '+=1.35');
    } else if (idx === 5) {
      // SCENE 6: INTERAKTIV OLA-STEMPEL-MASKINE (KLIK FOR AT STEMPLE GODKENDT!)
      canvasEl.innerHTML = `
        <div class="vx-scene vx-olas">
          <div class="vx-kicker">OBLIGATORISKE MILEPÆLE · KLIK FOR AT STEMPLE</div>
          <h2 class="vx-title">Tre <span class="vx-hl-wrap"><span class="vx-hl-txt">OLA-hæfter</span><i class="vx-hl-bg"></i></span> låser eksamen op</h2>
          <div class="vx-ola-cards">
            <button class="vx-ola-card vx-ola-btn" data-ola="1">
              <div class="vx-ola-date">TEMA 1 · 4 UGER</div>
              <h3>OLA-hæfte 1</h3>
              <p>Finanssektoren, metode, statistik og hypotesetest.</p>
              <div class="vx-stamp">GODKENDT ✓</div>
            </button>
            <button class="vx-ola-card vx-ola-btn" data-ola="2">
              <div class="vx-ola-date">TEMA 2 · 7 UGER</div>
              <h3>OLA-hæfte 2</h3>
              <p>Regression, finansiering og mikroøkonomi.</p>
              <div class="vx-stamp">GODKENDT ✓</div>
            </button>
            <button class="vx-ola-card vx-ola-btn" data-ola="3">
              <div class="vx-ola-date">TEMA 3 · 3 UGER</div>
              <h3>OLA-hæfte 3</h3>
              <p>Markedsformer, optimering og kalkulation.</p>
              <div class="vx-stamp">GODKENDT ✓</div>
            </button>
          </div>
          <div class="vx-exam-gate" id="vx-exam-gate">🔒 Indstilling til eksamen: Klik på alle 3 OLA-hæfter ovenfor</div>
        </div>
      `;

      const stamped = new Set();
      const gateEl = canvasEl.querySelector('#vx-exam-gate');
      const toggleStamp = (btn) => {
        const id = btn.dataset.ola;
        if (stamped.has(id)) return;
        stamped.add(id);
        btn.classList.add('is-stamped');
        gsap.fromTo(btn.querySelector('.vx-stamp'), { scale: 2.2, opacity: 0, rotation: -18 }, { scale: 1, opacity: 1, rotation: -8, duration: 0.35, ease: 'back.out(1.7)' });
        if (stamped.size === 3) {
          gateEl.classList.add('is-unlocked');
          gateEl.textContent = '🔓 ALLE 3 OLA GODKENDT — DU ER INDSTILLET TIL 1. INTERNE EKSAMEN!';
          gsap.fromTo(gateEl, { scale: 0.95 }, { scale: 1.02, duration: 0.3, yoyo: true, repeat: 1 });
        } else {
          gateEl.textContent = `🔒 ${stamped.size} af 3 OLA godkendt — klik på de sidste for at låse eksamen op`;
        }
      };

      canvasEl.querySelectorAll('.vx-ola-btn').forEach((btn) => btn.addEventListener('click', () => toggleStamp(btn)));

      tl.from('.vx-kicker, .vx-title', { y: 16, opacity: 0, stagger: 0.08, duration: 0.4 })
        .fromTo('.vx-hl-bg', { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: 'power3.out' }, '-=0.2')
        .from('.vx-ola-btn', { y: 24, opacity: 0, stagger: 0.12, duration: 0.45, ease: 'back.out(1.2)' }, '-=0.15')
        .call(() => toggleStamp(canvasEl.querySelector('.vx-ola-btn[data-ola="1"]')), null, '+=0.55')
        .call(() => toggleStamp(canvasEl.querySelector('.vx-ola-btn[data-ola="2"]')), null, '+=1.2')
        .call(() => toggleStamp(canvasEl.querySelector('.vx-ola-btn[data-ola="3"]')), null, '+=1.2');
    } else {
      // SCENE 7: ANIMERET 30-MINUTTERS EKSAMENS-UR
      canvasEl.innerHTML = `
        <div class="vx-scene vx-exam-split">
          <div class="vx-exam-left">
            <div class="vx-kicker">EKSAMEN · 1. INTERNE</div>
            <h2 class="vx-title">Sådan forløber din <span class="vx-hl-wrap"><span class="vx-hl-txt">mundtlige prøve</span><i class="vx-hl-bg"></i></span></h2>
            <div class="vx-exam-steps">
              <div class="vx-es-row"><b>01 · MOODLE</b><span>Eksamensopgaven udleveres — herefter skriver I projektet.</span></div>
              <div class="vx-es-row"><b>02 · ZOOM</b><span>Fælles kick-off om formalia og mundtlig eksamensbriefing.</span></div>
              <div class="vx-es-row"><b>03 · WISEFLOW</b><span>Aflevering af det skriftlige projekt på WISEflow.</span></div>
              <div class="vx-es-row is-highlight"><b>04 · 30 MIN.</b><span>Individuel mundtlig prøve på Zoom (7-trinsskalaen).</span></div>
            </div>
          </div>
          <div class="vx-exam-right">
            <div class="vx-clock-card">
              <svg viewBox="0 0 200 200" class="vx-clock-svg">
                <circle cx="100" cy="100" r="76" fill="#ffffff" stroke="#111317" stroke-width="3" />
                <!-- 5 min (1/6) = gul, 20 min (4/6) = EK-navy, 5 min votering = grå -->
                <circle cx="100" cy="100" r="56" fill="none" stroke="#f5c518" stroke-width="28" stroke-dasharray="58.6 351.8" stroke-dashoffset="0" transform="rotate(-90 100 100)" class="vx-pie-seg" />
                <circle cx="100" cy="100" r="56" fill="none" stroke="#002e6d" stroke-width="28" stroke-dasharray="234.5 351.8" stroke-dashoffset="-58.6" transform="rotate(-90 100 100)" class="vx-pie-seg" />
                <circle cx="100" cy="100" r="56" fill="none" stroke="#94a3b8" stroke-width="28" stroke-dasharray="58.6 351.8" stroke-dashoffset="-293.1" transform="rotate(-90 100 100)" class="vx-pie-seg" />
                <text x="100" y="96" text-anchor="middle" class="vx-clock-big">30</text>
                <text x="100" y="114" text-anchor="middle" class="vx-clock-sub">MINUTTER</text>
              </svg>
              <div class="vx-clock-legend">
                <div><i style="background:#f5c518"></i> <b>5 min.</b> Egen præsentation (nye vinkler)</div>
                <div><i style="background:#002e6d"></i> <b>20 min.</b> Samtale om projekt & læringsmål</div>
                <div><i style="background:#94a3b8"></i> <b>5 min.</b> Votering & karakter</div>
              </div>
            </div>
          </div>
        </div>
      `;

      tl.from('.vx-exam-left > *', { x: -18, opacity: 0, stagger: 0.08, duration: 0.42 })
        .fromTo('.vx-hl-bg', { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: 'power3.out' }, '-=0.2')
        .from('.vx-clock-card', { scale: 0.9, opacity: 0, duration: 0.5, ease: 'back.out(1.25)' }, '-=0.3')
        .from('.vx-pie-seg', { opacity: 0, stagger: 0.18, duration: 0.45 }, '-=0.2');
    }
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
