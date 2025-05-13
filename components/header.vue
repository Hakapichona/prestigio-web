<script setup lang="ts">
	// No requiere lógica
</script>

<template>
	<v-app-bar
		flat
		height="80"
		class="ps-bg-white ps-text-black ps-shadow-md ps-sticky ps-top-0 ps-z-50"
	>
		<!-- Logo -->
		<div class="ps-flex ps-items-center ps-gap-2">
			<!-- <img src="/logo.svg" alt="Logo" class="ps-h-8" /> -->
			<span class="ps-font-bold ps-text-xl">Kyver</span>
		</div>

		<!-- Menú navegación -->
		<v-spacer />
		<nav
			class="ps-hidden md:ps-flex ps-items-center ps-gap-6 ps-text-sm ps-font-medium"
		>
			<a href="#inicio" class="hover:ps-text-primary">Inicio</a>
			<a href="#paginas" class="hover:ps-text-primary">Páginas</a>
			<a href="#soluciones" class="hover:ps-text-primary">Soluciones</a>
			<a href="#tienda" class="hover:ps-text-primary">Tienda</a>
			<a href="#blog" class="hover:ps-text-primary">Blog</a>
			<a href="#contacto" class="hover:ps-text-primary">Contacto</a>
		</nav>

		<!-- Botón CTA -->
		<v-btn
			class="ps-ml-4 ps-bg-red-600 ps-text-white ps-rounded-md ps-px-4 ps-py-2 hover:ps-bg-red-700"
			elevation="0"
		>
			Solicitar Cotización
		</v-btn>
	</v-app-bar>
</template>
