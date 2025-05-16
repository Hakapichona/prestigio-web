<script setup>
	import logo from "@/assets/img/logoprestigio.png";

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

	const routeMap = {
		Inicio: "/",
		Nosotros: "/nosotros",
		Servicios: "/servicios",
		Páginas: "/paginas",
		Blog: "/blog",
	};

	const links = computed(() =>
		props.navItems.map((label) => ({
			label,
			to: routeMap[label] || "/",
		}))
	);
</script>

<template>
	<header
		class="ps-fixed ps-top-0 ps-w-full ps-bg-black/80 ps-backdrop-blur ps-flex ps-justify-between ps-items-center ps-p-4 z-50"
	>
		<div>
			<v-img :src="logo" alt="Prestigio Seguridad" height="100" width="" />
		</div>
		<nav>
			<ul class="ps-flex ps-space-x-6">
				<li v-for="link in links" :key="link.to">
					<NuxtLink
						:to="link.to"
						class="ps-text-white ps-hover:ps-text-red-600"
						active-class="ps-text-red-600"
					>
						{{ link.label }}
					</NuxtLink>
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
