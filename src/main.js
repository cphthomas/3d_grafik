import * as THREE from 'three';
import gsap from 'gsap';
import { COURSE_NODES, STORY_STEPS, THEME_COLORS } from './courseData.js';
import { createPointingHand } from './pointingHand.js';
import { drawHud } from './hudRenderer.js';
import { initMoodleView } from './moodleView.js';
import { initVoxExplainer } from './voxExplainer.js';

const voxLayer = document.getElementById('vox-layer');
const moodleLayer = document.getElementById('moodle-layer');
const threeLayer = document.getElementById('three-layer');
const glCanvas = document.getElementById('gl-canvas');
const hudCanvas = document.getElementById('hud-canvas');
const hudCtx = hudCanvas.getContext('2d');

const controlsEl = document.getElementById('controls');
const btnMode = document.getElementById('btn-mode');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnPlay = document.getElementById('btn-play');
const btnMic = document.getElementById('btn-mic');
const btnDemoVoice = document.getElementById('btn-demo-voice');
const micSelect = document.getElementById('mic-select');
const btnHide = document.getElementById('btn-hide');
const btnRec4k = document.getElementById('btn-rec-4k');
const btnStopRec = document.getElementById('btn-stop-rec');
const recIndicator = document.getElementById('rec-indicator');
const recLabel = document.getElementById('rec-label');
const stepCounter = document.getElementById('step-counter');
const stepSelect = document.getElementById('step-select');

// --- AKTIV TILSTAND: 'vox' (standard), 'moodle' eller 'three' ---
let activeMode = 'vox';
let micEnabled = true;

// --- INIT VOX EXPLAINER & MOODLE-VISNING ---
const voxCtrl = initVoxExplainer(voxLayer);
const moodleCtrl = initMoodleView(moodleLayer);

// --- THREE.JS 3D-TIDSLINJE ---
const scene = new THREE.Scene();
scene.background = new THREE.Color('#070b14');
scene.fog = new THREE.Fog('#070b14', 22, 68);

const camera = new THREE.PerspectiveCamera(40, 16 / 9, 0.1, 160);
camera.position.set(16, 10.5, 22);

