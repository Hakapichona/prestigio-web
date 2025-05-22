<script setup>
	import "@mdi/font/css/materialdesignicons.min.css";
	import logo from "../assets/img/logoprestigio.png";

	const stats = [
		{ value: 250, suffix: "+", label: "Clientes que confían en nosotros" },
		{ value: 350, suffix: "+", label: "Servicios personalizados brindados" },
		{ value: 45, suffix: "%", label: "Crecimiento anual sostenido" },
		{ value: 150, suffix: "+", label: "Profesionales altamente capacitados" },
	];

	const services = [
		{
			icon: "mdi mdi-account-hard-hat",
			title: "Custodia Física",
			description:
				"Personal entrenado para la vigilancia presencial en sitios estratégicos.",
		},
		{
			icon: "mdi mdi-car-multiple",
			title: "Patrullaje Preventivo",
			description:
				"Rondas móviles en zonas designadas con presencia visible y disuasiva.",
		},
		{
			icon: "mdi mdi-camera",
			title: "Videovigilancia",
			description:
				"Monitoreo de cámaras y análisis de eventos críticos en tiempo real.",
		},
		{
			icon: "mdi mdi-alarm",
			title: "Intervención ante Alarmas",
			description:
				"Atención inmediata ante activación de sistemas electrónicos de alerta.",
		},
		{
			icon: "mdi mdi-account-group",
			title: "Seguridad Corporativa",
			description:
				"Cobertura profesional para eventos empresariales y sociales.",
		},
		{
			icon: "mdi mdi-fence",
			title: "Control Perimetral",
			description:
				"Supervisión continua de accesos, perímetros y zonas restringidas.",
		},
	];

	const faqs = reactive([
		{
			question: "¿Qué tipo de servicios brindan?",
			answer:
				"Ofrecemos seguridad física, electrónica, monitoreo y respuesta inmediata.",
			isOpen: false,
		},
		{
			question: "¿Su personal está certificado?",
			answer:
				"Sí. Todos nuestros agentes reciben formación continua y validación oficial.",
			isOpen: false,
		},
		{
			question: "¿Pueden cubrir eventos especiales?",
			answer:
				"Contamos con protocolos y equipos especializados para cualquier tipo de evento.",
			isOpen: false,
		},
	]);

	const toggleFaq = (i) => (faqs[i].isOpen = !faqs[i].isOpen);

	const team = [
		{
			name: "Eduardo Acosta",
			position: "Director General",
			image: "../assets/img/logoprestigio.png",
			socials: [],
		},
		{
			name: "Laura Giménez",
			position: "Jefa de Operaciones",
			image: logo,
			socials: [],
		},
		{
			name: "Luis Benítez",
			position: "Coordinador de Seguridad",
			image: "../assets/img/logoprestigio.png",
			socials: [],
		},
	];

	const blogPosts = [
		{
			title: "La importancia de la vigilancia privada",
			category: "Seguridad",
			date: "20 Abr, 2025",
			excerpt:
				"Exploramos cómo los servicios de seguridad privada aportan valor preventivo y operativo.",
			image: "../assets/img/logoprestigio.png",
		},
		{
			title: "Tecnología aplicada a la seguridad",
			category: "Tecnología",
			date: "05 Mar, 2025",
			excerpt:
				"Cómo los sistemas inteligentes optimizan la gestión de riesgos físicos.",
			image: "../assets/img/logoprestigio.png",
		},
		{
			title: "Protocolos en eventos masivos",
			category: "Operaciones",
			date: "18 Feb, 2025",
			excerpt:
				"Medidas clave para mantener la seguridad y el orden en actividades de gran convocatoria.",
			image: "https://via.placeholder.com/400x200",
		},
	];

	const quickLinks = ["Nosotros", "Servicios", "Blog", "Contacto"];

	const footerSocials = [
		{ icon: "mdi mdi-facebook", link: "#" },
		{ icon: "mdi mdi-twitter", link: "#" },
		{ icon: "mdi mdi-linkedin", link: "#" },
	];

	onMounted(() => {
		// Inicializar efectos adicionales
	});
