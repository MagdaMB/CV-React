import '../components/PersonalInformation.scss';

function PersonalInformation() {
    return (
        <div className="PersonalInfo">
            <div className="contact">
                <h3>magda.m.badura@gmail.com</h3>
                <h3>697 - 316 - 870</h3>
                <h3><a href="https://www.linkedin.com/in/magdalena-badura/">Linkedin</a></h3>
                <h3><a href="https://github.com/MagdaMB">Github</a></h3>
                <h3><a href="https://codepen.io/magdab">Codepen</a></h3>
            </div>
            <div className="skills">
                <h4>Skills</h4>
                <ul>
                    <li>Html, Css, Scss</li>
                    <li>JavaScript</li>
                    <li>Wordpress, Hugo, Pimcore</li>
                    <li>Git, Gulp, BEM, RWD</li>
                </ul>
            </div>
            <div className="language">
                <h4>English</h4>
                <span>intermediate, B2</span>
            </div>
            <div className="hobby">
                <h4>Hobby</h4>
                <p>trekking, cycling, sightseeing, books</p>
            </div>
        </div>
    )
}

export default PersonalInformation;