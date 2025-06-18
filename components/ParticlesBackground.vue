<template>
  <div class="ps-particle-container">
    <canvas ref="canvas" class="ps-particle-canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
const canvas = ref(null);
let ctx = null;
let animationFrameId = null;
let particles = [];

// Configuración de partículas
const particleCount = 50;
const particleColor = "rgba(255, 255, 255, 0.5)"; // Cambiado a blanco
const lineColor = "rgba(255, 255, 255, 0.2)"; // Cambiado a blanco
const particleMinSize = 1;
const particleMaxSize = 3;
const particleMaxSpeed = 0.5;
const lineThreshold = 150; // Distancia máxima para dibujar líneas entre partículas

class Particle {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size =
      particleMinSize + Math.random() * (particleMaxSize - particleMinSize);
    this.speedX = (Math.random() - 0.5) * particleMaxSpeed;
    this.speedY = (Math.random() - 0.5) * particleMaxSpeed;
    this.opacity = 0.1 + Math.random() * 0.4;
  }

  update() {
    // Actualizar posición
    this.x += this.speedX;
    this.y += this.speedY;

    // Rebotar en los bordes
    if (this.x < 0 || this.x > this.canvas.width) {
      this.speedX = -this.speedX;
    }
    if (this.y < 0 || this.y > this.canvas.height) {
      this.speedY = -this.speedY;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = particleColor;
    ctx.globalAlpha = this.opacity;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

const initCanvas = () => {
  if (!canvas.value) return;

  // Configurar canvas para que ocupe toda la pantalla
  canvas.value.width = window.innerWidth;
  canvas.value.height = window.innerHeight;

  ctx = canvas.value.getContext("2d");

  // Crear partículas
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle(canvas.value));
  }
};

const drawLines = () => {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < lineThreshold) {
        // Opacidad basada en la distancia (más cercanas = más opacas)
        const opacity = 1 - distance / lineThreshold;

        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = lineColor;
        ctx.globalAlpha = opacity * 0.5;
        ctx.lineWidth = 0.5;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
    }
  }
};

const animate = () => {
  // Limpiar canvas
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

  // Actualizar y dibujar partículas
  particles.forEach((particle) => {
    particle.update();
    particle.draw(ctx);
  });

  // Dibujar líneas entre partículas cercanas
  drawLines();

  // Continuar animación
  animationFrameId = requestAnimationFrame(animate);
};

const handleResize = () => {
  if (canvas.value) {
    canvas.value.width = window.innerWidth;
    canvas.value.height = window.innerHeight;
    initCanvas();
  }
};

onMounted(() => {
  initCanvas();
  animate();
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
.ps-particle-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.ps-particle-canvas {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
