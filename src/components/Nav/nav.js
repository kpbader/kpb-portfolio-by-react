import { Link } from "react-router-dom";
import { useLocation } from "react-router"


function Nav() {
        const location = useLocation() 
        console.log(location.pathname);

        const selectedTab = location.pathname;

        function activeTab(path) {
            if (selectedTab !== path) {
                return;
            } else {
                return {color: "silver"}
            }
        }

    return (
        <section id="nav-titles">
            <ul id="title-list">
            <Link to="/kpb-portfolio-by-react" style={activeTab("/kpb-portfolio-by-react")}  className="title">Home</Link>
            <Link to="/About" style={activeTab("/About")} className="title">About</Link>
            <Link to="/Projects" style={activeTab("/Projects")} className="title">Projects</Link>
            <Link to="/Resume" style={activeTab("/Resume")} className="title">Resume</Link>
            <Link to="/Contact" style={activeTab("/Contact")} className="title">Contact</Link>
            </ul>
        </section>
    )
}

export default Nav;