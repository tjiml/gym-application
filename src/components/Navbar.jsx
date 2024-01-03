import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

    const [click, setClick] = useState(false);
    
    function handleClick() {
        setClick(!click);
    }

    function closeMobileMenu() {
        setClick(false);
    }

    return (
        <>

        <nav className="nav-container">

        <div className="nav-logo">
            <Link to="/" className="nav-logo"><span>TJL</span> FIT</Link>
        </div>

        <div className="menu-icon" onClick={handleClick}>
            <i className="bi bi-list"></i>
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>

            <li className="x-nav list-inline-item" onClick={closeMobileMenu}><i className="bi bi-x-lg"></i></li>
            <li className="list-inline-item" onClick={closeMobileMenu}><Link to="/" >HOME</Link></li>
            <li className="list-inline-item" onClick={closeMobileMenu}><Link to="/exercise-page">EXERCISES</Link></li>

        </ul>

        </nav>

        </>
    )
}