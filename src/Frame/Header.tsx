import Link from './Header/Link';
import './Header.css';

export default function Header() {

    return (
        <header className="frame-header maincontainer">
            <nav>
                <Link to="/collection">Collection</Link>
                <Link to="/catalogue">Catalogue</Link>
            </nav>
            <h1>
                Cogishpere
            </h1>
        </header>
    );
};
