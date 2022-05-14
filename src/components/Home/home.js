import cityscape from '../../assets/images/cityscape_LANY_web-dev-copy.png';
import './home.css'

function home(props) {
    return (
        <section id="home">
            {/* <h2>
                <a data-testid="link" href="/">
                    KP Bader Web Development
                </a>
            </h2> */}
            <div>
                <img src={cityscape} className="cityScape" />
            </div>
        </section>
    );
}

export default home;