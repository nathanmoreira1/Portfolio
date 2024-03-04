import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

export const Menu = ({setActualRoute}) => {
    return (
        <nav className='main-menu'>
            <NavLink to="/" className={"menu-item"} onClick={() => setActualRoute("/")}>
                <Button fullWidth={true}>Start</Button>
            </NavLink>
            <NavLink to="/about-me" className={"menu-item"} onClick={() => setActualRoute("/about-me")}>
                <Button fullWidth={true}>About Me</Button>
            </NavLink>
            <NavLink to="/experiences" className={"menu-item"} onClick={() => setActualRoute("/experience")}>
                <Button fullWidth={true}>Experience</Button>
            </NavLink>
            <NavLink to="/projects" className={"menu-item"} onClick={() => setActualRoute("/projects")}>
                <Button fullWidth={true}>Projects</Button>
            </NavLink>
            <NavLink to="/technologies" className={"menu-item"} onClick={() => setActualRoute("/technologies")}>
                <Button fullWidth={true}>Technologies</Button>
            </NavLink>
        </nav>
    );
  };
  
