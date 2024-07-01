import "./About.css"

import aboutData from "../data/data.json"

export default function About() {
    return (
        <>
        <section className="about">
            <h3> About Me! </h3>
            {aboutData.about.map((aboutItem, index) => (
                <p key={index}>
                    {aboutItem}
                </p>
            ))}
        </section>
        </>
    )
}