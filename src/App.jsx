import "./App.css";
import Header from "./components/Header"
import Intro from "./components/Intro"
// import Footer from "./components/Footer"


export default function App() {
    return (
        <>
            <section className="main-container">
                <Header />
                <Intro />
                {/* <Footer /> */}
            </section>
        </>
    )
}