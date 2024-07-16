import "./About.css"

import data from "../data/data.json"

export default function About() {
    return (
        <>
        <container className="about" id="about">
            <h3> About Me! </h3>
            <section className="about-cards">
                <section className="introduction about-card about-card-0">
                    <h4> Introduction </h4>
                    <ul>
                        {data.introduction.map((introItem, index) => (
                            <li key={index}>
                            {introItem}
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="background about-card about-card-1">
                    <h4> Background </h4>
                    <ul>
                        {data.background.map((backgroundItem, index) => (
                            <li key={index}>
                            {backgroundItem}
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="skills about-card about-card-2">
                    <h4> Skills Include... </h4>
                    {/* skillsData = object from data.json, skills = skills object */}
                    <section className="skills-wrapper">
                        {data.skills.map((skill, index) => (
                        <section key={index}>
                            <h5>{skill.title}</h5>
                            <ul className="list-items">
                                {skill.items.map((item, itemIndex) => (
                                    <li key={itemIndex}><img src={item} alt={`${skill.title} logo`} style={{width: '5em', height: '5em'}} /></li>
                                ))}
                            </ul>
                        </section>
                    ))}
                    </section>
                </section>

                <section className="personal about-card about-card-3">
                    <h4> Personal </h4>
                    <ul>
                        {data.about.map((aboutItem, index) => (
                            <li key={index}>
                            {aboutItem}
                            </li>
                        ))}
                    </ul>
                </section>
            </section>
        </container>
        </>
    )
}