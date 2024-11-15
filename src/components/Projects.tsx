import React from "react"
import "./Projects.css"
import project1 from "../assets/ecommerce.png"
import project2 from "../assets/weather.jpg"
import project3 from "../assets/task-manager.png"
import project4 from "../assets/vacation-rental.png"
import project5 from "../assets/react-calc.jpg"
import project6 from "../assets/adoptDog.png"

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Simple ecommerce cart application built with Typescript and React",
      imageUrl: project1,
      githubLink: 'https://github.com/jeffersonRibeiro/react-shopping-cart',
      deployedLink: 'https://react-shopping-cart-67954.firebaseapp.com/'
    },
    {
      title: "Weather App",
      description:
        "A responsive weather application using React Native and a third-party API.",
      imageUrl: project2,
      githubLink: 'https://github.com/hobbsm-code/weather_dashboard_app',
      deployedLink: 'https://weather-dashboard-app-uldj.onrender.comLinks to an external site.'
    },
    {
      title: "Task Management Tool",
      description:
        "A productivity app built with React Native and Firebase for real-time updates.",
      imageUrl: project3,
      githubLink: 'https://github.com/dodoburner/kanban-task-management-web-app',
      deployedLink: 'https://kanban-task-management-app.netlify.app/'
    },
    {
      title: "Rental App",
      description:
        "A modern rental application built with React Native and Node.js.",
      imageUrl: project4,
      githubLink: 'https://github.com/mssrinivas/VacationRentals-2.0',
      deployedLink: 'https://www.flipkey.com/'
    },
    {
      title: "Calculator App",
      description:
        "Simple calculator built with React",
      imageUrl: project5,
      githubLink: 'https://github.com/andrewagain/calculator',
      deployedLink: 'https://ahfarmer.github.io/calculator/'
    },
    {
      title: "Dog Adoption App",
      description:
        "A dog adoption app built with React Native and Node.js.",
      imageUrl: project6,
      githubLink: 'https://github.com/Husain-Jinia/dog-adoption-app',
      deployedLink: 'https://www.adoptapet.com/'
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h2>My Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
              <div key={index} className="project-card">
                <img src={project.imageUrl} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.githubLink} target="_blank">GitHub Link</a>
                <a href={project.deployedLink} target="_blank">Link to deployed app</a>
              </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;