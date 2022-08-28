import "../components/NavBar.css"
import { Link } from "react-scroll"
export const NavBar = () => {

    return (
        <div className="NavBar">
            <Link to="Home" spy={true} smooth={true} offset={-70} duration={700}>Home</Link>
            <Link to="About" spy={true} smooth={true} offset={50} duration={700}>About</Link>
            <Link to="Projects" spy={true} smooth={true} offset={50} duration={700}>Projects</Link>
            <Link to="Contact" spy={true} smooth={true} offset={50} duration={700}>Contact</Link>
        </div>
    )
}