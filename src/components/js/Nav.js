import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Nav.css";

export default function Nav() {
    return (
        <div>
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/pageone" className="nav-link">Page 1</Link>
            <Link to="/welcome" className="nav-link">Page 2</Link>
            <Link to="/colourpage" className="nav-link">Colour Page</Link>
            <Link to="/clock" className="nav-link">Clock</Link>
            <Link to="/clockwithhooks" className="nav-link">Clock with hooks</Link>
            <Link to="/darkmode" className="nav-link">Dark mode</Link>


            {/* <Link to="/clock" className="nav-link">Dynamic</Link> */}




        </div>
    )
}