import kit from '../../assets/images/kit_screenshot_final.png'
import draw from '../../assets/images/draw-the-line.png';
import notetaker from '../../assets/images/note-taker-screenshot.png'
import weather from '../../assets/images/tell_me_the_weather.png'
import quiz from '../../assets/images/rapid-quiz-screenshot.png'
import workday from '../../assets/images/workDaySched_screenshot.png'
import passwordgenerator from '../../assets/images/password-generator-screenshot.png'
import artDesign from "../../assets/images/portfolio-screenshot.png";
import './projects.css';

function portfolio(props) {
    return (
        <section id="projects">
            <p>For backend/CLI only applications, please visit my Github profile below</p>
            <div id="art-design">
                <h3>Art and Design Portfolio</h3>
                <img src={artDesign} className="artD-image" alt="Screenshot of art portfolio" />
                <a href="https://kpbader.github.io/art-and-design-portfolio" target="_blank" rel="noopener noreferrer">Deployed Application</a>
                <a href="https://github.com/kpbader/art-and-design-portfolio" target="_blank" rel="noopener noreferrer">Github Repository</a>
            </div>
            <div id="draw-the-line">
                <h3>Draw The Line</h3>
                <img src={draw} className="dtl-image" alt="Screenshot of group social media project" />
                <a href="https://draw-the-line-repo.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed Application</a>
                <a href="https://github.com/Abarragan89/draw-the-line" target="_blank" rel="noopener noreferrer">Github repository</a>
            </div>
            <div id="kit">
                <h3>Keep In Touch</h3>
                <img src={kit} className="kit-image" alt="Screenshot of group social media project" />
                <a href="https://blooming-anchorage-21473.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed Application</a>
                <a href="https://github.com/kpbader/kit" target="_blank" rel="noopener noreferrer">Github repository</a>
            </div>
            <div id="note-taker">
                <h3>Note Taker</h3>
                <img src={notetaker} className="note-taker" alt="Screenshot of an employee hub project" />
                <a href="https://kpbnotetaker-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed Application</a>
                <a href="https://github.com/kpbader/note-taker-express" target="_blank" rel="noopener noreferrer">Github repository</a>
            </div>
            <div id="weather-app">
                <h3>Tell Me The Weather</h3>
                <img src={weather} className="weather" alt="Screenshot of a weather app using open weather api" />
                <a href="https://kpbader.github.io/tell-me-the-weather/" target="_blank" rel="noopener noreferrer">Deployed Application</a>
                <a href="https://github.com/kpbader/tell-me-the-weather" target="_blank" rel="noopener noreferrer">Github repository</a>
            </div>
            <div id="rapid-quiz">
                <h3>Rapid Quiz</h3>
                <img src={quiz} className="quiz" alt="Screenshot of a timed quiz app" />
                <a href="https://kpbader.github.io/rapid-quiz/" target="_blank" rel="noopener noreferrer">Deployed Application</a>
                <a href="https://github.com/kpbader/rapid-quiz" target="_blank" rel="noopener noreferrer">Github repository</a>
            </div>
            <div id="workday">
                <h3>Work Day</h3>
                <img src={workday} className="workday" alt="Screenshot of a daily planner app" />
                <a href="https://kpbader.github.io/digital-daily-planner/" target="_blank" rel="noopener noreferrer">Deployed Application</a>
                <a href="https://github.com/kpbader/digital-daily-planner" target="_blank" rel="noopener noreferrer">Github repository</a>

            </div>
            <div id="password-generator">
                <h3>Password Generator</h3>
                <img src={passwordgenerator} className="password" alt="Screenshot of a running and coaching organization webpage" />
                <a href="https://kpbader.github.io/shuffle-the-deck-/" target="_blank" rel="noopener noreferrer">Deployed Application</a>
                <a href="https://github.com/kpbader/shuffle-the-deck-" target="_blank" rel="noopener noreferrer">Github repository</a>
            </div>
        </section>
    );
}

export default portfolio;