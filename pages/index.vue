<script setup lang="ts">
import "@mdi/font/css/materialdesignicons.min.css";
import logo from "../assets/img/logoprestigio.png";

import client1 from "../assets/img/client/1.png";
import client10 from "../assets/img/client/10.png";
import client11 from "../assets/img/client/11.png";
import client12 from "../assets/img/client/12.png";
import client13 from "../assets/img/client/13.png";
import client14 from "../assets/img/client/14.png";
import client15 from "../assets/img/client/15.png";
import client16 from "../assets/img/client/16.png";
import client17 from "../assets/img/client/17.png";
import client2 from "../assets/img/client/2.png";
import client3 from "../assets/img/client/3.png";
import client4 from "../assets/img/client/4.png";
import client5 from "../assets/img/client/5.png";
import client6 from "../assets/img/client/6.png";
import client7 from "../assets/img/client/7.png";
import client8 from "../assets/img/client/8.png";
import client9 from "../assets/img/client/9.png";
import { required } from "~/utils/validator";

const { getAllImages } = useGaleryComposable();

// Stats data
const stats = [
  { value: 250, suffix: "+", label: "Clientes que confían en nosotros" },
  { value: 350, suffix: "+", label: "Servicios personalizados brindados" },
  { value: 45, suffix: "%", label: "Crecimiento anual sostenido" },
  { value: 150, suffix: "+", label: "Profesionales altamente capacitados" },
];

// Services data
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
    description: "Cobertura profesional para eventos empresariales y sociales.",
  },
  {
    icon: "mdi mdi-fence",
    title: "Control Perimetral",
    description:
      "Supervisión continua de accesos, perímetros y zonas restringidas.",
  },
];

// FAQs data
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
  {
    question: "¿Cuál es el tiempo de respuesta ante emergencias?",
    answer:
      "Nuestro tiempo de respuesta promedio es de 5-10 minutos dependiendo de la ubicación y la gravedad de la situación.",
    isOpen: false,
  },
  {
    question: "¿Ofrecen servicios personalizados para diferentes industrias?",
    answer:
      "Sí, adaptamos nuestros servicios según las necesidades específicas de cada sector: comercial, industrial, residencial, eventos, etc.",
    isOpen: false,
  },
]);

const toggleFaq = (i) => (faqs[i].isOpen = !faqs[i].isOpen);

// Team data with improved structure
// const team = [
// 	{
// 		name: "Eduardo Acosta",
// 		position: "Director General",
// 		image: "../assets/img/logoprestigio.png",
// 		bio: "Con más de 20 años de experiencia en el sector de seguridad, lidera la visión estratégica de la empresa.",
// 		socials: [
// 			{ icon: "mdi mdi-linkedin", link: "#" },
// 			{ icon: "mdi mdi-twitter", link: "#" },
// 		],
// 	},
// 	{
// 		name: "Laura Giménez",
// 		position: "Jefa de Operaciones",
// 		image: logo,
// 		bio: "Especialista en logística y coordinación de equipos de seguridad en situaciones de alto riesgo.",
// 		socials: [{ icon: "mdi mdi-linkedin", link: "#" }],
// 	},
// 	{
// 		name: "Luis Benítez",
// 		position: "Coordinador de Seguridad",
// 		image: "../assets/img/logoprestigio.png",
// 		bio: "Experto en protocolos de seguridad y capacitación de personal de vigilancia.",
// 		socials: [
// 			{ icon: "mdi mdi-linkedin", link: "#" },
// 			{ icon: "mdi mdi-facebook", link: "#" },
// 		],
// 	},
// 	{
// 		name: "María Rodríguez",
// 		position: "Directora de Tecnología",
// 		image: "../assets/img/logoprestigio.png",
// 		bio: "Ingeniera especializada en sistemas de vigilancia y monitoreo remoto.",
// 		socials: [
// 			{ icon: "mdi mdi-linkedin", link: "#" },
// 			{ icon: "mdi mdi-github", link: "#" },
// 		],
// 	},
// ];

// Blog posts data
const blogPosts = [
  {
    title: "La importancia de la vigilancia privada",
    category: "Seguridad",
    date: "20 Abr, 2025",
    excerpt:
      "Exploramos cómo los servicios de seguridad privada aportan valor preventivo y operativo.",
    image: logo,
  },
  {
    title: "Tecnología aplicada a la seguridad",
    category: "Tecnología",
    date: "05 Mar, 2025",
    excerpt:
      "Cómo los sistemas inteligentes optimizan la gestión de riesgos físicos.",
    image: logo,
  },
  {
    title: "Protocolos en eventos masivos",
    category: "Operaciones",
    date: "18 Feb, 2025",
    excerpt:
      "Medidas clave para mantener la seguridad y el orden en actividades de gran convocatoria.",
    image: logo,
  },
];

// Navigation links
const quickLinks = [
  { label: "Nosotros", target: "nosotros" },
  { label: "Servicios", target: "servicios" },
  { label: "VigiControl", target: "vigicontrol" },
  { label: "Equipo", target: "equipo" },
  { label: "Galería", target: "galeria" },
  { label: "Blog", target: "blog" },
  { label: "Contacto", target: "contacto" },
];

// Footer social links
const footerSocials = [
  { icon: "mdi mdi-facebook", link: "#" },
  { icon: "mdi mdi-whatsapp", link: "https://wa.link/p53g6s" },
  { icon: "mdi mdi-linkedin", link: "#" },
  { icon: "mdi mdi-instagram", link: "#" },
];

// Contact form data
const contactForm = reactive({
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
});

const serviceOptions = [
  "Trabaja con Nosotros",

  "Custodia Física",
  "Patrullaje Preventivo",
  "Videovigilancia",
  "Intervención ante Alarmas",
  "Seguridad Corporativa",
  "Control Perimetral",
  "Otro",
];
const submitForm = () => {
  formError.value = false;
  // Validación básica: campos obligatorios
  if (!contactForm.name || !contactForm.email || !contactForm.message) {
    formError.value = true;
    return;
  }
  // Enviar correo
  emailjsSend(
    "service_presti", // tu Service ID
    "template_XXXXXX", // tu Template ID
    {
      to_email: "destino@dominio.com", // correo receptor
      from_name: contactForm.name,
      from_email: contactForm.email,
      phone: contactForm.phone,
      service: contactForm.service,
      message: contactForm.message,
    },
  )
    .then(() => {
      formSubmitted.value = true;
      // Limpia formulario
      Object.keys(contactForm).forEach((k) => (contactForm[k] = ""));
      // Oculta mensaje tras 5s
      setTimeout(() => (formSubmitted.value = false), 5000);
    })
    .catch((err) => {
      console.error("EmailJS error:", err);
      formError.value = true;
    });
};

