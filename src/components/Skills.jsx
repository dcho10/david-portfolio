import "./Skills.css"

import skillsData from "../data/data.json"

export default function Skills() {
    return (
        <>
        <container className="skills-container" id="skills">
            <h4> Skills Include... </h4>
            <section className="skills-card">
                {skillsData.skills.map((skill, index) => (
                    <section key={index} className="card">
                        <h5>{skill.title}</h5>
                        <ul>
                            {skill.items.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                            ))}
                        </ul>
                    </section>
                ))}
            </section>
        </container>     
        </>
    )
}