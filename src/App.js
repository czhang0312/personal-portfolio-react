import React from "react";
import Navbar from './Components/Navbar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

class Section extends React.Component {
    render() {
        return (
            <section>
                <h2>
                    {this.props.name}
                </h2>
                <div className='section-content'>
                    {this.props.content}
                </div>
            </section>
        )
    }
}

function App() {
    return (
        <div>
            <Navbar />
            <Section name="About Me" content={aboutMe} />
            <Section name="Projects" content={projects} />
            <Section name="Fun" content={fun} />
            <Section name="Contact" content={contact} />
            <br></br>
        </div>
    );
}

export default App

// content stored in const variables

const aboutMe = <div>
    <img src="headshot.png" alt="profile" class="me" />
    <p> Hello! I'm an undergraduate student studying computer science at the University of Toronto. Currently, I am working on some front-end projects such as this one,
        but I hope to become a full-stack developer someday!</p>

</div>



const projects = <section class="project-section" id="projects">
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
        <a href="https://github.com/czhang0312/TicTacToe">
            <img src="website.png" alt="my website" id="website" />
        </a>
        <div>
            <h3>Personal Website</h3>
            <p>I created this project from scratch (no templates) using HTML, CSS, and JS. Some cool
                cool features include a hamburger menu for the navbar when the window is small enough.
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



const fun = <p> I enjoy working out, snowboarding, and listening to music! </p>

const contact = <section class="contact-section" id="contact">
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

