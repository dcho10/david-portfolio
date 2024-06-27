import "./App.css";
import Header from "./components/Header"
import Intro from "./components/Intro"
import About from "./components/About"
// import Footer from "./components/Footer"


export default function App() {
    return (
        <>
            <section className="main-container">
                <Header />
                <Intro />
                <About />
                {/* <Footer /> */}
            </section>
        </>
    )
}