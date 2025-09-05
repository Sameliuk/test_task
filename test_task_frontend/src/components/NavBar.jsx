import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">SUPERHEROES APP</Link>
            </div>
            <div className="navbar-links">
                <Link to="/superhero/create" className="nav-link">
                    Create
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;
