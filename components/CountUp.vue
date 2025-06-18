<template>
  <span ref="countElement">{{ displayValue }}</span>
</template>

<script setup lang="ts">
const props = defineProps({
  startVal: {
    type: Number,
    default: 0,
  },
  endVal: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    default: 2000,
  },
  decimals: {
    type: Number,
    default: 0,
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
});

const displayValue = ref(props.startVal);
const countElement = ref(null);
let animationFrame = null;
let startTime = null;

const formatNumber = (num) => {
  return num.toFixed(props.decimals);
};

const animate = (timestamp) => {
  if (!startTime) startTime = timestamp;
  const progress = timestamp - startTime;
  const percentage = Math.min(progress / props.duration, 1);

  // Función de easing (easeOutExpo)
  const easedProgress =
    percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);

  const currentValue =
    props.startVal + (props.endVal - props.startVal) * easedProgress;
  displayValue.value = formatNumber(currentValue);

  if (percentage < 1) {
    animationFrame = requestAnimationFrame(animate);
  }
};

const start = () => {
  startTime = null;
  cancelAnimationFrame(animationFrame);
  animationFrame = requestAnimationFrame(animate);
};

// Iniciar la animación cuando el componente es visible
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && props.autoplay) {
        start();
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

onMounted(() => {
  if (countElement.value) {
    observer.observe(countElement.value);
  }
});

// Reiniciar la animación si cambia el valor final
watch(
  () => props.endVal,
  () => {
    if (props.autoplay) {
      start();
    }
  },
);

// Exponer métodos para uso externo
defineExpose({
  start,
});
</script>
