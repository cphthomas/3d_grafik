import { COURSE_NODES, THEME_COLORS, WEEKLY_RHYTHM } from './courseData.js';

/**
 * Tegner knivskarp 16:9 broadcast-grafik (titel, ugekort, uge-rytme, OLA-overblik)
 * direkte på 2D-canvas, så både forhåndsvisning og 4K-optagelse (3840x2160) får skarp grafik.
 * Alle bokse er skarpe og firkantede (square-ui).
 */
export function drawHud(ctx, width, height, state) {
  const s = width / 1920; // Skaleringsfaktor: 1.0 i 1080p, 2.0 i 4K
  ctx.clearRect(0, 0, width, height);

  const { step, stepIndex, totalSteps, transitionProgress, time } = state;
  const alpha = Math.min(1, Math.max(0, transitionProgress));

  ctx.save();
  ctx.scale(s, s);

  // Subtil top- og bundvignet for læsbarhed
  const topGrad = ctx.createLinearGradient(0, 0, 0, 150);
  topGrad.addColorStop(0, 'rgba(6, 9, 17, 0.72)');
  topGrad.addColorStop(1, 'rgba(6, 9, 17, 0)');
  ctx.fillStyle = topGrad;
  ctx.fillRect(0, 0, 1920, 150);

  const botGrad = ctx.createLinearGradient(0, 740, 0, 1080);
  botGrad.addColorStop(0, 'rgba(6, 9, 17, 0)');
  botGrad.addColorStop(1, 'rgba(6, 9, 17, 0.88)');
  ctx.fillStyle = botGrad;
  ctx.fillRect(0, 740, 1920, 340);

  // TOP-LEFT BRAND BAR
  const activeNode = step.nodeIndex !== undefined ? COURSE_NODES[step.nodeIndex] : null;
  const accentHex = activeNode ? THEME_COLORS[activeNode.theme].hex : '#38bdf8';

  ctx.fillStyle = accentHex;
  ctx.fillRect(64, 48, 6, 46);

  ctx.fillStyle = '#94a3b8';
  ctx.font = '700 14px "JetBrains Mono", monospace';
  ctx.fillText('CPHBUSINESS · FINANSØKONOM (ONLINE) · 1. SEMESTER F27', 84, 65);

  ctx.fillStyle = '#f8fafc';
  ctx.font = '800 22px "Inter", sans-serif';
  const headerLabel =
    step.type === 'node'
      ? `${THEME_COLORS[activeNode.theme].label}`
      : step.type === 'rhythm'
        ? 'UGENS FASTE STRUKTUR'
        : step.type === 'ola_summary'
          ? 'OBLIGATORISKE LÆRINGSAKTIVITETER'
          : 'SEMESTEROVERBLIK';
  ctx.fillText(headerLabel, 84, 92);

  // TOP-RIGHT PROGRESS BAR (17 moduler langs semesteret)
  const barX = 1280;
  const barY = 56;
  const barW = 576;
  const segGap = 4;
  const segW = (barW - segGap * (COURSE_NODES.length - 1)) / COURSE_NODES.length;

  COURSE_NODES.forEach((node, idx) => {
    const x = barX + idx * (segW + segGap);
    const isCurrent = activeNode && step.nodeIndex === idx;
    const isPast = activeNode && idx < step.nodeIndex;
    const col = THEME_COLORS[node.theme].hex;

    ctx.fillStyle = isCurrent ? col : isPast ? col + '99' : 'rgba(148, 163, 184, 0.22)';
    ctx.fillRect(x, isCurrent ? barY - 3 : barY, segW, isCurrent ? 12 : 6);

    // OLA-prik over uge 9, 17 og 20
    if (node.ola) {
      ctx.fillStyle = '#facc15';
      ctx.fillRect(x + segW * 0.5 - 3, barY - 14, 6, 6);
    }
  });

  ctx.fillStyle = '#94a3b8';
  ctx.font = '600 13px "JetBrains Mono", monospace';
  ctx.textAlign = 'right';
  ctx.fillText(`KAPITEL ${String(stepIndex + 1).padStart(2, '0')} / ${String(totalSteps).padStart(2, '0')}`, barX + barW, barY + 30);
  ctx.textAlign = 'left';

  // INDHOLDSKORT AFHÆNGIG AF KAPITELTYPE
  ctx.globalAlpha = alpha;
  const slideOffset = (1 - alpha) * 26;

  if (step.type === 'overview') {
    drawOverviewPanel(ctx, slideOffset);
  } else if (step.type === 'node' && activeNode) {
    drawNodeLowerThird(ctx, activeNode, accentHex, slideOffset);
  } else if (step.type === 'rhythm') {
    drawWeeklyRhythmPanel(ctx, time, slideOffset);
  } else if (step.type === 'ola_summary') {
    drawOlaSummaryPanel(ctx, slideOffset);
  }

  ctx.restore();
}

