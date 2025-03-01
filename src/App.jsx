import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Products from "./pages/products";
import Navbar from "./components/Navbar"; // Import Navbar component

function App() {
    return (
        <Router>
            <Navbar />  {/* Navbar will always be displayed */}
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </Router>
    );
}

export default App;