const renderer = new THREE.WebGLRenderer({
  canvas: glCanvas,
  antialias: true,
  preserveDrawingBuffer: true,
  powerPreference: 'high-performance'
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.12;

const hemiLight = new THREE.HemisphereLight(0xdbeafe, 0x0f172a, 1.05);
scene.add(hemiLight);

const keyLight = new THREE.DirectionalLight(0xffffff, 1.9);
keyLight.position.set(18, 26, 20);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(2048, 2048);
scene.add(keyLight);

const rimLight = new THREE.DirectionalLight(0x38bdf8, 0.9);
rimLight.position.set(-20, 14, -18);
scene.add(rimLight);

const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(160, 100),
  new THREE.MeshStandardMaterial({ color: 0x080d18, roughness: 0.85, metalness: 0.2 })
);
floor.rotation.x = -Math.PI / 2;
floor.position.set(22, -0.02, 0);
floor.receiveShadow = true;
scene.add(floor);

const grid = new THREE.GridHelper(130, 65, 0x1e3a5f, 0x111c33);
grid.position.set(22, 0, 0);
scene.add(grid);

const CARD_SPACING = 3.1;
const cardMeshes = [];
const olaBeacons = [];

function wrapCardText(ctx, text, x, y, maxW, lh) {
  const words = text.split(' ');
  let line = '';
  let cy = y;
  for (let i = 0; i < words.length; i++) {
    const test = line + words[i] + ' ';
    if (ctx.measureText(test).width > maxW && i > 0) {
      ctx.fillText(line.trim(), x, cy);
      line = words[i] + ' ';
      cy += lh;
    } else {
      line = test;
    }
  }
  if (line.trim()) ctx.fillText(line.trim(), x, cy);
}

function createCardTexture(node, isActive = false) {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 640;
  const ctx = c.getContext('2d');
  const col = THEME_COLORS[node.theme].hex;

  ctx.fillStyle = isActive ? '#111c33' : '#0b1222';
  ctx.fillRect(0, 0, 512, 640);
  ctx.fillStyle = col;
  ctx.fillRect(0, 0, 512, 18);
  ctx.strokeStyle = isActive ? col : 'rgba(148,163,184,0.28)';
  ctx.lineWidth = isActive ? 10 : 4;
  ctx.strokeRect(4, 4, 504, 632);

  ctx.fillStyle = col;
  ctx.font = '700 22px "JetBrains Mono", monospace';
  ctx.fillText(THEME_COLORS[node.theme].label, 34, 72);

  ctx.fillStyle = '#ffffff';
  ctx.font = '800 68px "Inter", sans-serif';
  ctx.fillText(node.code, 34, 158);

  ctx.fillStyle = '#e2e8f0';
  ctx.font = '700 36px "Inter", sans-serif';
  wrapCardText(ctx, node.shortTitle, 34, 224, 444, 44);

  ctx.fillStyle = 'rgba(148,163,184,0.25)';
  ctx.fillRect(34, 330, 444, 2);

  ctx.font = '500 22px "Inter", sans-serif';
  node.bullets.slice(0, 3).forEach((b, idx) => {
    const clean = b.replace('MILEPÆL: ', '');
    ctx.fillStyle = col;
    ctx.fillRect(34, 368 + idx * 54, 10, 10);
    ctx.fillStyle = '#cbd5e1';
    ctx.fillText(clean.length > 32 ? clean.slice(0, 31) + '…' : clean, 56, 381 + idx * 54);
  });

  ctx.fillStyle = '#94a3b8';
  ctx.font = '600 20px "JetBrains Mono", monospace';
  ctx.fillText(node.dates.slice(0, 34), 34, 588);

  if (node.ola) {
    ctx.fillStyle = '#facc15';
    ctx.fillRect(34, 514, 210, 44);
    ctx.fillStyle = '#060911';
    ctx.font = '800 22px "JetBrains Mono", monospace';
    ctx.fillText(`★ ${node.ola.label}`, 52, 544);
  }

  const tex = new THREE.CanvasTexture(c);
  tex.anisotropy = 8;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

const totalLength = (COURSE_NODES.length - 1) * CARD_SPACING;
const rail = new THREE.Mesh(
  new THREE.BoxGeometry(totalLength + 4, 0.08, 0.24),
  new THREE.MeshStandardMaterial({
    color: 0x1e293b,
    emissive: 0x0ea5e9,
    emissiveIntensity: 0.45,
    roughness: 0.3,
    metalness: 0.7
  })
);
rail.position.set(totalLength / 2, 0.05, 0);
scene.add(rail);

COURSE_NODES.forEach((node, idx) => {
  const x = idx * CARD_SPACING;
  const col = new THREE.Color(THEME_COLORS[node.theme].hex);
  const group = new THREE.Group();
  group.position.set(x, 1.85, 0);

  const frontTex = createCardTexture(node, false);
  const activeTex = createCardTexture(node, true);
  const sideMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.45, metalness: 0.5 });
  const frontMat = new THREE.MeshStandardMaterial({ map: frontTex, roughness: 0.32, metalness: 0.12 });

  const cardMesh = new THREE.Mesh(new THREE.BoxGeometry(2.35, 2.95, 0.16), [sideMat, sideMat, sideMat, sideMat, frontMat, sideMat]);
  cardMesh.castShadow = true;
  cardMesh.receiveShadow = true;
  group.add(cardMesh);

  const plinth = new THREE.Mesh(
    new THREE.BoxGeometry(2.42, 0.12, 0.55),
    new THREE.MeshStandardMaterial({ color: 0x0f172a, emissive: col, emissiveIntensity: 0.35, roughness: 0.4, metalness: 0.6 })
  );
  plinth.position.set(0, -1.78, 0);
  group.add(plinth);

  if (node.ola) {
    const beaconMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xfacc15, emissiveIntensity: 0.9, roughness: 0.2, metalness: 0.4 });
    const pillar = new THREE.Mesh(new THREE.BoxGeometry(0.14, 1.55, 0.14), beaconMat);
    pillar.position.set(0, 2.25, -0.15);
    group.add(pillar);
    const diamond = new THREE.Mesh(new THREE.OctahedronGeometry(0.32, 0), beaconMat);
    diamond.position.set(0, 3.25, -0.15);
    group.add(diamond);
    olaBeacons.push(diamond);
  }

  scene.add(group);
  cardMeshes.push({ group, cardMesh, plinth, frontMat, frontTex, activeTex, baseY: 1.85, x });
});

