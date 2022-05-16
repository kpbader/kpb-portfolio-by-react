import selfie from "../../assets/images/black_white_selfie.png";
import './about.css';

function about(props) {
    return (
        <section id="about">
            <article id="about-container">
                <div className="selfie">
                    <img src={selfie} alt="Black and white selfie" />
                </div>
                <p>
                    Originally trained in art and design, Kyle Patrick Bader got a taste of coding while studying with a private tutor to further pursue his knowledge of digital design.
                    This experience eventually led Bader to completely focus on the pursuit of a career in web/software development.
                    As a developer, Bader's hope is to implement complete/full-stack functionality and behaviors along with a sophisticated, minimalist visual design.
                </p>
            </article>
        </section>
    );
}

export default about;