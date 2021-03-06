import './footer.css'
import '../../App.css'

function footer(props) {
    return (
        <footer>
            <div className="labels">
                <a href="https://github.com/kpbader" target="_blank" rel="noopener noreferrer">Github</a>
                <a href="https://www.linkedin.com/in/kyle-patrick-bader-9165601aa/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://stackoverflow.com/users/17444256/kpbader" target="_blank" rel="noopener noreferrer">Stack Overflow</a>
            </div>
        </footer>
    );
}

export default footer;