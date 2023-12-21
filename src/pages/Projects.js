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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Projects = () => {

    const projects = [
        {
            title: "Clone do Google Maps",
            subtitle: "Feito com React",
            icons: [reactIcon],
            image: mapsImage,
            code: "https://github.com/nathanmoreira1/Clone-do-Google-Maps",
            website: "https://preeminent-douhua-d4e9aa.netlify.app/"
        },
        {
            title: "Previsão do Tempo",
            subtitle: "Feito com React",
            icons: [reactIcon],
            image: weatherImage,
            code: "https://github.com/nathanmoreira1/Clima-e-Previsao-do-Tempo",
            website: "https://zippy-sunflower-6c1c7c.netlify.app/"
        }
    ]

    return (
        <div className="Projects" id="Projects">
            <h1 className="projectsTitle">Experiência Profissional</h1>
            
            <div className="accordionField">
                <Accordion style={{width: "100%", boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)"}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{color: "#00a6a1"}} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        style={{backgroundColor: "#06324C", borderBottom: "1px solid #06324C"}}
                    >
                        <Typography style={{color: "#00a6a1", fontWeight: 700, fontSize: "23px"}}>Desenvolvedor de Software</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{backgroundColor: "#06324C"}}>
                        <Typography style={{color: "#00a6a1", textAlign: "start", fontSize: "19px"}}>
                            Grupo Plano | Nov. 2022 - Atualmente
                        </Typography>
                        <br></br>
                        <Typography style={{color: "#00a6a1", textAlign: "start", fontSize: "18px"}}>
                            Fui responsável pela criação de features com Ruby on Rails para o site da empresa, como sistemas completos de gestão de estoque e outro de gestão de leads, além de melhorias de código legado e solução de bugs. Também atuei em tarefas relacionadas ao orçamento da empresa utilizando Ruby, envolvendo desde análises à cálculos. Além disso, fiz a passagem de parte do front-end do site da empresa para React.js e também criei uma aplicação mobile com React Native.
                        </Typography>
                        <br></br>
                        <Typography style={{color: "#00a6a1", textAlign: "start", fontSize: "17px"}}>
                            Competências:
                        </Typography>
                        <Stack direction="row" spacing={1} style={{marginTop: "10px", flexWrap: "wrap", marginBottom: "10px"}}>
                            <Chip style={{color: "#00a6a1", marginBottom: "10px"}} label="Javascript" />
                            <Chip style={{color: "#00a6a1", marginBottom: "10px"}} label="Typescript" />
                            <Chip style={{color: "#00a6a1", marginBottom: "10px"}} label="Ruby on Rails"/>
                            <Chip style={{color: "#00a6a1", marginBottom: "10px"}} label="JQuery"/>
                            <Chip style={{color: "#00a6a1", marginBottom: "10px"}} label="PostgreSQL"/>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
            </div>
            <h1 style={{marginTop: "70px"}} className="projectsTitle">Alguns Projetos Pessoais</h1>
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
