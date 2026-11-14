import { useSelector, useDispatch } from "react-redux";
import { deleteProduit } from "../features/SliceProduit";
import { Link } from "react-router-dom";

export const ListeProduit = () => {
    const produits = useSelector(s => s.produits.produits);
    const dispatch = useDispatch();

    return (
        <div className="container mt-4">
            <div className="d-flex gap-3 flex-wrap">
                {produits.map(p => (
                    <div className="card p-3" style={{ width: "18rem" }} key={p.id}>
                        <h4 className="card-title">{p.nom}</h4>
                        <div className="card-body">
                            <p><strong>#</strong> {p.id}</p>
                            <p className="badge bg-info text-dark"><strong>Prix:</strong> {p.prix} MAD</p>
                            <div className="d-flex gap-2 mt-3">
                                <button 
                                    className="btn btn-danger btn-sm" 
                                    onClick={() => dispatch(deleteProduit(p.id))}
                                >
                                    Supprimer
                                </button>
                                <Link 
                                    className="btn btn-warning btn-sm" 
                                    to={`/produit/${p.id}`}
                                >
                                    Modifier
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};