function drawOverviewPanel(ctx, offsetY) {
  const x = 64;
  const y = 768 + offsetY;
  const w = 1120;
  const h = 236;

  ctx.fillStyle = 'rgba(10, 15, 28, 0.86)';
  ctx.fillRect(x, y, w, h);
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.45)';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(x, y, w, h);

  ctx.fillStyle = '#38bdf8';
  ctx.fillRect(x, y, 8, h);

  ctx.fillStyle = '#f8fafc';
  ctx.font = '800 44px "Inter", sans-serif';
  ctx.fillText('Finansøkonom (online) · 1. semester F27', x + 36, y + 66);

  ctx.fillStyle = '#cbd5e1';
  ctx.font = '400 22px "Inter", sans-serif';
  ctx.fillText('Fra Introprogram og Uge 5 til Eksamen — 15 undervisningsuger, 3 OLA-hæfter og fast uge-rytme.', x + 36, y + 110);

  // Farvekodet tema-forklaring
  const themes = Object.values(THEME_COLORS);
  let lx = x + 36;
  const ly = y + 162;
  themes.forEach((t) => {
    ctx.fillStyle = t.hex;
    ctx.fillRect(lx, ly, 12, 12);
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '700 13px "JetBrains Mono", monospace';
    ctx.fillText(t.label, lx + 20, ly + 11);
    lx += ctx.measureText(t.label).width + 44;
  });

  ctx.fillStyle = '#94a3b8';
  ctx.font = '500 15px "Inter", sans-serif';
  ctx.fillText('Tryk Space / Pil højre for at lade pegefingeren guide dig igennem forløbet.', x + 36, y + 210);
}

function drawNodeLowerThird(ctx, node, accentHex, offsetY) {
  const x = 64;
  const y = 736 + offsetY;
  const w = 1180;
  const h = 276;

  ctx.fillStyle = 'rgba(10, 15, 28, 0.90)';
  ctx.fillRect(x, y, w, h);
  ctx.strokeStyle = accentHex + '88';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(x, y, w, h);

  ctx.fillStyle = accentHex;
  ctx.fillRect(x, y, 8, h);

  // Kode-badge + datoer
  ctx.fillStyle = accentHex;
  ctx.fillRect(x + 32, y + 26, 118, 30);
  ctx.fillStyle = '#060911';
  ctx.font = '800 15px "JetBrains Mono", monospace';
  ctx.textAlign = 'center';
  ctx.fillText(node.code, x + 32 + 59, y + 46);
  ctx.textAlign = 'left';

  ctx.fillStyle = '#94a3b8';
  ctx.font = '600 15px "JetBrains Mono", monospace';
  ctx.fillText(node.dates, x + 168, y + 46);

  // OLA badge hvis denne uge har OLA-deadline
  if (node.ola) {
    const ox = x + w - 280;
    ctx.fillStyle = '#facc15';
    ctx.fillRect(ox, y + 24, 248, 34);
    ctx.fillStyle = '#060911';
    ctx.font = '800 15px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(`★ ${node.ola.label} · ${node.ola.deadline}`, ox + 124, y + 46);
    ctx.textAlign = 'left';
  }

  // Titel & kort opsummering
  ctx.fillStyle = '#ffffff';
  ctx.font = '800 34px "Inter", sans-serif';
  ctx.fillText(node.fullTitle, x + 32, y + 102);

  ctx.fillStyle = '#cbd5e1';
  ctx.font = '400 19px "Inter", sans-serif';
  ctx.fillText(node.summary, x + 32, y + 136);

  // 2x2 gitter med ugens nøgleaktiviteter
  node.bullets.forEach((b, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const bx = x + 32 + col * 565;
    const by = y + 182 + row * 42;

    const isMilestone = b.startsWith('MILEPÆL:');
    ctx.fillStyle = isMilestone ? '#facc15' : accentHex;
    ctx.fillRect(bx, by - 12, 10, 10);

    ctx.fillStyle = isMilestone ? '#fde047' : '#f1f5f9';
    ctx.font = isMilestone ? '700 17px "Inter", sans-serif' : '500 17px "Inter", sans-serif';
    ctx.fillText(b, bx + 22, by - 2);
  });
}

