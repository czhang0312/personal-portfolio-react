import React from "react";

export default function createNavbar() {
    return (<nav className="navbar">
                <div className="logo">Clark Zhang</div>
                <a href="#" className="toggle-button" onClick={handleClick}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>
                <div className="navbar-links">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#fun">Fun</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>);
};

function handleClick() {
    const navbarlinks = document.getElementsByClassName("navbar-links")[0];
    navbarlinks.classList.toggle("active");
}