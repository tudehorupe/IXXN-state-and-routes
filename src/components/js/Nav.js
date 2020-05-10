import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Nav.css";

export default function Nav() {
    return (
        <div>
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/pageone" className="nav-link">Page 1</Link>
            <Link to="/welcome" className="nav-link">Page 2</Link>

        </div>
    )
}