// get containers from html
const projectsContainer = document.getElementById("projects");
const certificationContainer = document.getElementById("certification");
const introductionContainer = document.getElementById("introduction-wrapper");
const languageBtn = document.getElementById("language-btn");

// representation of content
const introduction = {"en": {'title':"Hi I'm Pablo Vergara", 'content':[`A venezuelan Software Developer with a solid foundation in cutting-edge
            technologies like
            JavaScript, Python, HTML5, Java, SQL, my passion for development shines through in every line of code I
            write. My primary focus has been on frontend development with tecnologies like React & tailwind Css, where
            I have honed my ability to create engaging and functional user experiences. However, my thirst for
            knowledge has led me to delve into the world of backend development, specifically with Java and Spring
            Boot, where I am excited to explore new possibilities and challenges.`,`My background is not only about applying current technologies but also about
            quickly
            adapting to new tools and development environments. I firmly believe in combining creativity with logic to
            build software products that are not only visually appealing but also efficient and robust in their
            functionality.`]}, "es":{ 'title':"Hola soy Pablo Vergara", 'content': [`Un Desarrollador de Software venezolano con una sólida base en la vanguardia.
            tecnologías como
            JavaScript, Python, HTML5, Java, SQL, mi pasión por el desarrollo se refleja en cada línea de código que
            escribir. Mi enfoque principal ha sido el desarrollo frontend con tecnologías como React y tailwind Css, donde
            He perfeccionado mi capacidad para crear experiencias de usuario atractivas y funcionales. Sin embargo, mi sed de
            conocimientos me han llevado a profundizar en el mundo del desarrollo backend, concretamente con Java y Spring
            Boot, donde me entusiasma explorar nuevas posibilidades y desafíos.`, `Mi experiencia no se trata solo de aplicar tecnologías actuales sino también de
            rápidamente
            adaptarse a nuevas herramientas y entornos de desarrollo. Creo firmemente en combinar la creatividad con la lógica para
            crear productos de software que no sólo sean visualmente atractivos sino también eficientes y robustos en su
            funcionalidad.`]}};

const certifications = [
  {
    name: "Aprende a programar con Python",
    platfrom:"mastermind",
    link: "assets/certifications/python_cert.pdf"
  },

  {
    name: "Fundamentos de Programación con Node.js",
    platfrom:"mastermind",
    link: "assets/certifications/Node_cert.pdf"
  },
  // {
  //   name:"Todo sobre la web con PHP",
  //   platfrom:"mastermind",
  //   link:"assets/certifications/php_cert.pdf"
  // },
  // {
  //   name:"Git: ¡de Noob a Pro!",
  //   platfrom:"mastermind",
  //   link:"assets/certifications/git_cert.pdf"
  // },
  
  {
    name: "Diseño de Bases de Datos Relacionales con MySQL",
    platfrom:"mastermind",
    link: "assets/certifications/mysql_cert.pdf"
  },

  {
    name: "Aprende Java y Programación Orientada a Objetos",
    platfrom:"mastermind",
    link: "assets/certifications/java_cert.pdf"
  },
  
]

