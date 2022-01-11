import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Frame() {
    return (
        <>
            <header>
                <h1>Cogishpere</h1>
                <nav>
                    <Link to="/collection">Collection</Link>
                    <Link to="/catalogue">Catalogue</Link>
                </nav>
            </header>
            <Outlet/>
        </>
    )
};