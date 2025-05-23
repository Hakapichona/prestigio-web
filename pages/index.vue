<script setup>
	import CountUp from "@/components/CountUp.vue";
	import ParticleBackground from "@/components/ParticlesBackground.vue";
	import { onMounted, reactive } from "vue";

	// Datos de navegación
	const navItems = ["Home", "About", "Services", "Pages", "Blog", "Pricing"];

	// Características de "Why Choose Us"
	const features = [
		{
			icon: "mdi-shield-check",
			title: "Security Services",
			description:
				"We provide comprehensive security services to protect your organization from cyber threats.",
		},
		{
			icon: "mdi-lock",
			title: "Data Privacy",
			description:
				"We ensure your data remains private and secure with our advanced encryption technologies.",
		},
		{
			icon: "mdi-certificate",
			title: "Industry Certified",
			description:
				"Our team consists of certified professionals with extensive experience in cybersecurity.",
		},
	];

	// Estadísticas
	const stats = [
		{ value: 1235, suffix: "+", label: "Satisfied Clients" },
		{ value: 1698, suffix: "+", label: "Projects Completed" },
		{ value: 38, suffix: "%", label: "Threat Reduction" },
		{ value: 290, suffix: "+", label: "Expert Team Members" },
	];

	// Servicios
	const services = [
		{
			icon: "mdi-brain",
			title: "Threat Intelligence",
			description:
				"We provide real-time threat intelligence to help you stay ahead of potential security breaches and protect your digital assets.",
		},
		{
			icon: "mdi-magnify",
			title: "Security Assessment",
			description:
				"Our comprehensive security assessments identify vulnerabilities in your systems and provide actionable recommendations.",
		},
		{
			icon: "mdi-shield-account",
			title: "Compliance Assessment",
			description:
				"We ensure your organization meets industry regulations and compliance requirements for data security and privacy.",
		},
		{
			icon: "mdi-alert-circle",
			title: "Incident Response",
			description:
				"Our rapid incident response team helps minimize damage and restore operations quickly in the event of a security breach.",
		},
		{
			icon: "mdi-school",
			title: "Security Training",
			description:
				"We provide comprehensive security awareness training to educate your employees about best practices and potential threats.",
		},
		{
			icon: "mdi-shield-check",
			title: "Cloud Security",
			description:
				"Our cloud security solutions protect your data and applications in cloud environments from unauthorized access and breaches.",
		},
	];

	// FAQs
	const faqs = reactive([
		{
			question: "What Makes Redlight's Cybersecurity Specially?",
			answer:
				"Our unique approach combines advanced AI-driven threat detection with human expertise to provide comprehensive protection tailored to your organization's specific needs.",
			isOpen: false,
		},
		{
			question: "How do I know which plan is right for my business?",
			answer:
				"We offer a free consultation to assess your security needs and recommend the most appropriate plan based on your organization's size, industry, and risk profile.",
			isOpen: false,
		},
		{
			question: "Can I upgrade or downgrade my plan later?",
			answer:
				"Yes, you can easily upgrade or downgrade your plan at any time as your security needs evolve. Our flexible pricing ensures you only pay for what you need.",
			isOpen: false,
		},
	]);

	// Función para alternar FAQs
	const toggleFaq = (index) => {
		faqs[index].isOpen = !faqs[index].isOpen;
	};

	// Planes de precios
	const pricingPlans = [
		{
			title: "Beginner",
			price: "Free",
			features: [
				{ text: "Basic Security Assessment", included: true },
				{ text: "Email Security Tips", included: true },
				{ text: "Password Management Guide", included: true },
				{ text: "24/7 Support", included: false },
				{ text: "Advanced Threat Protection", included: false },
			],
		},
		{
			title: "Business",
			price: "$39.99",
			features: [
				{ text: "Comprehensive Security Assessment", included: true },
				{ text: "Email & Web Protection", included: true },
				{ text: "Endpoint Security", included: true },
				{ text: "24/7 Support", included: true },
				{ text: "Advanced Threat Protection", included: false },
			],
		},
		{
			title: "Enterprise",
			price: "$89.99",
			features: [
				{ text: "Advanced Security Assessment", included: true },
				{ text: "Complete Security Suite", included: true },
				{ text: "Cloud Security", included: true },
				{ text: "24/7 Priority Support", included: true },
				{ text: "Advanced Threat Protection", included: true },
			],
		},
	];

	// Equipo
	const team = [
		{
			name: "Eric Parker",
			position: "Chief Security Officer",
			image:
				"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=300&width=400",
			socials: [
				{ icon: "mdi-twitter", link: "#" },
				{ icon: "mdi-linkedin", link: "#" },
				{ icon: "mdi-email", link: "#" },
			],
		},
		{
			name: "Sarah Mitchell",
			position: "Security Analyst",
			image:
				"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=300&width=400",
			socials: [
				{ icon: "mdi-twitter", link: "#" },
				{ icon: "mdi-linkedin", link: "#" },
				{ icon: "mdi-email", link: "#" },
			],
		},
		{
			name: "David Morgan",
			position: "Threat Hunter",
			image:
				"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=300&width=400",
			socials: [
				{ icon: "mdi-twitter", link: "#" },
				{ icon: "mdi-linkedin", link: "#" },
				{ icon: "mdi-email", link: "#" },
			],
		},
	];

	// Blog posts
	const blogPosts = [
		{
			title: "Common Cyber Threats and How to Prevent Them",
			category: "Cybersecurity",
			date: "May 10, 2023",
			image:
				"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=200&width=400",
			excerpt:
				"Learn about the most common cyber threats facing businesses today and effective strategies to prevent them.",
		},
		{
			title: "The Growing Threat of Ransomware Attacks",
			category: "Security",
			date: "April 28, 2023",
			image:
				"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=200&width=400",
			excerpt:
				"Explore the rising threat of ransomware attacks and learn how organizations can protect themselves.",
		},
		{
			title: "Securing Your Remote Workforce",
			category: "Privacy",
			date: "April 15, 2023",
			image:
				"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=200&width=400",
			excerpt:
				"Discover best practices for securing your remote workforce and protecting sensitive data in a distributed environment.",
		},
	];

	// Footer links
	const quickLinks = [
		"About Us",
		"Services",
		"Case Studies",
		"Blog",
		"Contact",
	];
	const footerServices = [
		"Security Assessment",
		"Penetration Testing",
		"Incident Response",
		"Security Training",
		"Cloud Security",
	];
	const footerSocials = [
		{ icon: "mdi-facebook", link: "#" },
		{ icon: "mdi-twitter", link: "#" },
		{ icon: "mdi-linkedin", link: "#" },
		{ icon: "mdi-instagram", link: "#" },
	];

	// Funciones para efectos aleatorios
	const randomLineStyle = () => {
		const width = Math.floor(Math.random() * 150) + 50;
		const top = Math.floor(Math.random() * 100);
		const left = Math.floor(Math.random() * 100);
		const rotate = Math.floor(Math.random() * 360);
		const animationDuration = 15 + Math.random() * 30;

		return {
			width: `${width}px`,
			top: `${top}%`,
			left: `${left}%`,
			transform: `rotate(${rotate}deg)`,
			animationDuration: `${animationDuration}s`,
		};
	};

	const randomHexagonStyle = () => {
		const size = 30 + Math.random() * 70;
		const top = Math.random() * 100;
		const left = Math.random() * 100;
		const opacity = 0.05 + Math.random() * 0.15;
		const animationDuration = 15 + Math.random() * 30;

		return {
			width: `${size}px`,
			height: `${size}px`,
			top: `${top}%`,
			left: `${left}%`,
			opacity: opacity,
			animationDuration: `${animationDuration}s`,
		};
	};

	const randomParticleStyle = () => {
		const size = 2 + Math.random() * 6;
		const top = Math.random() * 100;
		const left = Math.random() * 100;
		const opacity = 0.1 + Math.random() * 0.3;
		const animationDuration = 10 + Math.random() * 20;
		const animationDelay = Math.random() * 5;

		return {
			width: `${size}px`,
			height: `${size}px`,
			top: `${top}%`,
			left: `${left}%`,
			opacity: opacity,
			animationDuration: `${animationDuration}s`,
			animationDelay: `${animationDelay}s`,
		};
	};

	const randomCodeStyle = () => {
		const top = Math.random() * 100;
		const left = Math.random() * 100;
		const opacity = 0.3 + Math.random() * 0.7;

		return {
			top: `${top}%`,
			left: `${left}%`,
			opacity: opacity,
		};
	};

	const randomCode = () => {
		const codeSnippets = [
			"if(security.breach) { alert(); }",
			"function encrypt(data) { ... }",
			"const firewall = new Firewall();",
			"try { connect() } catch(e) { log(e) }",
			"security.scan(network);",
			"class Encryption { ... }",
			"while(monitoring) { detect(); }",
		];

		return codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
	};

	const randomBinaryStyle = () => {
		const top = Math.random() * 100;
		const left = Math.random() * 100;
		const opacity = 0.2 + Math.random() * 0.5;

		return {
			top: `${top}%`,
			left: `${left}%`,
			opacity: opacity,
		};
	};

	const randomBinary = () => {
		let binary = "";
		for (let i = 0; i < 16; i++) {
			binary += Math.round(Math.random());
		}
		return binary;
	};

	onMounted(() => {
		// Inicializar animaciones o efectos adicionales si es necesario
	});
