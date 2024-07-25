import "./Skills.css"

import data from "../data/data.json"

export default function About() {
    return (
        <>
        <>
            <section className="skills">
                <h3>Skills</h3>
                <div className="skills-container">
                    {data.skills.map((skill, index) => (
                        <section key={index} className="skills-card">
                            <h4>{skill.title}</h4>
                            <section className="info">
                                <ul>
                                    {skill.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            <section className="item-info">
                                                <img src={item} alt={skill.names[itemIndex]} />
                                                <p>{skill.names[itemIndex]}</p>
                                            </section>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </section>
                    ))}
                </div>
            </section>
        </>     
        </>
    )
}