import { Provider } from "react-redux";
import { Store } from "./features/Store";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { FormProduit } from "./components/FormProduit";
import { ListeProduit } from "./components/ListeProduit";
import { Navbar } from "./components/Navbar";

function App() {
    return (
        <Provider store={Store}>
            <BrowserRouter>
                <Navbar />
                <div className="container mt-4">
                    <Routes>
                        <Route path="/" element={<ListeProduit />} />
                        <Route path="/FormProduit" element={<FormProduit />} />
                        <Route path="/produit/:id" element={<FormProduit />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;