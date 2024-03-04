import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

import { technologies } from "../data/technologies.json";

function Technologies() {
    return(
        <div className="technologies">
            {technologies.map((technology) => (
                <>
                    <Card key={technology.id} style={{height: "60px", marginBottom: "2px"}}>
                        <CardActionArea>
                            <CardContent>
                                <p>
                                    {technology.name} - {technology.experience_count} anos
                                </p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </>
            ))}
        </div>
    )
}

export default Technologies;