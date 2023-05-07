import React from "react";
import Navbar from "./Components/Navbar"
import Section from "./Components/Section"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'


export default function App() {
    return (
        <div>
            <Navbar />
            <Section name="About Me" content={<AboutMe />} />
            <Section name="Projects" content={<Projects />} />
            <Section name="Fun" content={<Fun />} />
            <Section name="Contact" content={<Contact />} />
            <br></br>
        </div>
    );
};


function AboutMe() {
    return (
      <div>
        <img src="headshot.png" alt="profile" className="me" />
        <p>
          Hello! I'm an undergraduate student studying computer science at the University of Toronto. Currently, I am working on some front-end projects such as this one, but I hope to become a full-stack developer someday!
        </p>
      </div>
    );
  };


function Projects() {
    return (<section class="project-section" id="projects">
            <article>
                <a href="https://github.com/CSC207-2022F-UofT/course-project-group-97">
                    <img src="datingApp.png" alt="dating app" id="dating" />
                </a>
                <div>
                    <h3>Dating App</h3>
                    <p> I worked on this project for my software design course. With my team we designed a full-stack application completely
                        using Java following good software development practices. The feature I worked on specifically was the chat room functionality,
                        which allowed users to communicate to other users they matched with.
                    </p>
                </div>
            </article>

            <article>
                <a href="https://github.com/czhang0312/personal-portfolio-react">
                    <img src="website.png" alt="my website" id="website" />
                </a>
                <div>
                    <h3>Personal Website</h3>
                    <p>I first created this project from scratch using bare HTML/CSS Javascript. But recently I
                        migrated my website to React, which you are viewing now.
                    </p>
                </div>
            </article>

            <article>
                <a href="https://github.com/czhang0312/TicTacToe">
                    <img src="tictactoe.png" alt="tictactoe" id="tictactoe" />
                </a>
                <div>
                    <h3>Tic Tac Toe</h3>
                    <p>This project is my first front-end project I built using only HTML, CSS and JS. I used CSS tables to create the game board and coded the game mechanics
                        using Javascript. I learned a lot about how HTML, CSS and JS interact with each other to create the game.
                    </p>
                </div>
            </article>
            </section>
    );
  };


function Fun() {
    return (
        <p id="fun"> I enjoy working out, snowboarding, and listening to music! </p>
    );
    
};


function Contact() {
    return (<section class="contact-section" id="contact">
    <p> Reach me at clarkw.zhang@mail.utoronto.ca</p>
    <div class="icon-container">
        <a href="https://github.com/czhang0312" class="icon">
            <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/clarkw-zhang/" class="icon">
            <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.instagram.com/czhang0312/" class="icon">
            <FontAwesomeIcon icon={faInstagram} />
        </a>
    </div>
    </section>
    );
};

