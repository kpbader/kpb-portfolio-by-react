import React from 'react';
import { Link } from "react-router-dom";

function Nav() {

    return (
        <section>
     <Link to="/">Home</Link>
     <Link to="/Projects">Projects</Link>
     <Link to="/Resume">Resume</Link>
     <Link to="/Contact">Contact</Link>
        </section>
    )
}

export default Nav;