</script>

<template>
	<div
		class="ps-bg-black ps-text-white ps-min-h-screen ps-overflow-hidden ps-relative"
	>
		<!-- Fondo de partículas -->
		<ParticleBackground />

		<!-- Header/Navigation con animación de aparición -->
		<header
			class="ps-w-full ps-py-4 ps-px-6 ps-flex ps-items-center ps-justify-between ps-fixed ps-top-0 ps-left-0 ps-right-0 ps-z-50 ps-bg-black/80 ps-backdrop-blur-md"
			v-motion
			:initial="{ opacity: 0, y: -50 }"
			:enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
		>
			<div class="ps-flex ps-items-center">
				<div class="ps-flex ps-items-center ps-group">
					<div
						class="ps-w-8 ps-h-8 ps-bg-red-600 ps-rounded-full ps-mr-2 ps-group-hover:ps-scale-110 ps-transition-transform ps-duration-300"
					></div>
					<span
						class="ps-text-xl ps-font-bold ps-group-hover:ps-text-red-600 ps-transition-colors ps-duration-300"
						>redlight</span
					>
				</div>
				<nav class="ps-hidden md:ps-flex ps-ml-12">
					<ul class="ps-flex ps-space-x-8">
						<li
							v-for="(item, index) in navItems"
							:key="index"
							v-motion
							:initial="{ opacity: 0, y: -20 }"
							:enter="{
								opacity: 1,
								y: 0,
								transition: { delay: 300 + index * 100 },
							}"
						>
							<a
								href="#"
								class="ps-text-white ps-hover:ps-text-red-500 ps-relative ps-overflow-hidden ps-group"
							>
								{{ item }}
								<span
									class="ps-absolute ps-bottom-0 ps-left-0 ps-w-0 ps-h-0.5 ps-bg-red-600 ps-group-hover:ps-w-full ps-transition-all ps-duration-300"
								></span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<button
				class="ps-bg-red-600 ps-text-white ps-px-6 ps-py-2 ps-rounded-md ps-hover:ps-bg-red-700 ps-transition ps-duration-300 ps-transform ps-hover:ps-scale-105 ps-hover:ps-shadow-glow"
				v-motion
				:initial="{ opacity: 0, x: 50 }"
				:enter="{ opacity: 1, x: 0, transition: { delay: 600 } }"
			>
				Contact Us
			</button>
		</header>

		<!-- Hero Section con animaciones -->
		<section
			class="ps-container ps-mx-auto ps-px-6 ps-py-32 ps-flex ps-flex-col md:ps-flex-row ps-items-center ps-min-h-screen"
		>
			<div class="ps-w-full md:ps-w-1/2 ps-mb-10 md:ps-mb-0">
				<div
					class="ps-text-red-600 ps-mb-2 ps-font-medium"
					v-motion
					:initial="{ opacity: 0, y: 20 }"
					:enter="{ opacity: 1, y: 0, transition: { delay: 800 } }"
				>
					Cyber Security Solutions
				</div>
				<h1
					class="ps-text-4xl md:ps-text-5xl ps-font-bold ps-mb-6"
					v-motion
					:initial="{ opacity: 0, y: 20 }"
					:enter="{ opacity: 1, y: 0, transition: { delay: 1000 } }"
				>
					<span class="ps-text-gradient">Organizations with</span><br />
					<span class="ps-text-gradient">Critical Infrastructure</span>
				</h1>
				<p
					class="ps-text-gray-400 ps-mb-8 ps-max-w-lg"
					v-motion
					:initial="{ opacity: 0, y: 20 }"
					:enter="{ opacity: 1, y: 0, transition: { delay: 1200 } }"
				>
					We help organizations across private and public sectors to defend
					against cyber threats and reduce risk with our advanced security
					solutions.
				</p>
				<div
					class="ps-flex ps-space-x-4"
					v-motion
					:initial="{ opacity: 0, y: 20 }"
					:enter="{ opacity: 1, y: 0, transition: { delay: 1400 } }"
				>
					<button
						class="ps-bg-red-600 ps-text-white ps-px-6 ps-py-3 ps-rounded-md ps-hover:ps-bg-red-700 ps-transition ps-duration-300 ps-transform ps-hover:ps-scale-105 ps-hover:ps-shadow-glow ps-relative ps-overflow-hidden ps-group"
					>
						<span class="ps-relative ps-z-10">Get Started</span>
						<span
							class="ps-absolute ps-inset-0 ps-bg-white/20 ps-transform ps-translate-y-full ps-group-hover:ps-translate-y-0 ps-transition-transform ps-duration-300"
						></span>
					</button>
					<button
						class="ps-border ps-border-gray-700 ps-text-white ps-px-6 ps-py-3 ps-rounded-md ps-hover:ps-border-red-600 ps-transition ps-duration-300 ps-transform ps-hover:ps-scale-105 ps-relative ps-overflow-hidden ps-group"
					>
						<span class="ps-relative ps-z-10">Learn More</span>
						<span
							class="ps-absolute ps-inset-0 ps-bg-red-600/10 ps-transform ps-translate-y-full ps-group-hover:ps-translate-y-0 ps-transition-transform ps-duration-300"
						></span>
					</button>
				</div>
				<div
					class="ps-flex ps-mt-10 ps-space-x-2"
					v-motion
					:initial="{ opacity: 0 }"
					:enter="{ opacity: 1, transition: { delay: 1600 } }"
				>
					<div
						class="ps-w-2 ps-h-2 ps-bg-red-600 ps-rounded-full ps-animate-pulse"
					></div>
					<div class="ps-w-2 ps-h-2 ps-bg-gray-700 ps-rounded-full"></div>
					<div class="ps-w-2 ps-h-2 ps-bg-gray-700 ps-rounded-full"></div>
					<div class="ps-w-2 ps-h-2 ps-bg-gray-700 ps-rounded-full"></div>
				</div>
			</div>
			<div
				class="ps-w-full md:ps-w-1/2 ps-flex ps-justify-center"
				v-motion
				:initial="{ opacity: 0, x: 100 }"
				:enter="{
					opacity: 1,
					x: 0,
					transition: { delay: 1000, duration: 800 },
				}"
			>
				<div class="ps-relative ps-floating-element">
					<img
						src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=400&width=400"
						alt="Cybersecurity Illustration"
						class="ps-max-w-full ps-h-auto ps-relative ps-z-10"
					/>
					<div
						class="ps-absolute ps-inset-0 ps-bg-red-600/20 ps-rounded-full ps-blur-3xl ps-animate-pulse-slow"
					></div>
				</div>
			</div>
		</section>

		<!-- Trusted Companies con animación de logos -->
		<section class="ps-bg-gray-900 ps-py-10 ps-relative ps-overflow-hidden">
			<div class="ps-container ps-mx-auto ps-px-6">
				<h2
					class="ps-text-center ps-text-xl ps-font-medium ps-mb-8"
					v-motion
					:initial="{ opacity: 0, y: 20 }"
					:visible="{ opacity: 1, y: 0 }"
				>
					Trusted Over 3000+ Companies in the World
				</h2>
				<div
					class="ps-flex ps-flex-wrap ps-justify-center ps-items-center ps-gap-8"
				>
					<div
						v-for="i in 5"
						:key="i"
						class="ps-opacity-70 ps-hover:ps-opacity-100 ps-transition ps-duration-300 ps-transform ps-hover:ps-scale-110"
						v-motion
						:initial="{ opacity: 0, y: 20 }"
						:visible="{ opacity: 1, y: 0, transition: { delay: i * 100 } }"
					>
						<div
							class="ps-w-24 ps-h-12 ps-bg-gray-800 ps-rounded ps-flex ps-items-center ps-justify-center ps-border ps-border-transparent ps-hover:ps-border-red-600/50 ps-transition-colors ps-duration-300"
						>
							<div class="ps-w-16 ps-h-8 ps-bg-gray-700 ps-rounded"></div>
						</div>
					</div>
				</div>
			</div>

			<!-- Líneas de conexión animadas -->
			<div class="ps-absolute ps-inset-0 ps-pointer-events-none">
				<div
					v-for="i in 5"
					:key="`line-${i}`"
					class="ps-absolute ps-bg-red-600/10 ps-h-px"
					:style="randomLineStyle()"
				></div>
			</div>
		</section>

		<!-- Why Choose Us con tarjetas animadas -->
		<section class="ps-py-16 ps-bg-black ps-relative">
			<div class="ps-container ps-mx-auto ps-px-6">
				<h2
					class="ps-text-3xl ps-font-bold ps-text-center ps-mb-4"
					v-motion
					:initial="{ opacity: 0, y: 20 }"
					:visible="{ opacity: 1, y: 0 }"
				>
					Why Choose Us
				</h2>
				<p
					class="ps-text-gray-400 ps-text-center ps-mb-12 ps-max-w-2xl ps-mx-auto"
					v-motion
					:initial="{ opacity: 0, y: 20 }"
					:visible="{ opacity: 1, y: 0, transition: { delay: 200 } }"
				>
					We provide comprehensive security solutions to protect your digital
					assets
				</p>

				<div class="ps-grid ps-grid-cols-1 md:ps-grid-cols-3 ps-gap-8">
					<div
						v-for="(feature, index) in features"
						:key="index"
						class="ps-bg-gray-900 ps-p-8 ps-rounded-lg ps-border ps-border-gray-800 ps-hover:ps-border-red-600 ps-transition ps-duration-500 ps-group ps-transform ps-hover:ps-scale-105 ps-hover:ps-shadow-glow-sm ps-relative ps-overflow-hidden"
						v-motion
						:initial="{ opacity: 0, y: 50 }"
						:visible="{ opacity: 1, y: 0, transition: { delay: index * 200 } }"
					>
						<div
							class="ps-absolute ps-inset-0 ps-bg-gradient-to-br ps-from-red-600/5 ps-to-transparent ps-opacity-0 ps-group-hover:ps-opacity-100 ps-transition-opacity ps-duration-500"
						></div>
						<div
							class="ps-w-12 ps-h-12 ps-bg-gray-800 ps-rounded-full ps-flex ps-items-center ps-justify-center ps-mb-4 ps-relative ps-z-10 ps-group-hover:ps-bg-red-600/20 ps-transition-colors ps-duration-500"
						>
							<v-icon
								:icon="feature.icon"
								color="red"
								size="large"
								class="ps-animate-pulse-slow"
							></v-icon>
						</div>
						<h3 class="ps-text-xl ps-font-bold ps-mb-3 ps-relative ps-z-10">
							{{ feature.title }}
						</h3>
						<p class="ps-text-gray-400 ps-mb-4 ps-relative ps-z-10">
							{{ feature.description }}
						</p>
						<a
							href="#"
							class="ps-text-red-600 ps-hover:ps-text-red-500 ps-transition ps-duration-300 ps-relative ps-z-10 ps-inline-flex ps-items-center ps-group"
						>
							Learn More
							<span
								class="ps-ml-1 ps-transform ps-group-hover:ps-translate-x-1 ps-transition-transform ps-duration-300"
								>→</span
							>
						</a>
					</div>
				</div>
			</div>

			<!-- Hexágonos flotantes de fondo -->
			<div
				class="ps-absolute ps-inset-0 ps-pointer-events-none ps-overflow-hidden"
			>
				<div
					v-for="i in 8"
					:key="`hex-${i}`"
					class="ps-absolute ps-hexagon"
					:style="randomHexagonStyle()"
				></div>
			</div>
		</section>

		<!-- Advanced Cyber Security Provider con efecto de desplazamiento -->
		<section class="ps-py-16 ps-bg-gray-900 ps-relative ps-overflow-hidden">
			<div class="ps-container ps-mx-auto ps-px-6">
				<div class="ps-flex ps-flex-col md:ps-flex-row ps-items-center">
					<div
						class="ps-w-full md:ps-w-1/2 ps-mb-10 md:ps-mb-0 ps-pr-0 md:ps-pr-10"
					>
						<h2
							class="ps-text-3xl ps-font-bold ps-mb-6"
							v-motion
							:initial="{ opacity: 0, y: 20 }"
							:visible="{ opacity: 1, y: 0 }"
						>
							Advanced
							<span class="ps-text-red-600 ps-relative">
								Cyber Security
								<span
									class="ps-absolute ps-bottom-0 ps-left-0 ps-w-full ps-h-px ps-bg-red-600/50 ps-animate-pulse"
								></span>
							</span>
							Provider
						</h2>
						<p
							class="ps-text-gray-400 ps-mb-6"
							v-motion
							:initial="{ opacity: 0, y: 20 }"
							:visible="{ opacity: 1, y: 0, transition: { delay: 200 } }"
						>
							Our team of experts provides comprehensive cybersecurity solutions
							to protect your organization from evolving threats. We offer
							tailored security strategies to meet your specific needs and
							ensure your digital assets remain secure.
						</p>
						<p
							class="ps-text-gray-400 ps-mb-8"
							v-motion
							:initial="{ opacity: 0, y: 20 }"
							:visible="{ opacity: 1, y: 0, transition: { delay: 400 } }"
						>
							With our advanced technologies and proactive approach, we help you
							stay ahead of potential security breaches and minimize risks to
							your business.
						</p>
						<button
							class="ps-bg-red-600 ps-text-white ps-px-6 ps-py-3 ps-rounded-md ps-hover:ps-bg-red-700 ps-transition ps-duration-300 ps-transform ps-hover:ps-scale-105 ps-hover:ps-shadow-glow ps-relative ps-overflow-hidden ps-group"
							v-motion
							:initial="{ opacity: 0, y: 20 }"
							:visible="{ opacity: 1, y: 0, transition: { delay: 600 } }"
						>
							<span class="ps-relative ps-z-10">Explore Us</span>
							<span
								class="ps-absolute ps-inset-0 ps-bg-white/20 ps-transform ps-translate-y-full ps-group-hover:ps-translate-y-0 ps-transition-transform ps-duration-300"
							></span>
						</button>
					</div>
					<div
						class="ps-w-full md:ps-w-1/2"
						v-motion
						:initial="{ opacity: 0, x: 100 }"
						:visible="{ opacity: 1, x: 0, transition: { duration: 800 } }"
					>
						<div class="ps-relative ps-floating-element">
							<img
								src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=400&width=500"
								alt="Cybersecurity Expert"
								class="ps-rounded-lg ps-w-full ps-relative ps-z-10"
							/>
							<div
								class="ps-absolute ps-inset-0 ps-bg-red-600/10 ps-rounded-lg ps-blur-xl ps-animate-pulse-slow"
							></div>
						</div>
					</div>
				</div>

				<!-- Stats con contador animado -->
				<div class="ps-grid ps-grid-cols-2 md:ps-grid-cols-4 ps-gap-6 ps-mt-16">
					<div
						v-for="(stat, index) in stats"
						:key="index"
						class="ps-text-center ps-group"
						v-motion
						:initial="{ opacity: 0, y: 50 }"
						:visible="{ opacity: 1, y: 0, transition: { delay: index * 200 } }"
					>
						<h3
							class="ps-text-3xl ps-font-bold ps-mb-2 ps-flex ps-justify-center ps-items-end"
						>
							<CountUp
								:end-val="stat.value"
								class="ps-group-hover:ps-text-red-600 ps-transition-colors ps-duration-300"
							/>
							<span class="ps-text-red-600">{{ stat.suffix }}</span>
						</h3>
						<p class="ps-text-gray-400">{{ stat.label }}</p>
					</div>
				</div>
			</div>

			<!-- Líneas de código animadas de fondo -->
			<div class="ps-absolute ps-inset-0 ps-pointer-events-none ps-opacity-5">
				<div
					v-for="i in 20"
					:key="`code-${i}`"
					class="ps-absolute ps-text-xs ps-font-mono"
					:style="randomCodeStyle()"
				>
					{{ randomCode() }}
				</div>
			</div>
		</section>

		<!-- Providing Best Cyber Security Solutions con efecto parallax -->
		<section class="ps-py-16 ps-bg-black ps-relative">
			<div class="ps-container ps-mx-auto ps-px-6">
				<div class="ps-flex ps-flex-col md:ps-flex-row ps-items-center">
					<div class="ps-w-full md:ps-w-1/2 ps-mb-10 md:ps-mb-0">
						<h2
							class="ps-text-3xl ps-font-bold ps-mb-6"
							v-motion
							:initial="{ opacity: 0, y: 20 }"
							:visible="{ opacity: 1, y: 0 }"
						>
							Providing Best
							<span class="ps-text-red-600 ps-relative">
								Cyber Security
								<span
									class="ps-absolute ps-bottom-0 ps-left-0 ps-w-full ps-h-px ps-bg-red-600/50 ps-animate-pulse"
								></span>
							</span>
							Solutions
						</h2>
						<p
							class="ps-text-gray-400 ps-mb-6"
							v-motion
							:initial="{ opacity: 0, y: 20 }"
							:visible="{ opacity: 1, y: 0, transition: { delay: 200 } }"
						>
							We offer comprehensive cybersecurity solutions tailored to your
							organization's specific needs. Our team of experts works closely
							with you to identify vulnerabilities and implement robust security
							measures.
						</p>
						<p
							class="ps-text-gray-400 ps-mb-8"
							v-motion
							:initial="{ opacity: 0, y: 20 }"
							:visible="{ opacity: 1, y: 0, transition: { delay: 400 } }"
						>
							From threat detection to incident response, we provide end-to-end
							security services to protect your digital assets and ensure
							business continuity.
						</p>
						<button
							class="ps-bg-red-600 ps-text-white ps-px-6 ps-py-3 ps-rounded-md ps-hover:ps-bg-red-700 ps-transition ps-duration-300 ps-transform ps-hover:ps-scale-105 ps-hover:ps-shadow-glow ps-relative ps-overflow-hidden ps-group"
							v-motion
							:initial="{ opacity: 0, y: 20 }"
							:visible="{ opacity: 1, y: 0, transition: { delay: 600 } }"
						>
							<span class="ps-relative ps-z-10">Explore Us</span>
							<span
								class="ps-absolute ps-inset-0 ps-bg-white/20 ps-transform ps-translate-y-full ps-group-hover:ps-translate-y-0 ps-transition-transform ps-duration-300"
							></span>
						</button>
					</div>
					<div
						class="ps-w-full md:ps-w-1/2 ps-pl-0 md:ps-pl-10"
						v-motion
						:initial="{ opacity: 0, x: 100 }"
						:visible="{ opacity: 1, x: 0, transition: { duration: 800 } }"
					>
						<div class="ps-relative ps-floating-element-reverse">
							<img
								src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=400&width=500"
								alt="Security Solutions"
								class="ps-rounded-lg ps-w-full ps-relative ps-z-10"
							/>
							<div
								class="ps-absolute ps-inset-0 ps-bg-red-600/10 ps-rounded-lg ps-blur-xl ps-animate-pulse-slow"
							></div>
						</div>
					</div>
				</div>
			</div>

			<!-- Efecto de partículas de fondo -->
			<div class="ps-absolute ps-inset-0 ps-pointer-events-none">
				<div
					v-for="i in 30"
					:key="`particle-${i}`"
					class="ps-absolute ps-rounded-full ps-bg-red-600"
					:style="randomParticleStyle()"
				></div>
			</div>
		</section>

		<!-- What We Offer con tarjetas animadas -->
		<section class="ps-py-16 ps-bg-gray-900 ps-relative">
			<div class="ps-container ps-mx-auto ps-px-6">
				<h2
					class="ps-text-3xl ps-font-bold ps-text-center ps-mb-4"
					v-motion
					:initial="{ opacity: 0, y: 20 }"
					:visible="{ opacity: 1, y: 0 }"
				>
					What We Offer
				</h2>
				<p
					class="ps-text-gray-400 ps-text-center ps-mb-12 ps-max-w-2xl ps-mx-auto"
					v-motion
					:initial="{ opacity: 0, y: 20 }"
					:visible="{ opacity: 1, y: 0, transition: { delay: 200 } }"
				>
					We provide comprehensive cybersecurity services to protect your
					organization from evolving threats
				</p>

				<div
					class="ps-grid ps-grid-cols-1 md:ps-grid-cols-2 lg:ps-grid-cols-3 ps-gap-8"
				>
					<div
						v-for="(service, index) in services"
						:key="index"
						class="ps-bg-gray-800 ps-p-8 ps-rounded-lg ps-border ps-border-gray-700 ps-hover:ps-border-red-600 ps-transition ps-duration-500 ps-group ps-transform ps-hover:ps-scale-105 ps-hover:ps-shadow-glow-sm ps-relative ps-overflow-hidden"
						v-motion
						:initial="{ opacity: 0, y: 50 }"
						:visible="{ opacity: 1, y: 0, transition: { delay: index * 150 } }"
					>
						<div
							class="ps-absolute ps-inset-0 ps-bg-gradient-to-br ps-from-red-600/5 ps-to-transparent ps-opacity-0 ps-group-hover:ps-opacity-100 ps-transition-opacity ps-duration-500"
						></div>
						<div
							class="ps-w-12 ps-h-12 ps-bg-gray-700 ps-rounded-full ps-flex ps-items-center ps-justify-center ps-mb-4 ps-relative ps-z-10 ps-group-hover:ps-bg-red-600/20 ps-transition-colors ps-duration-500"
						>
							<v-icon
								:icon="service.icon"
								color="red"
								size="large"
								class="ps-transform ps-group-hover:ps-rotate-12 ps-transition-transform ps-duration-300"
							></v-icon>
						</div>
						<h3 class="ps-text-xl ps-font-bold ps-mb-3 ps-relative ps-z-10">
							{{ service.title }}
						</h3>
						<p class="ps-text-gray-400 ps-relative ps-z-10">
							{{ service.description }}
						</p>
					</div>
				</div>
			</div>

			<!-- Líneas de conexión animadas -->
			<div class="ps-absolute ps-inset-0 ps-pointer-events-none">
				<div
					v-for="i in 8"
					:key="`line-service-${i}`"
					class="ps-absolute ps-bg-red-600/5 ps-h-px"
					:style="randomLineStyle()"
				></div>
			</div>
		</section>

		<!-- FAQ Section con acordeón animado -->
		<section class="ps-py-16 ps-bg-black ps-relative">
			<div class="ps-container ps-mx-auto ps-px-6">
				<div class="ps-flex ps-flex-col md:ps-flex-row">
					<div class="ps-w-full md:ps-w-1/2 ps-mb-10 md:ps-mb-0">
						<h2
							class="ps-text-3xl ps-font-bold ps-mb-6"
							v-motion
							:initial="{ opacity: 0, y: 20 }"
							:visible="{ opacity: 1, y: 0 }"
						>
							General Questions<br />Frequently Asked Questions?
						</h2>
						<div
							class="ps-bg-red-600 ps-text-white ps-p-4 ps-rounded-lg ps-flex ps-items-center ps-mb-6 ps-transform ps-hover:ps-scale-105 ps-transition-transform ps-duration-300"
							v-motion
							:initial="{ opacity: 0, y: 20 }"
							:visible="{ opacity: 1, y: 0, transition: { delay: 200 } }"
						>
							<v-icon
								icon="mdi-headset"
								class="ps-mr-3 ps-animate-bounce-slow"
							></v-icon>
							<span>Can't find the answer? Contact our support team</span>
						</div>

						<div
							v-for="(faq, index) in faqs"
							:key="index"
							class="ps-mb-6"
							v-motion
							:initial="{ opacity: 0, y: 20 }"
							:visible="{
								opacity: 1,
								y: 0,
								transition: { delay: 300 + index * 150 },
							}"
						>
							<div
								class="ps-flex ps-justify-between ps-items-center ps-mb-2 ps-cursor-pointer ps-group"
								@click="toggleFaq(index)"
							>
								<h3
									class="ps-text-lg ps-font-medium ps-group-hover:ps-text-red-600 ps-transition-colors ps-duration-300"
								>
									{{ faq.question }}
								</h3>
								<v-icon
									:icon="faq.isOpen ? 'mdi-chevron-up' : 'mdi-chevron-down'"
									class="ps-transform ps-transition-transform ps-duration-300"
									:class="{ 'ps-rotate-180': faq.isOpen }"
								></v-icon>
							</div>
							<div class="ps-h-px ps-bg-gray-800 ps-w-full"></div>
							<div
								v-if="faq.isOpen"
								class="ps-mt-3 ps-text-gray-400 ps-pl-4 ps-border-l ps-border-red-600 ps-animate-fade-in"
							>
								{{ faq.answer }}
							</div>
						</div>
					</div>
					<div
						class="ps-w-full md:ps-w-1/2 md:ps-pl-10"
						v-motion
						:initial="{ opacity: 0, x: 100 }"
						:visible="{ opacity: 1, x: 0, transition: { duration: 800 } }"
					>
						<div class="ps-relative ps-floating-element">
							<img
								src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=400&width=500"
								alt="Support Team"
								class="ps-rounded-lg ps-w-full ps-relative ps-z-10"
							/>
							<div
								class="ps-absolute ps-inset-0 ps-bg-red-600/10 ps-rounded-lg ps-blur-xl ps-animate-pulse-slow"
							></div>
						</div>
					</div>
				</div>
			</div>

			<!-- Efecto de código binario de fondo -->
			<div class="ps-absolute ps-inset-0 ps-pointer-events-none ps-opacity-5">
				<div
					v-for="i in 50"
					:key="`binary-${i}`"
					class="ps-absolute ps-text-xs ps-font-mono"
					:style="randomBinaryStyle()"
				>
					{{ randomBinary() }}
				</div>
			</div>
		</section>

		<!-- Pricing Section con tarjetas animadas -->
		<section class="ps-py-16 ps-bg-gray-900 ps-relative">
			<div class="ps-container ps-mx-auto ps-px-6">
				<h2
					class="ps-text-3xl ps-font-bold ps-text-center ps-mb-4"
					v-motion
					:initial="{ opacity: 0, y: 20 }"
					:visible="{ opacity: 1, y: 0 }"
				>
					Your Pricing Plan
				</h2>
				<p
					class="ps-text-gray-400 ps-text-center ps-mb-12 ps-max-w-2xl ps-mx-auto"
					v-motion
					:initial="{ opacity: 0, y: 20 }"
					:visible="{ opacity: 1, y: 0, transition: { delay: 200 } }"
				>
					Choose the perfect plan for your organization's security needs
				</p>

				<div class="ps-grid ps-grid-cols-1 md:ps-grid-cols-3 ps-gap-8">
					<!-- Free Plan -->
					<div
						class="ps-bg-gray-800 ps-rounded-lg ps-overflow-hidden ps-border ps-border-gray-700 ps-hover:ps-border-red-600 ps-transition ps-duration-500 ps-group ps-transform ps-hover:ps-scale-105 ps-hover:ps-shadow-glow-sm ps-relative"
						v-motion
						:initial="{ opacity: 0, y: 50 }"
						:visible="{ opacity: 1, y: 0, transition: { delay: 300 } }"
					>
						<div
							class="ps-absolute ps-inset-0 ps-bg-gradient-to-b ps-from-gray-800 ps-to-gray-900 ps-opacity-0 ps-group-hover:ps-opacity-100 ps-transition-opacity ps-duration-500"
						></div>
						<div class="ps-p-8 ps-relative ps-z-10">
							<div
								class="ps-w-12 ps-h-12 ps-bg-gray-700 ps-rounded-full ps-flex ps-items-center ps-justify-center ps-mb-4 ps-group-hover:ps-bg-red-600/20 ps-transition-colors ps-duration-500"
							>
								<v-icon
									icon="mdi-shield-outline"
									color="red"
									size="large"
									class="ps-transform ps-group-hover:ps-rotate-12 ps-transition-transform ps-duration-300"
								></v-icon>
							</div>
							<h3 class="ps-text-xl ps-font-bold ps-mb-2">Beginner</h3>
							<div class="ps-flex ps-items-end ps-mb-6">
								<span
									class="ps-text-3xl ps-font-bold ps-group-hover:ps-text-red-600 ps-transition-colors ps-duration-300"
									>Free</span
								>
								<span class="ps-text-gray-400 ps-ml-2">/month</span>
							</div>

							<ul class="ps-space-y-3 ps-mb-8">
								<li
									v-for="(feature, idx) in pricingPlans[0].features"
									:key="idx"
									class="ps-flex ps-items-center"
									:class="{ 'ps-text-gray-500': !feature.included }"
								>
									<v-icon
										:icon="feature.included ? 'mdi-check' : 'mdi-close'"
										:color="feature.included ? 'green' : 'gray'"
										class="ps-mr-2"
									></v-icon>
									<span>{{ feature.text }}</span>
								</li>
							</ul>

							<button
								class="ps-w-full ps-border ps-border-gray-600 ps-text-white ps-py-3 ps-rounded-md ps-hover:ps-bg-gray-700 ps-transition ps-duration-300 ps-relative ps-overflow-hidden ps-group"
							>
								<span class="ps-relative ps-z-10">Get Plan</span>
								<span
									class="ps-absolute ps-inset-0 ps-bg-red-600/10 ps-transform ps-translate-y-full ps-group-hover:ps-translate-y-0 ps-transition-transform ps-duration-300"
								></span>
							</button>
						</div>
					</div>

					<!-- Business Plan -->
					<div
						class="ps-bg-gray-800 ps-rounded-lg ps-overflow-hidden ps-border ps-border-red-600 ps-relative ps-transform ps-scale-105 ps-shadow-glow-sm"
						v-motion
						:initial="{ opacity: 0, y: 50 }"
						:visible="{ opacity: 1, y: 0, transition: { delay: 400 } }"
					>
						<div
							class="ps-absolute ps-top-0 ps-left-0 ps-right-0 ps-bg-red-600 ps-text-white ps-text-center ps-py-1 ps-text-sm ps-animate-pulse-slow"
						>
							Most Popular
						</div>
						<div
							class="ps-absolute ps-inset-0 ps-bg-gradient-to-b ps-from-gray-800 ps-to-gray-900"
						></div>
						<div class="ps-p-8 ps-mt-6 ps-relative ps-z-10">
							<div
								class="ps-w-12 ps-h-12 ps-bg-gray-700 ps-rounded-full ps-flex ps-items-center ps-justify-center ps-mb-4 ps-group-hover:ps-bg-red-600/20 ps-transition-colors ps-duration-500"
							>
								<v-icon
									icon="mdi-shield-half-full"
									color="red"
									size="large"
									class="ps-animate-pulse-slow"
								></v-icon>
							</div>
							<h3 class="ps-text-xl ps-font-bold ps-mb-2">Business</h3>
							<div class="ps-flex ps-items-end ps-mb-6">
								<span class="ps-text-3xl ps-font-bold ps-text-red-600"
									>$39.99</span
								>
								<span class="ps-text-gray-400 ps-ml-2">/month</span>
							</div>

							<ul class="ps-space-y-3 ps-mb-8">
								<li
									v-for="(feature, idx) in pricingPlans[1].features"
									:key="idx"
									class="ps-flex ps-items-center"
									:class="{ 'ps-text-gray-500': !feature.included }"
								>
									<v-icon
										:icon="feature.included ? 'mdi-check' : 'mdi-close'"
										:color="feature.included ? 'green' : 'gray'"
										class="ps-mr-2"
									></v-icon>
									<span>{{ feature.text }}</span>
								</li>
							</ul>

							<button
								class="ps-w-full ps-bg-red-600 ps-text-white ps-py-3 ps-rounded-md ps-hover:ps-bg-red-700 ps-transition ps-duration-300 ps-relative ps-overflow-hidden ps-group ps-hover:ps-shadow-glow"
							>
								<span class="ps-relative ps-z-10">Get Plan</span>
								<span
									class="ps-absolute ps-inset-0 ps-bg-white/20 ps-transform ps-translate-y-full ps-group-hover:ps-translate-y-0 ps-transition-transform ps-duration-300"
								></span>
							</button>
						</div>
					</div>

					<!-- Enterprise Plan -->
					<div
						class="ps-bg-gray-800 ps-rounded-lg ps-overflow-hidden ps-border ps-border-gray-700 ps-hover:ps-border-red-600 ps-transition ps-duration-500 ps-group ps-transform ps-hover:ps-scale-105 ps-hover:ps-shadow-glow-sm ps-relative"
						v-motion
						:initial="{ opacity: 0, y: 50 }"
						:visible="{ opacity: 1, y: 0, transition: { delay: 500 } }"
					>
						<div
							class="ps-absolute ps-inset-0 ps-bg-gradient-to-b ps-from-gray-800 ps-to-gray-900 ps-opacity-0 ps-group-hover:ps-opacity-100 ps-transition-opacity ps-duration-500"
						></div>
						<div class="ps-p-8 ps-relative ps-z-10">
							<div
								class="ps-w-12 ps-h-12 ps-bg-gray-700 ps-rounded-full ps-flex ps-items-center ps-justify-center ps-mb-4 ps-group-hover:ps-bg-red-600/20 ps-transition-colors ps-duration-500"
							>
								<v-icon
									icon="mdi-shield"
									color="red"
									size="large"
									class="ps-transform ps-group-hover:ps-rotate-12 ps-transition-transform ps-duration-300"
								></v-icon>
							</div>
							<h3 class="ps-text-xl ps-font-bold ps-mb-2">Enterprise</h3>
							<div class="ps-flex ps-items-end ps-mb-6">
								<span
									class="ps-text-3xl ps-font-bold ps-group-hover:ps-text-red-600 ps-transition-colors ps-duration-300"
									>$89.99</span
								>
								<span class="ps-text-gray-400 ps-ml-2">/month</span>
							</div>

							<ul class="ps-space-y-3 ps-mb-8">
								<li
									v-for="(feature, idx) in pricingPlans[2].features"
									:key="idx"
									class="ps-flex ps-items-center"
									:class="{ 'ps-text-gray-500': !feature.included }"
								>
									<v-icon
										:icon="feature.included ? 'mdi-check' : 'mdi-close'"
										:color="feature.included ? 'green' : 'gray'"
										class="ps-mr-2"
									></v-icon>
									<span>{{ feature.text }}</span>
								</li>
							</ul>

							<button
								class="ps-w-full ps-border ps-border-gray-600 ps-text-white ps-py-3 ps-rounded-md ps-hover:ps-bg-gray-700 ps-transition ps-duration-300 ps-relative ps-overflow-hidden ps-group"
							>
								<span class="ps-relative ps-z-10">Get Plan</span>
								<span
									class="ps-absolute ps-inset-0 ps-bg-red-600/10 ps-transform ps-translate-y-full ps-group-hover:ps-translate-y-0 ps-transition-transform ps-duration-300"
								></span>
							</button>
						</div>
					</div>
				</div>
			</div>

			<!-- Efecto de partículas de fondo -->
			<div class="ps-absolute ps-inset-0 ps-pointer-events-none">
				<div
					v-for="i in 20"
					:key="`pricing-particle-${i}`"
					class="ps-absolute ps-rounded-full ps-bg-red-600/30"
					:style="randomParticleStyle()"
				></div>
			</div>
		</section>

		<!-- Team Section con tarjetas animadas -->
		<section class="ps-py-16 ps-bg-black ps-relative">
			<div class="ps-container ps-mx-auto ps-px-6">
				<h2
					class="ps-text-3xl ps-font-bold ps-text-center ps-mb-4"
					v-motion
					:initial="{ opacity: 0, y: 20 }"
					:visible="{ opacity: 1, y: 0 }"
				>
					Our Professional Team
				</h2>
				<p
					class="ps-text-gray-400 ps-text-center ps-mb-12 ps-max-w-2xl ps-mx-auto"
					v-motion
					:initial="{ opacity: 0, y: 20 }"
					:visible="{ opacity: 1, y: 0, transition: { delay: 200 } }"
				>
					Meet our team of cybersecurity experts dedicated to protecting your
					digital assets
				</p>

				<div class="ps-grid ps-grid-cols-1 md:ps-grid-cols-3 ps-gap-8">
					<!-- Team Members -->
					<div
						v-for="(member, index) in team"
						:key="index"
						class="ps-bg-gray-900 ps-rounded-lg ps-overflow-hidden ps-group ps-transform ps-hover:ps-scale-105 ps-transition-transform ps-duration-500 ps-relative"
						v-motion
						:initial="{ opacity: 0, y: 50 }"
						:visible="{ opacity: 1, y: 0, transition: { delay: index * 200 } }"
					>
						<div class="ps-relative ps-overflow-hidden">
							<img
								:src="member.image"
								:alt="member.name"
								class="ps-w-full ps-h-64 ps-object-cover ps-transform ps-group-hover:ps-scale-110 ps-transition-transform ps-duration-500"
							/>
							<div
								class="ps-absolute ps-inset-0 ps-bg-gradient-to-t ps-from-gray-900 ps-to-transparent ps-opacity-60"
							></div>
						</div>
						<div class="ps-p-6 ps-relative">
							<h3
								class="ps-text-xl ps-font-bold ps-mb-1 ps-group-hover:ps-text-red-600 ps-transition-colors ps-duration-300"
							>
								{{ member.name }}
							</h3>
							<p class="ps-text-red-600 ps-mb-4">{{ member.position }}</p>
							<div class="ps-flex ps-space-x-3">
								<a
									v-for="(social, idx) in member.socials"
									:key="idx"
									:href="social.link"
									class="ps-text-gray-400 ps-hover:ps-text-white ps-transition-colors ps-duration-300 ps-transform ps-hover:ps-scale-125"
								>
									<v-icon :icon="social.icon"></v-icon>
								</a>
							</div>
							<div
								class="ps-absolute ps-top-0 ps-right-0 ps-w-16 ps-h-16 ps-bg-red-600/10 ps-rounded-full ps-transform ps-translate-x-1/2 ps-translate-y-1/2 ps-blur-xl ps-animate-pulse-slow"
							></div>
						</div>
					</div>
				</div>
			</div>

			<!-- Líneas de conexión animadas -->
			<div class="ps-absolute ps-inset-0 ps-pointer-events-none">
				<div
					v-for="i in 8"
					:key="`line-team-${i}`"
					class="ps-absolute ps-bg-red-600/5 ps-h-px"
					:style="randomLineStyle()"
				></div>
			</div>
		</section>

		<!-- Blog Section con tarjetas animadas -->
		<section class="ps-py-16 ps-bg-gray-900 ps-relative">
			<div class="ps-container ps-mx-auto ps-px-6">
				<h2
					class="ps-text-3xl ps-font-bold ps-text-center ps-mb-4"
					v-motion
					:initial="{ opacity: 0, y: 20 }"
					:visible="{ opacity: 1, y: 0 }"
				>
					Latest News & Blog
				</h2>
				<p
					class="ps-text-gray-400 ps-text-center ps-mb-12 ps-max-w-2xl ps-mx-auto"
					v-motion
					:initial="{ opacity: 0, y: 20 }"
					:visible="{ opacity: 1, y: 0, transition: { delay: 200 } }"
				>
					Stay updated with the latest cybersecurity trends and insights
				</p>

				<div class="ps-grid ps-grid-cols-1 md:ps-grid-cols-3 ps-gap-8">
					<!-- Blog Posts -->
					<div
						v-for="(post, index) in blogPosts"
						:key="index"
						class="ps-bg-gray-800 ps-rounded-lg ps-overflow-hidden ps-hover:ps-transform ps-hover:ps-scale-105 ps-transition-transform ps-duration-500 ps-group ps-relative"
						v-motion
						:initial="{ opacity: 0, y: 50 }"
						:visible="{ opacity: 1, y: 0, transition: { delay: index * 200 } }"
					>
						<div class="ps-relative ps-overflow-hidden">
							<img
								:src="post.image"
								:alt="post.title"
								class="ps-w-full ps-h-48 ps-object-cover ps-transform ps-group-hover:ps-scale-110 ps-transition-transform ps-duration-500"
							/>
							<div
								class="ps-absolute ps-inset-0 ps-bg-gradient-to-t ps-from-gray-900 ps-to-transparent ps-opacity-60"
							></div>
						</div>
						<div class="ps-p-6 ps-relative">
							<div class="ps-flex ps-items-center ps-mb-3">
								<span
									class="ps-bg-red-600 ps-text-white ps-text-xs ps-px-2 ps-py-1 ps-rounded"
									>{{ post.category }}</span
								>
								<span class="ps-text-gray-400 ps-text-sm ps-ml-3">{{
									post.date
								}}</span>
							</div>
							<h3
								class="ps-text-xl ps-font-bold ps-mb-3 ps-group-hover:ps-text-red-600 ps-transition-colors ps-duration-300"
							>
								{{ post.title }}
							</h3>
							<p class="ps-text-gray-400 ps-mb-4">
								{{ post.excerpt }}
							</p>
							<a
								href="#"
								class="ps-text-red-600 ps-hover:ps-text-red-500 ps-transition ps-duration-300 ps-inline-flex ps-items-center ps-group"
							>
								Read More
								<span
									class="ps-ml-1 ps-transform ps-group-hover:ps-translate-x-1 ps-transition-transform ps-duration-300"
									>→</span
								>
							</a>
						</div>
					</div>
				</div>
			</div>

			<!-- Efecto de código binario de fondo -->
			<div class="ps-absolute ps-inset-0 ps-pointer-events-none ps-opacity-5">
				<div
					v-for="i in 30"
					:key="`blog-binary-${i}`"
					class="ps-absolute ps-text-xs ps-font-mono"
					:style="randomBinaryStyle()"
				>
					{{ randomBinary() }}
				</div>
			</div>
		</section>

		<!-- Newsletter Section con animación -->
		<section class="ps-py-16 ps-bg-black ps-relative ps-overflow-hidden">
			<div class="ps-container ps-mx-auto ps-px-6">
				<h2
					class="ps-text-3xl ps-font-bold ps-text-center ps-mb-4"
					v-motion
					:initial="{ opacity: 0, y: 20 }"
					:visible="{ opacity: 1, y: 0 }"
				>
					Subscribe Our Newsletter
				</h2>
				<p
					class="ps-text-gray-400 ps-text-center ps-mb-8 ps-max-w-2xl ps-mx-auto"
					v-motion
					:initial="{ opacity: 0, y: 20 }"
					:visible="{ opacity: 1, y: 0, transition: { delay: 200 } }"
				>
					Stay updated with the latest cybersecurity news, tips, and insights
				</p>

				<div
					class="ps-max-w-xl ps-mx-auto"
					v-motion
					:initial="{ opacity: 0, y: 20 }"
					:visible="{ opacity: 1, y: 0, transition: { delay: 400 } }"
				>
					<div class="ps-flex ps-flex-col md:ps-flex-row ps-gap-4 ps-relative">
						<input
							type="email"
							placeholder="Enter your email"
							class="ps-bg-gray-800 ps-border ps-border-gray-700 ps-rounded-md ps-px-4 ps-py-3 ps-text-white ps-flex-grow focus:ps-outline-none focus:ps-border-red-600 ps-transition-colors ps-duration-300"
						/>
						<button
							class="ps-bg-red-600 ps-text-white ps-px-6 ps-py-3 ps-rounded-md ps-hover:ps-bg-red-700 ps-transition ps-duration-300 ps-transform ps-hover:ps-scale-105 ps-hover:ps-shadow-glow ps-relative ps-overflow-hidden ps-group"
						>
							<span class="ps-relative ps-z-10">Subscribe</span>
							<span
								class="ps-absolute ps-inset-0 ps-bg-white/20 ps-transform ps-translate-y-full ps-group-hover:ps-translate-y-0 ps-transition-transform ps-duration-300"
							></span>
						</button>

						<!-- Efecto de pulso alrededor del botón -->
						<div class="ps-absolute ps-inset-0 ps-pointer-events-none">
							<div
								class="ps-absolute ps-right-0 ps-top-1/2 ps-transform ps--translate-y-1/2 ps-w-24 ps-h-24 ps-bg-red-600/20 ps-rounded-full ps-blur-xl ps-animate-pulse-slow"
							></div>
						</div>
					</div>
				</div>
			</div>

			<!-- Efecto de partículas de fondo -->
			<div class="ps-absolute ps-inset-0 ps-pointer-events-none">
				<div
					v-for="i in 15"
					:key="`newsletter-particle-${i}`"
					class="ps-absolute ps-rounded-full ps-bg-red-600/20"
					:style="randomParticleStyle()"
				></div>
			</div>
		</section>

		<!-- Footer con animación -->
		<footer class="ps-bg-gray-900 ps-py-12 ps-relative">
			<div class="ps-container ps-mx-auto ps-px-6">
				<div class="ps-grid ps-grid-cols-1 md:ps-grid-cols-4 ps-gap-8">
					<div
						v-motion
						:initial="{ opacity: 0, y: 20 }"
						:visible="{ opacity: 1, y: 0 }"
					>
						<div class="ps-flex ps-items-center ps-mb-6 ps-group">
							<div
								class="ps-w-8 ps-h-8 ps-bg-red-600 ps-rounded-full ps-mr-2 ps-group-hover:ps-scale-110 ps-transition-transform ps-duration-300"
							></div>
							<span
								class="ps-text-xl ps-font-bold ps-group-hover:ps-text-red-600 ps-transition-colors ps-duration-300"
								>redlight</span
							>
						</div>
						<p class="ps-text-gray-400 ps-mb-6">
							Providing advanced cybersecurity solutions to protect your
							organization from evolving threats.
						</p>
						<div class="ps-flex ps-space-x-4">
							<a
								v-for="(social, index) in footerSocials"
								:key="index"
								:href="social.link"
								class="ps-text-gray-400 ps-hover:ps-text-white ps-transition-colors ps-duration-300 ps-transform ps-hover:ps-scale-125"
							>
								<v-icon :icon="social.icon"></v-icon>
							</a>
						</div>
					</div>

					<div
						v-motion
						:initial="{ opacity: 0, y: 20 }"
						:visible="{ opacity: 1, y: 0, transition: { delay: 200 } }"
					>
						<h3 class="ps-text-lg ps-font-bold ps-mb-6">Quick Links</h3>
						<ul class="ps-space-y-3">
							<li v-for="(link, index) in quickLinks" :key="index">
								<a
									href="#"
									class="ps-text-gray-400 ps-hover:ps-text-white ps-transition-colors ps-duration-300 ps-relative ps-group"
								>
									{{ link }}
									<span
										class="ps-absolute ps-bottom-0 ps-left-0 ps-w-0 ps-h-px ps-bg-red-600 ps-group-hover:ps-w-full ps-transition-all ps-duration-300"
									></span>
								</a>
							</li>
						</ul>
					</div>

					<div
						v-motion
						:initial="{ opacity: 0, y: 20 }"
						:visible="{ opacity: 1, y: 0, transition: { delay: 400 } }"
					>
						<h3 class="ps-text-lg ps-font-bold ps-mb-6">Services</h3>
						<ul class="ps-space-y-3">
							<li v-for="(service, index) in footerServices" :key="index">
								<a
									href="#"
									class="ps-text-gray-400 ps-hover:ps-text-white ps-transition-colors ps-duration-300 ps-relative ps-group"
								>
									{{ service }}
									<span
										class="ps-absolute ps-bottom-0 ps-left-0 ps-w-0 ps-h-px ps-bg-red-600 ps-group-hover:ps-w-full ps-transition-all ps-duration-300"
									></span>
								</a>
							</li>
						</ul>
					</div>

					<div
						v-motion
						:initial="{ opacity: 0, y: 20 }"
						:visible="{ opacity: 1, y: 0, transition: { delay: 600 } }"
					>
						<h3 class="ps-text-lg ps-font-bold ps-mb-6">Contact Us</h3>
						<ul class="ps-space-y-3">
							<li class="ps-flex ps-items-start ps-group">
								<v-icon
									icon="mdi-map-marker"
									class="ps-mr-3 ps-mt-1 ps-text-red-600 ps-group-hover:ps-animate-bounce-slow"
								></v-icon>
								<span class="ps-text-gray-400"
									>123 Security Street, Cyber City, 10001</span
								>
							</li>
							<li class="ps-flex ps-items-center ps-group">
								<v-icon
									icon="mdi-phone"
									class="ps-mr-3 ps-text-red-600 ps-group-hover:ps-animate-bounce-slow"
								></v-icon>
								<span class="ps-text-gray-400">+1 (555) 123-4567</span>
							</li>
							<li class="ps-flex ps-items-center ps-group">
								<v-icon
									icon="mdi-email"
									class="ps-mr-3 ps-text-red-600 ps-group-hover:ps-animate-bounce-slow"
								></v-icon>
								<span class="ps-text-gray-400">info@redlight.com</span>
							</li>
						</ul>
					</div>
				</div>

				<div
					class="ps-border-t ps-border-gray-800 ps-mt-12 ps-pt-8 ps-text-center"
					v-motion
					:initial="{ opacity: 0 }"
					:visible="{ opacity: 1, transition: { delay: 800 } }"
				>
					<p class="ps-text-gray-400">© 2023 Redlight. All rights reserved.</p>
				</div>
			</div>

			<!-- Líneas de conexión animadas -->
			<div class="ps-absolute ps-inset-0 ps-pointer-events-none">
				<div
					v-for="i in 5"
					:key="`line-footer-${i}`"
					class="ps-absolute ps-bg-red-600/5 ps-h-px"
					:style="randomLineStyle()"
				></div>
			</div>
		</footer>
	</div>
