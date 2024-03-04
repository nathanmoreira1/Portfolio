import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';

import { technologies } from "../data/technologies.json";

function Technologies() {
    return(
        <div className="technologies">
            {technologies.map((technology) => (
                <Card key={technology.id} style={{height: "50px", marginBottom: "5px", backgroundColor: "#777"}}>
                    <CardActionArea>
                        <CardContent>
                        <Typography gutterBottom variant="body1" component="div">
                            {technology.name} - {technology.experience_count} years
                        </Typography>
                            
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </div>
    )
}

export default Technologies;