<script setup lang="ts">
	import ParticlesBackground from "@/components/ParticlesBackground.vue";
	import { useRoute, useRouter } from "vue-router";
	import logo from "../assets/img/logoprestigio.png";
	// Blog posts (en una aplicación real, esto probablemente vendría de una API)
	const blogPosts = [
		{
			id: 1,
			title: "Fortalezas de la Seguridad Física",
			category: "Infraestructura",
			date: "20 Abr, 2025",
			author: "",
			readTime: "5 min",
			excerpt:
				"Descubra cómo fortalecer su perímetro con estrategias comprobadas.",
			image: logo,
			content: `
      <p class="ps-text-xl ps-leading-relaxed ps-mb-6">
        La seguridad física sigue siendo un componente fundamental en cualquier estrategia de protección integral. A pesar de los avances tecnológicos, las barreras físicas y los controles de acceso tangibles continúan siendo la primera línea de defensa contra intrusiones no autorizadas.
      </p>
      
      <h2>Elementos Clave de la Seguridad Física</h2>
      <p>
        Una estrategia de seguridad física efectiva debe considerar múltiples capas de protección, comenzando desde el perímetro exterior hasta los activos más valiosos. Estos elementos incluyen:
      </p>
      
      <h3>1. Barreras Perimetrales</h3>
      <p>
        Las barreras perimetrales como muros, vallas y bolardos constituyen la primera línea de defensa visible. Estas estructuras no solo impiden el acceso físico, sino que también actúan como disuasores psicológicos para posibles intrusos.
      </p>
      <p>
        Las tendencias modernas incluyen la implementación de barreras estéticamente agradables que se integran con el diseño arquitectónico mientras mantienen altos niveles de seguridad. Los materiales avanzados permiten crear barreras que son tanto robustas como visualmente discretas.
      </p>
      
      <h3>2. Control de Acceso</h3>
      <p>
        Los sistemas de control de acceso han evolucionado significativamente, incorporando tecnologías biométricas, tarjetas inteligentes y autenticación multifactor. La clave está en implementar soluciones que equilibren la seguridad con la conveniencia para los usuarios autorizados.
      </p>
      <p>
        Los controles de acceso modernos permiten una gestión granular de permisos, facilitando la creación de zonas con diferentes niveles de acceso según las necesidades específicas de cada organización.
      </p>
      
      <div class="ps-bg-gray-900 ps-p-6 ps-rounded-lg ps-my-8 ps-border ps-border-gray-800">
        <h3 class="ps-text-xl ps-font-bold ps-mb-4">Estadísticas Relevantes</h3>
        <ul class="ps-space-y-2">
          <li class="ps-flex ps-items-start">
            <span class="ps-text-red-600 ps-mr-2">•</span>
            <span>El 85% de las brechas de seguridad involucran algún componente de acceso físico no autorizado</span>
          </li>
          <li class="ps-flex ps-items-start">
            <span class="ps-text-red-600 ps-mr-2">•</span>
            <span>Las organizaciones con seguridad física integrada reportan un 60% menos de incidentes</span>
          </li>
          <li class="ps-flex ps-items-start">
            <span class="ps-text-red-600 ps-mr-2">•</span>
            <span>El retorno de inversión en seguridad física preventiva supera el 300% en comparación con los costos post-incidente</span>
          </li>
        </ul>
      </div>
      
      <h3>3. Vigilancia y Monitoreo</h3>
      <p>
        Los sistemas de vigilancia modernos combinan cámaras de alta definición, análisis de video inteligente y monitoreo remoto para proporcionar una cobertura completa. La integración de inteligencia artificial permite la detección temprana de comportamientos sospechosos y reduce las falsas alarmas.
      </p>
      <p>
        Es fundamental establecer protocolos claros para la revisión de grabaciones y la respuesta a incidentes detectados por los sistemas de vigilancia.
      </p>
      
      <h3>4. Iluminación Estratégica</h3>
      <p>
        A menudo subestimada, la iluminación adecuada es un componente crítico de la seguridad física. Las áreas bien iluminadas disuaden actividades ilícitas y mejoran la efectividad de los sistemas de vigilancia.
      </p>
      <p>
        Las soluciones modernas incluyen iluminación adaptativa que responde a movimientos o condiciones específicas, combinando eficiencia energética con seguridad mejorada.
      </p>
      
      <h2>Integración con Seguridad Electrónica</h2>
      <p>
        El mayor potencial de la seguridad física moderna reside en su integración con sistemas electrónicos. Esta convergencia permite:
      </p>
      <ul>
        <li>Respuesta coordinada ante incidentes</li>
        <li>Verificación cruzada de alertas para reducir falsas alarmas</li>
        <li>Gestión centralizada de todos los componentes de seguridad</li>
        <li>Análisis de datos para identificar patrones y mejorar continuamente</li>
      </ul>
      
      <h2>Consideraciones para Implementación</h2>
      <p>
        Al diseñar una estrategia de seguridad física, es esencial:
      </p>
      <ol>
        <li>Realizar una evaluación exhaustiva de riesgos específicos para la instalación</li>
        <li>Implementar medidas proporcionales a los activos protegidos</li>
        <li>Considerar el impacto en las operaciones diarias y la experiencia de usuarios</li>
        <li>Establecer procedimientos claros para mantenimiento y actualización</li>
        <li>Capacitar regularmente al personal sobre protocolos de seguridad</li>
      </ol>
      
      <h2>Conclusión</h2>
      <p>
        La seguridad física sigue siendo un pilar fundamental en la protección de activos críticos. Su efectividad máxima se alcanza cuando forma parte de una estrategia de seguridad integral que considera tanto elementos físicos como digitales, y que se adapta continuamente a nuevas amenazas y tecnologías.
      </p>
      <p>
        Las organizaciones que invierten estratégicamente en seguridad física no solo protegen sus activos materiales, sino que también crean un entorno que transmite confianza a empleados, clientes y socios comerciales.
      </p>
    `,
		},
		{
			id: 2,
			title: "Control de Accesos Moderno",
			category: "Tecnología",
			date: "05 Mar, 2025",
			author: "",
			readTime: "7 min",
			excerpt:
				"Implementaciones de control de acceso para instalaciones críticas.",
			image: logo,
			content: `
      <p class="ps-text-xl ps-leading-relaxed ps-mb-6">
        Los sistemas de control de acceso han evolucionado dramáticamente en la última década, transformándose de simples cerraduras y llaves a ecosistemas inteligentes que combinan hardware avanzado, software sofisticado y análisis de datos en tiempo real.
      </p>
      
      <h2>La Evolución del Control de Acceso</h2>
      <p>
        El control de acceso moderno va mucho más allá de determinar quién puede entrar a un espacio físico. Estos sistemas ahora gestionan cuándo, cómo y bajo qué condiciones se permite el acceso, creando un entorno de seguridad dinámico y adaptable.
      </p>
      
      <h3>1. Autenticación Multifactor</h3>
      <p>
        La implementación de múltiples factores de autenticación representa uno de los avances más significativos en control de acceso. Combinando algo que el usuario tiene (tarjeta), algo que sabe (PIN) y algo que es (biometría), estos sistemas elevan exponencialmente el nivel de seguridad.
      </p>
      <p>
        Las soluciones más avanzadas incorporan factores adicionales como ubicación geográfica y patrones de comportamiento para una verificación aún más robusta.
      </p>
      
      <h3>2. Biometría Avanzada</h3>
      <p>
        Los sistemas biométricos han madurado significativamente, ofreciendo opciones que van desde la tradicional huella dactilar hasta reconocimiento facial, de iris, vascular y comportamental. La precisión de estas tecnologías continúa mejorando mientras los costos de implementación disminuyen.
      </p>
      <p>
        Particularmente relevante es el desarrollo de sistemas biométricos sin contacto, que ganaron prominencia tras la pandemia global y ofrecen ventajas tanto en higiene como en velocidad de procesamiento.
      </p>
      
      <div class="ps-bg-gray-900 ps-p-6 ps-rounded-lg ps-my-8 ps-border ps-border-gray-800">
        <h3 class="ps-text-xl ps-font-bold ps-mb-4">Tecnologías Emergentes</h3>
        <ul class="ps-space-y-2">
          <li class="ps-flex ps-items-start">
            <span class="ps-text-red-600 ps-mr-2">•</span>
            <span>Reconocimiento de marcha y postura para autenticación continua</span>
          </li>
          <li class="ps-flex ps-items-start">
            <span class="ps-text-red-600 ps-mr-2">•</span>
            <span>Sistemas de reconocimiento facial que funcionan con mascarillas y en condiciones de poca luz</span>
          </li>
          <li class="ps-flex ps-items-start">
            <span class="ps-text-red-600 ps-mr-2">•</span>
            <span>Autenticación por ultrasonido para verificación de proximidad precisa</span>
          </li>
        </ul>
      </div>
      
      <h3>3. Gestión Centralizada e Integración</h3>
      <p>
        Los sistemas modernos permiten la administración centralizada de múltiples ubicaciones a través de plataformas basadas en la nube. Esta centralización facilita la implementación de políticas consistentes, actualizaciones simultáneas y respuesta coordinada ante incidentes.
      </p>
      <p>
        La integración con otros sistemas de seguridad y operativos (CCTV, alarmas, RRHH, gestión de visitantes) crea un ecosistema cohesivo que multiplica la efectividad de cada componente individual.
      </p>
      
      <h3>4. Control de Acceso Móvil</h3>
      <p>
        La utilización de smartphones como credenciales de acceso representa una de las tendencias más transformadoras. Esta tecnología elimina la necesidad de tarjetas físicas, reduce costos operativos y mejora la experiencia del usuario.
      </p>
      <p>
        Las credenciales móviles pueden implementarse con diferentes niveles de seguridad, desde Bluetooth de baja energía hasta NFC y comunicaciones ultrasónicas, adaptándose a los requisitos específicos de cada instalación.
      </p>
      
      <h2>Implementación en Instalaciones Críticas</h2>
      <p>
        Para infraestructuras críticas como centros de datos, instalaciones energéticas o instituciones financieras, el control de acceso requiere consideraciones adicionales:
      </p>
      <ul>
        <li>Redundancia en todos los componentes del sistema</li>
        <li>Operatividad offline en caso de fallos de conectividad</li>
        <li>Protocolos de failsafe y failsecure según los requisitos específicos</li>
        <li>Auditorías regulares y pruebas de penetración</li>
        <li>Cumplimiento con regulaciones sectoriales específicas</li>
      </ul>
      
      <h2>El Futuro del Control de Acceso</h2>
      <p>
        Las tendencias emergentes apuntan hacia sistemas cada vez más inteligentes y menos intrusivos:
      </p>
      <ol>
        <li>Autenticación continua que verifica constantemente la identidad del usuario</li>
        <li>Sistemas predictivos que anticipan patrones de acceso basados en análisis de comportamiento</li>
        <li>Mayor personalización de la experiencia de usuario basada en preferencias individuales</li>
        <li>Integración con sistemas de automatización de edificios para optimización energética</li>
        <li>Utilización de blockchain para credenciales digitales inmutables y verificables</li>
      </ol>
      
      <h2>Conclusión</h2>
      <p>
        El control de acceso moderno representa mucho más que seguridad; constituye un componente estratégico que puede mejorar operaciones, optimizar recursos y elevar la experiencia de usuarios autorizados.
      </p>
      <p>
        Las organizaciones que implementan estos sistemas de manera efectiva no solo protegen sus activos físicos y digitales, sino que también obtienen valiosos datos operativos que pueden informar decisiones estratégicas más allá del ámbito de la seguridad.
      </p>
    `,
		},
		{
			id: 3,
			title: "Rondas Efectivas",
			category: "Operaciones",
			date: "18 Feb, 2025",
			author: "",
			readTime: "6 min",
			excerpt: "Mejores prácticas para patrullaje móvil y disuasión.",
			image: logo,
			content: `
      <p class="ps-text-xl ps-leading-relaxed ps-mb-6">
        Las rondas de seguridad siguen siendo un componente esencial en cualquier estrategia de protección, proporcionando un elemento humano insustituible que complementa las tecnologías de seguridad más avanzadas.
      </p>
      
      <h2>El Valor Persistente del Patrullaje Humano</h2>
      <p>
        A pesar de los avances tecnológicos en seguridad, el patrullaje realizado por personal capacitado ofrece ventajas únicas:
      </p>
      <ul>
        <li>Capacidad de evaluación contextual que supera a los sistemas automatizados</li>
        <li>Efecto disuasorio significativo por la presencia visible de seguridad</li>
        <li>Flexibilidad para responder a situaciones imprevistas</li>
        <li>Interacción humana que transmite confianza a empleados y visitantes</li>
      </ul>
      
      <h3>1. Planificación Estratégica de Rutas</h3>
      <p>
        Las rondas efectivas requieren una planificación meticulosa que equilibre previsibilidad y variabilidad. Si bien cierto nivel de regularidad es necesario para la cobertura sistemática, las rutas totalmente predecibles crean vulnerabilidades que pueden ser explotadas.
      </p>
      <p>
        Las mejores prácticas incluyen la implementación de patrones semi-aleatorios generados mediante algoritmos que garantizan cobertura completa mientras mantienen un elemento de imprevisibilidad.
      </p>
      
      <h3>2. Tecnología de Apoyo al Patrullaje</h3>
      <p>
        La integración de tecnología ha transformado el patrullaje tradicional en una actividad de alta precisión:
      </p>
      <ul>
        <li>Sistemas de control de rondas con puntos de verificación NFC o QR</li>
        <li>Dispositivos móviles con acceso a información contextual relevante</li>
        <li>Comunicación en tiempo real con centro de control</li>
        <li>Wearables que monitorizan signos vitales y posición del guardia</li>
        <li>Realidad aumentada para visualización de información crítica</li>
      </ul>
      
      <div class="ps-bg-gray-900 ps-p-6 ps-rounded-lg ps-my-8 ps-border ps-border-gray-800">
        <h3 class="ps-text-xl ps-font-bold ps-mb-4">Impacto Demostrado</h3>
        <ul class="ps-space-y-2">
          <li class="ps-flex ps-items-start">
            <span class="ps-text-red-600 ps-mr-2">•</span>
            <span>Reducción del 40% en incidentes de seguridad en instalaciones con patrullaje optimizado</span>
          </li>
          <li class="ps-flex ps-items-start">
            <span class="ps-text-red-600 ps-mr-2">•</span>
            <span>Tiempo de respuesta a incidentes mejorado en un 60% con sistemas de apoyo tecnológico</span>
          </li>
          <li class="ps-flex ps-items-start">
            <span class="ps-text-red-600 ps-mr-2">•</span>
            <span>Aumento del 75% en detección de anomalías con personal entrenado en observación sistemática</span>
          </li>
        </ul>
      </div>
      
      <h3>3. Capacitación Especializada</h3>
      <p>
        El personal de patrullaje moderno requiere habilidades que van mucho más allá de la vigilancia básica:
      </p>
      <ul>
        <li>Observación sistemática y atención al detalle</li>
        <li>Conocimiento técnico de sistemas de seguridad</li>
        <li>Habilidades de comunicación y manejo de crisis</li>
        <li>Documentación precisa de observaciones e incidentes</li>
        <li>Análisis preliminar de riesgos y amenazas</li>
      </ul>
      <p>
        Los programas de capacitación más efectivos combinan formación teórica, simulaciones prácticas y entrenamiento continuo en el puesto.
      </p>
      
      <h3>4. Integración con Sistemas de Seguridad</h3>
      <p>
        El máximo valor del patrullaje se obtiene cuando se integra perfectamente con otros componentes del ecosistema de seguridad:
      </p>
      <ul>
        <li>Verificación humana de alertas generadas por sistemas automáticos</li>
        <li>Capacidad para activar respuestas específicas en sistemas integrados</li>
        <li>Retroalimentación para ajuste y mejora de sistemas tecnológicos</li>
        <li>Documentación enriquecida con evidencia multimedia capturada durante rondas</li>
      </ul>
      
      <h2>Optimización Basada en Datos</h2>
      <p>
        Las organizaciones líderes están implementando enfoques basados en datos para optimizar continuamente sus operaciones de patrullaje:
      </p>
      <ol>
        <li>Análisis de patrones históricos de incidentes para identificar puntos críticos</li>
        <li>Ajuste dinámico de rutas basado en evaluaciones de riesgo actualizadas</li>
        <li>Asignación de recursos basada en modelos predictivos</li>
        <li>Evaluación de desempeño con métricas objetivas y retroalimentación continua</li>
      </ol>
      
      <h2>Consideraciones Especiales para Diferentes Entornos</h2>
      <p>
        Las estrategias de patrullaje deben adaptarse a las características específicas de cada entorno:
      </p>
      <ul>
        <li><strong>Entornos corporativos:</strong> Énfasis en servicio al cliente y presencia discreta</li>
        <li><strong>Instalaciones industriales:</strong> Foco en seguridad operativa y prevención de accidentes</li>
        <li><strong>Espacios comerciales:</strong> Balance entre seguridad visible y experiencia positiva del cliente</li>
        <li><strong>Infraestructura crítica:</strong> Protocolos rigurosos y coordinación con fuerzas de seguridad</li>
      </ul>
      
      <h2>Conclusión</h2>
      <p>
        Las rondas de seguridad efectivas representan mucho más que una simple presencia física; constituyen un componente dinámico e inteligente dentro de una estrategia de seguridad integral.
      </p>
      <p>
        La combinación óptima de personal capacitado, tecnología de apoyo y metodologías basadas en datos no solo mejora la seguridad tangible, sino que también contribuye significativamente a la percepción de seguridad, un factor determinante en la experiencia de empleados, clientes y visitantes.
      </p>
    `,
		},
	];

	const route = useRoute();
	const router = useRouter();

	// Obtener el ID del post de los parámetros de la ruta
	const postId = computed(() => parseInt(route.params.id));

	const post = computed(() => {
		let foundPost = blogPosts.find((p) => p.id === postId.value);
		if (!foundPost) {
			router.push("/blog");
		}
		return foundPost;
	});

	// Posts relacionados (excluyendo el post actual)
	const relatedPosts = computed(() => {
		return blogPosts.filter((p) => p.id !== postId.value).slice(0, 2); // Mostrar solo 2 posts relacionados
	});

	// Función para volver a la página anterior
	const goBack = () => {
		router.back();
	};

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

	// Scroll al inicio cuando cambia el post
	onMounted(() => {
		window.scrollTo(0, 0);
	});
