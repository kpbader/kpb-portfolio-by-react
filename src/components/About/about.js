import selfie from "../../assets/images/black_white_selfie.png";
import './about.css';
import { CSSTransition } from 'react-transition-group';
import React, { useEffect, useState } from "react";


function About(props) {
    const [show, setShow] = useState(false)

    useEffect(() => {
        setShow(true)
    }, [])

    return (
        <section id="about">
            <article id="about-container">
                <div className="selfie">
                    <img src={selfie} alt="Black and white selfie" />
                </div>
                <CSSTransition
                    in={show}
                    timeout={300}
                >
                    <p>
                        Originally trained in art and design, Kyle Patrick Bader got a taste of coding while studying with a private tutor to further pursue his knowledge of digital design.
                        This experience eventually led Bader to completely focus on the pursuit of a career in web/software development.
                        As a developer, Bader's hope is to implement complete/full-stack functionality and behaviors along with a sophisticated, minimalist visual design.
                    </p>
                </CSSTransition>
            </article>
        </section>
    );
}

export default About;