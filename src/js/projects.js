// get containers from html
const projectsContainer = document.getElementById("projects")
const certificationContainer = document.getElementById("certification")


// variables to save the content
let projectsContent = ""
let certificationsContent = ""


// representation of content
const certifications = [
  {
    name: "Aprende a programar con Python",
    platfrom:"mastermind",
    link: "https://mastermind.ac/usuario/certificado/9f621b781a804391a9938a67cd8d8d73"
  },

  {
    name: "Fundamentos de Programación con Node.js",
    platfrom:"mastermind",
    link: "https://mastermind.ac/usuario/certificado/90c1ebe8e3ad441d87b4da0fd1ebfd1b"
  },
  // {
  //   name:"Todo sobre la web con PHP",
  //   platfrom:"mastermind",
  //   link:""
  // },
  // {
  //   name:"Git: ¡de Noob a Pro!",
  //   platfrom:"mastermind",
  //   link:""
  // },
  
  {
    name: "Diseño de Bases de Datos Relacionales con MySQL",
    platfrom:"mastermind",
    link: "https://mastermind.ac/usuario/certificado/ca4c285619764db18e89ba55b7538fa7"
  },

  {
    name: "Aprende Java y Programación Orientada a Objetos",
    platfrom:"mastermind",
    link: "https://mastermind.ac/usuario/certificado/aa63d221cffe4c2a897d1ff2c74fff62"
  },
  
]

const projects = [
  {
    title:"Digi-Form",
    description:`Form built to improve the Agents' productivity. Transform simple clicks in a property's note ready to be sent.`,
    image:"assets/images/digi-form.png",
    link:"https://digi-form.vercel.app/"
  },

  {
    title:"Monstercat",
    description:`A small practice to know how to play audio and video from a server using ReactJs based on Monstercat.`,
    image:"assets/images/monstercat-practice.png",
    link:"https://monstercat-practice.vercel.app/"
  },

  {
    title:"Hulu clone",
    description:"Updated list of series and trending movies.",
    image:"assets/images/hulu-clone.png",
    link:"https://hulu-clone-pearl-alpha.vercel.app/"
  },

  {
    title:"Rick & Morty",
    description:"Website based on rick and morty tv show.",
    image:"assets/images/rick-and-morty.png",
    link:"https://react-rick-and-morty-gamma.vercel.app/"
  },
  {
    title:"Music Player",
    description:"A music player built in Java using Swing and Maven.",
    image:"assets/images/music_player.png",
    link:"https://github.com/Annimus1/MusicPlayer"
  },
  {
    title:"Weather App",
    description:"Provides interesting data about the current weather of a specific city.",
    image:"assets/images/weather-app.png",
    link:"https://weather-app-blue-three.vercel.app/"
  },
  {
    title:"Car Workshop",
    description:"Mockup Carshop service website with a call to action button and background slides animation.",
    image:"assets/images/car-landingpage.png",
    link:"https://annimus1.github.io/car-workshop/"
  },
  {
    title:"Abstract Help Page",
    description:"Recreation of the Abstract's Help page as chalenge from frontendpractice.",
    image:"assets/images/Abstract.png",
    link:"https://abstract-help-page-henna.vercel.app/"
  },
  {
    title:"QA Calculator",
    description:"This app helps to QA_Rating's members to qualify leads.",
    image:"assets/images/QA.png",
    link:"https://github.com/Annimus1/QA_CALCULATOR"
  },
  {
    title:"Testimonial page",
    description:"A clone of testimonial page from FreeCodeCamprops.",
    image:"assets/images/freeCodeCamp-testimony.png",
    link:"https://freecodecamp-foro.vercel.app/"
  },
]


// functions 
function projectTemplate(props){
  // convert object to html card representing a single project
  return `
  <div class="col mb-3">
    <div class="card shadow p-3 bg-body rounded mx-auto" style="width: 18rem; height: 24rem">
      <img src=${props.image} class="card-img-top projectImage" alt=${props.title}>
      <div class="card-body">
        <h5 class="card-title align-center">${props.title}</h5>
        <p class="card-text" style="height: 7rem">${props.description}</p>
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
          class="btn btn-primary">View online</a>
        </div>
      </div>
    </div>
  </div>
  `
}


// filling up the content with all projects
projects.forEach( project => {
  projectsContent += projectTemplate(project);
}) 

// filling up the content with certifications
certifications.forEach( certification => {
  certificationsContent += certificationTemplate(certification)
})



// adding info to the div container.
projectsContainer.innerHTML = projectsContent
certificationContainer.innerHTML = certificationsContent
