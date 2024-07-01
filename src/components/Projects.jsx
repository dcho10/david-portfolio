import "./Projects.css";

import data from "../data/data.json";

export default function Projects() {
    return (
        <>
        <container className="projects-container">
            <h5> Projects </h5>
                <section className="projects">


                    {data.projects.map((project) => (
                        <section className="project-card" key={project.id}>
                            <h6> {project.title} </h6>
                            <img src={project.image} alt={project.title} className="project-image" />
                            <section className="project-info">
                                <ul>
                                    <li>[{project.technologies.join(' / ')}]</li>
                                </ul>
                                <p> {project.description} </p>
                            </section>
                            <section className="credits">
                                <p> 1st Edition</p>
                                <p> 2024 DAVID CHO </p>
                            </section>
                        </section>
                    ))}
                </section>
        </container>
        </>
    )
}