import './header.css'
// import '../../App.css'

function header(props) {
    return (
        <header>
            <h2>
                <a data-testid="link" href="/" className="header">
                    KP Bader Web Development
                </a>
            </h2>
        </header>
    );
}

export default header;