import "./Footer.css"

export default function Footer() {
    return (
        <>
            <footer className="footer-container" id="contact">
                <section className="footer-section">
                    <h7> Contact Me </h7>
                    <p> Email: Davidceee10@gmail.com </p>
                    <a href="https://www.linkedin.com/in/david-cho-008646182/" target="_blank"> LinkedIn </a>
                    <a href="https://github.com/dcho10" target="blank"> GitHub </a>
                </section>

                <section className="footer-section">
                    <h7> Quick Links </h7>
                    <a href="#about"> About </a>
                    <a href="#skills"> Skills </a>
                    <a href="#projects"> Projects </a>
                </section>
            </footer>
        </>
    )
}