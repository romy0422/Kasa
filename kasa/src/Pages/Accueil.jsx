import { useEffect, useState } from "react";
import Banniere from "../Composants/Banniere/Banniere";
import banniereAccueil from "../assets/images/Pages/Accueil/Banniere.png";
import Card from "../Composants/Card/Card";
import axios from "axios";
import { NavLink } from "react-router-dom";
export default function Accueil() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get("logements.json").then((res) => setData(res.data)); //requète AXIOS ici également pour prochaine utilisation API
	}, []);

	return (
		<>
			<div className="Accueil">
            <Banniere image={banniereAccueil} texte="Chez vous, partout et ailleurs"/>
            <div className="liste-logements">
				{data.map((logement,) => (
				 <NavLink key={logement.id} to={"/logement/"+logement.id+"/#"}><Card key={logement.id} id={logement.id} image={logement.cover} titre={logement.title} /></NavLink>))}
            </div>
			</div>
		</>
	);
}