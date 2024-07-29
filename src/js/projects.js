const projectsContainer = document.getElementById("projects")
const certificationContainer = document.getElementById("certification")

let projectsTemplate = ""
let certificationsTemplate = ""

const certifications = [
  {
    name: "Aprende a programar con Python",
    platfrom:"mastermind",
    link: "https://mastermind.ac/certificates/9f621b781a804391a9938a67cd8d8d73"
  },

  {
    name: "Fundamentos de Programación con Node.js",
    platfrom:"mastermind",
    link: "https://mastermind.ac/certificates/90c1ebe8e3ad441d87b4da0fd1ebfd1b"
  },
  // {
  //   name:"Todo sobre la web con PHP",
  //   platfrom:"mastermind",
  //   link:"https://mastermind.ac/certificates/5483b37cfb924dcdb02a194a24c88a42"
  // },
  // {
  //   name:"Git: ¡de Noob a Pro!",
  //   platfrom:"mastermind",
  //   link:"https://mastermind.ac/certificates/442e7d1307424402a10bc515968dd825"
  // },
  
  {
    name: "Diseño de Bases de Datos Relacionales con MySQL",
    platfrom:"mastermind",
    link: "https://mastermind.ac/certificates/ca4c285619764db18e89ba55b7538fa7"
  },

  {
    name: "Aprende Java y Programación Orientada a Objetos",
    platfrom:"mastermind",
    link: "https://mastermind.ac/certificates/aa63d221cffe4c2a897d1ff2c74fff62"
  },
  
]

const projects = [
  {
    title:"Digi-Form",
    description:`Form built to improve the Agents' productivity. Transform simple clicks in a property's note ready to be sent.`,
    image:"assets/digi-form.png",
    link:"https://digi-form.vercel.app/"
  },

  {
    title:"Monstercat",
    description:`A small practice to know how to play audio and video from a server using ReactJs based on Monstercat.`,
    image:"assets/monstercat-practice.png",
    link:"https://monstercat-practice.vercel.app/"
  },

  {
    title:"Hulu clone",
    description:"Updated list of series and trending movies.",
    image:"assets/hulu-clone.png",
    link:"https://hulu-clone-pearl-alpha.vercel.app/"
  },

  {
    title:"Rick & Morty",
    description:"Website based on rick and morty tv show.",
    image:"assets/rick-and-morty.png",
    link:"https://react-rick-and-morty-gamma.vercel.app/"
  },

  {
    title:"Weather App",
    description:"Provides interesting data about the current weather of a specific city.",
    image:"assets/weather-app.png",
    link:"https://weather-app-blue-three.vercel.app/"
  },
  {
    title:"Car Workshop",
    description:"Mockup Carshop service website with a call to action button and background slides animation.",
    image:"assets/car-landingpage.png",
    link:"https://annimus1.github.io/car-workshop/"
  },
  {
    title:"Abstract Help Page",
    description:"Recreation of the Abstract's Help page as chalenge from frontendpractice.",
    image:"assets/Abstract.png",
    link:"https://abstract-help-page-henna.vercel.app/"
  },
  {
    title:"QA Calculator",
    description:"This app helps to QA_Rating's members to qualify leads.",
    image:"assets/QA.png",
    link:"https://github.com/Annimus1/QA_CALCULATOR"
  },
  // {
  //   title:"Java Music Player",
  //   description:"Music player build in java.",
  //   image:"assets/Music.png",
  //   link:"https://github.com/Annimus1/MusicPlayer"
  // },

  {
    title:"Testimonial page",
    description:"A clone of testimonial page from FreeCodeCamp.",
    image:"assets/freeCodeCamp-testimony.png",
    link:"https://freecodecamp-foro.vercel.app/"
  },
]


projects.forEach( p => {
  projectsTemplate += `
  <div class="col mb-3">
    <div class="card shadow p-3 bg-body rounded mx-auto" style="width: 18rem; height: 24rem">
      <img src=${p.image} class="card-img-top" alt=${p.title}>
      <div class="card-body">
        <h5 class="card-title align-center">${p.title}</h5>
        <p class="card-text" style="height: 7rem">${p.description}</p>
        <div class="d-grid gap-2 col-6 mx-auto">
          <a 
          target="blank"
          href=${p.link} 
          class="btn btn-primary">Visit</a>
        </div>
      </div>
    </div>
  </div>`
}) 

certifications.forEach( c => {
  certificationsTemplate += `
  <div class="col mb-3 ">
    <div class="h-100 card shadow p-3 bg-body rounded mx-auto" style="width: 18rem;">
      <img src="assets/${c.platfrom}.jpg" class="card-img-top"  alt=${c.platfrom}>
      <div class="card-body">
        <h5 class="card-title">${c.name}</h5>
        <div class="d-grid gap-2 col-6 mx-auto">
          <a 
          target="blank"
          href=${c.link} 
          class="btn btn-primary">View online</a>
        </div>
      </div>
    </div>
  </div>
  `
})

projectsContainer.innerHTML = projectsTemplate
certificationContainer.innerHTML = certificationsTemplate
