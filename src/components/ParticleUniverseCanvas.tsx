import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseSize: number;
  alpha: number;
  baseAlpha: number;
  pulseSpeed: number;
  pulsePhase: number;
}

export const ParticleUniverseCanvas: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Mouse coordinates
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 170,
      isHovered: false
    };

    // Calculate particle density based on screen size
    const getParticleCount = () => {
      const area = width * height;
      if (width < 640) return Math.min(45, Math.floor(area / 16000));
      if (width < 1024) return Math.min(85, Math.floor(area / 14000));
      return Math.min(130, Math.floor(area / 12000));
    };

    let particles: Particle[] = [];

    const initParticles = () => {
      const count = getParticleCount();
      particles = [];
      for (let i = 0; i < count; i++) {
        const baseAlpha = 0.25 + Math.random() * 0.55;
        const baseSize = 1.2 + Math.random() * 2.2;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          size: baseSize,
          baseSize,
          alpha: baseAlpha,
          baseAlpha,
          pulseSpeed: 0.02 + Math.random() * 0.03,
          pulsePhase: Math.random() * Math.PI * 2
        });
      }
    };

    initParticles();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.isHovered = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
        mouse.isHovered = true;
      }
    };

    const handleTouchEnd = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.isHovered = false;
    };

    const container = canvas.parentElement || window;
    container.addEventListener('mousemove', handleMouseMove as EventListener);
    container.addEventListener('mouseleave', handleMouseLeave as EventListener);
    container.addEventListener('touchmove', handleTouchMove as EventListener, { passive: true });
    container.addEventListener('touchend', handleTouchEnd as EventListener);

    // Max distance for connecting lines between particles
    const connectionDistance = 115;
    const connectionDistanceSq = connectionDistance * connectionDistance;
    const mouseRadiusSq = mouse.radius * mouse.radius;

    // Animation Loop
    let lastTime = performance.now();

    const render = (time: number) => {
      // Calculate delta to keep animation smooth
      const dt = Math.min((time - lastTime) / 16.66, 2.0);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Subtle ambient vignette in canvas
      const radialGrad = ctx.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, Math.max(width, height) * 0.7
      );
      radialGrad.addColorStop(0, 'rgba(25, 231, 122, 0.04)');
      radialGrad.addColorStop(1, 'rgba(11, 13, 14, 0)');
      ctx.fillStyle = radialGrad;
      ctx.fillRect(0, 0, width, height);

      // Cursor glow circle if inside
      if (mouse.isHovered && mouse.x > 0 && mouse.y > 0) {
        const cursorGlow = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, mouse.radius
        );
        cursorGlow.addColorStop(0, 'rgba(25, 231, 122, 0.12)');
        cursorGlow.addColorStop(0.5, 'rgba(25, 231, 122, 0.04)');
        cursorGlow.addColorStop(1, 'rgba(25, 231, 122, 0)');
        ctx.fillStyle = cursorGlow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update and draw particles
      const pCount = particles.length;
      for (let i = 0; i < pCount; i++) {
        const p = particles[i];

        // Organic pulse
        p.pulsePhase += p.pulseSpeed * dt;
        const pulse = Math.sin(p.pulsePhase);
        p.alpha = Math.max(0.15, Math.min(0.9, p.baseAlpha + pulse * 0.18));
        p.size = Math.max(0.8, p.baseSize + pulse * 0.4);

        // Natural movement
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        // Bounce gently at borders with soft wrap
        if (p.x < -20) p.x = width + 20;
        else if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        else if (p.y > height + 20) p.y = -20;

        // Mouse interaction: organic push/pull
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < mouseRadiusSq && mouse.isHovered) {
          const dist = Math.sqrt(distSq);
          const force = (1 - dist / mouse.radius);
          // Push away smoothly with damping
          const pushX = (dx / (dist || 1)) * force * 1.8;
          const pushY = (dy / (dist || 1)) * force * 1.8;
          p.x -= pushX * dt;
          p.y -= pushY * dt;

          // Connect cursor to nearby particles
          ctx.beginPath();
          ctx.strokeStyle = `rgba(168, 247, 194, ${0.35 * force})`;
          ctx.lineWidth = 0.9;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();

          // Particle brightens near mouse
          p.alpha = Math.min(1.0, p.alpha + force * 0.5);
          p.size = p.baseSize * (1 + force * 0.8);
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(25, 231, 122, ${p.alpha})`;
        ctx.shadowColor = 'rgba(25, 231, 122, 0.7)';
        ctx.shadowBlur = p.size * 3;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < pCount; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdistSq = cdx * cdx + cdy * cdy;

          if (cdistSq < connectionDistanceSq) {
            const cdist = Math.sqrt(cdistSq);
            const lineAlpha = (1 - cdist / connectionDistance) * 0.22;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(25, 231, 122, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Reset shadow for next tick
      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove as EventListener);
      container.removeEventListener('mouseleave', handleMouseLeave as EventListener);
      container.removeEventListener('touchmove', handleTouchMove as EventListener);
      container.removeEventListener('touchend', handleTouchEnd as EventListener);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-auto w-full h-full ${className}`}
      aria-hidden="true"
    />
  );
};
