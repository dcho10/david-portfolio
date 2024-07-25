import { Link } from "react-router-dom"

import "./Header.css";

export default function Header() {
    return (
        <header className="header">
            <h1><a href="/"> David Cho </a></h1>
            <ul className="header-links">
                <li><a href="#about" data-replace="About"><span> About </span></a></li>
                <li><a href="#skills" data-replace="Skills"><span> Skills </span></a></li>
                <li><a href="#projects" data-replace="Projects"><span> Projects </span> </a></li>
                <li><a href="#contact" data-replace="Contact"><span> Contact </span> </a></li>
            </ul>
        </header>
    )
}