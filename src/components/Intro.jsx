import { useState, useEffect } from "react";

import "./Intro.css"
import Avatar from "/assets/avatar.png";

export default function Intro() {
    const [showButtons, setShowButtons] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButtons(true);
        }, 100);
        return () => clearTimeout(timer);
    }, [])

    return (
        <>
        <section className="intro-card" id="about">
            <section className="intro-info">
                <h2> Welcome! </h2>
                <p> My name is David and I am an emerging full-stack developer! </p>
                <section className="buttons">
                    <a href="#projects"><button type="button" className={`fadeInButton ${showButtons ? 'show' : ''}`} style={{ animationDelay: '1s' }}> Projects </button></a>
                    <a href="#resume"><button type="button" className={`fadeInButton ${showButtons ? 'show' : ''}`} style={{ animationDelay: '1.5s' }}> Resume </button></a>
                </section>
            </section>
            <img src={Avatar} className="avatar-img"></img>
        </section>
        </>
    )
}