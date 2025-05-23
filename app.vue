<script setup lang="ts">
import "@/assets/css/tailwind.css";
import "vue-toastification/dist/index.css";
</script>

<template>
  <div>
    <NuxtLayout>
      <!-- Invoca el componente, no la etiqueta HTML -->
      <custom-header />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