</template>

<style>
	/* Estilos para animaciones y efectos */
	.ps-text-gradient {
		background: linear-gradient(90deg, #ffffff, #ff4d4d);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.ps-shadow-glow {
		box-shadow: 0 0 15px rgba(255, 77, 77, 0.5);
	}

	.ps-shadow-glow-sm {
		box-shadow: 0 0 10px rgba(255, 77, 77, 0.3);
	}

	.ps-floating-element {
		animation: float 6s ease-in-out infinite;
	}

	.ps-floating-element-reverse {
		animation: float-reverse 6s ease-in-out infinite;
	}

	.ps-hexagon {
		clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
		border: 1px solid rgba(255, 77, 77, 0.3);
		animation: float linear infinite;
	}

	.ps-animate-pulse-slow {
		animation: pulse 3s infinite ease-in-out;
	}

	.ps-animate-bounce-slow {
		animation: bounce 2s infinite ease-in-out;
	}

	.ps-animate-fade-in {
		animation: fadeIn 0.5s ease-in-out;
	}

	@keyframes float {
		0% {
			transform: translateY(0) rotate(0deg);
		}
		50% {
			transform: translateY(-20px) rotate(5deg);
		}
		100% {
			transform: translateY(0) rotate(0deg);
		}
	}

	@keyframes float-reverse {
		0% {
			transform: translateY(0) rotate(0deg);
		}
		50% {
			transform: translateY(-20px) rotate(-5deg);
		}
		100% {
			transform: translateY(0) rotate(0deg);
		}
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 0.5;
			transform: scale(1);
		}
		50% {
			opacity: 1;
			transform: scale(1.05);
		}
	}

	@keyframes bounce {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-5px);
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
