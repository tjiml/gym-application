import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

    const [toggler, setToggler] = useState(false);

    function handleToggler() {
        setToggler(!toggler);
    }

    return (
        <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className="nav-logo"><span>TJL</span> FIT</Link>
                    <button onClick={handleToggler} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className={toggler ? "bi bi-x" : "bi bi-list"}></span>
                    </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul>
                    <li className="list-inline-item"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="list-inline-item"><Link to="/exercise-page" className="nav-link">Exercises</Link></li>
                </ul>
            </div>

            </div>
        </nav>
        </>
    )
}