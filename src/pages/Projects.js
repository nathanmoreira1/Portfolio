import "../pages/Projects.css"
//images
import htmlIcon from "../images/htmlIcon.png"
import cssIcon from "../images/cssIcon.png"
import jsIcon from "../images/jsIcon.png"
import reactIcon from "../images/reactIcon.png"
import mapsImage from "../images/mapsImage.jpg"
import weatherImage from "../images/weatherImage.jpg"
//components
import {Project} from "../components/Project"

const Projects = () => {

    const projects = [
        {
            title: "Google Maps Clone",
            subtitle: "Built using HTML, CSS, JS and React.",
            icons: [htmlIcon, cssIcon, jsIcon, reactIcon],
            image: mapsImage,
            code: "https://github.com/nathanmoreira1/Clone-do-Google-Maps",
            website: "https://preeminent-douhua-d4e9aa.netlify.app/"
        },
        {
            title: "Weather Forecast App",
            subtitle: "Built using HTML, CSS, JS and React.",
            icons: [htmlIcon, cssIcon, jsIcon, reactIcon],
            image: weatherImage,
            code: "https://github.com/nathanmoreira1/Clima-e-Previsao-do-Tempo",
            website: "https://zippy-sunflower-6c1c7c.netlify.app/"
        }
    ]

    return (
        <div className="Projects" id="Projects">
            <h1 className="projectsTitle">Open Source Projects</h1>
            <div className="projectsField">
                {projects.map((project, i) => (
                    <Project
                        key={i}
                        title={project.title}
                        subtitle={project.subtitle}
                        icons={project.icons}
                        image={project.image} 
                        code={project.code}
                        website={project.website}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects;