const pointer = createPointingHand();
pointer.root.position.set(0, 5.2, 1.0);
scene.add(pointer.root);

const cameraTarget = new THREE.Vector3(16, 1.8, 0);
const threeState = {
  stepIndex: 0,
  step: STORY_STEPS[0],
  totalSteps: STORY_STEPS.length,
  transitionProgress: 1,
  time: 0
};

function triggerTapPulse() {
  pointer.tapRing.scale.set(0.4, 0.4, 0.4);
  pointer.ringMat.opacity = 0.95;
  gsap.fromTo(pointer.hand.position, { y: 0 }, { y: -0.34, duration: 0.18, yoyo: true, repeat: 1, ease: 'power2.inOut' });
  gsap.to(pointer.tapRing.scale, { x: 3.4, y: 3.4, z: 3.4, duration: 0.65, ease: 'power2.out' });
  gsap.to(pointer.ringMat, { opacity: 0, duration: 0.65, ease: 'power2.out' });
}

function goToThreeStep(index) {
  const clamped = Math.max(0, Math.min(STORY_STEPS.length - 1, index));
  threeState.stepIndex = clamped;
  threeState.step = STORY_STEPS[clamped];
  threeState.transitionProgress = 0;
  gsap.to(threeState, { transitionProgress: 1, duration: 0.55, ease: 'power2.out' });

  const step = threeState.step;
  cardMeshes.forEach((cm, idx) => {
    const isTarget = step.nodeIndex === idx;
    const isOlaHighlight = step.type === 'ola_summary' && Boolean(COURSE_NODES[idx].ola);
    const active = isTarget || isOlaHighlight;
    cm.frontMat.map = active ? cm.activeTex : cm.frontTex;
    cm.frontMat.needsUpdate = true;
    gsap.to(cm.group.position, { y: active ? cm.baseY + 0.55 : cm.baseY, z: active ? 0.65 : 0, duration: 0.75, ease: 'power3.out' });
    gsap.to(cm.plinth.material, { emissiveIntensity: active ? 1.55 : 0.28, duration: 0.6 });
  });

  if (step.type === 'overview') {
    pointer.setAccentColor('#38bdf8');
    gsap.to(camera.position, { x: totalLength * 0.5, y: 12.2, z: 42.0, duration: 1.3, ease: 'power3.inOut' });
    gsap.to(cameraTarget, { x: totalLength * 0.5, y: 1.2, z: 0, duration: 1.3, ease: 'power3.inOut' });
    gsap.to(pointer.root.position, { x: 0.9, y: 4.5, z: 1.2, duration: 1.1, ease: 'power3.inOut' });
  } else if (step.type === 'ola_summary') {
    pointer.setAccentColor('#facc15');
    const midX = 10.5 * CARD_SPACING;
    gsap.to(camera.position, { x: midX, y: 10.4, z: 27.5, duration: 1.2, ease: 'power3.inOut' });
    gsap.to(cameraTarget, { x: midX, y: 1.8, z: 0, duration: 1.2, ease: 'power3.inOut' });
    gsap.to(pointer.root.position, { x: 15 * CARD_SPACING + 0.65, y: 5.5, z: 0.9, duration: 1.1, ease: 'power3.inOut', onComplete: triggerTapPulse });
  } else {
    const targetCard = cardMeshes[step.nodeIndex];
    const node = COURSE_NODES[step.nodeIndex];
    pointer.setAccentColor(THEME_COLORS[node.theme].hex);
    gsap.to(camera.position, { x: targetCard.x + 1.25, y: step.type === 'rhythm' ? 4.8 : 4.4, z: step.type === 'rhythm' ? 10.6 : 9.6, duration: 1.05, ease: 'power3.inOut' });
    gsap.to(cameraTarget, { x: targetCard.x + 0.35, y: 1.95, z: 0.4, duration: 1.05, ease: 'power3.inOut' });
    gsap.to(pointer.root.position, { x: targetCard.x + 0.68, y: 4.35, z: 0.95, duration: 0.85, ease: 'power3.inOut', onComplete: triggerTapPulse });
  }
}