const projects = [
  {
    title:"Digi-Form",
    description:{
      en: `Form built to improve the Agents' productivity. Transform simple clicks in a property's note ready to be sent.`,
      es: `Formulario construido para mejorar la productividad de los Agentes. Transforme simples clics en una nota de propiedad lista para ser enviada.`
    },
    image:"assets/images/digi-form.png",
    link:"https://digi-form.vercel.app/"
  },

  {
    title:"Monstercat",
    description:{ en: `A small practice to know how to play audio and video from a server using ReactJs based on Monstercat.`,
                  es: `Una pequeña práctica para saber reproducir audio y vídeo desde un servidor usando ReactJs basados ​​en Monstercat.`
    },
  image:"assets/images/monstercat-practice.png",
    link:"https://monstercat-practice.vercel.app/"
  },

  {
    title:"Hulu clone",
    description:{ en: "Updated list of series and trending movies.",
                  es: `Lista actualizada de series y películas de tendencia.`
    },
  image:"assets/images/hulu-clone.png",
    link:"https://hulu-clone-pearl-alpha.vercel.app/"
  },

  {
    title:"Rick & Morty",
    description:{ en: "Website based on rick and morty tv show.",
                  es: `Sitio basado en la serie animada Rick y Morty`
    },
  image:"assets/images/rick-and-morty.png",
    link:"https://react-rick-and-morty-gamma.vercel.app/"
  },
  {
    title:"Music Player",
    description:{ en: "A music player built in Java using Swing and Maven.",
                  es: `Sitio web basado en el programa de televisión rick y morty.`
    },
  image:"assets/images/music_player.png",
    link:"https://github.com/Annimus1/MusicPlayer"
  },
  {
    title:"Weather App",
    description:{ en: "Provides interesting data about the current weather of a specific city.",
                  es: `Proporciona datos interesantes sobre el clima actual de una ciudad específica.`
    },
  image:"assets/images/weather-app.png",
    link:"https://weather-app-blue-three.vercel.app/"
  },
  {
    title:"Car Workshop",
    description:{ en: "Mockup Carshop service website with a call to action button and background slides animation.",
                  es: `Maqueta del sitio web del servicio Carshop con un botón de llamada a la acción y animación de diapositivas de fondo.`
    },
  image:"assets/images/car-landingpage.png",
    link:"https://annimus1.github.io/car-workshop/"
  },
  {
    title:"Abstract Help Page",
    description:{ en: "Recreation of the Abstract's Help page as challenge from frontend practice.",
                  es: `Recreación de la página de ayuda del resumen como desafío desde la práctica frontend.`
    },
  image:"assets/images/Abstract.png",
    link:"https://abstract-help-page-henna.vercel.app/"
  },
  {
    title:"QA Calculator",
    description:{ en: "This app helps to QA_Rating's members to qualify leads.",
                  es: `Esta aplicación ayuda a los miembros de QA_Rating a calificar clientes potenciales.`
    },
  image:"assets/images/QA.png",
    link:"https://github.com/Annimus1/QA_CALCULATOR"
  },
  {
    title:"Testimonial page",
    description:{ en: "A clone of testimonial page from FreeCodeCamp props.",
                  es: `Un clon de la página de testimonios de los accesorios de FreeCodeCamp.`
    },
  image:"assets/images/freeCodeCamp-testimony.png",
    link:"https://freecodecamp-foro.vercel.app/"
  },
]


// functions 
function projectTemplate(props, language){
  // convert object to html card representing a single project
  return `
  <div class="col mb-3">
    <div class="card shadow p-3 bg-body rounded mx-auto" style="width: 18rem; height: 26rem">
      <img src=${props.image} class="card-img-top projectImage" alt=${props.title}>
      <div class="card-body">
        <h5 class="card-title align-center">${props.title}</h5>
        <p class="card-text" style="height: 9rem">${props.description[language]}</p>
        <div class="d-grid gap-2 col-6 mx-auto">
          <a 
          target="blank"
          href=${props.link} 
          class="btn btn-primary">Visit</a>
        </div>
      </div>
    </div>
  </div>`
}

function certificationTemplate(props){
  // convert object to html card representing a single certification
  return `
  <div class="col mb-3 ">
    <div class="h-100 card shadow p-3 bg-body rounded mx-auto" style="width: 18rem;">
      <img src="assets/images/${props.platfrom}.jpg" class="card-img-top"  alt=${props.platfrom}>
      <div class="card-body">
        <h5 class="card-title">${props.name}</h5>
        <div class="d-grid gap-2 col-6 mx-auto">
          <a 
          target="blank"
          href=${props.link} 
          class="btn btn-primary no-wrap">View online</a>
        </div>
      </div>
    </div>
  </div>
  `
}


function introductionTemplate(props, language){
  var contentAux = "";
  contentAux += `<h1 class="text-center card-title">${props[language].title}</h1>`;

  props[language].content.forEach( paragraph => {

    contentAux += `<p class="p">${paragraph}</p>`;
  })

  return contentAux;
}

function getActualLenguage(){
  return languageBtn.checked ? "es":"en";
}

function colorLanguagesLabel(){
  const en = document.getElementById("en");
  const es = document.getElementById("es");

  // delete class primary
  en.classList.remove("text-primary")
  es.classList.remove("text-primary")
  en.classList.remove("text-light")
  es.classList.remove("text-light")
  
  // add clas just to
  if(!languageBtn.checked){
    
    en.classList.add("text-primary")
    es.classList.add("text-light")
  }else{
    en.classList.add("text-light")
    es.classList.add("text-primary")
  }
  
}

function main(){
  // variables to save the content
  let projectsContent = ""
  let certificationsContent = ""

  // color active language
  colorLanguagesLabel();

  // filling up the content with all projects
  projects.forEach( project => {
    projectsContent += projectTemplate(project, getActualLenguage());
  }) 

  // filling up the content with certifications
  certifications.forEach( certification => {
    certificationsContent += certificationTemplate(certification)
  })

  // adding info to the div container.
  introductionContainer.innerHTML = introductionTemplate(introduction, getActualLenguage());
  projectsContainer.innerHTML = projectsContent;
  certificationContainer.innerHTML = certificationsContent;
}


document.addEventListener("DOMContentLoaded", main);
languageBtn.addEventListener("click", ()=>{
  main();
});