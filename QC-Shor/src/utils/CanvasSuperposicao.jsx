import React, { useRef, useEffect } from "react";

export default function QuantumVsClassicCanvas({
  width = 500,
  height = 200,
  maxN = 25,
  alvo = 91,
  speed = 5, //quanto maior, mais lento
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const stateRef = useRef({
    frame: 0,
    n: 1,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // handle devicePixelRatio for sharp canvas
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // visual layout metrics
    const padding = 24;
    const lineYTop = 70;
    const lineYBottom = 170;
    const centerX = width / 2;
    const symbolX = centerX;
    const leftX = 60;
    const rightX = width - 120;
    const fontFamily = "monospace";

    // prepare list of numbers for "quantum" line
    const quantumNumbers = Array.from({ length: maxN || 40 }, (_, i) => i + 1);

    function draw() {
      const { frame, n } = stateRef.current;

      // Clear background
      ctx.fillStyle = "#0f1720";
      ctx.fillRect(0, 0, width, height);

      // Header text
      ctx.fillStyle = "#e6eef6";
      ctx.font = `16px ${fontFamily}`;
      ctx.textAlign = "center";
      ctx.fillText("Computação Clássica (testa um por vez)", width / 2, 30);
      ctx.fillText("Computação Quântica (superposição de valores)", width / 2, 130);

      // ---------- LINHA CLÁSSICA ----------

      // number that increments (classical)
      ctx.font = `36px ${fontFamily}`;
      ctx.fillStyle = "#00d4ff";
      ctx.textAlign = "right";
      ctx.fillText(String(n), centerX - 110, lineYTop);

      // division symbol
      ctx.textAlign = "center";
      ctx.fillStyle = "#ffffff";
      ctx.fillText("=", symbolX, lineYTop - 4);

      // alvo (target) à direita
      ctx.textAlign = "left";
      ctx.fillStyle = "#ffb86b";
      ctx.font = `28px ${fontFamily}`;
      ctx.fillText(String(alvo), rightX, lineYTop - 6);

      // ---------- LINHA QUÂNTICA ----------

      // draw superposed numbers (quantum)
      // We'll render numbers in same x, with slight jitter and low alpha
      const qx = centerX - 110;
      ctx.font = `28px ${fontFamily}`;
      for (let i = 0; i < quantumNumbers.length; i++) {
        const val = quantumNumbers[i];

        // jitter that slowly oscillates to create subtle motion (not pure random every frame)
        const jitterX = Math.sin((frame + i * 7) * 0.03) * 12 + (Math.cos((i * 13) * 0.05) * 6);
        const jitterY = Math.cos((frame + i * 5) * 0.02) * 12 + (Math.sin(i * 11) * 2);

        // color + alpha: closer to center index -> stronger alpha
        const alpha = 0.09 + 0.9 * (1 - Math.abs((i / quantumNumbers.length) - 0.5));
        ctx.fillStyle = `rgba(0,220,170,${alpha.toFixed(3)})`;

        ctx.textAlign = "right";
        ctx.fillText(String(val), qx + jitterX, lineYBottom + jitterY);
      }

      // division symbol for quantum line
      ctx.textAlign = "center";
      ctx.fillStyle = "#ffffff";
      ctx.fillText("=", symbolX, lineYBottom - 4);

      // alvo on the right for quantum line
      ctx.textAlign = "left";
      ctx.fillStyle = "#ffb86b";
      ctx.fillText(String(alvo), rightX, lineYBottom - 6);
    }

    // animation tick
    function tick() {
      // update frame counter
      stateRef.current.frame += 1;

      // increment classical counter periodically
      if (stateRef.current.frame % Math.max(1, speed) === 0) {
        stateRef.current.n += 1;
        if (maxN > 0 && stateRef.current.n > maxN) {
          stateRef.current.n = 1;
        }
      }

      draw();
      rafRef.current = requestAnimationFrame(tick);
    }

    // start animation
    rafRef.current = requestAnimationFrame(tick);

    // cleanup
    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, [width, height, maxN, alvo, speed]);

  return (
    <div style={{ width, maxWidth: "100%" }}>
      <canvas
        ref={canvasRef}
        // the actual pixel size is set inside effect (for DPR)
        style={{
          width: `${width}px`,
          height: `${height}px`,
          display: "block",
          borderRadius: 6,
          background: "#071019",
        }}
      />
    </div>
  );
}
