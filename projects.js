const projectsContainer = document.getElementById("projects")
const certificationContainer = document.getElementById("certification")

let projectsTemplate = ""
let certificationsTemplate = ""

const certifications = [
  {
    name:"Fundamentos de Programación con Node.js",
    platfrom:"mastermind",
    link:"https://www.mastermind.ac/certificates/zrkrk58dzf"
  },
  {
    name:"Todo sobre la web con PHP",
    platfrom:"mastermind",
    link:"https://www.mastermind.ac/certificates/xliutiuw3l"
  },
  {
    name:"Git: ¡de Noob a Pro!",
    platfrom:"mastermind",
    link:"https://www.mastermind.ac/certificates/ugupb17n3u"
  }
]

const projects = [
  {
    title:"Digi-Form",
    description:`Form built to improve the Agents' productivity. Transform simple clicks in a property's note ready to be sent.`,
    image:"assets/digi-form.png",
    link:"https://annimus1.github.io/Digi-Form/src/App.html"
  },
  {
    title:"Weather App",
    description:"Provides interesting data about the current weather of a specific city.",
    image:"assets/weather-app.png",
    link:"https://weather-app-blue-three.vercel.app/"
  },
  {
    title:"Hulu clone",
    description:"Updated list of series and trending movies.",
    image:"assets/hulu-clone.png",
    link:"https://hulu-clone-pearl-alpha.vercel.app/"
  },
  {
    title:"Car Workshop",
    description:".",
    image:"assets/car-landingpage.png",
    link:"https://annimus1.github.io/car-workshop/"
  },
  {
    title:"Bootstrap website",
    description:"A small website to explore bootstrap functions.",
    image:"assets/websitebootstrap.png",
    link:"https://annimus1.github.io/bootstrap-web/"
  },
  {
    title:"Marvel's Avengers Cards",
    description:".",
    image:"assets/avengers-card.png",
    link:"https://annimus1.github.io/car-workshop/"
  },
  {
    title:"Rick & Morty",
    description:"Website based on rick and morty tv show.",
    image:"assets/rick-and-morty.png",
    link:"https://react-rick-and-morty-gamma.vercel.app/"
  },
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
    <div class="card shadow p-3 bg-body rounded mx-auto" style="width: 18rem;">
      <img src=${p.image} class="card-img-top" alt=${p.title}>
      <div class="card-body">
        <h5 class="card-title">${p.title}</h5>
        <p class="card-text">${p.description}</p>
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
      <img src="assets/${c.platfrom}.jpg" class="card-img-top" alt=${c.platfrom}>
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