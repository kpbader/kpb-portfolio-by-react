import selfie from "../../assets/images/black_white_selfie.png";
import './about.css';
// import React, { useEffect, useState } from "react";
import Fade from 'react-reveal/Fade';


function About(props) {
    // const [show, setShow] = useState(false)

    // useEffect(() => {
    //     setShow(true)
    // }, [])

    return (
        <section id="about">
            <article id="about-container">
                <Fade left>
                <div className="selfie">
                    <img src={selfie} alt="Black and white selfie" />
                </div>
                </Fade>
                <Fade right>
                    <p>
                        Originally trained in art and design, Kyle Patrick Bader got a taste of coding while studying with a private tutor to further pursue his knowledge of digital design.
                        This experience eventually led Bader to completely focus on the pursuit of a career in web/software development.
                        As a developer, Bader's hope is to implement complete/full-stack functionality and behaviors along with a sophisticated, minimalist visual design.
                    </p>
                </Fade>
            </article>
        </section>
    );
}

export default About;