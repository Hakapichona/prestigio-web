<script setup>
// Blog posts

const blogPosts = [
  {
    title: "Fortalezas de la Seguridad Física",
    category: "Infraestructura",
    date: "20 Abr, 2025",
    excerpt:
      "Descubra cómo fortalecer su perímetro con estrategias comprobadas.",
    image: "https://via.placeholder.com/400x200",
  },
  {
    title: "Control de Accesos Moderno",
    category: "Tecnología",
    date: "05 Mar, 2025",
    excerpt:
      "Implementaciones de control de acceso para instalaciones críticas.",
    image: "https://via.placeholder.com/400x200",
  },
  {
    title: "Rondas Efectivas",
    category: "Operaciones",
    date: "18 Feb, 2025",
    excerpt: "Mejores prácticas para patrullaje móvil y disuasión.",
    image: "https://via.placeholder.com/400x200",
  },
];
</script>

<template>
  <div
    class="ps-bg-black ps-text-white ps-min-h-screen ps-overflow-hidden ps-relative"
  >
    <particles-background />

    <!-- Noticias y Blog -->
    <section class="ps-py-16 ps-bg-gray-900">
      <h2 class="ps-text-3xl ps-font-bold ps-text-center ps-mb-4">
        Noticias y Blog
      </h2>
      <p class="ps-text-gray-400 ps-text-center ps-mb-12">
        Manténgase informado con nuestros artículos.
      </p>
      <div
        class="ps-container ps-grid ps-grid-cols-1 md:ps-grid-cols-3 ps-gap-6"
      >
        <div
          v-for="post in blogPosts"
          :key="post.title"
          class="ps-bg-gray-800 ps-rounded-lg ps-overflow-hidden"
        >
          <img
            :src="post.image"
            :alt="post.title"
            class="ps-w-full ps-h-48 ps-object-cover"
          />
          <div class="ps-p-6">
            <span
              class="ps-bg-red-600 ps-text-white ps-text-xs ps-px-2 ps-py-1 ps-rounded"
              >{{ post.category }}</span
            >
            <span class="ps-text-gray-400 ps-text-sm ps-ml-2">{{
              post.date
            }}</span>
            <h3 class="ps-text-xl ps-font-bold ps-mb-2 ps-mt-2">
              {{ post.title }}
            </h3>
            <p class="ps-text-gray-400">{{ post.excerpt }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.ps-bg-black {
  background-color: #000;
}
.ps-bg-gray-900 {
  background-color: #111;
}
.ps-text-white {
  color: #fff;
}
.ps-text-gray-400 {
  color: #aaa;
}
.ps-rounded-lg {
  border-radius: 0.5rem;
}
.ps-py-16 {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
.ps-mb-4 {
  margin-bottom: 1rem;
}
.ps-mb-12 {
  margin-bottom: 3rem;
}
.ps-text-center {
  text-align: center;
}
.ps-text-3xl {
  font-size: 1.875rem;
  font-weight: 700;
}
.ps-text-xl {
  font-size: 1.25rem;
  font-weight: 700;
}
.ps-font-bold {
  font-weight: 700;
}
.ps-object-cover {
  object-fit: cover;
}
.ps-overflow-hidden {
  overflow: hidden;
}
.ps-grid {
  display: grid;
}
.ps-container {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
@media (min-width: 768px) {
  .md\:ps-grid-cols-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
