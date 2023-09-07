import "../pages/Contact.css"
//images
import telegramIcon from "../images/telegram.png"
import whatsappIcon from "../images/whatsapp.png"
import linkedinIcon from "../images/linkedin.png"

import linkedinHover from "../images/linkedinHover.png"
import whatsappHover from "../images/whatsappHover.png"
import telegramHover from "../images/telegramHover.png"

//hooks
import { useRef } from "react"

const Contact = () => {
    const telegramIconRef = useRef();
    const telegramTextRef = useRef();
    const whatsappIconRef = useRef();
    const whatsappTextRef = useRef();
    const linkedinIconRef = useRef();
    const linkedinTextRef = useRef();

    const handleMouseEnter = (btnRef, textRef, new_btn) => {
        const promise1 = new Promise((resolve) => {
            btnRef.current.src = new_btn;
          resolve();
        });
    
        const promise2 = new Promise((resolve) => {
            textRef.current.style.color = "#ece3f6";
          resolve();
        });
    
        Promise.all([promise1, promise2]);
    };
    
    const handleMouseLeave = (btnRef, textRef, old_btn) => {
        btnRef.current.src = old_btn;
        textRef.current.style.color = "#00a6a1";
    };

    return (
        <div className="Contact" id="Contact" >
            <h1>Contact Me</h1>
            <p className="contactSubtitle">For what you need, my contact networks are below:</p>
            <div className="contactField">
                <a
                    href="https://t.me/nathanmoreira1"
                    target="_blank"
                >
                    <div
                        className="contactItem"
                        onMouseEnter={() => handleMouseEnter(telegramIconRef, telegramTextRef, telegramHover)}
                        onMouseLeave={() => handleMouseLeave(telegramIconRef, telegramTextRef, telegramIcon)}
                    >
                        <img ref={telegramIconRef} src={telegramIcon} alt="telegram" />
                        <p ref={telegramTextRef}>Telegram</p>
                    </div>
                </a>
                <a
                    href="https://api.whatsapp.com/send?phone=5518991644128"
                    target="_blank"
                >
                    <div
                        className="contactItem"
                        onMouseEnter={() => handleMouseEnter(whatsappIconRef, whatsappTextRef, whatsappHover)}
                        onMouseLeave={() => handleMouseLeave(whatsappIconRef, whatsappTextRef, whatsappIcon)}
                    >
                        <img ref={whatsappIconRef} src={whatsappIcon} alt="whatsapp" />
                        <p ref={whatsappTextRef}>Whatsapp</p>
                    </div>
                </a>
                <a
                    href="https://www.linkedin.com/in/nathan-moreira-de-macedo/"
                    target="_blank"
                >
                    <div
                        className="contactItem"
                        onMouseEnter={() => handleMouseEnter(linkedinIconRef, linkedinTextRef, linkedinHover)}
                        onMouseLeave={() => handleMouseLeave(linkedinIconRef, linkedinTextRef, linkedinIcon)}
                    >
                        <img ref={linkedinIconRef} src={linkedinIcon} alt="linkedin" />
                        <p ref={linkedinTextRef}>Linkedin</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Contact;