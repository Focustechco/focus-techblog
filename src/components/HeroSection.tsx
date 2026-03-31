import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      // Animated grid
      ctx.strokeStyle = "rgba(255,107,0,0.08)";
      ctx.lineWidth = 1;
      const spacing = 40;
      const offset = (time * 10) % spacing;

      for (let x = -spacing + offset; x < canvas.width + spacing; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = -spacing + offset; y < canvas.height + spacing; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Glowing particles
      for (let i = 0; i < 8; i++) {
        const px = (Math.sin(time + i * 1.5) * 0.4 + 0.5) * canvas.width;
        const py = (Math.cos(time * 0.7 + i * 2) * 0.4 + 0.5) * canvas.height;
        const grad = ctx.createRadialGradient(px, py, 0, px, py, 20);
        grad.addColorStop(0, "rgba(255,107,0,0.4)");
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.fillRect(px - 20, py - 20, 40, 40);
      }

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative overflow-hidden rounded-lg border border-border bg-card group cursor-pointer">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="relative z-10 p-8 md:p-12 flex flex-col justify-end min-h-[320px]">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-2 py-0.5 bg-primary/20 text-primary font-mono-code text-xs rounded border border-primary/30">
            DESTAQUE
          </span>
          <span className="font-mono-code text-xs text-muted-foreground">IA • 5 min leitura</span>
        </div>
        <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight mb-3 group-hover:text-glow-orange transition-all">
          CONLIBRAS: COMO A IA ESTÁ REVOLUCIONANDO A COMUNICAÇÃO EM LIBRAS
        </h2>
        <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl mb-6">
          Descubra como a Focus Tecnologia está utilizando inteligência artificial para criar
          pontes de comunicação acessíveis e inclusivas através do projeto Conlibras.
        </p>
        <button className="self-start px-6 py-2.5 bg-primary text-primary-foreground font-body font-semibold rounded transition-all hover:glow-orange-strong hover:scale-105 duration-300">
          Ler mais →
        </button>
      </div>
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default HeroSection;
