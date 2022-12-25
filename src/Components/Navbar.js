import React from "react";

export default function createNavbar() {
    return (<nav class="navbar">
        <div class="logo">Clark Zhang</div>
        <a class="toggle-button">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </a>
        <div class="navbar-links">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#fun">Fun</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>);
}