// --- FÆLLES KAPITELSTYRING FOR VOX, MOODLE & 3D ---
function populateDropdown() {
  stepSelect.innerHTML = '';
  if (activeMode === 'vox') {
    for (let i = 0; i < voxCtrl.totalSteps; i++) {
      const opt = document.createElement('option');
      opt.value = String(i);
      opt.textContent = voxCtrl.getStepLabel(i);
      stepSelect.appendChild(opt);
    }
  } else if (activeMode === 'moodle') {
    for (let i = 0; i < moodleCtrl.totalSteps; i++) {
      const opt = document.createElement('option');
      opt.value = String(i);
      opt.textContent = moodleCtrl.getStepLabel(i);
      stepSelect.appendChild(opt);
    }
  } else {
    STORY_STEPS.forEach((s, idx) => {
      const opt = document.createElement('option');
      opt.value = String(idx);
      if (s.type === 'node') {
        const n = COURSE_NODES[s.nodeIndex];
        opt.textContent = `${String(idx + 1).padStart(2, '0')} · ${n.code} — ${n.shortTitle}`;
      } else {
        opt.textContent = `${String(idx + 1).padStart(2, '0')} · ${s.title}`;
      }
      stepSelect.appendChild(opt);
    });
  }
}

function updateStepUi(idx, total) {
  stepCounter.textContent = `${idx + 1} / ${total}`;
  stepSelect.value = String(idx);
}

voxCtrl.onStepChange((idx, total) => {
  if (activeMode === 'vox') updateStepUi(idx, total);
});

voxCtrl.onRequestPlay(() => {
  if (!isAutoPlaying) toggleAutoPlay(true);
});

moodleCtrl.onStepChange((idx, total) => {
  if (activeMode === 'moodle') updateStepUi(idx, total);
});

function getCurrentStep() {
  if (activeMode === 'vox') return voxCtrl.getCurrentStep();
  return activeMode === 'moodle' ? moodleCtrl.getCurrentStep() : threeState.stepIndex;
}

function getTotalSteps() {
  if (activeMode === 'vox') return voxCtrl.totalSteps;
  return activeMode === 'moodle' ? moodleCtrl.totalSteps : STORY_STEPS.length;
}

function goToActiveStep(idx) {
  if (activeMode === 'vox') {
    voxCtrl.goToStep(idx);
  } else if (activeMode === 'moodle') {
    moodleCtrl.goToStep(idx);
  } else {
    goToThreeStep(idx);
    updateStepUi(threeState.stepIndex, STORY_STEPS.length);
  }
}

const MODE_ORDER = ['vox', 'moodle', 'three'];
const MODE_LABELS = { vox: 'Vox → Moodle', moodle: 'Moodle → 3D', three: '3D → Vox' };

function setMode(mode) {
  activeMode = mode;
  voxLayer.classList.toggle('active', mode === 'vox');
  moodleLayer.classList.toggle('active', mode === 'moodle');
  threeLayer.classList.toggle('active', mode === 'three');
  btnMode.textContent = MODE_LABELS[mode];
  populateDropdown();
  if (mode === 'vox') {
    voxCtrl.goToStep(voxCtrl.getCurrentStep());
  } else if (mode === 'moodle') {
    updateStepUi(moodleCtrl.getCurrentStep(), moodleCtrl.totalSteps);
  } else {
    updateStepUi(threeState.stepIndex, STORY_STEPS.length);
  }
}