</script>

<template>
	<div
		class="ps-bg-black ps-text-white ps-min-h-screen ps-overflow-hidden ps-relative"
	>
		<!-- Fondo de partículas -->
		<particles-background />

		<!-- Contenido principal -->
		<div class="ps-container ps-mx-auto ps-px-4 ps-py-24 ps-relative ps-z-10">
			<!-- Navegación de regreso -->
			<div class="ps-mb-8">
				<button
					@click="goBack"
					class="ps-flex ps-items-center ps-text-gray-400 ps-hover:ps-text-white ps-transition-colors ps-duration-300"
				>
					<span class="ps-mr-2">←</span>
					<span>Volver al blog</span>
				</button>
			</div>

			<div v-if="post">
				<!-- Encabezado del artículo -->
				<div class="ps-mb-8">
					<div class="ps-flex ps-flex-wrap ps-items-center ps-mb-4">
						<span
							class="ps-bg-red-600 ps-text-white ps-text-xs ps-px-2 ps-py-1 ps-rounded ps-mr-3"
							>{{ post.category }}</span
						>
						<span class="ps-text-gray-400 ps-text-sm ps-mr-3">{{
							post.date
						}}</span>
						<span class="ps-text-gray-400 ps-text-sm ps-flex ps-items-center">
							<span class="ps-mr-1">•</span>
							<span>{{ post.readTime }} de lectura</span>
						</span>
					</div>

					<h1
						class="ps-text-3xl md:ps-text-4xl lg:ps-text-5xl ps-font-bold ps-mb-6"
					>
						{{ post.title }}
					</h1>

					<!-- <div class="ps-flex ps-items-center ps-mb-8">
						<div
							class="ps-w-10 ps-h-10 ps-rounded-full ps-bg-gray-700 ps-mr-3 ps-overflow-hidden"
						>
							<img
								src="https://via.placeholder.com/100x100"
								alt="Autor"
								class="ps-w-full ps-h-full ps-object-cover"
							/>
						</div>
						<span>Por {{ post.author }}</span>
					</div> -->
				</div>

				<!-- Imagen destacada -->
				<div class="ps-mb-8 ps-rounded-lg ps-overflow-hidden">
					<img
						:src="post.image"
						:alt="post.title"
						class="ps-w-full ps-h-auto ps-object-cover"
					/>
				</div>

				<!-- Contenido del artículo -->
				<div class="ps-grid ps-grid-cols-1 lg:ps-grid-cols-3 ps-gap-8">
					<!-- Contenido principal -->
					<div class="lg:ps-col-span-2">
						<div
							class="ps-prose ps-prose-invert ps-max-w-none"
							v-html="post.content"
						></div>

						<!-- Compartir -->
						<!-- <div class="ps-mt-12 ps-pt-8 ps-border-t ps-border-gray-800">
							<h3 class="ps-text-xl ps-font-bold ps-mb-4">
								Compartir este artículo
							</h3>
							<div class="ps-flex ps-space-x-4">
								<a
									href="#"
									class="ps-w-10 ps-h-10 ps-rounded-full ps-bg-gray-800 ps-flex ps-items-center ps-justify-center ps-text-gray-400 ps-hover:ps-text-white ps-hover:ps-bg-gray-700 ps-transition-colors ps-duration-300"
								>
									<i class="ps-text-lg">f</i>
								</a>
								<a
									href="#"
									class="ps-w-10 ps-h-10 ps-rounded-full ps-bg-gray-800 ps-flex ps-items-center ps-justify-center ps-text-gray-400 ps-hover:ps-text-white ps-hover:ps-bg-gray-700 ps-transition-colors ps-duration-300"
								>
									<i class="ps-text-lg">t</i>
								</a>
								<a
									href="#"
									class="ps-w-10 ps-h-10 ps-rounded-full ps-bg-gray-800 ps-flex ps-items-center ps-justify-center ps-text-gray-400 ps-hover:ps-text-white ps-hover:ps-bg-gray-700 ps-transition-colors ps-duration-300"
								>
									<i class="ps-text-lg">in</i>
								</a>
								<a
									href="#"
									class="ps-w-10 ps-h-10 ps-rounded-full ps-bg-gray-800 ps-flex ps-items-center ps-justify-center ps-text-gray-400 ps-hover:ps-text-white ps-hover:ps-bg-gray-700 ps-transition-colors ps-duration-300"
								>
									<i class="ps-text-lg">@</i>
								</a>
							</div>
						</div> -->
					</div>

					<!-- Barra lateral -->
					<div class="lg:ps-col-span-1">
						<div class="ps-sticky ps-top-24">
							<!-- Autor -->
							<div class="ps-bg-gray-900 ps-rounded-lg ps-p-6 ps-mb-8">
								<h3 class="ps-text-xl ps-font-bold ps-mb-4">Sobre el autor</h3>
								<div class="ps-flex ps-items-center ps-mb-4">
									<div
										class="ps-w-16 ps-h-16 ps-rounded-full ps-bg-gray-700 ps-mr-4 ps-overflow-hidden"
									>
										<img
											src="https://via.placeholder.com/200x200"
											alt="Autor"
											class="ps-w-full ps-h-full ps-object-cover"
										/>
									</div>
									<div>
										<h4 class="ps-font-bold ps-mb-1">{{ post.author }}</h4>
										<p class="ps-text-gray-400 ps-text-sm">
											Especialista en Seguridad
										</p>
									</div>
								</div>
								<p class="ps-text-gray-400 ps-text-sm">
									Experto en seguridad con más de 10 años de experiencia en el
									sector, especializado en implementación de soluciones de
									seguridad para empresas e instituciones.
								</p>
							</div>

							<!-- Artículos relacionados -->
							<div class="ps-bg-gray-900 ps-rounded-lg ps-p-6">
								<h3 class="ps-text-xl ps-font-bold ps-mb-4">
									Artículos relacionados
								</h3>
								<div class="ps-space-y-4">
									<div
										v-for="relatedPost in relatedPosts"
										:key="relatedPost.id"
										class="ps-group"
									>
										<router-link
											:to="`/blog/${relatedPost.id}`"
											class="ps-flex ps-space-x-4"
										>
											<div
												class="ps-w-20 ps-h-20 ps-flex-shrink-0 ps-overflow-hidden ps-rounded"
											>
												<img
													:src="relatedPost.image"
													:alt="relatedPost.title"
													class="ps-w-full ps-h-full ps-object-cover ps-transform ps-group-hover:ps-scale-110 ps-transition-transform ps-duration-500"
												/>
											</div>
											<div>
												<h4
													class="ps-font-medium ps-group-hover:ps-text-red-600 ps-transition-colors ps-duration-300"
												>
													{{ relatedPost.title }}
												</h4>
												<div
													class="ps-flex ps-items-center ps-text-xs ps-text-gray-400 ps-mt-1"
												>
													<span>{{ relatedPost.date }}</span>
												</div>
											</div>
										</router-link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Mensaje de carga o error -->
			<div v-else class="ps-text-center ps-py-12">
				<div class="ps-animate-pulse">
					<div
						class="ps-h-8 ps-bg-gray-800 ps-rounded ps-w-1/2 ps-mx-auto ps-mb-4"
					></div>
					<div
						class="ps-h-4 ps-bg-gray-800 ps-rounded ps-w-1/3 ps-mx-auto"
					></div>
				</div>
			</div>
		</div>

		<!-- CTA -->
		<section class="ps-py-16 ps-bg-gray-900 ps-relative">
			<!-- <div class="ps-container ps-mx-auto ps-px-6">
				<div
					class="ps-bg-gray-800 ps-rounded-lg ps-p-8 md:ps-p-12 ps-relative ps-overflow-hidden"
				>
					<div
						class="ps-relative ps-z-10 ps-flex ps-flex-col md:ps-flex-row ps-items-center ps-justify-between"
					>
						<div class="ps-mb-6 md:ps-mb-0 md:ps-mr-8">
							<h2 class="ps-text-2xl md:ps-text-3xl ps-font-bold ps-mb-4">
								¿Necesita soluciones de seguridad personalizadas?
							</h2>
							<p class="ps-text-gray-400">
								Contáctenos para una evaluación gratuita de sus necesidades de
								seguridad.
							</p>
						</div>
						<button
							class="ps-bg-red-600 ps-text-white ps-px-8 ps-py-3 ps-rounded-md ps-hover:ps-bg-red-700 ps-transition ps-duration-300 ps-transform ps-hover:ps-scale-105 ps-relative ps-overflow-hidden ps-group ps-whitespace-nowrap"
						>
							<span class="ps-relative ps-z-10">Solicitar consulta</span>
							<span
								class="ps-absolute ps-inset-0 ps-bg-white/20 ps-transform ps-translate-y-full ps-group-hover:ps-translate-y-0 ps-transition-transform ps-duration-300"
							></span>
						</button>
					</div>

					<div class="ps-absolute ps-inset-0 ps-pointer-events-none">
						<div
							v-for="i in 10"
							:key="`cta-particle-${i}`"
							class="ps-absolute ps-rounded-full ps-bg-white/10"
							:style="randomParticleStyle()"
						></div>
					</div>
				</div>
			</div> -->
		</section>

		<!-- Footer -->
		<footer class="ps-bg-black ps-py-12 ps-relative">
			<div class="ps-container ps-mx-auto ps-px-6">
				<div
					class="ps-flex ps-flex-col md:ps-flex-row ps-justify-between ps-items-center"
				>
					<div class="ps-mb-6 md:ps-mb-0">
						<img :src="logo" alt="Prestigio Seguridad" class="ps-h-12" />
					</div>
					<div class="ps-flex ps-space-x-6">
						<a
							href="#"
							class="ps-text-gray-400 ps-hover:ps-text-white ps-transition-colors ps-duration-300"
							>Inicio</a
						>
						<a
							href="#"
							class="ps-text-gray-400 ps-hover:ps-text-white ps-transition-colors ps-duration-300"
							>Nosotros</a
						>
						<a
							href="#"
							class="ps-text-gray-400 ps-hover:ps-text-white ps-transition-colors ps-duration-300"
							>Servicios</a
						>
						<a
							href="#"
							class="ps-text-gray-400 ps-hover:ps-text-white ps-transition-colors ps-duration-300"
							>Blog</a
						>
						<a
							href="#"
							class="ps-text-gray-400 ps-hover:ps-text-white ps-transition-colors ps-duration-300"
							>Contacto</a
						>
					</div>
				</div>
				<div
					class="ps-border-t ps-border-gray-800 ps-mt-8 ps-pt-8 ps-text-center"
				>
					<p class="ps-text-gray-400">
						© 2025 Prestigio Seguridad. Todos los derechos reservados.
					</p>
				</div>
			</div>
		</footer>
	</div>
