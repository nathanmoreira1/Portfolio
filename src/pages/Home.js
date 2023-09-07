//css
import "../pages/Home.css"
//images
import bottomIcon from "../images/down.png"
//libs
import { Link } from "react-scroll"

const Home = () => {

    return (
        <div className="Home" id="Home">
            <h1>Hi, I'm Nathan</h1>
            <p>A FullStack Developer</p>
            <Link to="About" spy={true} smooth={true} offset={50} duration={500}>
                <img src={bottomIcon} alt="down" />
            </Link>
        </div>
    )
}

export default Home;