</script>

<template>
	<div class="ps-bg-black ps-text-white ps-min-h-screen ps-overflow-hidden">
		<particles-background />

		<!-- Header -->
		<!-- <custom-header
			class="ps-fixed ps-top-0 ps-w-full ps-bg-black/80 ps-backdrop-blur ps-flex ps-justify-between ps-items-center ps-p-4 z-50"
		>
			<h1 class="ps-text-2xl ps-font-bold">Prestigio Seguridad</h1>
			<nav>
				<ul class="ps-flex ps-space-x-6">
					<li v-for="item in navItems" :key="item">
						<a href="#" class="ps-hover:ps-text-red-600">{{ item }}</a>
					</li>
				</ul>
			</nav>
			<button class="ps-bg-red-600 ps-px-4 ps-py-2 ps-rounded ps-text-white">
				Contáctanos
			</button>
		</custom-header> -->

		<!-- Hero -->
		<section
			class="ps-flex ps-flex-col-reverse md:ps-flex-row ps-items-center ps-justify-center ps-h-screen ps-px-6 ps-mt-16"
		>
			<div class="md:ps-w-1/2 ps-text-center md:ps-text-left">
				<h2 class="ps-text-5xl ps-font-bold ps-mb-4">
					Proteja sus instalaciones
				</h2>
				<p class="ps-text-gray-400 ps-mb-6">
					Servicios profesionales de guardias, patrullaje y monitoreo para su
					empresa.
				</p>
				<button
					class="ps-bg-red-600 ps-text-white ps-px-6 ps-py-3 ps-rounded ps-hover:ps-bg-red-700"
				>
					Solicitar Cotización
				</button>
			</div>
			<div class="md:ps-w-1/2 ps-mb-6 md:ps-mb-0">
				<img
					src="../assets/img/logoprestigio.png"
					alt="Guardias en acción"
					class="ps-rounded"
				/>
			</div>
		</section>

		<!-- Stats -->
		<section class="ps-py-16 ps-bg-gray-900">
			<div
				class="ps-container ps-grid ps-grid-cols-2 md:ps-grid-cols-4 ps-text-center ps-gap-8"
			>
				<div v-for="stat in stats" :key="stat.label">
					<h3 class="ps-text-4xl ps-font-bold">
						<count-up :end-val="stat.value" />{{ stat.suffix }}
					</h3>
					<p>{{ stat.label }}</p>
				</div>
			</div>
		</section>

		<!-- Servicios -->
		<section class="ps-py-16">
			<h2 class="ps-text-3xl ps-font-bold ps-text-center ps-mb-8">
				Nuestros Servicios
			</h2>
			<div
				class="ps-container ps-grid ps-grid-cols-1 md:ps-grid-cols-3 ps-gap-6"
			>
				<div
					v-for="svc in services"
					:key="svc.title"
					class="ps-bg-gray-800 ps-rounded-lg ps-p-6 ps-text-center"
				>
					<i :class="svc.icon + ' ps-text-4xl ps-mb-4'"></i>
					<h3 class="ps-text-xl ps-font-semibold ps-mb-2">{{ svc.title }}</h3>
					<p class="ps-text-gray-400">{{ svc.description }}</p>
				</div>
			</div>
		</section>

		<!-- FAQs -->
		<section class="ps-bg-black ps-py-16">
			<h2 class="ps-text-3xl ps-font-bold ps-text-center ps-mb-8">
				Preguntas Frecuentes
			</h2>
			<div class="ps-container ps-max-w-xl ps-mx-auto">
				<div v-for="(faq, i) in faqs" :key="faq.question" class="ps-mb-4">
					<button
						@click="toggleFaq(i)"
						class="ps-w-full ps-text-left ps-flex ps-justify-between ps-py-2 ps-border-b ps-border-gray-700"
					>
						<span>{{ faq.question }}</span>
						<i
							:class="
								faq.isOpen ? 'mdi mdi-chevron-up' : 'mdi mdi-chevron-down'
							"
						></i>
					</button>
					<p v-if="faq.isOpen" class="ps-text-gray-400 ps-pl-4 ps-pt-2">
						{{ faq.answer }}
					</p>
				</div>
			</div>
		</section>

		<!-- Equipo -->
		<section class="ps-py-16 ps-bg-gray-900">
			<h2 class="ps-text-3xl ps-font-bold ps-text-center ps-mb-8">
				Nuestro Equipo
			</h2>
			<div
				class="ps-container ps-grid ps-grid-cols-1 md:ps-grid-cols-3 ps-gap-6"
			>
				<div
					v-for="member in team"
					:key="member.name"
					class="ps-bg-gray-800 ps-rounded-lg ps-overflow-hidden"
				>
					<img
						:src="member.image"
						alt="member.name"
						class="ps-w-full ps-h-64 ps-object-cover"
					/>
					<div class="ps-p-6 ps-text-center">
						<h3 class="ps-text-xl ps-font-bold ps-mb-1">{{ member.name }}</h3>
						<p class="ps-text-gray-400 ps-mb-4">{{ member.position }}</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Blog -->
		<section class="ps-py-16 ps-bg-black">
			<h2 class="ps-text-3xl ps-font-bold ps-text-center ps-mb-8">
				Noticias y Blog
			</h2>
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
						alt="post.title"
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

		<!-- Footer -->
		<footer class="ps-bg-gray-900 ps-text-gray-400 ps-py-8 ps-text-center">
			<div class="ps-space-x-4 ps-mb-4">
				<a v-for="s in footerSocials" :key="s.icon" :href="s.link"
					><i :class="s.icon"></i
				></a>
			</div>
			<p>© 2025 Prestigio Seguridad. Todos los derechos reservados.</p>
		</footer>
	</div>
