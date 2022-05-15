import kit from '../../assets/images/kit_screenshot_final.png'
import notetaker from '../../assets/images/note-taker-screenshot.png'
import weather from '../../assets/images/tell_me_the_weather.png'
import quiz from '../../assets/images/rapid-quiz-screenshot.png'
import workday from '../../assets/images/workDaySched_screenshot.png'
import passwordgenerator from '../../assets/images/password-generator-screenshot.png'

function portfolio(props) {
    return (
        <section id="projects">
            <div id="kit">
                <a href="https://blooming-anchorage-21473.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed Application</a>
                <a href="https://github.com/kpbader/kit" target="_blank" rel="noopener noreferrer">Github repository</a>
                <img src={kit} className="kit-image" alt="Screenshot of group social media project" />
            </div>
            <div id="note-taker">
                <a href="https://kpbnotetaker-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed Application</a>
                <a href="https://github.com/kpbader/note-taker-express" target="_blank" rel="noopener noreferrer">Github repository</a>
                <img src={notetaker} className="notmonday" alt="Screenshot of an employee hub project" />
            </div>
            <div id="weather-app">
                <a href="https://github.com/kpbader/tell-me-the-weather" target="_blank" rel="noopener noreferrer">Deployed Application</a>
                <a href="https://github.com/kpbader/tell-me-the-weather" target="_blank" rel="noopener noreferrer">Github repository</a>
                <img src={weather} className="weather" alt="Screenshot of a weather app using open weather api" />
            </div>
            <div id="rapid-quiz">
                <a href="https://kpbader.github.io/rapid-quiz/" target="_blank" rel="noopener noreferrer">Deployed Application</a>
                <a href="https://github.com/kpbader/rapid-quiz" target="_blank" rel="noopener noreferrer">Github repository</a>
                <img src={quiz} className="quiz" alt="Screenshot of a timed quiz app" />
            </div>
            <div id="workday">
                <a href="https://kpbader.github.io/digital-daily-planner/" target="_blank" rel="noopener noreferrer">Deployed Application</a>
                <a href="https://github.com/kpbader/digital-daily-planner" target="_blank" rel="noopener noreferrer">Github repository</a>
                <img src={workday} className="workday" alt="Screenshot of a daily planner app" />
            </div>
            <div id="password-generator">
                <a href="https://kpbader.github.io/shuffle-the-deck-/" target="_blank" rel="noopener noreferrer">Deployed Application</a>
                <a href="https://github.com/kpbader/shuffle-the-deck-" target="_blank" rel="noopener noreferrer">Github repository</a>
                <img src={passwordgenerator} className="workday" alt="Screenshot of a running and coaching organization webpage" />
            </div>
        </section>
    );
}

export default portfolio;