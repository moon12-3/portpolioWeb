// import dummy from "../db/data.json";
// import { Link } from 'react-router-dom';
import {Link} from "react-router-dom";
import logo from "../img/logo.png";
// import React, {useState, useEffect} from 'react';

let s = (window.location.href).replace("http://localhost:3000", "");
console.log(s);
function Header(props) {
    return (
        <header>
            <div className ="nav">
                <img className = "logo" src={logo}/>
                <ul className="nav-list">
                    <li><Link to='/'>MAIN</Link></li>
                    <li><Link to='/skills'>SKILLS</Link></li>
                    <li><Link to='/projects'>PROJECT</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
