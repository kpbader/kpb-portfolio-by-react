import cityscape from '../../assets/images/cityscape_LANY_web-dev-copy.png';
import './home.css'
import Fade from 'react-reveal/Fade';

function home(props) {
    return (
        <section id="home">
            <Fade>
                <div>
                    <img src={cityscape} className="cityScape" alt="artwork done by KPB" />
                </div>
            </Fade>
        </section>
    );
}

export default home;