function cycleMode() {
  const next = MODE_ORDER[(MODE_ORDER.indexOf(activeMode) + 1) % MODE_ORDER.length];
  setMode(next);
}

// --- EKSTERN MIKROFON (MACBOOK / MAC MINI / RODE) ---
async function refreshMicrophones() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) return;
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const mics = devices.filter((d) => d.kind === 'audioinput');
    const prev = micSelect.value;
    micSelect.innerHTML = '';
    if (!mics.length) {
      micSelect.innerHTML = '<option value="default">🎤 Standard mikrofon</option>';
      return;
    }
    let preferredId = '';
    mics.forEach((m, i) => {
      const opt = document.createElement('option');
      opt.value = m.deviceId || 'default';
      const label = m.label || `Mikrofon ${i + 1}`;
      opt.textContent = `🎤 ${label}`;
      micSelect.appendChild(opt);
      // Foretræk automatisk ekstern / Rode-mikrofon på Mac Mini
      if (/rode|røde|usb|external|ekstern|shure|blue|yeti/i.test(label) && !preferredId) {
        preferredId = opt.value;
      }
    });
    if (prev && Array.from(micSelect.options).some((o) => o.value === prev)) {
      micSelect.value = prev;
    } else if (preferredId) {
      micSelect.value = preferredId;
    }
  } catch (_) {
    // Browser viser fulde enhedsnavne efter første mikrofontilladelse
  }
}

refreshMicrophones();
navigator.mediaDevices?.addEventListener?.('devicechange', refreshMicrophones);

async function getMicrophoneStream() {
  if (!micEnabled) return null;
  const chosenId = micSelect.value;
  const audioConstraints =
    chosenId && chosenId !== 'default'
      ? { deviceId: { ideal: chosenId }, echoCancellation: false, noiseSuppression: false, autoGainControl: true }
      : { echoCancellation: false, noiseSuppression: false, autoGainControl: true };
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: audioConstraints });
    // Opdater dropdown med fulde mikrofon-navne (inkl. Rode på Mac Mini) nu hvor tilladelse er givet
    refreshMicrophones();
    return stream;
  } catch (err) {
    alert('Kunne ikke få adgang til mikrofonen. Tjek at browseren har mikrofontilladelse, så optager vi med lyd.');
    return null;
  }
}

// --- 4K VIDEO + MIKROFON-OPTAGELSE ---
let isRecording = false;
let mediaRecorder = null;
let recordedChunks = [];
let recordStartTime = 0;
let compositeCanvas = null;
let compositeCtx = null;
let activeStreamsToStop = [];
let recTimerInterval = null;

