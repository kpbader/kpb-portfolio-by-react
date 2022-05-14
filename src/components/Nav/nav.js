import { Link } from "react-router-dom";
// import footer from '../Footer/footer';

function Nav() {

    return (
        <section>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Resume">Resume</Link>
            <Link to="/Contact">Contact</Link>
            
        </section>
    )
}

export default Nav;