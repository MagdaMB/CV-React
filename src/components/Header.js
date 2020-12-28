import { Link } from "react-router-dom";
import './header.scss';

function Header() {
    return(
        <>
        <header className="App-header">
            <p>Magdalena Badura</p>
            <p>Web Developer</p>
            <nav className="nav">
                <Link to="/">Personal info</Link>
                <Link to="/work">Work and Skills</Link>
                <Link to="/cours">Courses</Link>
                <Link to="/education">Education</Link>
            </nav>
        </header>
        </>
    )
}

export default Header;