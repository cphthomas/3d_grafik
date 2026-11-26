import gsap from 'gsap';
import { MOODLE_TILES } from './moodleData.js';

// Vox-stil kapiteloverskrifter der glider ind ved skift mellem de store faser i semesteret
const CHAPTER_BANNERS = {
  0: { num: '01', title: 'OVERBLIK & OPSTART', sub: 'Introprogram 20/1 · Undervisningsstart 1/2 2027', color: '#0284c7' },
  2: { num: '02', title: 'SEKTOR, METODE & STATISTIK', sub: 'Uge 5–8 samles i OLA-hæfte 1 (9/3)', color: '#d97706' },
  6: { num: '03', title: 'OLA 1 · REGRESSION & FINANSIERING', sub: 'Uge 9–11 & 13–16 samles i OLA-hæfte 2 (4/5)', color: '#059669' },
  13: { num: '04', title: 'OLA 2 · MARKEDSFORMER & DRIFT', sub: 'Uge 17–19 samles i OLA-hæfte 3 (25/5)', color: '#e11d48' },
  16: { num: '05', title: 'REPETITION, OLA 3 & EKSAMEN', sub: 'Eksamensopgave 18/5 · WISEflow 17/6 · Mundtlig 21–22/6', color: '#ca8a04' }
};

/**
 * Vox-style Explainer ovenpå en autentisk kopi af Cphbusiness / EK Moodle F27:
 * - Ægte Moodle-fliser med filmisk kamera-zoom & 3D-løft
 * - Klassisk Mickey Mouse / Anders And-handskehånd med klik-ripple
 * - Animerede Vox gule highlighter-streger under datoer og nøgleord
 * - Animerede SVG OLA-forbindelseslinjer mellem ugerne
 * - Filmiske Netflix/Vox kapitelkort mellem blokkene
 */
