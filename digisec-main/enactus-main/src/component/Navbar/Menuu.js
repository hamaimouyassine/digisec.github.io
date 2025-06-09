import React from "react";
import ReactDOM from "react-dom";
import "./Menu.css";
import logo from './logo.jpg'
import { Link } from "react-router-dom";
function Menu() {
    return (
        <div>
            <ul id="ul1">
                <span>
                    <li><Link to='/' ><img className='log'src={logo} alt="enactus" /></Link></li>
                </span>
                <li><Link className="nav" to='/Apropos'>a propos</Link></li>
                <li><Link className="nav" to='/Evenement'>membres</Link></li>
                <li><Link className="nav" to="/Project_list">Projets</Link></li>
                <li><Link className="nav" to="/Event" >Evenement</Link></li>
                <li><Link className="nav" to="/Form" id="orange">Rejoignez-Nous</Link></li>
                
            </ul>
        </div>
    )
}

export default Menu;