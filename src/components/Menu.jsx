import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';
import Divider from '@mui/material/Divider';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Menu = ({actualRoute, setActualRoute}) => {
    const socialMediaLinks = [
        { icon: <EmailIcon sx={{fontSize: 25}} />, link: 'mailto:nathanmoreirademacedo@gmail.com' },
        { icon: <GitHubIcon sx={{fontSize: 25}} />, link: 'https://github.com/nathanmoreira1' },
        { icon: <LinkedInIcon sx={{fontSize: 25}} />, link: 'https://www.linkedin.com/in/nathan-moreira-de-macedo/' },
      ];

    return (
        <>
            <nav className='main-menu'>
                <NavLink to="/" className={"menu-item"} onClick={() => setActualRoute("/")}>
                    <Button fullWidth={true}>
                        {actualRoute == "/" && <div className='selected-indicator'></div>}
                        Start
                    </Button>
                </NavLink>
                <NavLink to="/about-me" className={"menu-item"} onClick={() => setActualRoute("/about-me")}>
                    <Button fullWidth={true}>
                        {actualRoute == "/about-me" && <div className='selected-indicator'></div>}
                        About Me
                    </Button>
                </NavLink>
                <NavLink to="/experiences" className={"menu-item"} onClick={() => setActualRoute("/experiences")}>
                    <Button fullWidth={true}>
                        {actualRoute == "/experiences" && <div className='selected-indicator'></div>}
                        Experience
                    </Button>
                </NavLink>
                {/* 
                    <NavLink to="/projects" className={"menu-item"} onClick={() => setActualRoute("/projects")}>
                        <Button fullWidth={true}>
                            {actualRoute == "/projects" && <div className='selected-indicator'></div>}
                            Projects
                        </Button>
                    </NavLink>
                */}
                <NavLink to="/technologies" className={"menu-item"} onClick={() => setActualRoute("/technologies")}>
                    <Button fullWidth={true}>
                        {actualRoute == "/technologies" && <div className='selected-indicator'></div>}
                        Technologies
                    </Button>
                </NavLink>
            </nav>
            <section style={{display: "flex", gap: "10px", marginTop: "25px", marginLeft: "10px"}}>
                {socialMediaLinks.map((item, index) => (
                    <React.Fragment key={index}>
                        {index > 0 && <Divider orientation="vertical" flexItem color="#fff" />}
                        <Link href={item.link} target="_blank" rel="noopener noreferrer">
                            {item.icon}
                        </Link>
                    </React.Fragment>
                ))}
            </section>
        </>
    );
  };
  
