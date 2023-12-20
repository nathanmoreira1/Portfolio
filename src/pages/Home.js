//css
import "../pages/Home.css"
//images
import bottomIcon from "../images/down.png"
//libs
import { Link } from "react-scroll"
import Avatar from '@mui/material/Avatar';

const Home = () => {

    return (
        <div className="Home" id="Home">
            <Avatar 
                alt="Nathan Moreira de Macedo" 
                src="https://media.licdn.com/dms/image/D4D03AQGefdYjir6e8w/profile-displayphoto-shrink_800_800/0/1696805710791?e=1708560000&v=beta&t=peHDDm-QWkd-0lg_T9j7PCxyKfL0mEsL8IyMQI5fTHI" 
                sx={{ width: 180, height: 180 }}
            />
            <br></br>
            <h1>Olá, sou o Nathan!</h1>
            <p>Desenvolvedor de Software</p>
            <Link to="About" spy={true} smooth={true} offset={50} duration={500}>
                <img src={bottomIcon} alt="down" />
            </Link>
        </div>
    )
}

export default Home;