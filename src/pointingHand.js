import * as THREE from 'three';

/**
 * Skulpteret 3D-pegefinger i stilrent keynote-/studie-look.
 * Peger præcist nedad/fremad med en lysende spids-ring, der pulserer ved "tap".
 */
export function createPointingHand() {
  const root = new THREE.Group();
  const hand = new THREE.Group();
  root.add(hand);

  // Stilrent hvidt/porcelæns-mat materiale med blød glans + mørkeblå manchet
  const skinMat = new THREE.MeshStandardMaterial({
    color: 0xf8fafc,
    roughness: 0.28,
    metalness: 0.08
  });

  const jointMat = new THREE.MeshStandardMaterial({
    color: 0xe2e8f0,
    roughness: 0.35,
    metalness: 0.1
  });

  const cuffMat = new THREE.MeshStandardMaterial({
    color: 0x0f172a,
    roughness: 0.4,
    metalness: 0.35
  });

  const accentMat = new THREE.MeshStandardMaterial({
    color: 0x38bdf8,
    emissive: 0x38bdf8,
    emissiveIntensity: 1.2,
    roughness: 0.2,
    metalness: 0.4
  });

  // Håndflade (let affaset blok)
  const palm = new THREE.Mesh(new THREE.BoxGeometry(0.92, 0.32, 0.98), skinMat);
  palm.position.set(0, 0, 0);
  palm.castShadow = true;
  hand.add(palm);

  // Håndled + manchet
  const wrist = new THREE.Mesh(new THREE.BoxGeometry(0.76, 0.28, 0.38), cuffMat);
  wrist.position.set(0, 0.02, -0.66);
  wrist.castShadow = true;
  hand.add(wrist);

  const cuffStripe = new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.3, 0.06), accentMat);
  cuffStripe.position.set(0, 0.02, -0.52);
  hand.add(cuffStripe);

  // Udstrakt pegefinger (3 led langs +Z så spidsen peger præcist frem/ned)
  const indexGroup = new THREE.Group();
  indexGroup.position.set(0.32, 0.02, 0.48);

  const idx1 = new THREE.Mesh(new THREE.CapsuleGeometry(0.115, 0.44, 8, 16), skinMat);
  idx1.rotation.x = Math.PI / 2;
  idx1.position.set(0, 0, 0.28);
  idx1.castShadow = true;
  indexGroup.add(idx1);

  const idx2 = new THREE.Mesh(new THREE.CapsuleGeometry(0.102, 0.36, 8, 16), skinMat);
  idx2.rotation.x = Math.PI / 2 + 0.12;
  idx2.position.set(0, -0.04, 0.72);
  idx2.castShadow = true;
  indexGroup.add(idx2);

  // Lysende markør-spids på pegefingeren
  const tipGlow = new THREE.Mesh(new THREE.SphereGeometry(0.095, 16, 16), accentMat);
  tipGlow.position.set(0, -0.08, 0.96);
  indexGroup.add(tipGlow);

  hand.add(indexGroup);

  // Bøjede fingre (langemand, ringfinger, lillefinger)
  const curledSpecs = [
    { x: 0.08, len: 0.42, r: 0.11 },
    { x: -0.15, len: 0.38, r: 0.105 },
    { x: -0.36, len: 0.32, r: 0.095 }
  ];

  curledSpecs.forEach((f) => {
    const fg = new THREE.Group();
    fg.position.set(f.x, -0.02, 0.46);

    const seg1 = new THREE.Mesh(new THREE.CapsuleGeometry(f.r, f.len * 0.65, 6, 12), jointMat);
    seg1.rotation.x = Math.PI / 2 + 0.85;
    seg1.position.set(0, -0.12, 0.12);
    seg1.castShadow = true;
    fg.add(seg1);

    const seg2 = new THREE.Mesh(new THREE.CapsuleGeometry(f.r * 0.92, f.len * 0.55, 6, 12), skinMat);
    seg2.rotation.x = Math.PI / 2 + 2.05;
    seg2.position.set(0, -0.26, 0.08);
    fg.add(seg2);

    hand.add(fg);
  });

  // Tommelfinger ud til siden
  const thumb = new THREE.Mesh(new THREE.CapsuleGeometry(0.115, 0.44, 8, 14), skinMat);
  thumb.position.set(0.56, -0.06, 0.12);
  thumb.rotation.set(0.35, 0.4, -0.85);
  thumb.castShadow = true;
  hand.add(thumb);

  // Drej hånden så spidsen af pegefingeren peger skråt ned mod kortets top/forside
  hand.rotation.set(0.72, -0.28, -0.15);
  hand.scale.setScalar(0.95);

  // Lysende "tap"-ring der pulserer når pegefingeren rammer en uge
  const ringGeo = new THREE.RingGeometry(0.18, 0.28, 32);
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
    transparent: true,
    opacity: 0,
    side: THREE.DoubleSide
  });
  const tapRing = new THREE.Mesh(ringGeo, ringMat);
  tapRing.rotation.x = -Math.PI / 2;
  tapRing.position.set(0.28, -0.78, 0.62);
  root.add(tapRing);

  // Diskret punktlys ved fingerspidsen så den aktive uge lyser op
  const tipLight = new THREE.PointLight(0x38bdf8, 2.2, 6.5);
  tipLight.position.set(0.28, -0.55, 0.65);
  root.add(tipLight);

  return {
    root,
    hand,
    tapRing,
    tipLight,
    accentMat,
    ringMat,
    setAccentColor(hex) {
      accentMat.color.set(hex);
      accentMat.emissive.set(hex);
      ringMat.color.set(hex);
      tipLight.color.set(hex);
    }
  };
}