</template>

<style>
	/* Estilos generales */
	.ps-bg-black {
		background-color: #000;
	}
	.ps-bg-gray-900 {
		background-color: #111;
	}
	.ps-bg-gray-800 {
		background-color: #222;
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
	.ps-rounded {
		border-radius: 0.25rem;
	}
	.ps-p-6 {
		padding: 1.5rem;
	}
	.ps-p-4 {
		padding: 1rem;
	}
	.ps-px-6 {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
	}
	.ps-py-16 {
		padding-top: 4rem;
		padding-bottom: 4rem;
	}
	.ps-mb-4 {
		margin-bottom: 1rem;
	}
	.ps-mb-6 {
		margin-bottom: 1.5rem;
	}
	.ps-mt-16 {
		margin-top: 4rem;
	}
	.ps-h-screen {
		height: 100vh;
	}
	.ps-min-h-screen {
		min-height: 100vh;
	}
	.ps-flex {
		display: flex;
	}
	.ps-grid {
		display: grid;
	}
	.ps-items-center {
		align-items: center;
	}
	.ps-justify-center {
		justify-content: center;
	}
	.ps-justify-between {
		justify-content: space-between;
	}
	.ps-text-center {
		text-align: center;
	}
	.ps-text-left {
		text-align: left;
	}
	.ps-text-2xl {
		font-size: 1.5rem;
	}
	.ps-text-3xl {
		font-size: 1.875rem;
	}
	.ps-text-4xl {
		font-size: 2.25rem;
	}
	.ps-text-5xl {
		font-size: 3rem;
	}
	.ps-font-bold {
		font-weight: 700;
	}
	.ps-font-semibold {
		font-weight: 600;
	}
	.ps-rounded-full {
		border-radius: 9999px;
	}
	.ps-rounded {
		border-radius: 0.25rem;
	}
	.ps-py-3 {
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
	}
	.ps-px-4 {
		padding-left: 1rem;
		padding-right: 1rem;
	}
	.ps-mr-2 {
		margin-right: 0.5rem;
	}
	.ps-ml-2 {
		margin-left: 0.5rem;
	}
</style>
