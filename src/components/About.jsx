import "./About.css"

import data from "../data/data.json"

export default function About() {
    return (
        <>
        <section className="about" id="about">
            <h3> About Me! </h3>
            <container className="about-cards">
                <section className="introduction">
                    <h4> Introduction </h4>
                    <ul>
                        {data.introduction.map((introItem, index) => (
                            <li key={index}>
                            {introItem}
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="background">
                    <h4> Background </h4>
                    <ul>
                        {data.background.map((backgroundItem, index) => (
                            <li key={index}>
                            {backgroundItem}
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="personal">
                    <h4> Personal </h4>
                    <ul>
                        {data.about.map((aboutItem, index) => (
                            <li key={index}>
                            {aboutItem}
                            </li>
                        ))}
                    </ul>
                </section>
            </container>
        </section>
        </>
    )
}