export function initMoodleView(container) {
  container.innerHTML = `
    <div class="moodle-shell">
      <!-- EK / Cphbusiness mørkeblå top-navbar (#002e6d) -->
      <header class="m-navbar">
        <div class="m-nav-left">
          <img src="./moodle/logo.png" alt="EK" class="m-logo" />
          <nav class="m-nav-links">
            <span>Betjeningspanel</span>
            <span class="m-nav-active">Mine kurser</span>
          </nav>
        </div>
        <div class="m-nav-right">
          <span class="m-nav-badge">Forår 2027 · VOX EXPLAINER</span>
          <span class="m-avatar">TP</span>
        </div>
      </header>

      <div class="m-workspace" id="m-workspace">
        <!-- Venstre Moodle Indholdsfortegnelse -->
        <aside class="m-sidebar">
          <div class="m-sidebar-top">Finansøkonom (onl…</div>
          <div class="m-sidebar-home" id="m-btn-home">Forside</div>
          <ul class="m-index-list" id="m-index-list"></ul>
        </aside>

        <!-- Hovedområde med Moodle-fliser + Vox kamera-zoom wrapper -->
        <main class="m-main" id="m-main">
          <div class="m-camera-rig" id="m-camera-rig">
            <div class="m-header-bar">
              <div class="m-title-row">
                <h1>Finansøkonom (online) 1. semester F27</h1>
                <span class="m-sem-pill">Forår 2027</span>
              </div>
              <div class="m-secondary-tabs">
                <span class="m-tab-active">Kursus</span>
                <span>Indstillinger</span>
                <span>Deltagere</span>
                <span>Karakterer</span>
                <span>Aktiviteter</span>
                <span>Mere ▾</span>
              </div>
            </div>

            <div class="m-grid-wrap">
              <div class="m-grid" id="m-grid"></div>
              <!-- Animeret Vox SVG-lag til OLA-forbindelseslinjer hen over Moodle-fliserne -->
              <svg class="m-vox-lines" id="m-vox-lines" aria-hidden="true"></svg>
            </div>
          </div>
        </main>
      </div>

      <!-- Filmisk vignet + sløret baggrund + forstørret aktiv Moodle-flise -->
      <div class="m-spotlight-backdrop" id="m-backdrop"></div>
      <div class="m-spotlight-card" id="m-spotlight" aria-hidden="true"></div>

      <!-- Vox / Netflix kapitel-banner (glider kort ind ved faseskift) -->
      <div class="vox-chapter-banner" id="vox-chapter-banner" aria-hidden="true">
        <div class="vox-ch-num" id="vox-ch-num">01</div>
        <div class="vox-ch-body">
          <div class="vox-ch-title" id="vox-ch-title">OVERBLIK & OPSTART</div>
          <div class="vox-ch-sub" id="vox-ch-sub"></div>
        </div>
        <div class="vox-ch-bar" id="vox-ch-bar"></div>
      </div>

      <!-- Klik-ripple + Mickey Mouse / Anders And-handskehånd -->
      <div class="m-ripple" id="m-ripple"></div>
      <div class="m-hand" id="m-hand" aria-hidden="true">
        <svg viewBox="0 0 92 104" width="84" height="94" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#gloveShadow)">
            <path d="M26 78 C24 85, 25 94, 30 96 L64 96 C69 94, 70 85, 67 78 Z" fill="#FFFFFF" stroke="#111827" stroke-width="4" stroke-linejoin="round"/>
            <path d="M28 84 Q47 89 66 84" stroke="#111827" stroke-width="3" fill="none"/>
            <path d="M35 44
                     L35 14 C35 7.5, 40 4, 45 4 C50 4, 54 7.5, 54 14 L54 38
                     C57 35, 63 35.5, 66 39 C68.5 41.5, 69 45, 68 48
                     C72 47, 77 49.5, 78.5 54 C80 58, 78.5 62, 76 65
                     C78.5 67.5, 78.5 72.5, 75 76 C71.5 79.5, 66 81, 61 81
                     L33 81 C24 81, 18 75, 16 66
                     L11 54 C9 48.5, 12 43, 17.5 41.5 C22.5 40, 27 42.5, 29.5 47
                     L35 54 Z"
                  fill="#FFFFFF" stroke="#111827" stroke-width="4.2" stroke-linejoin="round" stroke-linecap="round"/>
            <path d="M54 38 C54 44, 53 48, 52 51" stroke="#111827" stroke-width="3.2" stroke-linecap="round"/>
            <path d="M68 48 C66 53, 64 56, 62 58" stroke="#111827" stroke-width="3.2" stroke-linecap="round"/>
            <path d="M76 65 C73 67, 70 69, 67 70" stroke="#111827" stroke-width="3.2" stroke-linecap="round"/>
            <path d="M38 61 C39 66, 40 71, 40 74" stroke="#111827" stroke-width="3.4" stroke-linecap="round"/>
            <path d="M47 60 C48 66, 48.5 71, 48.5 74.5" stroke="#111827" stroke-width="3.4" stroke-linecap="round"/>
            <path d="M56 62 C56.5 67, 56.5 71, 56 74" stroke="#111827" stroke-width="3.4" stroke-linecap="round"/>
          </g>
          <defs>
            <filter id="gloveShadow" x="0" y="0" width="92" height="104" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="6" stdDeviation="4" flood-color="#001638" flood-opacity="0.38"/>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  `;

  const gridEl = container.querySelector('#m-grid');
  const linesSvg = container.querySelector('#m-vox-lines');
  const indexEl = container.querySelector('#m-index-list');
  const homeBtn = container.querySelector('#m-btn-home');
  const backdropEl = container.querySelector('#m-backdrop');
  const spotlightEl = container.querySelector('#m-spotlight');
  const handEl = container.querySelector('#m-hand');
  const rippleEl = container.querySelector('#m-ripple');
  const mainEl = container.querySelector('#m-main');
  const cameraRig = container.querySelector('#m-camera-rig');

  const chBanner = container.querySelector('#vox-chapter-banner');
  const chNum = container.querySelector('#vox-ch-num');
  const chTitle = container.querySelector('#vox-ch-title');
  const chSub = container.querySelector('#vox-ch-sub');
  const chBar = container.querySelector('#vox-ch-bar');

  const tileEls = [];
  const indexEls = [];

  MOODLE_TILES.forEach((tile, idx) => {
    const li = document.createElement('li');
    li.className = 'm-index-item';
    li.innerHTML = `<span class="m-idx-dot" style="background:${tile.accent}"></span><span class="m-idx-text">${tile.title}</span>${tile.ola ? '<span class="m-idx-ola">OLA</span>' : ''}`;
    li.addEventListener('click', () => selectIndex(idx + 1));
    indexEl.appendChild(li);
    indexEls.push(li);

    const card = document.createElement('div');
    card.className = 'm-tile';
    card.dataset.index = String(idx);
    card.innerHTML = `
      <div class="m-tile-img" style="background-image:url('${tile.img}')">
        ${tile.ola ? `<span class="m-tile-ola-badge">★ ${tile.ola}</span>` : ''}
      </div>
      <div class="m-tile-footer">
        <div class="m-tile-title">${tile.title}</div>
        <div class="m-tile-count">${tile.count}</div>
      </div>
    `;

    card.addEventListener('mouseenter', () => {
      if (!spotlightEl.classList.contains('open')) {
        hoverTile(idx);
      }
    });
    card.addEventListener('click', () => selectIndex(idx + 1));

    gridEl.appendChild(card);
    tileEls.push(card);
  });

  homeBtn.addEventListener('click', () => selectIndex(0));

  let currentStep = 0;
  let onStepChangeCb = null;
  let bannerTimeout = null;

  function showChapterBanner(tileIndex) {
    const ch = CHAPTER_BANNERS[tileIndex];
    if (!ch) return;
    clearTimeout(bannerTimeout);
    chNum.textContent = ch.num;
    chTitle.textContent = ch.title;
    chSub.textContent = ch.sub;
    chBar.style.background = ch.color;
    chNum.style.background = ch.color;

    gsap.killTweensOf(chBanner);
    gsap.fromTo(
      chBanner,
      { x: -40, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.42, ease: 'power3.out' }
    );
    gsap.fromTo(chBar, { scaleX: 0 }, { scaleX: 1, duration: 0.6, delay: 0.12, ease: 'power2.out' });

    bannerTimeout = setTimeout(() => {
      gsap.to(chBanner, { x: -24, opacity: 0, duration: 0.35, ease: 'power2.in' });
    }, 3400);
  }

  // Tegner levende Vox-forbindelseslinje over Moodle-gitteret mellem uger i samme OLA-gruppe
  function drawVoxOlaConnector(tileIndex) {
    linesSvg.innerHTML = '';
    const groups = [
      { indices: [2, 3, 4, 5, 6], color: '#eab308', label: 'OLA 1 (Uge 5–8 → 9/3)' },
      { indices: [6, 7, 8, 9, 10, 11, 12, 13], color: '#10b981', label: 'OLA 2 (Uge 9–16 → 4/5)' },
      { indices: [13, 14, 15, 16], color: '#f59e0b', label: 'OLA 3 (Uge 17–19 → 25/5)' }
    ];
    const grp = groups.find((g) => g.indices.includes(tileIndex));
    if (!grp) return;

    const wrapRect = gridEl.getBoundingClientRect();
    linesSvg.setAttribute('width', String(wrapRect.width));
    linesSvg.setAttribute('height', String(wrapRect.height));

    const pts = grp.indices
      .map((i) => tileEls[i])
      .filter(Boolean)
      .map((el) => {
        const r = el.getBoundingClientRect();
        return { x: r.left - wrapRect.left + r.width * 0.5, y: r.top - wrapRect.top + r.height * 0.5 };
      });

    if (pts.length < 2) return;
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
      d += ` L ${pts[i].x} ${pts[i].y}`;
    }

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', d);
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', grp.color);
    path.setAttribute('stroke-width', '4');
    path.setAttribute('stroke-dasharray', '10 6');
    path.setAttribute('opacity', '0.88');
    linesSvg.appendChild(path);

    const len = path.getTotalLength();
    gsap.fromTo(
      path,
      { strokeDasharray: `${len}`, strokeDashoffset: len },
      { strokeDashoffset: 0, duration: 0.9, ease: 'power2.out' }
    );
  }

  function hoverTile(tileIndex) {
    const cardEl = tileEls[tileIndex];
    if (!cardEl) return;

    tileEls.forEach((el, i) => {
      if (i === tileIndex) {
        el.classList.add('is-hovered');
        gsap.to(el, { scale: 1.12, y: -10, zIndex: 18, duration: 0.3, ease: 'power3.out' });
      } else {
        el.classList.remove('is-hovered');
        gsap.to(el, { scale: 1, y: 0, zIndex: 1, duration: 0.25, ease: 'power2.out' });
      }
    });

    const shellRect = container.getBoundingClientRect();
    const tRect = cardEl.getBoundingClientRect();
    const targetX = tRect.left - shellRect.left + tRect.width * 0.62 - 41;
    const targetY = tRect.top - shellRect.top + tRect.height * 0.56 - 6;

    gsap.killTweensOf(handEl);
    gsap.to(handEl, { x: targetX, y: targetY, rotation: -12, opacity: 1, scale: 1, duration: 0.42, ease: 'power3.out' });
  }

  function moveHandToTileAndClick(tileIndex, onArrive) {
    const cardEl = tileEls[tileIndex];
    if (!cardEl) return;

    drawVoxOlaConnector(tileIndex);

    tileEls.forEach((el, i) => {
      const isTarget = i === tileIndex;
      el.classList.toggle('is-selected', isTarget);
      gsap.to(el, {
        scale: isTarget ? 1.16 : 0.98,
        y: isTarget ? -12 : 0,
        opacity: isTarget ? 1 : 0.72,
        zIndex: isTarget ? 20 : 1,
        duration: 0.42,
        ease: 'power3.out'
      });
    });

    indexEls.forEach((el, i) => el.classList.toggle('is-active', i === tileIndex));

    // Subtil Vox kamera-zoom ind mod hele Moodle-fladen
    gsap.to(cameraRig, { scale: 1.035, duration: 0.55, ease: 'power2.out' });

    const shellRect = container.getBoundingClientRect();
    const tRect = cardEl.getBoundingClientRect();
    const targetX = tRect.left - shellRect.left + tRect.width * 0.58 - 41;
    const targetY = tRect.top - shellRect.top + tRect.height * 0.52 - 6;

    gsap.killTweensOf(handEl);
    gsap.to(handEl, {
      x: targetX,
      y: targetY,
      rotation: -10,
      opacity: 1,
      scale: 1,
      duration: 0.55,
      ease: 'power3.inOut',
      onComplete: () => {
        gsap.fromTo(
          handEl,
          { scale: 1, y: targetY, rotation: -10 },
          { scale: 0.86, y: targetY + 9, rotation: -16, duration: 0.13, yoyo: true, repeat: 1, ease: 'power2.inOut' }
        );

        gsap.set(rippleEl, { x: targetX + 41 - 28, y: targetY + 6 - 28, scale: 0.2, opacity: 0.95 });
        gsap.to(rippleEl, { scale: 2.5, opacity: 0, duration: 0.55, ease: 'power2.out' });

        if (onArrive) setTimeout(onArrive, 220);
      }
    });
  }

  function resetAllTiles() {
    linesSvg.innerHTML = '';
    gsap.to(cameraRig, { scale: 1, duration: 0.45, ease: 'power2.out' });
    tileEls.forEach((el) => {
      el.classList.remove('is-selected', 'is-hovered');
      gsap.to(el, { scale: 1, y: 0, opacity: 1, zIndex: 1, duration: 0.32, ease: 'power2.out' });
    });
  }

  function closeSpotlight() {
    gsap.to(backdropEl, { opacity: 0, duration: 0.3, onComplete: () => backdropEl.classList.remove('open') });
    gsap.to(spotlightEl, {
      opacity: 0,
      scale: 0.86,
      y: 22,
      duration: 0.28,
      ease: 'power2.in',
      onComplete: () => spotlightEl.classList.remove('open')
    });
    resetAllTiles();
    indexEls.forEach((el) => el.classList.remove('is-active'));
  }

  function openSpotlightForTile(tileIndex) {
    const tile = MOODLE_TILES[tileIndex];
    const cardEl = tileEls[tileIndex];

    showChapterBanner(tileIndex);
    cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });

    const kindBadge = (k) => {
      if (k === 'assign') return '<span class="m-act-badge m-act-assign">AFLEVERING</span>';
      if (k === 'ola') return '<span class="m-act-badge m-act-ola">★ OLA / EKSAMEN</span>';
      if (k === 'quiz') return '<span class="m-act-badge m-act-quiz">QUIZ</span>';
      if (k === 'page') return '<span class="m-act-badge m-act-page">SIDE</span>';
      return '<span class="m-act-badge m-act-link">AKTIVITET</span>';
    };

    const renderAndPop = () => {
      spotlightEl.innerHTML = `
        <div class="m-spot-accent" style="background:${tile.accent}"></div>
        <div class="m-spot-grid">
          <div class="m-spot-media">
            <img src="${tile.img}" alt="${tile.title}" class="m-spot-img" />
            <div class="m-spot-meta">
              <span class="m-spot-tag" style="background:${tile.accent}">${tile.tag}</span>
              ${tile.ola ? `<span class="m-spot-ola">★ ${tile.ola}</span>` : ''}
            </div>
            <div class="m-spot-dates">
              <span class="vox-highlight"><span>${tile.dates}</span><i class="vox-hl-fill"></i></span>
            </div>
            <p class="m-spot-summary">${tile.summary}</p>
          </div>
          <div class="m-spot-content">
            <div class="m-spot-top">
              <div>
                <div class="m-spot-kicker">MOODLE · FINANSØKONOM 1. SEMESTER F27</div>
                <h2 class="m-spot-title">${tile.title}${tile.subtitle ? ` — <span>${tile.subtitle}</span>` : ''}</h2>
              </div>
              <button class="m-spot-close" id="m-spot-close" title="Tilbage til Moodle-oversigt (Esc)">✕</button>
            </div>
            <div class="m-spot-list-label">INDHOLD I DENNE SEKTION (${tile.count.toUpperCase()})</div>
            <ul class="m-spot-activities">
              ${tile.activities
                .map(
                  (a) => `
                <li class="m-spot-act-item ${a.kind === 'ola' ? 'is-ola' : ''}">
                  ${kindBadge(a.kind)}
                  <span class="m-act-text">${a.label}</span>
                </li>
              `
                )
                .join('')}
            </ul>
          </div>
        </div>
      `;

      spotlightEl.querySelector('#m-spot-close').addEventListener('click', () => selectIndex(0));

      backdropEl.classList.add('open');
      spotlightEl.classList.add('open');

      gsap.to(backdropEl, { opacity: 1, duration: 0.32, ease: 'power2.out' });
      gsap.fromTo(
        spotlightEl,
        { opacity: 0, scale: 0.72, y: 34 },
        { opacity: 1, scale: 1, y: 0, duration: 0.48, ease: 'back.out(1.2)' }
      );

      // Vox animeret gul overstregningstusch under deadline-datoerne!
      gsap.fromTo(
        spotlightEl.querySelectorAll('.vox-hl-fill'),
        { scaleX: 0 },
        { scaleX: 1, duration: 0.65, delay: 0.32, ease: 'power3.out' }
      );

      gsap.fromTo(
        spotlightEl.querySelectorAll('.m-spot-act-item'),
        { opacity: 0, x: 18 },
        { opacity: 1, x: 0, duration: 0.32, stagger: 0.055, delay: 0.16, ease: 'power2.out' }
      );

      // Flyt Mickey-handsken pænt ned mod billedet i venstre side af kortet, så den ikke dækker teksten
      const sRect = container.getBoundingClientRect();
      gsap.to(handEl, {
        x: sRect.width * 0.11,
        y: sRect.height * 0.44,
        rotation: 22,
        scale: 0.92,
        duration: 0.55,
        ease: 'power3.out'
      });
    };

    setTimeout(() => {
      moveHandToTileAndClick(tileIndex, renderAndPop);
    }, 180);
  }

  function selectIndex(stepIdx) {
    const total = MOODLE_TILES.length + 1;
    currentStep = Math.max(0, Math.min(total - 1, stepIdx));

    if (currentStep === 0) {
      closeSpotlight();
      mainEl.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => hoverTile(1), 220);
    } else {
      if (spotlightEl.classList.contains('open')) {
        gsap.to(spotlightEl, { opacity: 0, scale: 0.88, duration: 0.2 });
        gsap.to(backdropEl, {
          opacity: 0,
          duration: 0.2,
          onComplete: () => {
            backdropEl.classList.remove('open');
            spotlightEl.classList.remove('open');
            openSpotlightForTile(currentStep - 1);
          }
        });
      } else {
        openSpotlightForTile(currentStep - 1);
      }
    }

    if (onStepChangeCb) onStepChangeCb(currentStep, total);
  }

  backdropEl.addEventListener('click', () => selectIndex(0));
  gsap.set(handEl, { x: 480, y: 210, rotation: -12, opacity: 1 });

  return {
    totalSteps: MOODLE_TILES.length + 1,
    getStepLabel(i) {
      if (i === 0) return '01 · Moodle F27 — Fuld oversigt';
      const t = MOODLE_TILES[i - 1];
      return `${String(i + 1).padStart(2, '0')} · ${t.title}${t.subtitle ? ` — ${t.subtitle}` : ''}`;
    },
    goToStep: selectIndex,
    getCurrentStep: () => currentStep,
    onStepChange(cb) {
      onStepChangeCb = cb;
    }
  };
}
