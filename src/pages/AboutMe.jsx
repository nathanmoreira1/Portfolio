import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

function AboutMe() {

    return(
        <div className="about-me">
            <Card style={{backgroundColor: "#777"}}>
                <CardActionArea>
                    <CardContent>
                        <p>
                            I am a <strong>software developer</strong> interested in <strong>innovation</strong> and creating <strong>creative solutions</strong> to a wide range of problems.
                        </p>
                        <p>
                            It was in 2020 that I decided that my career would be in the <strong>technology sector</strong> and that I finally began to explore this professional area. I started my studies with <strong>Front-End technologies</strong> and, later, I also specialized in <strong>Back-End</strong>.
                        </p>
                        <p>I've participated in the <strong>development of complex web projects</strong> with hundreds of thousands of users, where I <strong>fixed bugs</strong> and <strong>created new features</strong>.</p>
                        <p>I have also participated in the <strong>development of mobile projects</strong>, such as applications intended for <strong>use by a company's customers</strong> and also others for <strong>use by employees</strong>.</p>
                        <p><strong>When I'm not working</strong>, I spend my time <strong>with my wife</strong> and my <strong>little dog ​​Molly</strong>. My hobbies include doing <strong>physical activity at dawn</strong> and <strong>visiting new places</strong>.</p>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default AboutMe;