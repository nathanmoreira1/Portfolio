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
            description: "Já integrei inúmeras bibliotecas com projetos aos quais trabalho, além de experiência na criação de interações com o usuário e consumo / tratamento de retornos de APIs.",
            image: javascript_image
        },
        {
            name: "Typescript",
            description: "Já utilizei Typescript num projeto mobile com React Native. Efetuei e corrigi tipagens das mais diversas e sei como lidar com isso.",
            image: typescript_image
        },
        {
            name: "React Native",
            description:  "Ulizei RN para a criação de um aplicativo mobile voltado para a utilização do usuário final de uma imobiliária.",
            image: react_image
        },
        {
            name: "React.js",
            description: "Já criei client-side de diversos projetos com React.js, indo desde projetos simples como landing pages ao frontend de aplicações mais robustas.",
            image: react_image
        },
        {
            name: "Ruby on Rails",
            description: "Possuo experiência na manutenção e na criação de features para projetos fullstack e em APIs aos quais utilizam Rails.",
            image: rails_image
        },
        {
            name: "MySQL",
            description: "Linguagem de banco de dados. Sei como interpretar e escrever algumas queries, mesmo que na maioria do tempo, escrevê-las na mão não seja algo tão comum.",
            image: sql_image
        },
        {
            name: "PostgreSQL",
            description: "Linguagem de banco de dados. Sei como interpretar e escrever algumas queries, mesmo que na maioria do tempo, escrevê-las na mão não seja algo tão comum.",
            image: postgres_image
        },
        {
            name: "Firebase",
            description: "Já trabalhei num projeto que utilizava Firebase para operações envolvendo CRUDs dos mais variados, desde autenticação à outras operações mais complexas.",
            image: firebase_image
        },
        {
            name: "JQuery",
            description: "Certamente Jquery facilita muito o desenvolvimento frontend com Javascript puro. Já utilizei bastante para a manutenção de sistemas legados, onde normalmente ele é utilizado mais.",
            image: jquery_image
        }
    ]

    return (
        <div className="AboutMe" id="About" >
            <h1>Sobre mim</h1>
            <img src={bookIcon} />
            <p>Sou um <span style={{backgroundColor: "red", padding: "5px", fontWeight: 700}}>Desenvolvedor de Software</span> que ama <span style={{backgroundColor: "green", padding: "5px", fontWeight: 700}}>aprender novas coisas</span> e me <span style={{backgroundColor: "green", padding: "5px", fontWeight: 700}}>manter em constante evolução</span>. Sou proativo e, além de valorizar a entrega das minhas próprias demandas dentro do prazo, é claro, também gosto de <span style={{backgroundColor: "green", padding: "5px", fontWeight: 700}}>ajudar / encaminhar os outros</span> a encontrar suas soluções para os desafios dos mais diversos.</p>

            <h1 className="skills">Minhas Habilidades</h1>
            <div className="skillsField">
                {skills.map((skill, i) => (
                    <SkillCard key={i} name={skill.name} description={skill.description} image={skill.image} />
                ))}
            </div>
        </div>
    )
}

export default AboutMe;
