import Home from "./views/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AuthContext } from './contexts/AuthProvider';
import { useContext } from 'react';
import PokemonCard from "./views/PokemonCard";
import Accessories from "./views/Accessories";

function App() {
    const { login, logout, user } = useContext(AuthContext)

    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5 px-2">
                <a className="navbar-brand" href="#">
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/ptcg">
                            Single Cards
                        </Link>
                        <Link className="nav-link" to="/accessories">
                            Accessories
                        </Link>

                    </div>
                    <div className="navbar-nav ml-auto">
                    <Link className="nav-link" to="/cart">
                            Cart
                        </Link>
                        {user.loggedIn ? (
                            
                            <button
                                onClick={logout}
                                className="btn btn-primary"
                            >
                                Logout
                            </button>
                        ) : (
                            <button onClick={login} className="btn btn-primary">
                                Login
                            </button>
                        )}
                    </div>
                </div>
            </nav>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ptcg" element={<PokemonCard />} />
                    <Route path="/ptcg" element={<Accessories />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
