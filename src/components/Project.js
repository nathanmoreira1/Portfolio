import "../components/Project.css"
//images
import redirectIcon from "../images/redirectIcon.png"
import redirectWhiteIcon from "../images/redirectionWhite.png"
//hooks
import { useRef } from "react"

export const Project = ({ title, subtitle, icons, image, code, website }) => {

    const firstButtonRedirectIconRef = useRef();
    const firstButtonTextRef = useRef();
    const secondButtonRedirectIconRef = useRef();
    const secondButtonTextRef = useRef();

    const handleMouseEnter = (btnRef, textRef) => {
        const promise1 = new Promise((resolve) => {
            btnRef.current.src = redirectWhiteIcon;
          resolve();
        });
    
        const promise2 = new Promise((resolve) => {
            textRef.current.style.color = "#ece3f6";
          resolve();
        });
    
        Promise.all([promise1, promise2]);
    };
    
    const handleMouseLeave = (btnRef, textRef) => {
        btnRef.current.src = redirectIcon;
        textRef.current.style.color = "#02334C";
    };

    return (
        <div className="Project">
            <img src={image} alt="projectImage" className="projectImage" />
            <div className="projectInformations">
                <div className="iconsField">
                    {icons.map((icon, i) => (
                        <img src={icon} alt="techIcon" key={i} />
                    ))}
                </div>
                <h1 className="projectTitle">{title}</h1>
                <p className="projectSubtitle">{subtitle}</p>
                <div className="viewProjectsField">
                    <a href={code} target="_blank" >
                        <button
                            onMouseEnter={() => handleMouseEnter(firstButtonRedirectIconRef, firstButtonTextRef)}
                            onMouseLeave={() => handleMouseLeave(firstButtonRedirectIconRef, firstButtonTextRef)}
                        >
                            <p ref={firstButtonTextRef}>View Code</p>
                            <img ref={firstButtonRedirectIconRef} src={redirectIcon} />
                        </button>
                    </a>
                    <a href={website} target="_blank" >
                        <button
                            onMouseEnter={() => handleMouseEnter(secondButtonRedirectIconRef, secondButtonTextRef)}
                            onMouseLeave={() => handleMouseLeave(secondButtonRedirectIconRef, secondButtonTextRef)}
                        >
                            <p ref={secondButtonTextRef}>Website</p>
                            <img ref={secondButtonRedirectIconRef} src={redirectIcon} />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}