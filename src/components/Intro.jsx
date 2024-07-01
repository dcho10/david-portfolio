import "./Intro.css"
import Avatar from "/assets/avatar.png";

export default function Intro() {
    return (
        <>
        <section className="intro-card" id="about">
            <section className="intro-info">
                <h2> Welcome! </h2>
                <p> My name is David and I'm an emerging full-stack developer! </p>
                <section className="buttons">
                    <a href="#projects"><button type="button"> Projects </button></a>
                    <a href="#resume"><button type="button"> Resume </button></a>
                </section>
            </section>
            <img src={Avatar} className="avatar-img"></img>
        </section>
        </>
    )
}