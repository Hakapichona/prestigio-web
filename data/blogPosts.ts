export interface BlogPost {
    id: number
    title: string
    category: string
    date: string
    excerpt: string
    image: string
    content: string
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: 'Fortalezas de la Seguridad Física',
        category: 'Infraestructura',
        date: '20 Abr, 2025',
        excerpt: 'Descubra cómo fortalecer su perímetro con estrategias comprobadas.',
        image: 'https://via.placeholder.com/400x200',
        content: `
  ## Introducción
  
  La seguridad física es la base de la protección de cualquier instalación crítica.  
  
  ## Métodos recomendados
  
  1. **Control de accesos**: Implementar barreras físicas y sistemas de tarjetas.  
  2. **Rondas periódicas**: Patrullaje móvil con rutas aleatorias.  
  3. **Videovigilancia**: Monitoreo 24/7 mediante CCTV.  
  
  ### Conclusión
  
  Un enfoque multicapa maximiza la disuasión y minimiza riesgos.
  `
    },
    {
        id: 2,
        title: 'Control de Accesos Moderno',
        category: 'Tecnología',
        date: '05 Mar, 2025',
        excerpt: 'Implementaciones de control de acceso para instalaciones críticas.',
        image: 'https://via.placeholder.com/400x200',
        content: `
  ## Tecnologías Actuales
  
  - Lectores biométricos  
  - Acceso remoto por app móvil  
  - Integración con SIEM  
  
  ## Beneficios
  
  - Registro detallado de entradas/salidas  
  - Alertas en tiempo real  
  - Reducción de puntos ciegos
  `
    },
    {
        id: 3,
        title: 'Rondas Efectivas',
        category: 'Operaciones',
        date: '18 Feb, 2025',
        excerpt: 'Mejores prácticas para patrullaje móvil y disuasión.',
        image: 'https://via.placeholder.com/400x200',
        content: `
  ## Planificación de Rutas
  
  - Rotación aleatoria  
  - Evaluación de puntos críticos  
  
  ## Capacitación de Personal
  
  - Técnicas de observación  
  - Uso de radios y GPS  
  - Protocolos de comunicación
  `
    }
]
