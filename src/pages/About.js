import React from "react";
import Container from "../components/Container";


function About() {
    return (
        <div>
            <Container>
                <img className="profile-image center" src="./Tedla.jpg" alt="Tedla-profile" />
                <h1>Tedla Betsuan</h1>
                <h3>Let's Build Something!</h3>
                <p>
                Full-Stack Web Developer with a background in Pharmaceutical Solution Specialist. 
                I recently earned a certificate in Full Stack Web Development from the University of Texas at Austin. 
                Gained hands-on experience with Node.js, Express, React, MongoDB, MySQL, APIs, Git, Data Structures, 
                Algorithms, and tech principles and cultures via both team/individual projects. Worked with three major 
                FDA monitored pharmaceutical companies as Solution Production Specialist. Excited to leverage Kaizen event 
                skills in the future as part of a quality-driven team in order to build better experiences on the web. 
                </p>
            </Container>
        </div >
    );
}

export default About;
