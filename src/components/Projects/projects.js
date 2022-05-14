import kit from '../../assets/images/kit_screenshot_final.png'
import notmonday from '../../assets/images/notmondaydotcom.png'
import weather from '../../assets/images/tell_me_the_weather.png'
import quiz from '../../assets/images/rapid-quiz-screenshot.png'
import workday from '../../assets/images/workDaySched_screenshot.png'

function portfolio(props) {
    return (
        <div id="projects">
            <img src={kit} className="kit"/>
            <img src={notmonday} className="notmonday" />
            <img src={weather} className="weather"/>
            <img src={quiz} className="quiz"/>
            <img src={workday} className="workday"/>
        </div>
    );
}

export default portfolio;