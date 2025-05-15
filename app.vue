<script setup lang="ts">
	import "@/assets/css/tailwind.css";
	import "vue-toastification/dist/index.css";
	import { Header } from "./components/Header.vue";
</script>

<template>
	<div>
		<NuxtLayout>
			<!-- Invoca el componente, no la etiqueta HTML -->
			<Header />
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>
