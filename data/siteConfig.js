module.exports = {
  siteTitle: 'Hola! soy Álvaro!',
  siteDescription: `Mi curriculum online 2020`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Álvaro Medina',
  twitterUsername: 'AlvaritOO',
  githubUsername: 'AlvaritOO',
  authorAvatar: '/images/avatar.jpg',
  authorDescription: `Desarrollador, apasionado por lo que hago. Siempre interesado en cómo se hacían los sitios, comencé a estudiar HTML, CSS y Javascrip por hobby.<br /> Constantemente me estoy capacitando con documentación, tutoriales y cursos en linea que veo diariamente. <br />Actualmente trabajo como desarrollador frontend freelance y trabajo principalmente con  <strong>React, Nextjs y Gatsbyjs.</strong>`,
  skills: [
    {
      name: 'HTML',
      level: 60
    },
    {
      name: 'CSS',
      level: 60
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
      level: 50
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "Sence",
      begin: {
        month: 'dic',
        year: '2018'
      },
      duration: "4 meses",
      occupation: "Curso 1000 Programadores",
      description: "Participo de programa de capacitación de 500 horas las cuales complete y obtuve certificación de desarrollo del mismo."
  
    },  {
      company: "Capacitación Autodidacta",
      begin: {
        month: 'apr',
        year: '2019'
      },
      duration: "1 año, 3 meses",
      occupation: "Frontend developer",
      description: "Continuo mi aprendizaje con plataformas digitales. Platzi, udemi y youtube entre otras me permiten adquirir más conocimientos los cuales nutrí con la documentación de estas nuevas herramientas."
  
    }, {
      company: "Freelancer",
      begin: {
        month: 'dec',
        year: '2019'
      },
      duration: "Actualidad",
      occupation: "Frontend developer",
      description: "Desarrollo y mantenimiento, correctivo y preventivo, de aplicaciones web para el mercado inmobiliario."
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