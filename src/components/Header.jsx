import { Link } from "react-router-dom"

import "./Header.css";

export default function Header() {
    return (
        <header className="header">
            <h1><a href="/"> David Cho </a></h1>
            <ul className="header-links">
                <li><a href="#about"> About </a></li>
                <li><a href="#skills"> Skills </a></li>
                <li><a href="#projects"> Projects </a></li>
                <li><a href="#resume"> Resume </a></li>
                <li><a href="#contact"> Contact </a></li>
            </ul>
        </header>
    )
}