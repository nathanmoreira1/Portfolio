import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { CardActionArea } from '@mui/material';

import { experiences } from "../data/experiences.json";

function Experiences() {
    return(
        <div className="experiences">
            {experiences.map((experience) => (
                <Card key={experience.id} style={{marginBottom: "15px"}}>
                    <CardActionArea>
                        <CardContent>
                            <h1>
                                {experience.position}
                            </h1>
                            <h3>
                                {experience.company} · {experience.period}
                            </h3>
                            <div dangerouslySetInnerHTML={{ __html: experience.description }} />
                            <Stack style={{marginTop: "10px"}} direction="row" spacing={1}>
                                {experience.techs.map((tech, i) => (
                                    <Chip key={i} label={tech} variant="outlined" />
                                ))}
                            </Stack>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </div>
    )
}

export default Experiences;