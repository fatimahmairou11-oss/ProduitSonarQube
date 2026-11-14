import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 d-flex justify-content-between">
            <Link className="navbar-brand" to="/">ProduitApp</Link>
            <div className="navbar-nav d-flex flex-row gap-3">
                <Link className="nav-link" to="/">Liste</Link>
                <Link className="nav-link" to="/FormProduit">Ajouter Produit</Link>
            </div>
        </nav>
    );
};