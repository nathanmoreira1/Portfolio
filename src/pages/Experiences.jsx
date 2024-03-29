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
                <Card key={experience.id} style={{marginBottom: "15px", backgroundColor: "#777"}}>
                    <CardActionArea>
                        <CardContent>
                            <h1 style={{fontSize: "28px", marginBottom: "5px", fontWeight: "700"}}>
                                {experience.position}
                            </h1>
                            <h3 style={{fontSize: "19px", marginTop: "10px", fontWeight: "600"}}>
                                {experience.company} · {experience.period}
                            </h3>
                            <div style={{fontSize: "17px"}} dangerouslySetInnerHTML={{ __html: experience.description }} />
                            <Stack style={{marginTop: "10px"}} direction="row" spacing={1} flexWrap="wrap">
                                {experience.techs.map((tech, i) => (
                                    <Chip key={i} label={tech} variant="outlined" style={{marginTop: "10px", fontSize: "16px"}}/>
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