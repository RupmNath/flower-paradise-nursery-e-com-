import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Products from "./pages/products";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </Router>
    );
}

export default App;
