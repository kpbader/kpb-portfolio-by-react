import { Link } from "react-router-dom";
// import footer from '../Footer/footer';

function Nav() {

    return (
        <section id="nav-titles">
            <ul id="title-list">
            <Link to="/" className="title">Home</Link>
            <Link to="/About" className="title">About</Link>
            <Link to="/Projects" className="title">Projects</Link>
            <Link to="/Resume" className="title">Resume</Link>
            <Link to="/Contact" className="title">Contact</Link>
            </ul>
        </section>
    )
}

export default Nav;