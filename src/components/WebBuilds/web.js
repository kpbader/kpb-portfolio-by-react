// imports...
import sunset from '../../assets/images/sunset-rehab.png';
import transitions from '../../assets/images/transitions.png';
import firstStep from '../../assets/images/firstStep.png';
import './web.css'

function webBuilds() {
    return (
        <section id="web-builds">
            <p>Websites built via builder platforms</p>
            <div id="sunsetRehab">
                <h3>Sunset Rehab</h3>
                <img src={sunset} className="sr-img" alt="Screenshot of Sunset Rehab page" />
                <a href="https://www.sunsetrehab.biz/" target="_blank" rel="noopener noreferrer">Website</a>
            </div>
            <div id="transitions">
                <h3>Transitions for Tomorrow</h3>
                <img src={transitions} className="tft-img" alt="Screenshot of Transitions for Tomorrow page" />
                <a href="https://www.transitionsfortomorrow.org/" target="_blank" rel="noopener noreferrer">Website</a>
            </div>
            <div id="firstStep">
                <h3>First Step</h3>
                <img src={firstStep} className="fs-img" alt="Screenshot of First Step page" />
                <a href="https://www.firststepnow.biz/" target="_blank" rel="noopener noreferrer">Website</a>
            </div>
        </section>
    )
}

export default webBuilds;