function drawWeeklyRhythmPanel(ctx, time, offsetY) {
  const x = 64;
  const y = 696 + offsetY;
  const w = 1792;
  const h = 316;

  ctx.fillStyle = 'rgba(10, 15, 28, 0.92)';
  ctx.fillRect(x, y, w, h);
  ctx.strokeStyle = 'rgba(245, 158, 11, 0.55)';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(x, y, w, h);

  ctx.fillStyle = '#f59e0b';
  ctx.fillRect(x, y, 8, h);

  ctx.fillStyle = '#f8fafc';
  ctx.font = '800 34px "Inter", sans-serif';
  ctx.fillText('Sådan er hver undervisningsuge bygget op', x + 36, y + 58);

  ctx.fillStyle = '#94a3b8';
  ctx.font = '400 19px "Inter", sans-serif';
  ctx.fillText('Alle uger fra Uge 5 til Uge 19 følger den samme forudsigelige rytme i Moodle:', x + 36, y + 92);

  // Animeret aktivt trin der vandrer hen over de 5 faste trin
  const activeStep = Math.floor((time * 0.65) % WEEKLY_RHYTHM.length);
  const cardW = 324;
  const gap = 24;
  const startX = x + 36;
  const cardY = y + 124;
  const cardH = 158;

  WEEKLY_RHYTHM.forEach((item, idx) => {
    const cx = startX + idx * (cardW + gap);
    const isHi = idx === activeStep;

    ctx.fillStyle = isHi ? 'rgba(245, 158, 11, 0.16)' : 'rgba(15, 23, 42, 0.85)';
    ctx.fillRect(cx, cardY, cardW, cardH);

    ctx.strokeStyle = isHi ? '#f59e0b' : 'rgba(148, 163, 184, 0.25)';
    ctx.lineWidth = isHi ? 2 : 1;
    ctx.strokeRect(cx, cardY, cardW, cardH);

    ctx.fillStyle = isHi ? '#f59e0b' : '#64748b';
    ctx.font = '800 15px "JetBrains Mono", monospace';
    ctx.fillText(`TRIN ${item.step}`, cx + 18, cardY + 34);

    ctx.fillStyle = '#f8fafc';
    ctx.font = '700 20px "Inter", sans-serif';
    ctx.fillText(item.title, cx + 18, cardY + 70);

    ctx.fillStyle = '#cbd5e1';
    ctx.font = '400 15px "Inter", sans-serif';
    drawWrappedText(ctx, item.desc, cx + 18, cardY + 100, cardW - 36, 22);

    // Pil til næste trin
    if (idx < WEEKLY_RHYTHM.length - 1) {
      ctx.fillStyle = isHi ? '#f59e0b' : '#475569';
      ctx.font = '700 20px "JetBrains Mono", monospace';
      ctx.fillText('→', cx + cardW + 4, cardY + 86);
    }
  });
}

function drawOlaSummaryPanel(ctx, offsetY) {
  const x = 64;
  const y = 708 + offsetY;
  const w = 1792;
  const h = 304;

  ctx.fillStyle = 'rgba(10, 15, 28, 0.92)';
  ctx.fillRect(x, y, w, h);
  ctx.strokeStyle = 'rgba(250, 204, 21, 0.65)';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(x, y, w, h);

  ctx.fillStyle = '#facc15';
  ctx.fillRect(x, y, 8, h);

  ctx.fillStyle = '#f8fafc';
  ctx.font = '800 34px "Inter", sans-serif';
  ctx.fillText('Vejen til eksamen: De 3 OLA-hæfter', x + 36, y + 58);

  ctx.fillStyle = '#cbd5e1';
  ctx.font = '400 19px "Inter", sans-serif';
  ctx.fillText('Alle tre Obligatoriske LæringsAktiviteter skal godkendes for at blive indstillet til den mundtlige eksamen.', x + 36, y + 92);

  const olas = [
    { name: 'OLA-HÆFTE 1', date: 'Tirsdag 9. marts kl. 08.00', scope: '4 uger: Uge 5–8 · Sektor, Metode & Statistik', col: '#a855f7' },
    { name: 'OLA-HÆFTE 2', date: 'Tirsdag 4. maj kl. 08.00', scope: '7 uger: Uge 9–11 & 13–16 · Regression, Finansiering & Mikro', col: '#10b981' },
    { name: 'OLA-HÆFTE 3', date: 'Tirsdag 25. maj kl. 08.00', scope: '3 uger: Uge 17–19 · Markedsformer & Driftsøkonomi', col: '#facc15' }
  ];

  const cardW = 552;
  const gap = 32;
  olas.forEach((o, i) => {
    const cx = x + 36 + i * (cardW + gap);
    const cy = y + 124;
    const ch = 148;

    ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
    ctx.fillRect(cx, cy, cardW, ch);
    ctx.strokeStyle = o.col + '99';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(cx, cy, cardW, ch);
    ctx.fillStyle = o.col;
    ctx.fillRect(cx, cy, 6, ch);

    ctx.fillStyle = o.col;
    ctx.font = '800 15px "JetBrains Mono", monospace';
    ctx.fillText(o.name, cx + 22, cy + 36);

    ctx.fillStyle = '#ffffff';
    ctx.font = '800 26px "Inter", sans-serif';
    ctx.fillText(o.date, cx + 22, cy + 76);

    ctx.fillStyle = '#cbd5e1';
    ctx.font = '400 16px "Inter", sans-serif';
    ctx.fillText(o.scope, cx + 22, cy + 114);
  });
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(' ');
  let line = '';
  let currY = y;
  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + ' ';
    if (ctx.measureText(testLine).width > maxWidth && i > 0) {
      ctx.fillText(line.trim(), x, currY);
      line = words[i] + ' ';
      currY += lineHeight;
    } else {
      line = testLine;
    }
  }
  if (line.trim()) {
    ctx.fillText(line.trim(), x, currY);
  }
}
