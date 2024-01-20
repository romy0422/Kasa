import React from "react";
import logoHeader from "../assets/images/Logos/LogoHeader.png";
import { NavLink } from "react-router-dom";

function Header() {
    return(
        <header>
            <NavLink to="/"><img src={logoHeader} alt="Logo"/></NavLink>
            <nav>
                <NavLink to="/" className="lien-site lien-menu">Accueil</NavLink>
                <NavLink to="/About" className="lien-site lien-menu">À propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;