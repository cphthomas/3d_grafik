import gsap from 'gsap';
import { MOODLE_TILES } from './moodleData.js';

/**
 * ÆGTE VOX-STYLE EXPLAINER — 100% responsiv (cqw/cqh), 100% datofri (kan genbruges hvert semester)
 * og brandet rent med EK.
 */
export const VOX_SCENES = [
  { id: 'hook', label: '01 · Åbning — Finansøkonom online på 60 sek.' },
  { id: 'numbers', label: '02 · Semestret i tal (15 uger · 3 OLA · 30 ECTS)' },
  { id: 'moodle_map', label: '03 · Sådan ser dit Moodle-rum ud' },
  { id: 'rhythm', label: '04 · Den faste uge-rytme (Torsdag & Tirsdag)' },
  { id: 'blocks', label: '05 · De 5 fagblokke fra Branche til Kalkulation' },
  { id: 'olas', label: '06 · De 3 obligatoriske OLA-hæfter' },
  { id: 'exam', label: '07 · Vejen til 1. interne eksamen' }
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

      <!-- Klassisk Mickey/Anders And-pegefinger som Vox-markør -->
      <div class="vox-hand" id="vox-hand" aria-hidden="true">
        <svg viewBox="0 0 92 104" width="68" height="78" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#vGloveShadow)">
            <path d="M26 78 C24 85, 25 94, 30 96 L64 96 C69 94, 70 85, 67 78 Z" fill="#FFFFFF" stroke="#111317" stroke-width="4" stroke-linejoin="round"/>
            <path d="M28 84 Q47 89 66 84" stroke="#111317" stroke-width="3" fill="none"/>
            <path d="M35 44 L35 14 C35 7.5, 40 4, 45 4 C50 4, 54 7.5, 54 14 L54 38 C57 35, 63 35.5, 66 39 C68.5 41.5, 69 45, 68 48 C72 47, 77 49.5, 78.5 54 C80 58, 78.5 62, 76 65 C78.5 67.5, 78.5 72.5, 75 76 C71.5 79.5, 66 81, 61 81 L33 81 C24 81, 18 75, 16 66 L11 54 C9 48.5, 12 43, 17.5 41.5 C22.5 40, 27 42.5, 29.5 47 L35 54 Z" fill="#FFFFFF" stroke="#111317" stroke-width="4.2" stroke-linejoin="round"/>
            <path d="M54 38 C54 44, 53 48, 52 51" stroke="#111317" stroke-width="3.2" stroke-linecap="round"/>
            <path d="M68 48 C66 53, 64 56, 62 58" stroke="#111317" stroke-width="3.2" stroke-linecap="round"/>
            <path d="M76 65 C73 67, 70 69, 67 70" stroke="#111317" stroke-width="3.2" stroke-linecap="round"/>
            <path d="M38 61 C39 66, 40 71, 40 74" stroke="#111317" stroke-width="3.4" stroke-linecap="round"/>
            <path d="M47 60 C48 66, 48.5 71, 48.5 74.5" stroke="#111317" stroke-width="3.4" stroke-linecap="round"/>
            <path d="M56 62 C56.5 67, 56.5 71, 56 74" stroke="#111317" stroke-width="3.4" stroke-linecap="round"/>
          </g>
          <defs>
            <filter id="vGloveShadow" x="0" y="0" width="92" height="104" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="6" stdDeviation="4" flood-color="#111317" flood-opacity="0.28"/>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  `;

  const canvasEl = container.querySelector('#vox-canvas');
  const dotsEl = container.querySelector('#vox-progress-dots');
  const handEl = container.querySelector('#vox-hand');

  let currentStep = 0;
  let onStepChangeCb = null;
  let activeTimeline = null;

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

  function renderScene(idx) {
    if (activeTimeline) activeTimeline.kill();
    gsap.killTweensOf(handEl);
    gsap.set(handEl, { opacity: 0 });

    const tl = gsap.timeline();
    activeTimeline = tl;

    if (idx === 0) {
      canvasEl.innerHTML = `
        <div class="vx-scene vx-hook">
          <div class="vx-kicker">EK · STUDIEGUIDE TIL 1. SEMESTER</div>
          <h1 class="vx-mega-title">
            Sådan fungerer<br/>
            <span class="vx-hl-wrap"><span class="vx-hl-txt">Finansøkonom online</span><i class="vx-hl-bg"></i></span>
          </h1>
          <p class="vx-lead">Hele dit 1. semester i Moodle — forklaret på ét minut: opstarten, uge-rytmen, OLA-hæfterne og vejen til eksamen.</p>
          <div class="vx-cutout-row">
            <div class="vx-cutout" style="--rot:-2deg"><img src="./moodle/tile_02.jpg" alt="" /><span>Introprogram</span></div>
            <div class="vx-cutout" style="--rot:1.5deg"><img src="./moodle/tile_03.jpg" alt="" /><span>15 studieuger</span></div>
            <div class="vx-cutout" style="--rot:-1deg"><img src="./moodle/tile_20.jpg" alt="" /><span>3 OLA-hæfter</span></div>
            <div class="vx-cutout" style="--rot:1.8deg"><img src="./moodle/tile_19.jpg" alt="" /><span>1. interne eksamen</span></div>
          </div>
        </div>
      `;
      tl.from('.vx-kicker', { y: 14, opacity: 0, duration: 0.38, ease: 'power3.out' })
        .from('.vx-mega-title', { y: 26, opacity: 0, duration: 0.5, ease: 'power3.out' }, '-=0.18')
        .fromTo('.vx-hl-bg', { scaleX: 0 }, { scaleX: 1, duration: 0.6, ease: 'power3.out' }, '-=0.15')
        .from('.vx-lead', { y: 14, opacity: 0, duration: 0.4, ease: 'power2.out' }, '-=0.25')
        .from('.vx-cutout', { y: 28, opacity: 0, stagger: 0.09, duration: 0.45, ease: 'back.out(1.2)' }, '-=0.18');
    } else if (idx === 1) {
      canvasEl.innerHTML = `
        <div class="vx-scene vx-numbers">
          <div class="vx-kicker">KAPITEL 01 · OVERBLIK</div>
          <h2 class="vx-title">Et helt semester kogt ned til <span class="vx-hl-wrap"><span class="vx-hl-txt">fire nøgletal</span><i class="vx-hl-bg"></i></span></h2>
          <div class="vx-stat-grid">
            <div class="vx-stat-card">
              <div class="vx-stat-num" data-target="15">0</div>
              <div class="vx-stat-label">UNDERVISNINGSUGER</div>
              <div class="vx-stat-desc">Hver uge bygger videre på den forrige i en fast og overskuelig struktur.</div>
            </div>
            <div class="vx-stat-card">
              <div class="vx-stat-num" data-target="3">0</div>
              <div class="vx-stat-label">OLA-HÆFTER</div>
              <div class="vx-stat-desc">Obligatoriske afleveringer der skal godkendes før indstilling til eksamen.</div>
            </div>
            <div class="vx-stat-card">
              <div class="vx-stat-num" data-target="6">0</div>
              <div class="vx-stat-label">FAGOMRÅDER</div>
              <div class="vx-stat-desc">Branche, Metode, Statistik, Finansiering, Mikroøkonomi & Driftsøkonomi.</div>
            </div>
            <div class="vx-stat-card vx-stat-dark">
              <div class="vx-stat-num" data-target="30">0</div>
              <div class="vx-stat-label">ECTS-POINT</div>
              <div class="vx-stat-desc">Afsluttes med 1. interne eksamensprojekt og 30 min. mundtlig prøve.</div>
            </div>
          </div>
        </div>
      `;
      tl.from('.vx-kicker, .vx-title', { y: 16, opacity: 0, stagger: 0.08, duration: 0.42 })
        .fromTo('.vx-hl-bg', { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: 'power3.out' }, '-=0.2')
        .from('.vx-stat-card', { y: 26, opacity: 0, stagger: 0.09, duration: 0.45, ease: 'power3.out' }, '-=0.18');

      canvasEl.querySelectorAll('.vx-stat-num').forEach((el) => {
        const end = Number(el.dataset.target);
        const obj = { val: 0 };
        tl.to(
          obj,
          {
            val: end,
            duration: 0.95,
            ease: 'power2.out',
            onUpdate: () => {
              el.textContent = String(Math.round(obj.val));
            }
          },
          0.3
        );
      });
    } else if (idx === 2) {
      const genericLabels = [
        'Information om semester',
        'Introprogram',
        'Tema 1.1 · Branche',
        'Tema 1.2 · Metode',
        'Tema 1.3 · Statistik',
        'Tema 1.4 · Hypotesetest',
        'Tema 2.1 · Regression',
        'Tema 2.2 · Rente & NPV',
        'Tema 2.3 · Annuitet',
        'Tema 2.4 · Finansiering',
        'Tema 2.5 · Mikro',
        'Tema 2.6 · Marked'
      ];
      const tilesHtml = MOODLE_TILES.slice(0, 12)
        .map(
          (t, i) => `
          <div class="vx-mini-tile" data-idx="${i}">
            <div class="vx-mini-img" style="background-image:url('${t.img}')"></div>
            <div class="vx-mini-cap">${genericLabels[i]}</div>
          </div>
        `
        )
        .join('');

      canvasEl.innerHTML = `
        <div class="vx-scene vx-moodle-map">
          <div class="vx-map-left">
            <div class="vx-kicker">KAPITEL 02 · DIT MOODLE-RUM</div>
            <h2 class="vx-title">Alt ligger kronologisk <span class="vx-hl-wrap"><span class="vx-hl-txt">flise for flise</span><i class="vx-hl-bg"></i></span></h2>
            <p class="vx-lead-sm">Du starter øverst fra venstre med <b>Information om semester</b> og <b>Introprogrammet</b> — og derefter følger du uge-fliserne én for én gennem hele semestret.</p>
            <div class="vx-callout">
              <div class="vx-callout-tag">TIP TIL STUDIESTART</div>
              <div>Hold øje med sektionen <b>Information om semester</b> — her finder du altid dit semesters aktuelle frister og ugeplan.</div>
            </div>
          </div>
          <div class="vx-map-right">
            <div class="vx-browser-frame">
              <div class="vx-bf-top"><img src="./moodle/logo.png" alt="EK" /><span>Moodle · Finansøkonom (online) 1. semester</span></div>
              <div class="vx-mini-grid">${tilesHtml}</div>
            </div>
          </div>
        </div>
      `;

      tl.from('.vx-map-left > *', { x: -20, opacity: 0, stagger: 0.09, duration: 0.42, ease: 'power3.out' })
        .fromTo('.vx-hl-bg', { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: 'power3.out' }, '-=0.22')
        .from('.vx-browser-frame', { scale: 0.94, opacity: 0, duration: 0.5, ease: 'power3.out' }, '-=0.3')
        .from('.vx-mini-tile', { scale: 0.88, opacity: 0, stagger: 0.03, duration: 0.32, ease: 'power2.out' }, '-=0.28')
        .call(() => {
          const stageRect = container.getBoundingClientRect();
          const targets = [0, 1, 2].map((i) => canvasEl.querySelector(`.vx-mini-tile[data-idx="${i}"]`)).filter(Boolean);
          if (!targets.length) return;
          const handTl = gsap.timeline();
          targets.forEach((tEl, stepI) => {
            const r = tEl.getBoundingClientRect();
            const x = r.left - stageRect.left + r.width * 0.55 - 34;
            const y = r.top - stageRect.top + r.height * 0.45 - 6;
            handTl.to(handEl, { x, y, opacity: 1, rotation: -10, duration: stepI === 0 ? 0.45 : 0.65, ease: 'power3.inOut' });
            handTl.to(tEl, { scale: 1.12, zIndex: 10, boxShadow: '0 10px 24px rgba(0,46,109,0.32)', borderColor: '#f5c518', duration: 0.25 }, '<0.28');
            if (stepI < targets.length - 1) {
              handTl.to(tEl, { scale: 1, zIndex: 1, boxShadow: 'none', borderColor: '#cbd5e1', duration: 0.25, delay: 0.42 });
            }
          });
        });
    } else if (idx === 3) {
      canvasEl.innerHTML = `
        <div class="vx-scene vx-rhythm">
          <div class="vx-kicker">KAPITEL 03 · UGERYTMEN</div>
          <h2 class="vx-title">Hver uge kører i <span class="vx-hl-wrap"><span class="vx-hl-txt">samme faste rytme</span><i class="vx-hl-bg"></i></span></h2>
          <div class="vx-flow">
            <div class="vx-flow-step">
              <div class="vx-day">UGE-START</div>
              <div class="vx-step-num">01</div>
              <h3>Intro & Aktiviteter</h3>
              <p>Se ugens introvideo og løs de faglige aktiviteter og ugens case individuelt.</p>
            </div>
            <div class="vx-flow-arrow">→</div>
            <div class="vx-flow-step vx-flow-highlight">
              <div class="vx-day vx-day-red">TORSDAG KL. 08.00</div>
              <div class="vx-step-num">02</div>
              <h3>Aflevering</h3>
              <p>Upload ugens aktiviteter i Moodle — derefter åbner løsningsforslag og Kialo.</p>
            </div>
            <div class="vx-flow-arrow">→</div>
            <div class="vx-flow-step">
              <div class="vx-day">TEAMSAMARBEJDE</div>
              <div class="vx-step-num">03</div>
              <h3>Temaprojekt</h3>
              <p>Samarbejd i dit studieteam om ugens virkelighedsnære temaprojekt.</p>
            </div>
            <div class="vx-flow-arrow">→</div>
            <div class="vx-flow-step vx-flow-navy">
              <div class="vx-day vx-day-gold">TIRSDAG KL. 08.00</div>
              <div class="vx-step-num">04</div>
              <h3>Temaprojekt-frist</h3>
              <p>Teamet afleverer temaprojektet ugen efter og udfylder TrivselsBarometer.</p>
            </div>
          </div>
        </div>
      `;
      tl.from('.vx-kicker, .vx-title', { y: 16, opacity: 0, stagger: 0.08, duration: 0.42 })
        .fromTo('.vx-hl-bg', { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: 'power3.out' }, '-=0.2')
        .from('.vx-flow-step, .vx-flow-arrow', { y: 24, opacity: 0, stagger: 0.09, duration: 0.42, ease: 'power3.out' }, '-=0.15');
    } else if (idx === 4) {
      canvasEl.innerHTML = `
        <div class="vx-scene vx-blocks">
          <div class="vx-kicker">KAPITEL 04 · FAGREJSEN</div>
          <h2 class="vx-title">Fra finanssektoren til <span class="vx-hl-wrap"><span class="vx-hl-txt">driftsøkonomi</span><i class="vx-hl-bg"></i></span></h2>
          <div class="vx-bars">
            <div class="vx-bar-row">
              <div class="vx-bar-meta"><b>BLOK 1 · 2 UGER</b><span>Branche & Metode</span></div>
              <div class="vx-bar-track"><div class="vx-bar-fill" style="--w:22%;background:#d97706">Bank, Realkredit, Pension, Excel & Metode</div></div>
            </div>
            <div class="vx-bar-row">
              <div class="vx-bar-meta"><b>BLOK 2 · 3 UGER</b><span>Statistik & Analyse</span></div>
              <div class="vx-bar-track"><div class="vx-bar-fill" style="--w:34%;background:#9333ea">Deskriptiv statistik, Hypotesetest, Regression & Chi²</div></div>
            </div>
            <div class="vx-bar-row">
              <div class="vx-bar-meta"><b>BLOK 3 · 3 UGER</b><span>Finansiering</span></div>
              <div class="vx-bar-track"><div class="vx-bar-fill" style="--w:34%;background:#059669">Rentesregning, NPV, Annuitet, Serielån & Kreditter</div></div>
            </div>
            <div class="vx-bar-row">
              <div class="vx-bar-meta"><b>BLOK 4 · 4 UGER</b><span>Mikroøkonomi</span></div>
              <div class="vx-bar-track"><div class="vx-bar-fill" style="--w:42%;background:#e11d48">Udbud/Efterspørgsel, Elasticitet, Pris & Markedsformer</div></div>
            </div>
            <div class="vx-bar-row">
              <div class="vx-bar-meta"><b>BLOK 5 · 2 UGER</b><span>Driftsøkonomi</span></div>
              <div class="vx-bar-track"><div class="vx-bar-fill" style="--w:26%;background:#2563eb">Knap kapacitet, Bidragskalkulation & ABC</div></div>
            </div>
          </div>
        </div>
      `;
      tl.from('.vx-kicker, .vx-title', { y: 16, opacity: 0, stagger: 0.08, duration: 0.42 })
        .fromTo('.vx-hl-bg', { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: 'power3.out' }, '-=0.2')
        .from('.vx-bar-row', { x: -20, opacity: 0, stagger: 0.09, duration: 0.38 })
        .fromTo('.vx-bar-fill', { scaleX: 0 }, { scaleX: 1, stagger: 0.1, duration: 0.6, ease: 'power3.out' }, '-=0.3');
    } else if (idx === 5) {
      canvasEl.innerHTML = `
        <div class="vx-scene vx-olas">
          <div class="vx-kicker">KAPITEL 05 · OBLIGATORISKE MILEPÆLE</div>
          <h2 class="vx-title">Tre <span class="vx-hl-wrap"><span class="vx-hl-txt">OLA-hæfter</span><i class="vx-hl-bg"></i></span> låser eksamen op</h2>
          <p class="vx-lead-sm">Du samler dine rettede temaprojekter i tre hæfter — dit bedste opslagsværk til den mundtlige prøve. Find dit holds frister i Moodle.</p>
          <div class="vx-ola-rail-wrap">
            <div class="vx-ola-rail"></div>
            <div class="vx-ola-cards">
              <div class="vx-ola-card">
                <div class="vx-ola-dot" style="background:#9333ea"></div>
                <div class="vx-ola-date">TEMA 1 · 4 UGER</div>
                <h3>OLA-hæfte 1</h3>
                <p>Finanssektoren, metode, deskriptiv statistik og hypotesetest.</p>
              </div>
              <div class="vx-ola-card">
                <div class="vx-ola-dot" style="background:#059669"></div>
                <div class="vx-ola-date">TEMA 2 · 7 UGER</div>
                <h3>OLA-hæfte 2</h3>
                <p>Regression, rentesregning, investering, lån og mikroøkonomi.</p>
              </div>
              <div class="vx-ola-card">
                <div class="vx-ola-dot" style="background:#eab308"></div>
                <div class="vx-ola-date">TEMA 3 · 3 UGER</div>
                <h3>OLA-hæfte 3</h3>
                <p>Markedsformer, knap kapacitet og kalkulationsmetoder.</p>
              </div>
            </div>
          </div>
        </div>
      `;
      tl.from('.vx-kicker, .vx-title, .vx-lead-sm', { y: 16, opacity: 0, stagger: 0.08, duration: 0.42 })
        .fromTo('.vx-hl-bg', { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: 'power3.out' }, '-=0.2')
        .fromTo('.vx-ola-rail', { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: 'power3.inOut' }, '-=0.1')
        .from('.vx-ola-card', { y: 26, opacity: 0, stagger: 0.14, duration: 0.45, ease: 'back.out(1.2)' }, '-=0.5');
    } else {
      canvasEl.innerHTML = `
        <div class="vx-scene vx-exam">
          <div class="vx-kicker">KAPITEL 06 · AFSLUTNING</div>
          <h2 class="vx-title">Slutspurten mod <span class="vx-hl-wrap"><span class="vx-hl-txt">1. interne eksamen</span><i class="vx-hl-bg"></i></span></h2>
          <div class="vx-exam-timeline">
            <div class="vx-ex-item">
              <span class="vx-ex-date">TRIN 01 · MOODLE</span>
              <h4>Eksamensopgaven udleveres</h4>
              <p>Opgaven udleveres på Moodle, og I arbejder derefter med det skriftlige projekt.</p>
            </div>
            <div class="vx-ex-item">
              <span class="vx-ex-date">TRIN 02 · ZOOM</span>
              <h4>Kick-off & Eksamensbriefing</h4>
              <p>Fælles gennemgang af formalia og det mundtlige eksamensformat på Zoom.</p>
            </div>
            <div class="vx-ex-item vx-ex-accent">
              <span class="vx-ex-date">TRIN 03 · WISEFLOW</span>
              <h4>Projekt-aflevering</h4>
              <p>Det skriftlige eksamensprojekt afleveres på WISEflow som grundlag for prøven.</p>
            </div>
            <div class="vx-ex-item vx-ex-final">
              <span class="vx-ex-date">TRIN 04 · 30 MIN.</span>
              <h4>Mundtlig prøve på Zoom</h4>
              <p>5 min. egen præsentation med nye vinkler + 20 min. samtale om læringsmålene.</p>
            </div>
          </div>
        </div>
      `;
      tl.from('.vx-kicker, .vx-title', { y: 16, opacity: 0, stagger: 0.08, duration: 0.42 })
        .fromTo('.vx-hl-bg', { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: 'power3.out' }, '-=0.2')
        .from('.vx-ex-item', { y: 24, opacity: 0, stagger: 0.1, duration: 0.45, ease: 'power3.out' }, '-=0.15');
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
    }
  };
}
