import cityscape from '../../assets/images/cityscape_LANY_web-dev-copy.png';
import './home.css'

function home(props) {
    return (
        <section id="home">
            <div>
                <img src={cityscape} className="cityScape" alt="artwork done by KPB"/>
            </div>
        </section>
    );
}

export default home;