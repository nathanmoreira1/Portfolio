import "../pages/AboutMe.css"
//components
import { SkillCard } from "../components/SkillCard"
//images
import bookIcon from "../images/book.gif"
import html_image from "../images/html_image.png"
import rails_image from "../images/rails.png"
import javascript_image from "../images/javascript_image.png"
import react_image from "../images/react_image.png"
import firebase_image from "../images/firebase_image.png"
import typescript_image from "../images/typescript.png"
import postgres_image from "../images/postgres.png"
import sql_image from "../images/sql.png"
import jquery_image from "../images/jquery.png"


const AboutMe = () => {
    const skills = [
        {
            name: "Javascript",
            description: "2 years of experience, versatile use for scripting, automation, and web development.",
            image: javascript_image
        },
        {
            name: "Typescript",
            description: "Used for reliability and robustness in projects.",
            image: typescript_image
        },
        {
            name: "React Native",
            description:  "Developed a customer support app with features like ticket creation, profile editing, and bank statement viewing.",
            image: react_image
        },
        {
            name: "React.js",
            description: "Web application development experience, involved in transitioning a project from HTML + CSS + JavaScript to React.",
            image: react_image
        },
        {
            name: "Ruby on Rails",
            description: "Created lead management system for real estate agents, inventory control system for construction company, and more.",
            image: rails_image
        },
        {
            name: "MySQL",
            description: "Proficient in SQL for creating, operating, and managing MySQL databases.",
            image: sql_image
        },
        {
            name: "PostgreSQL",
            description: "Proficient in SQL for creating, operating, and managing PostgreSQL databases.",
            image: postgres_image
        },
        {
            name: "Firebase",
            description: "Worked on authentication and CRUD operations using Firebase for various backend roles.",
            image: firebase_image
        },
        {
            name: "JQuery",
            description: "I worked using and certainly facilitates a lot the writing of javascript code, making the development easier.",
            image: jquery_image
        }
    ]

    return (
        <div className="AboutMe" id="About" >
            <h1>About Me</h1>
            <img src={bookIcon} />
            <p>Hey! I'm a full-stack programmer who loves reading and learning new things. Here, I'd like to share a bit about what I've completed so far.</p>

            <h1 className="skills">My Skills</h1>
            <div className="skillsField">
                {skills.map((skill, i) => (
                    <SkillCard key={i} name={skill.name} description={skill.description} image={skill.image} />
                ))}
            </div>
        </div>
    )
}

export default AboutMe;
