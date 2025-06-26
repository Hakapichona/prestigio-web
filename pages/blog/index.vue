<script setup lang="ts">
	import ParticlesBackground from "@/components/ParticlesBackground.vue";
	import logo from "../assets/img/logoprestigio.png";

	// Blog posts
	const blogPosts = ref([
		{
			id: 1,
			title: "Fortalezas de la Seguridad Física",
			category: "Infraestructura",
			date: "20 Abr, 2025",
			excerpt:
				"Descubra cómo fortalecer su perímetro con estrategias comprobadas.",
			image: logo,
		},
		{
			id: 2,
			title: "Control de Accesos Moderno",
			category: "Tecnología",
			date: "05 Mar, 2025",
			excerpt:
				"Implementaciones de control de acceso para instalaciones críticas.",
			image: logo,
		},
		{
			id: 3,
			title: "Rondas Efectivas",
			category: "Operaciones",
			date: "18 Feb, 2025",
			excerpt: "Mejores prácticas para patrullaje móvil y disuasión.",
			image: logo,
		},
	]);

	// Funciones para efectos visuales
	const randomParticleStyle = () => {
		const size = 2 + Math.random() * 6;
		const top = Math.random() * 100;
		const left = Math.random() * 100;
		const opacity = 0.1 + Math.random() * 0.3;

		return {
			width: `${size}px`,
			height: `${size}px`,
			top: `${top}%`,
			left: `${left}%`,
			opacity: opacity,
		};
	};
</script>

<template>
	<div
		class="ps-bg-black ps-text-white ps-min-h-screen ps-overflow-hidden ps-relative"
	>
		<particles-background />

		<!-- Cabecera del Blog -->
		<section
			class="ps-container ps-mx-auto ps-px-6 ps-pt-32 ps-pb-16 ps-relative"
		>
			<div class="ps-text-center ps-max-w-3xl ps-mx-auto ps-relative ps-z-10">
				<h1 class="ps-text-4xl md:ps-text-5xl ps-font-bold ps-mb-4">
					Blog de Seguridad
				</h1>
				<p class="ps-text-gray-400 ps-mb-8">
					Manténgase informado con nuestros artículos sobre seguridad,
					tendencias y mejores prácticas.
				</p>
				<!-- <div class="ps-flex ps-justify-center ps-space-x-4">
					<a
						href="#categorias"
						class="ps-bg-red-600 ps-text-white ps-px-6 ps-py-3 ps-rounded-md ps-hover:ps-bg-red-700 ps-transition ps-duration-300 ps-transform ps-hover:ps-scale-105 ps-relative ps-overflow-hidden ps-group"
					>
						<span class="ps-relative ps-z-10">Explorar Categorías</span>
						<span
							class="ps-absolute ps-inset-0 ps-bg-white/20 ps-transform ps-translate-y-full ps-group-hover:ps-translate-y-0 ps-transition-transform ps-duration-300"
						></span>
					</a>
				</div> -->
			</div>

			<!-- Partículas específicas del header -->
			<div class="ps-absolute ps-inset-0 ps-pointer-events-none">
				<div
					v-for="i in 15"
					:key="`header-particle-${i}`"
					class="ps-absolute ps-rounded-full ps-bg-white/30"
					:style="randomParticleStyle()"
				></div>
			</div>
		</section>

		<!-- Noticias y Blog -->
		<section class="ps-py-16 ps-bg-gray-900">
			<div class="ps-container ps-mx-auto ps-px-6">
				<h2 class="ps-text-3xl ps-font-bold ps-text-center ps-mb-4">
					Noticias y Blog
				</h2>
				<p class="ps-text-gray-400 ps-text-center ps-mb-12">
					Manténgase informado con nuestros artículos.
				</p>
				<div class="ps-grid ps-grid-cols-1 md:ps-grid-cols-3 ps-gap-6">
					<router-link
						v-for="post in blogPosts"
						:key="post.id"
						:to="`/blog/${post.id}`"
						class="ps-bg-gray-800 ps-rounded-lg ps-overflow-hidden ps-group ps-transform ps-hover:ps-scale-105 ps-transition-transform ps-duration-500"
					>
						<div class="ps-relative ps-overflow-hidden">
							<img
								:src="post.image"
								:alt="post.title"
								class="ps-w-full ps-h-48 ps-object-cover ps-transform ps-group-hover:ps-scale-110 ps-transition-transform ps-duration-500"
							/>
						</div>
						<div class="ps-p-6">
							<span
								class="ps-bg-red-600 ps-text-white ps-text-xs ps-px-2 ps-py-1 ps-rounded"
							>
								{{ post.category }}
							</span>
							<span class="ps-text-gray-400 ps-text-sm ps-ml-2">
								{{ post.date }}
							</span>
							<h3
								class="ps-text-xl ps-font-bold ps-mb-2 ps-mt-2 ps-group-hover:ps-text-red-600 ps-transition-colors ps-duration-300"
							>
								{{ post.title }}
							</h3>
							<p class="ps-text-gray-400 ps-mb-4">
								{{ post.excerpt }}
							</p>
							<div
								class="ps-flex ps-items-center ps-text-red-600 ps-group-hover:ps-text-red-500 ps-transition-colors ps-duration-300"
							>
								<span>Leer más</span>
								<span
									class="ps-ml-1 ps-transform ps-group-hover:ps-translate-x-1 ps-transition-transform ps-duration-300"
									>→</span
								>
							</div>
						</div>
					</router-link>
				</div>
			</div>
		</section>

		<!-- Categorías -->
	</div>
</template>

<style>
	.ps-bg-black {
		background-color: #000;
	}
	.ps-bg-gray-900 {
		background-color: #111;
	}
	.ps-bg-gray-800 {
		background-color: #222;
	}
	.ps-bg-gray-700 {
		background-color: #333;
	}
	.ps-text-white {
		color: #fff;
	}
	.ps-text-gray-400 {
		color: #aaa;
	}
	.ps-text-red-600 {
		color: #e53e3e;
	}
	.ps-bg-red-600 {
		background-color: #e53e3e;
	}
	.ps-bg-red-700 {
		background-color: #c53030;
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
	}
	.ps-text-xl {
		font-size: 1.25rem;
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
		padding-left: 1rem;
		padding-right: 1rem;
	}
	@media (min-width: 768px) {
		.md\:ps-grid-cols-3 {
			grid-template-columns: repeat(3, 1fr);
		}
		.md\:ps-flex-row {
			flex-direction: row;
		}
	}
</style>
