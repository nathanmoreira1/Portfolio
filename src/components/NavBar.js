import "../components/NavBar.css"
import { Link } from "react-scroll"
export const NavBar = () => {

    return (
        <div className="NavBar">
            <Link to="Home" spy={true} smooth={true} offset={-70} duration={700}>Início</Link>
            <Link to="About" spy={true} smooth={true} offset={50} duration={700}>Sobre mim</Link>
            <Link to="Projects" spy={true} smooth={true} offset={50} duration={700}>Projetos</Link>
            <Link to="Contact" spy={true} smooth={true} offset={50} duration={700}>Contato</Link>
        </div>
    )
}