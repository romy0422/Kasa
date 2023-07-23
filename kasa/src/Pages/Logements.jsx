import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
export default function FicheLogement() {
	const params = useParams();
	const navigate = useNavigate();

	const [pickedAppart, setPickedAppart] = useState();
	useEffect(() => {
		const getData = async () => {
			const res = await axios.get("logements.json"); 
			const picked = res.data.find(({ id }) => id === params.id);
			res.data.map(() => setPickedAppart(picked));
			if (picked === undefined) {
				navigate("/404", { state: { message: "Can't get data" } }); //renvoi vers la page 404 en cas d'URL de logement invalide
			}
		};
		getData();
		// eslint-disable-next-line
	}, []); // array vide du useEffect pour ne lancer qu'une seule fois
	
	return (
		pickedAppart && (
			<div key={params.id} className="fiche-container">
				
				<section className="hostInfo-container">
					<div className="title-tags-container">
						<div className="title-container redFont">
							<h1>{pickedAppart.title}</h1>
							<h3>{pickedAppart.location}</h3>
						</div>
						<div className="tags-container">
							
						</div>
					</div>
					<div className="rate-host-container">
						<div className="host-container redFont">
							
						</div>
						<div className="rate-container">
							
						</div>
					</div>
				</section>
				<div className="collapse-fiche-container">
				
				</div>
			</div>
		)
	);
}