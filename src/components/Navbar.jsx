import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">FPN</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">PLANTS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">CART</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
