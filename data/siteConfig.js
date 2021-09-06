module.exports = {
  siteTitle: 'Hola! soy Álvaro!',
  siteDescription: `Mi curriculum online 2020`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Álvaro Medina',
  twitterUsername: 'AlvaritOO',
  githubUsername: 'AlvaritOO',
  authorAvatar: '/images/avartaSerioYo.jpeg',
  authorDescription: `Soy una persona apasionada por la tecnología, perseverante, empática, que siempre busca la mejora continua, me guste trabajar en espacios colaborativos y que la autocrítica forme parte del aprendizaje constante.

  Como desarrollador soy apasionado por lo que hago. Siempre interesado en cómo se hacían los sitios, comencé a estudiar HTML, CSS y Javascript por hobby. <br />Actualmente trabajo como analista de software y desarrollador frontend. Trabajo principalmente con  <strong>React, Ruby, Nextjs y Gatsbyjs.</strong>`,
  skills: [
    {
      name: 'HTML',
      level: 80
    },
    {
      name: 'CSS',
      level: 75
    },
    {
      name: 'Javascript',
      level: 50
    },
    {
      name: 'React',
      level: 80
    },
    {
      name: 'Nextjs y Gatsbyjs',
      level: 70
    },
    {
      name: 'Git',
      level: 75
    },
    {
      name: 'Ruby',
      level: 60
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "- Santo Tomas",
      begin: {
        month: 'Mar',
        year: '2002'
      },
      duration: "Carrera profecional. 5 semestres",
      occupation: "Tecnico en Diseño Publicitario",
      description: "Estudios de diseño grafico, fotografia, marketing y publicidad de alto impacto."

    }, {
      company: "- San Jorge",
      begin: {
        month: 'oct',
        year: '2018'
      },
      duration: "Octubre 2018 a Enero 2019, 4 meses",
      occupation: "Analista Programador de App ",
      description: "Abordar temáticas sobre cómo resumir y reportar los datos en visualizaciones interactivas y reportes escritos, con énfasis en todo lo relacionado con la extracción, limpieza y preparación de datos. Conocerás las bases de datos relacionales y cómo poder trabajar con éstas para el análisis posterior."

    }, {
      company: "- Indecap",
      begin: {
        month: 'mar',
        year: '2021'
      },
      duration: "Marzo a Junio 2021, 4 meses",
      occupation: "Analista y desarrollador de aplicaciones de software",
      description: "Analista Desarrollador realiza las actividades de análisis de requerimientos, diseño, creación, pruebas e implementación de soluciones informáticas de software para llevar las operaciones y/o actividades de una empresa."
    }, {
      company: "- Le Wagon",
      begin: {
        month: 'may',
        year: '2021'
      },
      duration: "Mayo a Septiembre 2021, 5 meses",
      occupation: "Emprendimiento digital con tecnologia web",
      description: "Creación de un Producto Mínimo Viable (MVP). Manejo de herramientas de Learn Startup, Design Thinking, Diseño y Prototipamiento de la Experiencia Usuaria, Visión y Gestión Ágil del Producto, sumado a las habilidades de implementación y desarrollo de un prototipo funcional de un aplicativo web. Emprender en startups y desarrollo de prototipos y productos de aplicaciones web en industrias de software, agencias y consultoras digitales."
    },
  ],
  portifolio: [
    {
      image: "/images/fullpizzas.png",
      description: "Sitio web de FullPizzas",
      url: "https://fullpizzas-gdwl58r9q.vercel.app/"
    },
    {
      image: "/images/luisamedina.png",
      description: "Sitio web Luisa Medina",
      url: "https://luisamedina-atvnfef8o.vercel.app/"
    },

    /* more portifolio items here */
  ],
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/%C3%A1lvaro-medina-734a63190/",
    github: "https://github.com/AlvaritOO",
    email: "alvaro.e.medina.a@gmail.com"
  },
  siteUrl: 'https://github.com/AlvaritOO',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/matrix-wallpaper.png',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/diamante.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portafolio',
      url: '/portifolio',
    }
  ]
}