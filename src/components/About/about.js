import selfie from "../../assets/images/black_white_selfie.png";

function about(props) {
    return (
        <section id="about">
            <div className="page-header">
                <h2>About</h2>
            </div>
            <div id="about-container">
                <div className="selfie">
                    <img src={selfie}/>
                </div>    
                <p>lorem ipsum dolor sit</p>
            </div>
        </section>
    );
}

export default about;