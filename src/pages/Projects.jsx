import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

import { projects } from "../data/projects.json";

function Projects() {
    return(
        <div className="technologies">
            {projects.map((project) => (
                <>
                    
                </>
            ))}
        </div>
    )
}

export default Projects;