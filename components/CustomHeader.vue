<script setup>
// Props for navigation items and brand label
const props = defineProps({
  navItems: {
    type: Array,
    default: () => ["Inicio", "Nosotros", "Servicios", "Páginas", "Blog"],
  },
  brand: {
    type: String,
    default: "Prestigio Seguridad",
  },
});
</script>

<template>
  <header
    class="ps-fixed ps-top-0 ps-w-full ps-bg-black/80 ps-backdrop-blur ps-flex ps-justify-between ps-items-center ps-p-4 z-50"
  >
    <h1 class="ps-text-2xl ps-font-bold">{{ brand }}</h1>
    <nav>
      <ul class="ps-flex ps-space-x-6">
        <li v-for="item in navItems" :key="item">
          <a href="#" class="ps-text-white ps-hover:ps-text-red-600">{{
            item
          }}</a>
        </li>
      </ul>
    </nav>
    <button class="ps-bg-red-600 ps-text-white ps-px-4 ps-py-2 ps-rounded">
      Contáctanos
    </button>
  </header>
</template>

<style scoped>
/* Header-specific styles */
</style>
