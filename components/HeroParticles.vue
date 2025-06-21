<template>
  <div class="ps-hero-particles">
    <div
      v-for="i in 20"
      :key="`hero-particle-${i}`"
      class="ps-hero-particle"
      :style="getParticleStyle()"
    ></div>
  </div>
</template>

<script setup lang="ts">
const getParticleStyle = () => {
  const size = 3 + Math.random() * 8;
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  const duration = 15 + Math.random() * 25;
  const delay = Math.random() * 5;
  const opacity = 0.2 + Math.random() * 0.4;

  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${x}%`,
    top: `${y}%`,
    opacity: opacity,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
    boxShadow: `0 0 ${size * 2}px rgba(255, 255, 255, 0.6)`, // Cambiado a blanco
  };
};
</script>

<style scoped>
.ps-hero-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

.ps-hero-particle {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.6); /* Cambiado a blanco */
  border-radius: 50%;
  animation: float-hero-particle infinite ease-in-out;
}

@keyframes float-hero-particle {
  0% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-30px) translateX(15px);
  }
  50% {
    transform: translateY(0) translateX(30px);
  }
  75% {
    transform: translateY(30px) translateX(15px);
  }
  100% {
    transform: translateY(0) translateX(0);
  }
}
</style>
