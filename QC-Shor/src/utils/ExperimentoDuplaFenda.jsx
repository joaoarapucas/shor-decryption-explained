import { useRef, useEffect } from "react";

export default function DoubleSlit() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const W = canvas.width = 900;
    const H = canvas.height = 500;

    const sourceX = 100;
    const slitX   = 250;
    const screenX = 780;

    const slitGap = 60;
    const wavelength = 25;
    const k = (2 * Math.PI) / wavelength;

    let t = 0;

    function draw() {
      ctx.fillStyle = "#0f0f0f";
      ctx.fillRect(0, 0, W, H);

      // Fonte
      ctx.fillStyle = "cyan";
      ctx.beginPath();
      ctx.arc(sourceX, H / 2, 6, 0, Math.PI * 2);
      ctx.fill();

      // Fendas
      ctx.fillStyle = "white";
      ctx.fillRect(slitX, H / 2 - slitGap / 2 - 6, 6, 12);
      ctx.fillRect(slitX, H / 2 + slitGap / 2 - 6, 6, 12);

      // Tela
      ctx.strokeStyle = "white";
      ctx.beginPath();
      ctx.moveTo(screenX, 0);
      ctx.lineTo(screenX, H);
      ctx.stroke();

      // Padrão de interferência animado
      for (let y = 0; y < H; y++) {
        const d1 = Math.sqrt(
          (screenX - slitX) ** 2 + (y - (H / 2 - slitGap / 2)) ** 2
        );

        const d2 = Math.sqrt(
          (screenX - slitX) ** 2 + (y - (H / 2 + slitGap / 2)) ** 2
        );

        const phase = k * (d1 - d2) - t;
        const intensity = Math.cos(phase / 2) ** 2;

        const brightness = Math.floor(intensity * 255);

        ctx.fillStyle = `rgb(${brightness / 2}, ${brightness}, 255)`;
        ctx.fillRect(screenX - 5, y, 5, 1);
      }

      // Ondas viajando (apenas ilustrativo)
      for (let i = 0; i < 15; i++) {
        let r = ((t * 4 + i * 40) % 600);

        ctx.strokeStyle = `rgba(0,200,255,0.2)`;
        ctx.beginPath();
        ctx.arc(sourceX, H / 2, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Textos
      ctx.fillStyle = "white";
      ctx.font = "14px monospace";
      ctx.fillText("Fonte", sourceX - 20, H/2 - 10);
      ctx.fillText("Fendas", slitX - 20, 40);
      ctx.fillText("Tela", screenX - 15, 20);
      ctx.fillText("Padrão de interferência", screenX - 160, H - 15);

      t += 0.3;
      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <div style={{ background: "#0f0f0f", padding: "20px" }}>
      <h2 style={{ color: "white", fontFamily: "monospace" }}>
        Simulação — Double Slit (Animada)
      </h2>

      <canvas
        ref={canvasRef}
        width={900}
        height={500}
        style={{
          border: "1px solid #333",
          marginTop: "10px",
          display: "block"
        }}
      />
    </div>
  );
}
