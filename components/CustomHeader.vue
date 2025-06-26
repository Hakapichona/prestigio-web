<script setup lang="ts">
	import logo from "@/assets/img/logoprestigio.png";

	const props = defineProps({
		navItems: {
			type: Array,
			default: () => ["Inicio", "Nosotros", "Servicios", "Blog"],
		},
		brand: {
			type: String,
			default: "Prestigio Seguridad",
		},
	});

	const routeMap = {
		Inicio: "/",
		Nosotros: "/#nosotros",
		Servicios: "/#servicios",
		// Páginas: "/#paginas",
		Blog: "/blog",
	};

	const links = computed(() =>
		props.navItems.map((label) => ({
			label,
			to: routeMap[label] || "/",
		}))
	);

	const getRandomParticleStyle = () => {
		const size = 1 + Math.random() * 4;
		const top = Math.random() * 100;
		const left = Math.random() * 100;
		const opacity = 0.1 + Math.random() * 0.4;

		return {
			width: `${size}px`,
			height: `${size}px`,
			top: `${top}%`,
			left: `${left}%`,
			opacity: opacity,
		};
	};

	// Estado para controlar el menú móvil
	const mobileMenuOpen = ref(false);

	// Función para alternar el menú móvil
	const toggleMobileMenu = () => {
		mobileMenuOpen.value = !mobileMenuOpen.value;
	};

	// Función para cerrar el menú móvil (útil después de hacer clic en un enlace)
	const closeMobileMenu = () => {
		mobileMenuOpen.value = false;
	};
</script>

<template>
	<header
		v-bind="$attrs"
		class="ps-fixed ps-top-0 ps-w-full ps-bg-black/80 ps-backdrop-blur ps-flex ps-justify-between ps-items-center ps-p-4 ps-z-50"
	>
		<!-- Logo -->
		<div class="ps-flex ps-items-center">
			<v-img
				:src="logo"
				alt="Prestigio Seguridad"
				height="60"
				width=""
				class="ps-max-h-16"
			/>
		</div>

		<!-- Navegación para escritorio -->
		<nav class="ps-hidden md:ps-block">
			<ul class="ps-flex ps-space-x-6">
				<li v-for="(link, index) in links" :key="index">
					<NuxtLink
						:to="link.to"
						class="ps-text-white ps-hover:ps-text-red-600 ps-transition-colors ps-duration-300"
						active-class="ps-text-red-600"
					>
						{{ link.label }}
					</NuxtLink>
				</li>
			</ul>
		</nav>

		<!-- Botón de contacto (visible en escritorio) -->
		<button
			class="ps-hidden md:ps-block ps-bg-red-600 ps-text-white ps-px-4 ps-py-2 ps-rounded ps-hover:ps-bg-red-700 ps-transition-colors ps-duration-300"
		>
			Contáctanos
		</button>

		<!-- Botón de menú hamburguesa (visible en móvil) -->
		<button
			@click="toggleMobileMenu"
			class="ps-block md:ps-hidden ps-text-white ps-focus:ps-outline-none"
			aria-label="Menú"
		>
			<div
				class="ps-w-6 ps-h-5 ps-flex ps-flex-col ps-justify-between ps-relative"
				:class="{ 'ps-menu-open': mobileMenuOpen }"
			>
				<span
					class="ps-w-full ps-h-0.5 ps-bg-white ps-rounded-full ps-transition-all ps-duration-300 ps-origin-left"
					:class="{ 'ps-rotate-45 ps-translate-y-px': mobileMenuOpen }"
				></span>
				<span
					class="ps-w-full ps-h-0.5 ps-bg-white ps-rounded-full ps-transition-all ps-duration-300"
					:class="{ 'ps-opacity-0': mobileMenuOpen }"
				></span>
				<span
					class="ps-w-full ps-h-0.5 ps-bg-white ps-rounded-full ps-transition-all ps-duration-300 ps-origin-left"
					:class="{ 'ps--rotate-45 ps--translate-y-px': mobileMenuOpen }"
				></span>
			</div>
		</button>
	</header>

	<!-- Menú móvil desplegable -->
	<div
		class="ps-fixed ps-inset-0 ps-bg-black/95 ps-backdrop-blur-md ps-z-40 ps-flex ps-flex-col ps-justify-center ps-items-center ps-transition-all ps-duration-300 ps-ease-in-out"
		:class="
			mobileMenuOpen ? 'ps-opacity-100 ps-visible' : 'ps-opacity-0 ps-invisible'
		"
		@click.self="closeMobileMenu"
	>
		<nav class="ps-w-full ps-max-w-md ps-px-6">
			<ul class="ps-space-y-6 ps-text-center">
				<li
					v-for="link in links"
					:key="link.to"
					class="ps-transform ps-transition-transform ps-duration-300 hover:ps-scale-105"
				>
					<NuxtLink
						:to="link.to"
						class="ps-text-white ps-text-2xl ps-font-medium ps-hover:ps-text-red-600 ps-transition-colors ps-duration-300 ps-block ps-py-2"
						active-class="ps-text-red-600"
						@click="closeMobileMenu"
					>
						{{ link.label }}
					</NuxtLink>
				</li>
			</ul>

			<!-- Botón de contacto en menú móvil -->
			<div class="ps-mt-10 ps-text-center">
				<a
					href="https://wa.link/p53g6s"
					target="_blank"
					rel="noopener noreferrer"
					class="ps-bg-red-600 ps-text-white ps-px-6 ps-py-3 ps-rounded ps-hover:ps-bg-red-700 ps-transition-colors ps-duration-300 inline-block"
				>
					Contáctanos
				</a>
			</div>
		</nav>

		<!-- Partículas de fondo para el menú móvil -->
		<div class="ps-absolute ps-inset-0 ps-pointer-events-none ps-opacity-20">
			<div
				v-for="i in 15"
				:key="`mobile-menu-particle-${i}`"
				class="ps-absolute ps-rounded-full ps-bg-white"
				:style="getRandomParticleStyle()"
			></div>
		</div>
	</div>

	<!-- Espacio para compensar el header fijo -->
	<div class="ps-h-24"></div>
</template>

<style scoped>
	/* Animación para el botón de hamburguesa */
	.ps-menu-open span:nth-child(1) {
		transform: rotate(45deg) translateY(1px);
	}

	.ps-menu-open span:nth-child(2) {
		opacity: 0;
	}

	.ps-menu-open span:nth-child(3) {
		transform: rotate(-45deg) translateY(-1px);
	}

	/* Animación para las partículas del menú móvil */
	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	.ps-absolute.ps-rounded-full {
		animation: float 3s infinite ease-in-out;
		animation-delay: calc(var(--i, 0) * 0.5s);
	}
</style>
