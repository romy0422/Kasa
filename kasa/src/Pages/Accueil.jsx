import React from "react";
import { NavLink } from "react-router-dom";
import ListeLogements from "../Data/logements.json";
import Banniere from "../Composants/Banniere/Banniere";
import banniereAccueil from "../assets/images/Pages/Accueil/Banniere.png";
import Tuile from "../Composants/Tuile/Tuile";
import "../css/style.css";

function Accueil() {
    return(
        <div className="Accueil">
                 <Banniere image={banniereAccueil} texte="Chez vous, partout et ailleurs"/>
            <div className="liste-logements">
                {ListeLogements.map((logement) => <NavLink key={logement.id} to={"/logement/"+logement.id+"/#"}><Tuile key={logement.id} id={logement.id} image={logement.cover} titre={logement.title} /> </NavLink>)}
            </div>
        </div>
    );
}

export default Accueil;