import React from "react";
import "../css/style.css";
import logoHeader from "../assets/images/Logos/LogoHeader.png";
import { NavLink } from "react-router-dom";

function Header() {
    return(
        <header>
            <img src={logoHeader} alt="Logo"/>
            <nav>
                <NavLink to="/Accueil" className="lien-site lien-menu">Accueil</NavLink>
                <NavLink to="/About" className="lien-site lien-menu">À propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;