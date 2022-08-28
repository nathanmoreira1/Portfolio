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
                        onMouseEnter={() => {
                            telegramIconRef.current.src = telegramHover;
                            telegramTextRef.current.style.color = "#ece3f6";
                        }}
                        onMouseLeave={() => {
                            telegramIconRef.current.src = telegramIcon;
                            telegramTextRef.current.style.color = "#00a6a1";
                        }}
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
                        onMouseEnter={() => {
                            whatsappIconRef.current.src = whatsappHover;
                            whatsappTextRef.current.style.color = "#ece3f6";
                        }}
                        onMouseLeave={() => {
                            whatsappIconRef.current.src = whatsappIcon;
                            whatsappTextRef.current.style.color = "#00a6a1";
                        }}
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
                        onMouseEnter={() => {
                            linkedinIconRef.current.src = linkedinHover;
                            linkedinTextRef.current.style.color = "#ece3f6";
                        }}
                        onMouseLeave={() => {
                            linkedinIconRef.current.src = linkedinIcon;
                            linkedinTextRef.current.style.color = "#00a6a1";
                        }}
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