// Galería de fotos
const images = ref([]);
const apiBaseUrl = "http://31.97.168.129:3000";

const fetchImages = async () => {
  try {
    images.value = await getAllImages();
  } catch (e: any) {
    console.error("Error al obtener imágenes", e);
  }
};

onMounted(() => {
  fetchImages();
});

// Carrusel de equipo
const currentSlide = ref(0);
const slideInterval = ref(null);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % images.value.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + team.length) % team.length;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

const startSlideshow = () => {
  console.log(setInterval(nextSlide, 5000), "set interval");
  stopSlideshow();
  slideInterval.value = setInterval(nextSlide, 5000);
};

const stopSlideshow = () => {
  if (slideInterval.value) {
    clearInterval(slideInterval.value);
  }
};

// Scroll to section function
const scrollToSection2 = (id) => {
  console.log("scrolling to", id);
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const clients = [
  { name: "", logo: client1 },
  { name: "", logo: client2 },
  { name: "", logo: client3 },
  { name: "", logo: client4 },
  { name: "", logo: client5 },
  { name: "", logo: client6 },
  { name: "", logo: client7 },
  { name: "", logo: client8 },
  { name: "", logo: client9 },
  { name: "", logo: client10 },
  { name: "", logo: client11 },
  { name: "", logo: client12 },
  { name: "", logo: client13 },
  { name: "", logo: client14 },
  { name: "", logo: client15 },
  { name: "", logo: client16 },
  { name: "", logo: client17 },
];

const currentClientSlide = ref(0);
const clientSlideInterval = ref(null);
const clientsPerView = ref(5); // Por defecto 5 logos por vista

const nextClientSlide = () => {
  const maxSlides = Math.ceil(clients.length / clientsPerView.value);
  currentClientSlide.value = (currentClientSlide.value + 1) % maxSlides;
};

const prevClientSlide = () => {
  const maxSlides = Math.ceil(clients.length / clientsPerView.value);
  currentClientSlide.value =
    (currentClientSlide.value - 1 + maxSlides) % maxSlides;
};

const goToClientSlide = (index) => {
  currentClientSlide.value = index;
};

const startClientSlideshow = () => {
  stopClientSlideshow();
  clientSlideInterval.value = setInterval(nextClientSlide, 4000);
};

const stopClientSlideshow = () => {
  if (clientSlideInterval.value) {
    clearInterval(clientSlideInterval.value);
  }
};

// Función para actualizar clientes por vista según el tamaño de pantalla
const updateClientsPerView = () => {
  if (window.innerWidth >= 1024) {
    clientsPerView.value = 6; // Desktop: 6 logos
  } else if (window.innerWidth >= 768) {
    clientsPerView.value = 4; // Tablet: 4 logos
  } else {
    clientsPerView.value = 2; // Mobile: 2 logos
  }
};

// Scroll to section function
const scrollToSection = (id) => {
  console.log("scrolling to", id);
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

onMounted(() => {
  document.documentElement.style.scrollBehavior = "smooth";

  startSlideshow();

  startClientSlideshow();

  updateClientsPerView();
  window.addEventListener("resize", updateClientsPerView);
});
</script>

<template>
  <div class="ps-bg-black ps-text-white ps-min-h-screen ps-overflow-hidden">
    <particles-background />

    <!-- Header -->
    <custom-header
      class="ps-fixed ps-top-0 ps-w-full ps-bg-black/80 ps-backdrop-blur ps-flex ps-justify-between ps-items-center ps-p-4 ps-z-50"
    >
      <h1 class="ps-text-2xl ps-font-bold">Prestigio Seguridad</h1>
      <nav class="ps-hidden md:ps-block">
        <ul class="ps-flex ps-space-x-4 lg:ps-space-x-6">
          <li v-for="link in quickLinks" :key="link.target">
            <button
              @click="scrollToSection(link.target)"
              class="ps-hover:ps-text-red-600 ps-transition-colors ps-duration-300"
            >
              {{ link.label }}
            </button>
          </li>
        </ul>
      </nav>
      <button
        class="ps-bg-red-600 ps-px-4 ps-py-2 ps-rounded ps-text-white ps-hover:ps-bg-red-700 ps-transition-colors ps-duration-300"
      >
        Contáctanos
      </button>

      <!-- Mobile menu button (could be expanded with dropdown functionality) -->
      <button class="ps-md:ps-hidden ps-text-white">
        <i class="mdi mdi-menu ps-text-2xl"></i>
      </button>
    </custom-header>

    <!-- Hero / Nosotros -->
    <section
      id=""
      class="ps-flex ps-flex-col-reverse md:ps-flex-row ps-items-center ps-justify-center ps-pb-20 ps-px-6"
    >
      <div class="md:ps-w-1/2 ps-text-center ps-justify-start md:ps-text-left">
        <h2 class="ps-text-4xl md:ps-text-5xl ps-font-bold ps-mb-4">
          PROTEJA SUS INSTALACIONES CON SEGURIDAD CONFIABLE
        </h2>
        <p class="ps-text-gray-400 ps-mb-6 ps-text-lg">
          Resguarde su empresa y hogar con nuestros servicios especializados de
          vigilancia, patrullaje y monitoreo. Un equipo profesional a su
          servicio, enfocado en brindar seguridad con compromiso y eficiencia,
          para que usted disfrute de mayor tranquilidad.
        </p>
        <a
          href="https://wa.link/p53g6s"
          target="_blank"
          rel="noopener noreferrer"
          class="ps-bg-red-600 ps-text-white ps-px-6 ps-py-3 ps-rounded ps-hover:ps-bg-red-700 ps-transition-colors ps-duration-300 inline-block"
        >
          Solicitar Cotización
        </a>
        <div
          class="ps-bg-gray-700 ps-rounded-xl ps-shadow-lg ps-p-4 ps-mt-8 ps-w-fit"
        >
          <img
            src="../assets/img/24-7.png"
            alt="Prestigio Seguridad"
            height="100"
            width="100"
          />
        </div>
      </div>
      <div class="md:ps-w-1/2 } md:ps-mb-0">
        <img
          src="../assets/img/logoprestigio.png"
          alt="Guardias en acción"
          class="ps-rounded ps-shadow-lg ps-mx-auto"
        />
      </div>
    </section>

    <!-- Stats / Servicios -->
    <section id="" class="ps-py-16 ps-bg-gray-700">
      <div
        class="ps-container ps-mx-auto ps-px-4 ps-grid ps-grid-cols-2 md:ps-grid-cols-4 ps-text-center ps-gap-8"
      >
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="ps-transform ps-hover:ps-scale-105 ps-transition-transform ps-duration-300"
        >
          <h3 class="ps-text-4xl ps-font-bold ps-text-red-600">
            <count-up :end-val="stat.value" />{{ stat.suffix }}
          </h3>
          <p class="ps-text-lg">{{ stat.label }}</p>
        </div>
      </div>
    </section>

    <!-- Sobre Nosotros (Mejorado) -->
    <section id="nosotros" class="ps-py-16 ps-bg-gray-800">
      <div class="ps-container ps-max-w-6xl ps-mx-auto ps-px-4">
        <h2
          class="ps-text-3xl ps-font-bold ps-text-white ps-text-center ps-mb-12 ps-relative"
        >
          <span class="ps-inline-block ps-relative">
            Sobre Nosotros
            <span
              class="ps-absolute ps-bottom-0 ps-left-0 ps-w-full ps-h-1 ps-bg-red-600"
            ></span>
          </span>
        </h2>

        <div
          class="ps-grid ps-grid-cols-1 md:ps-grid-cols-2 ps-gap-12 ps-items-center"
        >
          <div>
            <img
              src="../assets/img/logoprestigio.png"
              alt="Prestigio Seguridad"
              class="ps-rounded-lg ps-shadow-xl ps-w-full"
            />
          </div>

          <div>
            <h3 class="ps-text-2xl ps-font-bold ps-text-white ps-mb-4">
              Nuestra Historia
            </h3>
            <p class="ps-text-gray-300 ps-text-lg ps-leading-relaxed ps-mb-6">
              <span class="ps-text-red-600 ps-font-bold">PRESTIGIO S.R.L.</span>
              llevamos más de
              <span class="ps-text-white ps-font-bold"
                >30 años consolidándonos </span
              >, como una empresa referente en el sector de seguridad. Desde
              nuestra fundación, nos hemos comprometido a ofrecer un servicio
              diferencial, adaptado a las necesidades específicas de cada
              cliente, con un enfoque personalizado y de calidad.
            </p>

            <p class="ps-text-gray-300 ps-text-lg ps-leading-relaxed ps-mb-6">
              Nuestra misión es enfrentar los desafíos del sector con visión
              estratégica e innovación constante. Nos mantenemos a la vanguardia
              en tecnología y en la capacitación continua de nuestro equipo,
              garantizando soluciones de seguridad eficientes y confiables.
            </p>

            <div
              class="ps-grid ps-grid-cols-1 sm:ps-grid-cols-2 ps-gap-6 ps-mt-8"
            >
              <div class="ps-flex ps-items-start">
                <i
                  class="mdi mdi-shield-check ps-text-red-600 ps-text-3xl ps-mr-3"
                ></i>
                <div>
                  <h4 class="ps-text-xl ps-font-semibold ps-text-white ps-mb-2">
                    Calidad y Compromiso
                  </h4>
                  <p class="ps-text-gray-300">
                    Capacitación constante, trabajo en equipo e implementación
                    de tecnología de vanguardia.
                  </p>
                </div>
              </div>

              <div class="ps-flex ps-items-start">
                <i
                  class="mdi mdi-certificate ps-text-red-600 ps-text-3xl ps-mr-3"
                ></i>
                <div>
                  <h4 class="ps-text-xl ps-font-semibold ps-text-white ps-mb-2">
                    Confianza y Excelencia
                  </h4>
                  <p class="ps-text-gray-300">
                    Nuestra razón de ser radica en satisfacer plenamente las
                    necesidades de nuestros clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Servicios Especializados (Mejorado) -->
    <section id="servicios" class="ps-py-16 ps-bg-gray-900">
      <div class="ps-container ps-max-w-6xl ps-mx-auto ps-px-4">
        <h2
          class="ps-text-3xl ps-font-bold ps-text-center ps-mb-12 ps-text-white ps-relative"
        >
          <span class="ps-inline-block ps-relative">
            Servicios Especializados
            <span
              class="ps-absolute ps-bottom-0 ps-left-0 ps-w-full ps-h-1 ps-bg-red-600"
            ></span>
          </span>
        </h2>

        <div
          class="ps-grid ps-grid-cols-1 lg:ps-grid-cols-2 ps-gap-12 ps-items-start"
        >
          <div
            class="ps-bg-gray-700 ps-p-8 ps-rounded-lg ps-shadow-lg ps-transform ps-hover:ps-scale-105 ps-transition-transform ps-duration-300"
          >
            <div class="ps-flex ps-items-center ps-mb-6">
              <div class="ps-bg-red-600 ps-rounded-full ps-p-3 ps-mr-4">
                <i class="mdi mdi-shield-account ps-text-white ps-text-3xl"></i>
              </div>
              <h3 class="ps-text-2xl ps-font-bold ps-mb-0 ps-text-white">
                Seguridad Privada
              </h3>
            </div>

            <ul
              class="ps-list-disc ps-pl-6 ps-space-y-3 ps-text-gray-300 ps-text-lg"
            >
              <li class="ps-flex ps-items-center">
                <i class="mdi mdi-check-circle ps-text-red-600 ps-mr-2"></i>
                <span>Resguardo para dignatarios y ejecutivos</span>
              </li>
              <li class="ps-flex ps-items-center">
                <i class="mdi mdi-check-circle ps-text-red-600 ps-mr-2"></i>
                <span>Análisis de riesgos en seguridad</span>
              </li>
              <li class="ps-flex ps-items-center">
                <i class="mdi mdi-check-circle ps-text-red-600 ps-mr-2"></i>
                <span>Proyectos de seguridad integral</span>
              </li>
              <li class="ps-flex ps-items-center">
                <i class="mdi mdi-check-circle ps-text-red-600 ps-mr-2"></i>
                <span>Seguridad bancaria especializada</span>
              </li>
              <li class="ps-flex ps-items-center">
                <i class="mdi mdi-check-circle ps-text-red-600 ps-mr-2"></i>
                <span>Seguridad domiciliaria e industrial</span>
              </li>
              <li class="ps-flex ps-items-center">
                <i class="mdi mdi-check-circle ps-text-red-600 ps-mr-2"></i>
                <span>Protección de instalaciones críticas</span>
              </li>
            </ul>
          </div>

          <div
            class="ps-bg-gray-700 ps-p-8 ps-rounded-lg ps-shadow-lg ps-transform ps-hover:ps-scale-105 ps-transition-transform ps-duration-300"
          >
            <div class="ps-flex ps-items-center ps-mb-6">
              <div class="ps-bg-red-600 ps-rounded-full ps-p-3 ps-mr-4">
                <i class="mdi mdi-cctv ps-text-white ps-text-3xl"></i>
              </div>
              <h3 class="ps-text-2xl ps-font-bold ps-mb-0 ps-text-white">
                Monitoreo y Control Remoto
              </h3>
            </div>

            <ul
              class="ps-list-disc ps-pl-6 ps-space-y-3 ps-text-gray-300 ps-text-lg"
            >
              <li class="ps-flex ps-items-center">
                <i class="mdi mdi-check-circle ps-text-red-600 ps-mr-2"></i>
                <span
                  >Diseño e implementación de tecnologías en seguridad
                  electrónica</span
                >
              </li>
              <li class="ps-flex ps-items-center">
                <i class="mdi mdi-check-circle ps-text-red-600 ps-mr-2"></i>
                <span
                  >Sistemas de control de acceso y prevención de incendios</span
                >
              </li>
              <li class="ps-flex ps-items-center">
                <i class="mdi mdi-check-circle ps-text-red-600 ps-mr-2"></i>
                <span
                  >Supervisión electrónica de rondas con informes
                  detallados</span
                >
              </li>
              <li class="ps-flex ps-items-center">
                <i class="mdi mdi-check-circle ps-text-red-600 ps-mr-2"></i>
                <span>Alarmas con respuesta de patrulla armada</span>
              </li>
              <li class="ps-flex ps-items-center">
                <i class="mdi mdi-check-circle ps-text-red-600 ps-mr-2"></i>
                <span>Monitoreo remoto de CCTV con almacenamiento digital</span>
              </li>
              <li class="ps-flex ps-items-center">
                <i class="mdi mdi-check-circle ps-text-red-600 ps-mr-2"></i>
                <span>Análisis de video con inteligencia artificial</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- VigiControl (Mejorado) -->
    <section id="vigicontrol" class="ps-py-16 ps-bg-black">
      <div class="ps-container ps-max-w-6xl ps-mx-auto ps-px-4">
        <h2
          class="ps-text-3xl ps-font-bold ps-text-center ps-mb-12 ps-text-white ps-relative"
        >
          <span class="ps-inline-block ps-relative">
            VigiControl
            <span
              class="ps-absolute ps-bottom-0 ps-left-0 ps-w-full ps-h-1 ps-bg-red-600"
            ></span>
          </span>
        </h2>

        <div class="ps-grid ps-grid-cols-1 lg:ps-grid-cols-3 ps-gap-8">
          <div class="lg:ps-col-span-1 ps-order-2 lg:ps-order-1">
            <div
              class="ps-bg-gray-800 ps-rounded-lg ps-overflow-hidden ps-shadow-lg"
            >
              <div class="ps-bg-red-600 ps-p-4 ps-text-center">
                <h3 class="ps-text-2xl ps-font-bold ps-text-white">
                  Características Principales
                </h3>
              </div>
              <div class="ps-p-6">
                <ul class="ps-space-y-4">
                  <li class="ps-flex ps-items-start">
                    <i
                      class="mdi mdi-check-circle ps-text-red-600 ps-text-xl ps-mt-1 ps-mr-3"
                    ></i>
                    <span class="ps-text-gray-300"
                      >Monitoreo en tiempo real 24/7</span
                    >
                  </li>
                  <li class="ps-flex ps-items-start">
                    <i
                      class="mdi mdi-check-circle ps-text-red-600 ps-text-xl ps-mt-1 ps-mr-3"
                    ></i>
                    <span class="ps-text-gray-300"
                      >Geolocalización precisa</span
                    >
                  </li>
                  <li class="ps-flex ps-items-start">
                    <i
                      class="mdi mdi-check-circle ps-text-red-600 ps-text-xl ps-mt-1 ps-mr-3"
                    ></i>
                    <span class="ps-text-gray-300">Alertas instantáneas</span>
                  </li>
                  <li class="ps-flex ps-items-start">
                    <i
                      class="mdi mdi-check-circle ps-text-red-600 ps-text-xl ps-mt-1 ps-mr-3"
                    ></i>
                    <span class="ps-text-gray-300">Reportes automáticos</span>
                  </li>
                  <li class="ps-flex ps-items-start">
                    <i
                      class="mdi mdi-check-circle ps-text-red-600 ps-text-xl ps-mt-1 ps-mr-3"
                    ></i>
                    <span class="ps-text-gray-300"
                      >Funciona sin conexión a internet</span
                    >
                  </li>
                  <li class="ps-flex ps-items-start">
                    <i
                      class="mdi mdi-check-circle ps-text-red-600 ps-text-xl ps-mt-1 ps-mr-3"
                    ></i>
                    <span class="ps-text-gray-300">Interfaz intuitiva</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="lg:ps-col-span-2 ps-order-1 lg:ps-order-2">
            <div class="ps-bg-gray-800 ps-rounded-lg ps-p-8 ps-shadow-lg">
              <p class="ps-text-gray-300 ps-text-lg ps-leading-relaxed ps-mb-6">
                <span class="ps-text-red-600 ps-font-bold">VigiControl</span> es
                nuestro sistema de control de rondas en línea para vigiladores y
                personal de guardia, disponible
                <span class="ps-text-white ps-font-bold"
                  >24/7 los 365 días del año</span
                >. Permite monitorizar la posición, enviar alertas y reportes en
                tiempo real desde un smartphone con conexión TCP-IP o SMS cuando
                no hay datos móviles.
              </p>

              <div
                class="ps-grid ps-grid-cols-1 md:ps-grid-cols-2 ps-gap-8 ps-mt-8"
              >
                <div
                  class="ps-bg-gray-900 ps-rounded-lg ps-p-6 ps-shadow-inner"
                >
                  <h3
                    class="ps-text-xl ps-font-semibold ps-mb-4 ps-text-white ps-flex ps-items-center"
                  >
                    <i
                      class="mdi mdi-cellphone ps-text-red-600 ps-text-2xl ps-mr-2"
                    ></i>
                    Funciones Mobile
                  </h3>
                  <ul class="ps-space-y-4 ps-text-gray-300">
                    <li>
                      <strong class="ps-text-white">Hombre Vivo:</strong>
                      Control de presencia vía GPS y alertas si no se presiona
                      dentro de un tiempo establecido.
                    </li>
                    <li>
                      <strong class="ps-text-white">SOS:</strong> Alerta de
                      pánico con ubicación, imagen, video o nota de voz.
                    </li>
                    <li>
                      <strong class="ps-text-white">Ronda:</strong> Registro de
                      arribo/partida en puntos de control con fecha, hora y
                      posición.
                    </li>
                    <li>
                      <strong class="ps-text-white">Novedades:</strong> Envío de
                      notas, imágenes, códigos QR o llamadas al centro de
                      monitoreo.
                    </li>
                  </ul>
                </div>

                <div
                  class="ps-bg-gray-900 ps-rounded-lg ps-p-6 ps-shadow-inner"
                >
                  <h3
                    class="ps-text-xl ps-font-semibold ps-mb-4 ps-text-white ps-flex ps-items-center"
                  >
                    <i
                      class="mdi mdi-monitor-dashboard ps-text-red-600 ps-text-2xl ps-mr-2"
                    ></i>
                    Módulo Web
                  </h3>
                  <p class="ps-text-gray-300 ps-mb-4">
                    Plataforma web para el gerenciamiento de dispositivos y
                    procesamiento de señales, ideal para supervisar a todos los
                    vigiladores desde el centro de monitoreo.
                  </p>

                  <ul class="ps-space-y-2 ps-text-gray-300">
                    <li class="ps-flex ps-items-center">
                      <i class="mdi mdi-check ps-text-red-600 ps-mr-2"></i>
                      <span>Panel de control personalizable</span>
                    </li>
                    <li class="ps-flex ps-items-center">
                      <i class="mdi mdi-check ps-text-red-600 ps-mr-2"></i>
                      <span>Reportes en tiempo real</span>
                    </li>
                    <li class="ps-flex ps-items-center">
                      <i class="mdi mdi-check ps-text-red-600 ps-mr-2"></i>
                      <span>Historial de eventos</span>
                    </li>
                    <li class="ps-flex ps-items-center">
                      <i class="mdi mdi-check ps-text-red-600 ps-mr-2"></i>
                      <span>Exportación de datos</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="ps-mt-8 ps-text-center">
                <a
                  href="https://wa.link/p53g6s"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="ps-bg-red-600 ps-text-white ps-px-6 ps-py-3 ps-rounded ps-hover:ps-bg-red-700 ps-transition-colors ps-duration-300 inline-block"
                >
                  Solicitar Demostración
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Servicios detalle -->
    <section id="" class="ps-py-16 ps-bg-gray-900">
      <div class="ps-container ps-mx-auto ps-px-4">
        <h2
          class="ps-text-3xl ps-font-bold ps-text-center ps-mb-12 ps-relative"
        >
          <span class="ps-inline-block ps-relative">
            Nuestros Servicios
            <span
              class="ps-absolute ps-bottom-0 ps-left-0 ps-w-full ps-h-1 ps-bg-red-600"
            ></span>
          </span>
        </h2>
        <div
          class="ps-container ps-grid ps-grid-cols-1 sm:ps-grid-cols-2 lg:ps-grid-cols-3 ps-gap-6"
        >
          <div
            v-for="svc in services"
            :key="svc.title"
            class="ps-bg-gray-800 ps-rounded-lg ps-p-6 ps-text-center ps-shadow-lg ps-transform ps-hover:ps-scale-105 ps-transition-transform ps-duration-300"
          >
            <div
              class="ps-bg-red-600 ps-w-16 ps-h-16 ps-rounded-full ps-flex ps-items-center ps-justify-center ps-mx-auto ps-mb-4"
            >
              <i :class="svc.icon + ' ps-text-3xl ps-text-white'"></i>
            </div>
            <h3 class="ps-text-xl ps-font-semibold ps-mb-3 ps-text-white">
              {{ svc.title }}
            </h3>
            <p class="ps-text-gray-400">{{ svc.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Galería de Fotos (Nueva sección) -->
    <section id="" class="ps-py-16 ps-bg-black">
      <!-- <div class="ps-container ps-mx-auto ps-px-4">
				<h2
					class="ps-text-3xl ps-font-bold ps-text-center ps-mb-12 ps-relative"
				>
					<span class="ps-inline-block ps-relative">
						Galería de Fotos
						<span
							class="ps-absolute ps-bottom-0 ps-left-0 ps-w-full ps-h-1 ps-bg-red-600"
						></span>
					</span>
				</h2>

				<div
					class="ps-grid ps-grid-cols-1 sm:ps-grid-cols-2 lg:ps-grid-cols-3 ps-gap-6"
				>
					<div
						v-for="(image, index) in galleryImages"
						:key="index"
						class="ps-group ps-relative ps-overflow-hidden ps-rounded-lg ps-shadow-lg"
					>
						<img
							:src="image.src"
							:alt="image.alt"
							class="ps-w-full ps-h-64 ps-object-contain ps-transition-transform ps-duration-500 ps-group-hover:ps-scale-110"
						/>
						<div
							class="ps-absolute ps-inset-0 ps-bg-black ps-bg-opacity-50 ps-opacity-0 ps-group-hover:ps-opacity-100 ps-transition-opacity ps-duration-300 ps-flex ps-items-center ps-justify-center"
						>
							<div class="ps-text-center ps-p-4">
								<h3 class="ps-text-white ps-text-xl ps-font-bold ps-mb-2">
									{{ image.caption }}
								</h3>
								<button
									class="ps-bg-red-600 ps-text-white ps-px-4 ps-py-2 ps-rounded ps-hover:ps-bg-red-700 ps-transition-colors ps-duration-300"
								>
									Ver más
								</button>
							</div>
						</div>
					</div>
				</div>
			</div> -->

      <v-carousel>
        <v-carousel-item
          v-for="(item, index) in images"
          :key="index"
          class="ps-group ps-relative ps-overflow-hidden ps-rounded-lg ps-shadow-lg ps-object-contain"
          show-arrows="hover"
          :src="apiBaseUrl + item.filePath"
        ></v-carousel-item>
      </v-carousel>
    </section>

    <!-- FAQs -->
    <section class="ps-bg-gray-900 ps-py-16">
      <div class="ps-container ps-mx-auto ps-px-4">
        <h2
          class="ps-text-3xl ps-font-bold ps-text-center ps-mb-12 ps-relative"
        >
          <span class="ps-inline-block ps-relative">
            Preguntas Frecuentes
            <span
              class="ps-absolute ps-bottom-0 ps-left-0 ps-w-full ps-h-1 ps-bg-red-600"
            ></span>
          </span>
        </h2>
        <div class="ps-container ps-max-w-3xl ps-mx-auto">
          <div v-for="(faq, i) in faqs" :key="faq.question" class="ps-mb-4">
            <button
              @click="toggleFaq(i)"
              class="ps-w-full ps-text-left ps-flex ps-justify-between ps-items-center ps-py-4 ps-px-6 ps-border-b ps-border-gray-700 ps-bg-gray-800 ps-rounded-t-lg ps-transition-colors ps-duration-300"
              :class="{
                'ps-rounded-b-lg': !faq.isOpen,
                'ps-bg-gray-700': faq.isOpen,
              }"
            >
              <span class="ps-font-semibold ps-text-lg">{{
                faq.question
              }}</span>
              <i
                :class="
                  faq.isOpen ? 'mdi mdi-chevron-up' : 'mdi mdi-chevron-down'
                "
                class="ps-text-red-600"
              ></i>
            </button>
            <div
              v-if="faq.isOpen"
              class="ps-bg-gray-800 ps-rounded-b-lg ps-p-6 ps-text-gray-300 ps-border-l-2 ps-border-red-600"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Equipo (Carrusel) -->

    <!-- Blog -->
    <section id="blog" class="ps-py-16 ps-bg-gray-900">
      <div class="ps-container ps-mx-auto ps-px-4">
        <h2
          class="ps-text-3xl ps-font-bold ps-text-center ps-mb-12 ps-relative"
        >
          <span class="ps-inline-block ps-relative">
            Noticias y Blog
            <span
              class="ps-absolute ps-bottom-0 ps-left-0 ps-w-full ps-h-1 ps-bg-red-600"
            ></span>
          </span>
        </h2>
        <div
          class="ps-container ps-grid ps-grid-cols-1 md:ps-grid-cols-3 ps-gap-8"
        >
          <div
            v-for="post in blogPosts"
            :key="post.title"
            class="ps-bg-gray-800 ps-rounded-lg ps-overflow-hidden ps-shadow-lg ps-transform ps-hover:ps-translate-y-[-5px] ps-transition-transform ps-duration-300"
          >
            <img
              :src="post.image"
              :alt="post.title"
              class="ps-w-full ps-h-48 ps-object-cover"
            />
            <div class="ps-p-6">
              <div class="ps-flex ps-items-center ps-mb-3">
                <span
                  class="ps-bg-red-600 ps-text-white ps-text-xs ps-px-3 ps-py-1 ps-rounded-full"
                  >{{ post.category }}</span
                >
                <span class="ps-text-gray-400 ps-text-sm ps-ml-3">{{
                  post.date
                }}</span>
              </div>
              <h3 class="ps-text-xl ps-font-bold ps-mb-3 ps-text-white">
                {{ post.title }}
              </h3>
              <p class="ps-text-gray-400 ps-mb-4">{{ post.excerpt }}</p>
              <a
                href="#"
                class="ps-text-red-600 ps-font-semibold ps-hover:ps-text-red-500 ps-transition-colors ps-duration-300 ps-flex ps-items-center"
              >
                Leer más
                <i class="mdi mdi-arrow-right ps-ml-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="clientes" class="ps-py-16 ps-bg-gray-800">
      <div class="ps-container ps-mx-auto ps-px-4">
        <h2 class="ps-text-3xl ps-font-bold ps-text-center ps-mb-4 ps-relative">
          <span class="ps-inline-block ps-relative">
            Ellos confían en nosotros
            <span
              class="ps-absolute ps-bottom-0 ps-left-0 ps-w-full ps-h-1 ps-bg-red-600"
            ></span>
          </span>
        </h2>
        <p
          class="ps-text-center ps-text-gray-400 ps-mb-12 ps-max-w-2xl ps-mx-auto"
        >
          Más de 250 empresas e instituciones han confiado en nuestros servicios
          de seguridad profesional
        </p>

        <!-- Carrusel de clientes -->
        <div class="ps-relative ps-max-w-6xl ps-mx-auto">
          <!-- Controles del carrusel -->
          <button
            @click="prevClientSlide"
            class="ps-absolute ps-left-0 ps-top-1/2 ps-transform ps--translate-y-1/2 ps-z-10 ps-bg-red-600 ps-text-white ps-rounded-full ps-w-10 ps-h-10 ps-flex ps-items-center ps-justify-center ps-shadow-lg ps-hover:ps-bg-red-700 ps-transition-colors ps-duration-300 ps--ml-5"
            @mouseenter="stopClientSlideshow"
            @mouseleave="startClientSlideshow"
          >
            <i class="mdi mdi-chevron-left ps-text-xl"></i>
          </button>

          <button
            @click="nextClientSlide"
            class="ps-absolute ps-right-0 ps-top-1/2 ps-transform ps--translate-y-1/2 ps-z-10 ps-bg-red-600 ps-text-white ps-rounded-full ps-w-10 ps-h-10 ps-flex ps-items-center ps-justify-center ps-shadow-lg ps-hover:ps-bg-red-700 ps-transition-colors ps-duration-300 ps--mr-5"
            @mouseenter="stopClientSlideshow"
            @mouseleave="startClientSlideshow"
          >
            <i class="mdi mdi-chevron-right ps-text-xl"></i>
          </button>

          <!-- Contenedor del carrusel -->
          <div
            class="ps-overflow-hidden ps-bg-gray-900 ps-rounded-lg ps-shadow-lg ps-py-8"
          >
            <div
              class="ps-flex ps-transition-transform ps-duration-500 ps-ease-in-out"
              :style="{
                transform: `translateX(-${currentClientSlide * 100}%)`,
              }"
            >
              <!-- Slides de clientes -->
              <div
                v-for="slideIndex in Math.ceil(clients.length / clientsPerView)"
                :key="slideIndex"
                class="ps-w-full ps-flex-shrink-0 ps-flex ps-items-center ps-justify-center ps-space-x-8 ps-px-8"
              >
                <div
                  v-for="client in clients.slice(
                    (slideIndex - 1) * clientsPerView,
                    slideIndex * clientsPerView,
                  )"
                  :key="client.name"
                  class="ps-flex-1 ps-flex ps-items-center ps-justify-center ps-h-20 ps-grayscale ps-hover:ps-grayscale-0 ps-transition-all ps-duration-300 ps-transform ps-hover:ps-scale-110"
                >
                  <img
                    :src="client.logo"
                    :alt="client.name"
                    class="ps-max-h-16 ps-max-w-full ps-object-contain ps-filter ps-opacity-70 ps-hover:ps-opacity-100 ps-transition-opacity ps-duration-300"
                    :title="client.name"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Indicadores -->
          <div class="ps-flex ps-justify-center ps-mt-6 ps-space-x-2">
            <button
              v-for="(_, index) in Math.ceil(clients.length / clientsPerView)"
              :key="index"
              @click="goToClientSlide(index)"
              class="ps-w-3 ps-h-3 ps-rounded-full ps-transition-colors ps-duration-300"
              :class="
                currentClientSlide === index
                  ? 'ps-bg-red-600'
                  : 'ps-bg-gray-600 ps-hover:ps-bg-gray-500'
              "
              @mouseenter="stopClientSlideshow"
              @mouseleave="startClientSlideshow"
            ></button>
          </div>
        </div>

        <!-- Estadística adicional -->
        <div class="ps-text-center ps-mt-12">
          <div
            class="ps-inline-flex ps-items-center ps-bg-gray-900 ps-rounded-full ps-px-6 ps-py-3"
          >
            <i
              class="mdi mdi-shield-check ps-text-red-600 ps-text-2xl ps-mr-3"
            ></i>
            <span class="ps-text-white ps-font-semibold">
              Más de
              <span class="ps-text-red-600 ps-font-bold">28 años</span>
              protegiendo lo que más valoras
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Contacto (Nueva sección) -->
    <section id="contacto" class="ps-py-16 ps-bg-black">
      <div class="ps-container ps-mx-auto ps-px-4">
        <h2
          class="ps-text-3xl ps-font-bold ps-text-center ps-mb-12 ps-relative"
        >
          <span class="ps-inline-block ps-relative">
            Contáctenos
            <span
              class="ps-absolute ps-bottom-0 ps-left-0 ps-w-full ps-h-1 ps-bg-red-600"
            ></span>
          </span>
        </h2>

        <div class="ps-grid ps-grid-cols-1 lg:ps-grid-cols-2 ps-gap-12">
          <!-- Información de contacto -->
          <div class="ps-bg-gray-800 ps-rounded-lg ps-p-8 ps-shadow-lg">
            <h3 class="ps-text-2xl ps-font-bold ps-mb-6 ps-text-white">
              Información de Contacto
            </h3>

            <div class="ps-space-y-6">
              <div class="ps-flex ps-items-start">
                <div
                  class="ps-bg-red-600 ps-rounded-full ps-p-3 ps-mr-4 ps-shrink-0"
                >
                  <i class="mdi mdi-map-marker ps-text-white ps-text-2xl"></i>
                </div>
                <div>
                  <h4 class="ps-text-lg ps-font-semibold ps-text-white ps-mb-1">
                    Dirección
                  </h4>
                  <p class="ps-text-gray-300">
                    Mayor Ruffinelli e/ Palo Santo Loma Pyta – Asunción
                  </p>
                </div>
              </div>

              <div class="ps-flex ps-items-start">
                <div
                  class="ps-bg-red-600 ps-rounded-full ps-p-3 ps-mr-4 ps-shrink-0"
                >
                  <i class="mdi mdi-phone ps-text-white ps-text-2xl"></i>
                </div>
                <div>
                  <h4 class="ps-text-lg ps-font-semibold ps-text-white ps-mb-1">
                    Teléfono
                  </h4>
                  <p class="ps-text-gray-300">0994 561 777</p>
                </div>
              </div>

              <div class="ps-flex ps-items-start">
                <div
                  class="ps-bg-red-600 ps-rounded-full ps-p-3 ps-mr-4 ps-shrink-0"
                >
                  <i class="mdi mdi-email ps-text-white ps-text-2xl"></i>
                </div>
                <div>
                  <h4 class="ps-text-lg ps-font-semibold ps-text-white ps-mb-1">
                    Email
                  </h4>
                  <p class="ps-text-gray-300">
                    contacto@prestigioseguridad.com
                  </p>
                </div>
              </div>

              <div class="ps-flex ps-items-start">
                <div
                  class="ps-bg-red-600 ps-rounded-full ps-p-3 ps-mr-4 ps-shrink-0"
                >
                  <i class="mdi mdi-clock ps-text-white ps-text-2xl"></i>
                </div>
                <div>
                  <h4 class="ps-text-lg ps-font-semibold ps-text-white ps-mb-1">
                    Horario de Atención
                  </h4>
                  <p class="ps-text-gray-300">
                    Lunes a Viernes: 8:00 hs - 19:00 hs
                  </p>
                  <p class="ps-text-gray-300">Sábados: 9:00 hs - 13:00 hs</p>
                </div>
              </div>
            </div>

            <div class="ps-mt-8">
              <h4 class="ps-text-lg ps-font-semibold ps-text-white ps-mb-4">
                Síguenos en redes sociales
              </h4>
              <div class="ps-flex ps-space-x-4">
                <a
                  v-for="social in footerSocials"
                  :key="social.icon"
                  :href="social.link"
                  class="ps-bg-gray-700 ps-text-white ps-hover:ps-bg-red-600 ps-transition-colors ps-duration-300 ps-w-10 ps-h-10 ps-rounded-full ps-flex ps-items-center ps-justify-center"
                >
                  <i :class="`${social.icon} ps-text-xl`"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Formulario de contacto -->
          <div class="ps-bg-gray-800 ps-rounded-lg ps-p-8 ps-shadow-lg">
            <h3 class="ps-text-2xl ps-font-bold ps-mb-6 ps-text-white">
              ¡Trabaja con nosotros!
            </h3>

            <v-form
              ref="form"
              class="ps-flex ps-flex-col"
              @submit.prevent="sendMailRequest"
              @input="validate"
            >
              <!-- Campos -->
              <label>
                Nombre Completo
                <small class="ps-text-red-700">*</small>
                <v-text-field
                  v-model="field.name"
                  placeholder="Nombre Completo"
                  variant="solo"
                  :rules="[(value) => required(value)]"
                />
              </label>
              <label>
                Correo Electrónico
                <small class="ps-text-red-700">*</small>
                <v-text-field
                  v-model="field.email"
                  placeholder="Correo Electrónico"
                  variant="solo"
                  :rules="[(value) => required(value)]"
                />
              </label>
              <label>
                Teléfono
                <small class="ps-text-red-700">*</small>
                <v-text-field
                  v-model="field.phone"
                  placeholder="Teléfono"
                  variant="solo"
                  :rules="[(value) => required(value)]"
                />
              </label>
              <label>
                Asunto
                <small class="ps-text-red-700">*</small>
                <v-text-field
                  v-model="field.subject"
                  placeholder="Solicitud de empleo"
                  variant="solo"
                  :rules="[(value) => required(value)]"
                />
              </label>
              <label>
                Mensaje adicional
                <small class="ps-text-red-700">*</small>
                <v-textarea
                  v-model="field.message"
                  placeholder="¿Por qué querés trabajar con nosotros?"
                  variant="solo"
                  :rules="[(value) => required(value)]"
                />
              </label>

              <p>Curriculum Vitae <small class="ps-text-red-700">*</small></p>
              <label
                for="file-upload"
                class="ps-block ps-w-full ps-p-4 ps-border-2 ps-border-dotted ps-border-gray-400 ps-rounded-md ps-text-center ps-cursor-pointer ps-bg-white hover:ps-bg-gray-50 !ps-mb-4"
              >
                <span class="ps-text-sm ps-font-medium ps-text-gray-700">
                  {{
                    field.cv?.name ||
                    "Haz clic o arrastra un archivo aquí para subir"
                  }}
                </span>
                <input
                  id="file-upload"
                  type="file"
                  @change="handleFile"
                  accept="application/pdf"
                  class="ps-hidden"
                />
              </label>

              <v-btn
                :disabled="incomplete"
                :loading="loading"
                type="submit"
                class="!ps-bg-red-600 !ps-py-6"
                block
              >
                Enviar Solicitud
              </v-btn>
            </v-form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="ps-bg-gray-900 ps-text-gray-400 ps-py-12">
      <div class="ps-container ps-mx-auto ps-px-4">
        <div
          class="ps-grid ps-grid-cols-1 md:ps-grid-cols-2 lg:ps-grid-cols-4 ps-gap-8 ps-mb-8"
        >
          <div>
            <h3 class="ps-text-xl ps-font-bold ps-text-white ps-mb-4">
              Prestigio Seguridad
            </h3>
            <p class="ps-mb-4">
              Brindando servicios profesionales de seguridad con excelencia y
              compromiso desde 1995.
            </p>
            <div class="ps-flex ps-space-x-4">
              <a
                v-for="social in footerSocials"
                :key="social.icon"
                :href="social.link"
                class="ps-text-gray-400 ps-hover:ps-text-red-600 ps-transition-colors ps-duration-300"
              >
                <i :class="`${social.icon} ps-text-xl`"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 class="ps-text-xl ps-font-bold ps-text-white ps-mb-4">
              Enlaces Rápidos
            </h3>
            <ul class="ps-space-y-2">
              <li v-for="link in quickLinks" :key="link.target">
                <a
                  href="#"
                  @click.prevent="scrollToSection(link.target)"
                  class="ps-text-gray-400 ps-hover:ps-text-red-600 ps-transition-colors ps-duration-300"
                >
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="ps-text-xl ps-font-bold ps-text-white ps-mb-4">
              Servicios
            </h3>
            <ul class="ps-space-y-2">
              <li v-for="(svc, index) in services.slice(0, 5)" :key="index">
                <a
                  href="#"
                  class="ps-text-gray-400 ps-hover:ps-text-red-600 ps-transition-colors ps-duration-300"
                >
                  {{ svc.title }}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="ps-text-xl ps-font-bold ps-text-white ps-mb-4">
              Contacto
            </h3>
            <ul class="ps-space-y-3">
              <li class="ps-flex ps-items-start">
                <i
                  class="mdi mdi-map-marker ps-text-red-600 ps-mr-3 ps-mt-1"
                ></i>
                <span>Mayor Ruffinelli e/ Palo Santo Loma Pyta – Asunción</span>
              </li>
              <li class="ps-flex ps-items-start">
                <i class="mdi mdi-phone ps-text-red-600 ps-mr-3 ps-mt-1"></i>
                <span>+595 994 399514 </span>
              </li>
              <li class="ps-flex ps-items-start">
                <i class="mdi mdi-email ps-text-red-600 ps-mr-3 ps-mt-1"></i>
                <span>contacto@prestigioseguridad.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="ps-border-t ps-border-gray-800 ps-pt-8 ps-text-center">
          <p>
            © {{ new Date().getFullYear() }} Prestigio Seguridad. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
/* Estilos generales (sin cambios) */
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
\n.ps-text-5xl {
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
