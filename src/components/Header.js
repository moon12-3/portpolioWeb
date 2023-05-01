// import dummy from "../db/data.json";
// import { Link } from 'react-router-dom';
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import logo from "../img/logo.png";
import React, {useState, useEffect} from 'react';

let s = (window.location.href).replace("http://localhost:3000", "");
function Header(props) {
    const loc = useLocation();

    return (
        <header>
            <div className ="nav">
                <img className = "logo" src={logo}/>
                <ul className="nav-list">
                    <li><Link to='/'
                        style={{ opacity: loc.pathname === "/" ? 1 : 0.4 }}
                    >
                        MAIN</Link></li>
                    <li><Link to='/skills'
                        style={{ opacity: loc.pathname === "/skills" ? 1 : 0.4 }}
                    >SKILLS</Link></li>
                    <li><Link to='/projects'
                        style={{ opacity: loc.pathname === "/projects" ? 1 : 0.4 }}
                    >PROJECT</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
