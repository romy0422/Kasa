import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Notes from "../Composants/Notes/Notes";
export default function Logements() {
	const params = useParams();
	const navigate = useNavigate();
	const [pickedAppart, setPickedAppart] = useState();
  
	useEffect(() => {
		const getData = async () => {
			const res = await axios.get("logements.json"); 
			const picked = res.data.find(({ id }) => id === params.id);
			res.data.map(() => setPickedAppart(picked));
			if (picked === undefined) {
				navigate("/404", { state: { message: "Oups! La page que vous demandez n'existe pas." } }); //renvoi vers la page 404 en cas d'URL de logement invalide
			}
		};
		getData();
		// eslint-disable-next-line
	}, []); // array vide du useEffect pour ne lancer qu'une seule fois

	return(
   
       
		pickedAppart && (
			<div key={params.id} className="Fiche">
				
				<section className="hostInfo-container">
					<div className="title-tags-container">
						<div className="information-logements">
                            <span className="titre-logement">{pickedAppart.title}</span>
                            <span className="endroit-logement">{pickedAppart.location}</span>
						</div>
						<div className="tags-container">
							
						</div>
					</div>
                    <div className="proprietaire-note">
                                <div className="information-propietaire">
                                    <span className="nom-proprietaire">{pickedAppart.host.name}</span>
                                    <img className="photo-propietaire" src={pickedAppart.host.picture} alt="Propriétaire"/>
                                </div>
                                <div className="note">
							    <Notes score={pickedAppart.rating} />
						
                                </div>
                            </div>
				</section>
				<div className="collapse-fiche-container">
				
				</div>
			</div>
		)  );
}