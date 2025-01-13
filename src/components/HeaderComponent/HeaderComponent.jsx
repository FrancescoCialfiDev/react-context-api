
import { Link } from "react-router-dom";

// Creiamo una funzione / componente con un return inplicito che ci permette di creare l'header della nostra pagina hmtl
// Utilizziamo un export inline su una costante inizializzata ad una funzione anonima.

export const HeaderComponent = () => (
    <header className=" d-flex align-items-center px-2 bg-dark">
        <nav className="navbar navbar-expand-lg w-100">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand text-white">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/posts" className="nav-link active text-white" aria-current="page">Posts</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link text-white">Contatti</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/posts/addPost" className="nav-link text-white">Crea Post</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </header>
);

