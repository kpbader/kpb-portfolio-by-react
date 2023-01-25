import { Link } from "react-router-dom";
import { useLocation } from "react-router"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import './nav.css';


function Nav() {
    const location = useLocation()
    console.log(location.pathname);

    const selectedTab = location.pathname;

    function activeTab(path) {
        if (selectedTab !== path) {
            return;
        } else {
            return { color: "silver" }
        }
    }

      // offcanvas
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

    return (
        <section id="nav">
            <h1>
                <a data-testid="link" href="/" className="header">
                    KP Bader Web Development
                </a>
            </h1>
            <ul id="title-list">
                {/* <Link to="/" style={activeTab("/kpb-portfolio-by-react")} className="title">Home</Link> */}
                <Link to="/About" style={activeTab("/About")} className="title">About</Link>
                <Link to="/Projects" style={activeTab("/Projects")} className="title">Projects</Link>
                <a href="https://drive.google.com/file/d/1g1Hi0i8K4IizfJearQ79lUEJyH59QUSP/view?usp=sharing" target="_blank" rel="noreferrer">
                    Resume
                </a>
                <Link to="/Contact" style={activeTab("/Contact")} className="title">Contact</Link>
            </ul>

            <Button id="hamburger-btn" className="openbtn" onClick={handleShow}>
                ☰
            </Button>

            <Offcanvas placement="end" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton />
                <Offcanvas.Body>
                    <Link to="/About" onClick={handleClose}>About</Link>
                    <Link to="/Projects" onClick={handleClose}>Projects</Link>
                    <a href="https://drive.google.com/file/d/1g1Hi0i8K4IizfJearQ79lUEJyH59QUSP/view?usp=sharing" target="_blank" rel="noreferrer" onClick={handleClose}>
                    Resume
                </a>
                    <Link to="/Contact" onClick={handleClose}>Contact</Link>
                </Offcanvas.Body>

            </Offcanvas>
        </section>
    )
}

export default Nav;