</template>

<style scoped>
	/* Estilos específicos para la página de detalle del blog */
	.ps-container {
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
		padding-left: 1rem;
		padding-right: 1rem;
	}

	.ps-prose {
		color: #f8f8f8;
		max-width: 65ch;
		margin-left: auto;
		margin-right: auto;
	}

	.ps-prose h2 {
		font-size: 1.5rem;
		font-weight: 700;
		margin-top: 2rem;
		margin-bottom: 1rem;
		color: #ffffff;
	}

	.ps-prose h3 {
		font-size: 1.25rem;
		font-weight: 600;
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
		color: #ffffff;
	}

	.ps-prose p {
		margin-bottom: 1.25rem;
		line-height: 1.7;
	}

	.ps-prose ul,
	.ps-prose ol {
		margin-top: 1rem;
		margin-bottom: 1rem;
		padding-left: 1.5rem;
	}

	.ps-prose li {
		margin-bottom: 0.5rem;
	}

	.ps-prose ul > li {
		list-style-type: disc;
	}

	.ps-prose ol > li {
		list-style-type: decimal;
	}

	.ps-sticky {
		position: sticky;
		top: 6rem;
	}

	@media (max-width: 768px) {
		.ps-prose h2 {
			font-size: 1.25rem;
		}

		.ps-prose h3 {
			font-size: 1.125rem;
		}
	}
</style>
