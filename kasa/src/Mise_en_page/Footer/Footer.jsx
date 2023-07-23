import React from "react";
import "../../css/style.css";
import logoFooter from "../../assets/images/Logos/LogoFooter.png";

function Footer() {
    return(
        <footer>
            <div id="footer-container">
                <img src={logoFooter} alt="Logo" />
                <p>&copy; 2023 Kasa. Tous droits réservés</p>
            </div>
        </footer>
    );
}

export default Footer;