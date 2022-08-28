import "../pages/AboutMe.css"
//components
import { SkillCard } from "../components/SkillCard"
//images
import bookIcon from "../images/book.gif"
import html_image from "../images/html_image.png"
import css_image from "../images/css_image.png"
import javascript_image from "../images/javascript_image.png"
import react_image from "../images/react_image.png"
import firebase_image from "../images/firebase_image.png"

const AboutMe = () => {
    const skills = [
        {
            name: "Firebase",
            description: "I've worked on projects performing authentication and CRUD using this robust tool that performs several roles of a backend.",
            image: firebase_image
        },
        {
            name: "React",
            description: "Javascript framework for building componentized and modern pages. My main stack at the moment.",
            image: react_image
        },
        {
            name: "Javascript",
            description: "I've been studying this programming language since I started programming. I use it in virtually all my projects.",
            image: javascript_image
        },
        {
            name: "HTML",
            description: "I have experience in building the skeleton of layouts of the most varied using this markup language.",
            image: html_image
        },
        {
            name: "CSS",
            description: "For sure, a page without a good stylization is not pleasant to end users of the application. I understand the crucial importance of this tool and also master it",
            image: css_image
        },
        {
            name: "CSS",
            description: "For sure, a page without a good stylization is not pleasant to end users of the application. I understand the crucial importance of this tool and also master it",
            image: css_image
        }
    ]

    return (
        <div className="AboutMe" id="About" >
            <h1>About Me</h1>
            <img src={bookIcon} />
            <p>Hey! I am a front-end programmer (aspiring fullstack in future), who loves to read and learn new things.
                Here, I'd like to show you a little bit about what I've done and learned so far.
            </p>
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