function setCanvasResolution(width, height) {
  renderer.setPixelRatio(1);
  renderer.setSize(width, height, false);
  hudCanvas.width = width;
  hudCanvas.height = height;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

function handleResize() {
  if (isRecording && activeMode === 'three') return;
  setCanvasResolution(1920, 1080);
}
window.addEventListener('resize', handleResize);
handleResize();

async function startRecording() {
  if (isRecording) return;

  const micStream = await getMicrophoneStream();
  let videoStream = null;
  activeStreamsToStop = [];
  if (micStream) activeStreamsToStop.push(micStream);

  if (activeMode === 'three') {
    // Ægte 3840x2160 4K direkte fra 3D-canvas
    const W = 3840;
    const H = 2160;
    setCanvasResolution(W, H);
    compositeCanvas = document.createElement('canvas');
    compositeCanvas.width = W;
    compositeCanvas.height = H;
    compositeCtx = compositeCanvas.getContext('2d');
    videoStream = compositeCanvas.captureStream(60);
  } else {
    // Ren optagelse af den aktuelle Moodle-fane (uden browserfaner/værktøjslinjer) i op til 4K
    try {
      videoStream = await navigator.mediaDevices.getDisplayMedia({
        video: {
          width: { ideal: 3840 },
          height: { ideal: 2160 },
          frameRate: { ideal: 60 },
          cursor: 'never'
        },
        audio: false,
        preferCurrentTab: true
      });
      activeStreamsToStop.push(videoStream);
      videoStream.getVideoTracks()[0].addEventListener('ended', () => {
        if (isRecording) stopRecording();
      });
    } catch (_) {
      activeStreamsToStop.forEach((s) => s.getTracks().forEach((t) => t.stop()));
      return;
    }
  }

  isRecording = true;
  controlsEl.classList.add('hidden');
  recIndicator.classList.remove('hidden');

  const combinedTracks = [...videoStream.getVideoTracks()];
  if (micStream) {
    combinedTracks.push(...micStream.getAudioTracks());
  }
  const combinedStream = new MediaStream(combinedTracks);

  const mimeCandidates = [
    'video/webm;codecs=vp9,opus',
    'video/webm;codecs=vp8,opus',
    'video/webm'
  ];
  const mimeType = mimeCandidates.find((m) => MediaRecorder.isTypeSupported(m)) || 'video/webm';

  recordedChunks = [];
  mediaRecorder = new MediaRecorder(combinedStream, {
    mimeType,
    videoBitsPerSecond: 26_000_000,
    audioBitsPerSecond: 192_000
  });

  mediaRecorder.ondataavailable = (e) => {
    if (e.data && e.data.size > 0) recordedChunks.push(e.data);
  };

  mediaRecorder.onstop = () => {
    const blob = new Blob(recordedChunks, { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const prefix = activeMode === 'moodle' ? 'moodle_f27' : 'finansoekonom_3d_4k';
    a.download = `${prefix}_${new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-')}.webm`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 5000);

    activeStreamsToStop.forEach((s) => s.getTracks().forEach((t) => t.stop()));
    activeStreamsToStop = [];
    if (recTimerInterval) clearInterval(recTimerInterval);
    isRecording = false;
    recIndicator.classList.add('hidden');
    controlsEl.classList.remove('hidden');
    handleResize();
  };

  recordStartTime = performance.now();
  recTimerInterval = setInterval(() => {
    const secs = Math.floor((performance.now() - recordStartTime) / 1000);
    const mm = String(Math.floor(secs / 60)).padStart(2, '0');
    const ss = String(secs % 60).padStart(2, '0');
    recLabel.textContent = `OPTAGER ${micStream ? '+ LYD' : '(UDEN LYD)'} · ${mm}:${ss}`;
  }, 500);

  mediaRecorder.start(250);
}

function stopRecording() {
  if (!isRecording || !mediaRecorder) return;
  if (mediaRecorder.state !== 'inactive') {
    mediaRecorder.stop();
  }
}

// --- AUTO-AFSPILNING (SYNKRONISERET MED DANSK STEMME I VOX-TILSTAND) ---
let autoPlayTimer = null;
let isAutoPlaying = false;
let sceneAudio = null;

function stopVoiceAudio() {
  if (sceneAudio) {
    sceneAudio.pause();
    sceneAudio = null;
  }
  btnDemoVoice.classList.remove('active');
  btnDemoVoice.textContent = '🔊 Afspil med stemme';
}

function playSyncedVoxScene(idx) {
  if (!isAutoPlaying || activeMode !== 'vox') return;
  stopVoiceAudio();
  goToActiveStep(idx);

  sceneAudio = new Audio(`./audio/scene_${idx}.mp3?v=4`);
  btnDemoVoice.classList.add('active');
  btnDemoVoice.textContent = '⏹ Stop stemme';

  sceneAudio.addEventListener('ended', () => {
    if (!isAutoPlaying) return;
    if (idx < getTotalSteps() - 1) {
      autoPlayTimer = setTimeout(() => playSyncedVoxScene(idx + 1), 650);
    } else {
      stopAutoPlay();
    }
  });

  sceneAudio.play().catch(() => {
    // Fallback hvis browser blokerer lyd
    autoPlayTimer = setTimeout(() => {
      if (idx < getTotalSteps() - 1) playSyncedVoxScene(idx + 1);
      else stopAutoPlay();
    }, 5500);
  });
}

function stopAutoPlay() {
  isAutoPlaying = false;
  btnPlay.classList.remove('active');
  btnPlay.textContent = '▶ Auto';
  if (autoPlayTimer) {
    clearTimeout(autoPlayTimer);
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }
  stopVoiceAudio();
}

function toggleAutoPlay(withVoice = true) {
  if (isAutoPlaying) {
    stopAutoPlay();
    return;
  }
  isAutoPlaying = true;
  btnPlay.classList.add('active');
  btnPlay.textContent = '⏸ Pause';

  if (activeMode === 'vox' && withVoice) {
    const startIdx = getCurrentStep() >= getTotalSteps() - 1 ? 0 : getCurrentStep();
    playSyncedVoxScene(startIdx);
  } else {
    autoPlayTimer = setInterval(() => {
      if (getCurrentStep() < getTotalSteps() - 1) {
        goToActiveStep(getCurrentStep() + 1);
      } else {
        stopAutoPlay();
      }
    }, 5200);
  }
}

btnMode.addEventListener('click', () => {
  cycleMode();
  btnMode.blur();
});
btnPrev.addEventListener('click', () => {
  goToActiveStep(getCurrentStep() - 1);
  btnPrev.blur();
});
btnNext.addEventListener('click', () => {
  goToActiveStep(getCurrentStep() + 1);
  btnNext.blur();
});
btnPlay.addEventListener('click', () => {
  toggleAutoPlay();
  btnPlay.blur();
});
btnMic.addEventListener('click', () => {
  micEnabled = !micEnabled;
  btnMic.classList.toggle('active', micEnabled);
  btnMic.textContent = micEnabled ? '🎤 TIL' : '🎤 FRA';
  btnMic.blur();
});

// Manuel afspilning af hele Vox-explaineren med synkroniseret dansk kvindestemme
btnDemoVoice.textContent = '🔊 Afspil med stemme';
btnDemoVoice.addEventListener('click', () => {
  if (activeMode !== 'vox') setMode('vox');
  toggleAutoPlay(true);
  btnDemoVoice.blur();
});
micSelect.addEventListener('change', () => micSelect.blur());
btnHide.addEventListener('click', () => {
  controlsEl.classList.toggle('hidden');
  btnHide.blur();
});
btnRec4k.addEventListener('click', () => {
  startRecording();
  btnRec4k.blur();
});
btnStopRec.addEventListener('click', () => {
  stopRecording();
  btnStopRec.blur();
});
stepSelect.addEventListener('change', (e) => {
  goToActiveStep(Number(e.target.value));
  stepSelect.blur();
});

document.addEventListener(
  'keydown',
  (e) => {
    const key = e.key;
    const code = e.code;
    if (code === 'ArrowRight' || key === 'ArrowRight' || code === 'Space' || code === 'PageDown') {
      e.preventDefault();
      e.stopPropagation();
      goToActiveStep(getCurrentStep() + 1);
    } else if (code === 'ArrowLeft' || key === 'ArrowLeft' || code === 'PageUp') {
      e.preventDefault();
      e.stopPropagation();
      goToActiveStep(getCurrentStep() - 1);
    } else if (key === 'Escape' && activeMode === 'moodle') {
      e.preventDefault();
      moodleCtrl.goToStep(0);
    } else if (key.toLowerCase() === 'h') {
      e.preventDefault();
      controlsEl.classList.toggle('hidden');
    } else if (key.toLowerCase() === 'a') {
      e.preventDefault();
      toggleAutoPlay();
    } else if (key.toLowerCase() === 'm') {
      e.preventDefault();
      cycleMode();
    } else if (key.toLowerCase() === 'r') {
      e.preventDefault();
      if (isRecording) stopRecording();
      else startRecording();
    }
  },
  true
);

// --- RENDER LOOP (KUN AKTIV I 3D-TILSTAND) ---
const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  if (activeMode !== 'three') return;

  const t = clock.getElapsedTime();
  threeState.time = t;
  pointer.root.rotation.z = Math.sin(t * 2.2) * 0.04;
  pointer.hand.rotation.x = 0.72 + Math.sin(t * 2.8) * 0.03;

  olaBeacons.forEach((d, idx) => {
    d.rotation.y = t * 1.4 + idx;
    d.position.y = 3.25 + Math.sin(t * 2.5 + idx) * 0.12;
  });

  camera.lookAt(cameraTarget);
  renderer.render(scene, camera);
  drawHud(hudCtx, hudCanvas.width, hudCanvas.height, threeState);

  if (isRecording && compositeCtx) {
    compositeCtx.drawImage(glCanvas, 0, 0);
    compositeCtx.drawImage(hudCanvas, 0, 0);
  }
}

// --- REN VOX VIDEO-AFSPILLER (PLAY / PAUSE + TIDSLINJE-SCRUBBER) ---
const vpBar = document.getElementById('vox-player-bar');
const vpPlay = document.getElementById('vp-play');
const vpTime = document.getElementById('vp-time');
const vpScrubber = document.getElementById('vp-scrubber');
const vpFill = document.getElementById('vp-scrubber-fill');
const vpMute = document.getElementById('vp-mute');
let isMuted = false;

function formatSec(s) {
  const m = Math.floor(s / 60);
  const r = Math.floor(s % 60);
  return `${String(m).padStart(2, '0')}:${String(r).padStart(2, '0')}`;
}

function updatePlayerProgress(idx, sceneFrac = 0) {
  const total = getTotalSteps();
  const pct = Math.min(100, Math.max(0, ((idx + sceneFrac) / total) * 100));
  vpFill.style.width = `${pct}%`;
  vpTime.textContent = formatSec(Math.round((pct / 100) * 62));
  vpPlay.textContent = isAutoPlaying ? '⏸' : '▶';
}

vpPlay.addEventListener('click', () => {
  if (activeMode !== 'vox') setMode('vox');
  toggleAutoPlay(true);
  updatePlayerProgress(getCurrentStep(), 0);
  vpPlay.blur();
});

vpMute.addEventListener('click', () => {
  isMuted = !isMuted;
  if (sceneAudio) sceneAudio.muted = isMuted;
  vpMute.textContent = isMuted ? '🔇' : '🔊';
  vpMute.blur();
});

vpScrubber.addEventListener('click', (e) => {
  const r = vpScrubber.getBoundingClientRect();
  const ratio = Math.min(0.999, Math.max(0, (e.clientX - r.left) / r.width));
  const targetIdx = Math.floor(ratio * getTotalSteps());
  if (isAutoPlaying && activeMode === 'vox') {
    playSyncedVoxScene(targetIdx);
  } else {
    goToActiveStep(targetIdx);
    updatePlayerProgress(targetIdx, 0);
  }
});

// Opdatér video-scrubber løbende — vis kun afspillerbaren når filmen faktisk er startet (eller forbi forside)
setInterval(() => {
  const showBar = activeMode === 'vox' && (isAutoPlaying || getCurrentStep() > 0);
  if (showBar) {
    vpBar.style.display = 'flex';
    const frac = sceneAudio && sceneAudio.duration ? sceneAudio.currentTime / sceneAudio.duration : 0;
    updatePlayerProgress(getCurrentStep(), isAutoPlaying ? frac : 0);
  } else {
    vpBar.style.display = 'none';
  }
}, 200);

// Hvis siden åbnes med ?student=1 (til Moodle-studerende), vis KUN den rene Vox film-afspiller (ingen PowerPoint-knapper!)
const isStudentEmbed = new URLSearchParams(window.location.search).get('student') === '1';
if (isStudentEmbed) {
  controlsEl.style.display = 'none';
}

// Start i den nye Vox-style Explainer!
goToThreeStep(0);
setMode('vox');
animate();
