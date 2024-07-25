import "./Projects.css";

import data from "../data/data.json";

export default function Projects() {
    return (
        <>
        <section className="projects" id="projects">
            <h5> Projects </h5>
                {/* <container className="projects-container"> */}
                    {/* {data.projects.map((project) => (
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
                    ))} */}
                {/* </container> */}

                <container className="project-container">
                    <section className="project-card">
                        <img src="./assets/vintage-vault.png"></img>
                        <section className="project-info">
                            <h6> Vintage Vault</h6>
                            <p> This tech blog app was created on my own in an attempt to create a full app from front to back, and using my own API. When a user is on the home page, they will see all the posts that users have posted. They can view each post and it's interactions, and engage in them by commenting on them. Users can also create an account, and access their dashboard where they can view all their posts and check out the engagement on each. Future development includes searching for posts that a user would like to read more about.</p>
                        </section>
                    </section>

                    <section className="project-card">
                        <img src="./assets/vintage-vault.png"></img>
                        <section className="project-info">
                            <h6> Vintage Vault</h6>
                            <p> This tech blog app was created on my own in an attempt to create a full app from front to back, and using my own API. When a user is on the home page, they will see all the posts that users have posted. They can view each post and it's interactions, and engage in them by commenting on them. Users can also create an account, and access their dashboard where they can view all their posts and check out the engagement on each. Future development includes searching for posts that a user would like to read more about.</p>
                        </section>

                    </section>

                    <section className="project-card">
                        <img src="./assets/vintage-vault.png"></img>
                        <section className="project-info">
                            <h6> Vintage Vault</h6>
                            <p> This tech blog app was created on my own in an attempt to create a full app from front to back, and using my own API. When a user is on the home page, they will see all the posts that users have posted. They can view each post and it's interactions, and engage in them by commenting on them. Users can also create an account, and access their dashboard where they can view all their posts and check out the engagement on each. Future development includes searching for posts that a user would like to read more about.</p>
                        </section>
                    </section>
                </container>
        </section>
        </>
    )
}