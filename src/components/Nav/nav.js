import { Link } from "react-router-dom";
import { useLocation } from "react-router"
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

    return (
        <section id="nav-titles">
            <ul id="title-list">
                <Link to="/" style={activeTab("/kpb-portfolio-by-react")} className="title">Home</Link>
                <Link to="/About" style={activeTab("/About")} className="title">About</Link>
                <Link to="/Projects" style={activeTab("/Projects")} className="title">Projects</Link>
                <a href="https://drive.google.com/file/d/1vYb40_bSa_p_XdIWE8XY6Y_B1RfsDlgn/view?usp=sharing" target="_blank" rel="noreferrer">
                    Resume
                </a>
                <Link to="/Contact" style={activeTab("/Contact")} className="title">Contact</Link>
            </ul>
        </section>
    )
}

export default Nav;