import { Link } from "react-router-dom"

import "./Header.css";

export default function Header() {
    return (
        <header className="header">
            <h1><a href="/"> David Cho </a></h1>
            <ul className="header-links">
                <li><a href="#"> About </a></li>
                <li><a href="#"> Skills </a></li>
                <li><a href="#"> Projects </a></li>
                <li><a href="#"> Resume </a></li>
                <li><a href="#"> Contact </a></li>
            </ul>
        </header>
    )
}