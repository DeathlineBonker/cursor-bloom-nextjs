import { useEffect, useRef, useCallback } from "react";

interface Boid {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;
  saturation: number;
  lightness: number;
  shape: number; // 0-4: diamond, star, crescent, cross, leaf
  rotation: number;
}

const BOID_COUNT = 80;
const MAX_SPEED = 3.5;
const MAX_FORCE = 0.15;
const SEPARATION_RADIUS = 25;
const ALIGNMENT_RADIUS = 50;
const COHESION_RADIUS = 50;
const CURSOR_RADIUS = 300;

const SEPARATION_WEIGHT = 1.5;
const ALIGNMENT_WEIGHT = 1.0;
const COHESION_WEIGHT = 1.0;
const CURSOR_WEIGHT = 1.4;

function limit(vx: number, vy: number, max: number): [number, number] {
  const mag = Math.sqrt(vx * vx + vy * vy);
  if (mag > max) return [(vx / mag) * max, (vy / mag) * max];
  return [vx, vy];
}

function steer(boid: Boid, targetX: number, targetY: number): [number, number] {
  let dx = targetX - boid.x;
  let dy = targetY - boid.y;
  const mag = Math.sqrt(dx * dx + dy * dy);
  if (mag === 0) return [0, 0];
  dx = (dx / mag) * MAX_SPEED;
  dy = (dy / mag) * MAX_SPEED;
  let sx = dx - boid.vx;
  let sy = dy - boid.vy;
  [sx, sy] = limit(sx, sy, MAX_FORCE);
  return [sx, sy];
}

// Shape drawing functions
function drawDiamond(ctx: CanvasRenderingContext2D, x: number, y: number, s: number, rot: number) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rot);
  ctx.beginPath();
  ctx.moveTo(0, -s);
  ctx.lineTo(s * 0.6, 0);
  ctx.lineTo(0, s);
  ctx.lineTo(-s * 0.6, 0);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawStar(ctx: CanvasRenderingContext2D, x: number, y: number, s: number, rot: number) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rot);
  ctx.beginPath();
  for (let i = 0; i < 4; i++) {
    const angle = (i * Math.PI) / 2;
    ctx.moveTo(0, 0);
    ctx.lineTo(Math.cos(angle) * s, Math.sin(angle) * s);
    // Draw thin petal
    const a1 = angle - 0.3;
    const a2 = angle + 0.3;
    ctx.moveTo(Math.cos(a1) * s * 0.4, Math.sin(a1) * s * 0.4);
    ctx.lineTo(Math.cos(angle) * s, Math.sin(angle) * s);
    ctx.lineTo(Math.cos(a2) * s * 0.4, Math.sin(a2) * s * 0.4);
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawCrescent(ctx: CanvasRenderingContext2D, x: number, y: number, s: number, rot: number) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rot);
  ctx.beginPath();
  ctx.arc(0, 0, s, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalCompositeOperation = "destination-out";
  ctx.beginPath();
  ctx.arc(s * 0.4, -s * 0.2, s * 0.85, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalCompositeOperation = "source-over";
  ctx.restore();
}

function drawCross(ctx: CanvasRenderingContext2D, x: number, y: number, s: number, rot: number) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rot);
  const t = s * 0.25;
  ctx.beginPath();
  ctx.rect(-t, -s, t * 2, s * 2);
  ctx.rect(-s, -t, s * 2, t * 2);
  ctx.fill();
  ctx.restore();
}

function drawLeaf(ctx: CanvasRenderingContext2D, x: number, y: number, s: number, rot: number) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rot);
  ctx.beginPath();
  ctx.moveTo(0, -s);
  ctx.bezierCurveTo(s * 0.8, -s * 0.5, s * 0.8, s * 0.5, 0, s);
  ctx.bezierCurveTo(-s * 0.8, s * 0.5, -s * 0.8, -s * 0.5, 0, -s);
  ctx.closePath();
  ctx.fill();
  // vein
  ctx.strokeStyle = ctx.fillStyle;
  ctx.globalAlpha = 0.3;
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(0, -s * 0.8);
  ctx.lineTo(0, s * 0.8);
  ctx.stroke();
  ctx.restore();
}

const drawShape = [drawDiamond, drawStar, drawCrescent, drawCross, drawLeaf];

const CursorParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const boids = useRef<Boid[]>([]);
  const mouse = useRef({ x: -1000, y: -1000 });
  const animationId = useRef<number>(0);

  const isTouchOnly = typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

  const initBoids = useCallback((w: number, h: number) => {
    if (boids.current.length > 0) return;
    for (let i = 0; i < BOID_COUNT; i++) {
      const hue = 15 + Math.random() * 20;
      const isDark = document.documentElement.classList.contains("dark");
      boids.current.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: 3 + Math.random() * 4,
        opacity: 0.25 + Math.random() * 0.45,
        hue,
        saturation: isDark ? 40 + Math.random() * 30 : 45 + Math.random() * 25,
        lightness: isDark ? 50 + Math.random() * 25 : 45 + Math.random() * 20,
        shape: Math.floor(Math.random() * 5),
        rotation: Math.random() * Math.PI * 2,
      });
    }
  }, []);

  useEffect(() => {
    if (isTouchOnly) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    initBoids(canvas.width, canvas.height);

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const all = boids.current;
      const mx = mouse.current.x;
      const my = mouse.current.y;

      for (let i = 0; i < all.length; i++) {
        const b = all[i];
        let sepX = 0, sepY = 0, sepCount = 0;
        let aliVx = 0, aliVy = 0, aliCount = 0;
        let cohX = 0, cohY = 0, cohCount = 0;

        for (let j = 0; j < all.length; j++) {
          if (i === j) continue;
          const o = all[j];
          const dx = b.x - o.x;
          const dy = b.y - o.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < SEPARATION_RADIUS && dist > 0) { sepX += dx / dist; sepY += dy / dist; sepCount++; }
          if (dist < ALIGNMENT_RADIUS) { aliVx += o.vx; aliVy += o.vy; aliCount++; }
          if (dist < COHESION_RADIUS) { cohX += o.x; cohY += o.y; cohCount++; }
        }

        let forceX = 0, forceY = 0;

        if (sepCount > 0) {
          sepX /= sepCount; sepY /= sepCount;
          const mag = Math.sqrt(sepX * sepX + sepY * sepY);
          if (mag > 0) { sepX = (sepX / mag) * MAX_SPEED - b.vx; sepY = (sepY / mag) * MAX_SPEED - b.vy; [sepX, sepY] = limit(sepX, sepY, MAX_FORCE); }
          forceX += sepX * SEPARATION_WEIGHT; forceY += sepY * SEPARATION_WEIGHT;
        }
        if (aliCount > 0) {
          aliVx /= aliCount; aliVy /= aliCount;
          const mag = Math.sqrt(aliVx * aliVx + aliVy * aliVy);
          if (mag > 0) { aliVx = (aliVx / mag) * MAX_SPEED - b.vx; aliVy = (aliVy / mag) * MAX_SPEED - b.vy; [aliVx, aliVy] = limit(aliVx, aliVy, MAX_FORCE); }
          forceX += aliVx * ALIGNMENT_WEIGHT; forceY += aliVy * ALIGNMENT_WEIGHT;
        }
        if (cohCount > 0) {
          cohX /= cohCount; cohY /= cohCount;
          const [sx, sy] = steer(b, cohX, cohY);
          forceX += sx * COHESION_WEIGHT; forceY += sy * COHESION_WEIGHT;
        }

        const cdx = mx - b.x, cdy = my - b.y;
        const cdist = Math.sqrt(cdx * cdx + cdy * cdy);
        if (cdist < CURSOR_RADIUS && cdist > 0) {
          const strength = 1 - cdist / CURSOR_RADIUS;
          const [sx, sy] = steer(b, mx, my);
          forceX += sx * CURSOR_WEIGHT * strength; forceY += sy * CURSOR_WEIGHT * strength;
        }

        b.vx += forceX; b.vy += forceY;
        [b.vx, b.vy] = limit(b.vx, b.vy, MAX_SPEED);
        b.x += b.vx; b.y += b.vy;

        // Rotate toward velocity
        b.rotation = Math.atan2(b.vy, b.vx);

        if (b.x < -10) b.x = canvas.width + 10;
        if (b.x > canvas.width + 10) b.x = -10;
        if (b.y < -10) b.y = canvas.height + 10;
        if (b.y > canvas.height + 10) b.y = -10;

        const isDark = document.documentElement.classList.contains("dark");
        b.lightness = isDark ? 50 + (b.hue - 15) * 1.2 : 45 + (b.hue - 15) * 0.8;

        ctx.globalAlpha = b.opacity;
        ctx.fillStyle = `hsl(${b.hue}, ${b.saturation}%, ${b.lightness}%)`;

        // Use crescent with a separate offscreen approach to avoid composite issues
        if (b.shape === 2) {
          // Draw crescent inline without composite tricks
          ctx.save();
          ctx.translate(b.x, b.y);
          ctx.rotate(b.rotation);
          ctx.beginPath();
          ctx.arc(0, 0, b.size, 0.3, Math.PI * 2 - 0.3);
          ctx.bezierCurveTo(-b.size * 0.3, -b.size * 0.6, -b.size * 0.3, b.size * 0.6, b.size * Math.cos(0.3), b.size * Math.sin(0.3));
          ctx.fill();
          ctx.restore();
        } else {
          drawShape[b.shape](ctx, b.x, b.y, b.size, b.rotation);
        }
      }

      ctx.globalAlpha = 1;
      animationId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationId.current);
    };
  }, [isTouchOnly, initBoids]);

  if (isTouchOnly) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
    />
  );
};

export default CursorParticles;
