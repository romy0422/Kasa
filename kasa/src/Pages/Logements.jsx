import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Notes from "../Composants/Notes";
import Carrousel from "../Composants/Caroussel";
import Collapse from "../Composants/Collapse";
import Tag from "../Composants/Tags";
export default function Logements() {
	const params = useParams();
	const navigate = useNavigate();
	const [pickedAppart, setPickedAppart] = useState();
  
	useEffect(() => {
		const getData = async () => {
			try {
				const res = await axios.get("/logements.json"); 
				const picked = res.data.find(({ id }) => id === params.id);
	
				if (picked) {
					setPickedAppart(picked);
				} else {
					throw new Error("Logement non trouvé");
				}
			} catch (error) {
				console.error("Erreur lors de la récupération des données :", error);
				navigate("/404", { state: { message: "Oups! La page que vous demandez n'existe pas." } });
			}
		};
		getData();
	}, [params.id, navigate]); // Dépendances vides pour exécuter une fois
	
	const slidePics = pickedAppart && pickedAppart.pictures;
	const tags = pickedAppart && pickedAppart.tags;
	const equipments = pickedAppart && pickedAppart.equipments;
	const equip =pickedAppart && equipments.map((item, index) => (
			<li key={index} className="equipList">
				{item}
			</li>
		));
	return(
   
       
		pickedAppart && (
			<div key={params.id} className="Fiche">
				<Carrousel slides={slidePics} />
				<section className="hostInfo-container">
					
					<div className="title-tags-container">
						
						<div className="information-logements">
							
                            <span className="titre-logement">{pickedAppart.title}</span>
                            <span className="endroit-logement">{pickedAppart.location}</span>
							
						</div>
						
						<div className="tags-container">
							{tags.map((tag) => (
								<Tag key={tag} tag={tag} />
							))}
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
				<div className="collapse-fiche-containers">
					<Collapse
						aboutTitle="Description"
						aboutText={pickedAppart.description}
					/>
					<Collapse aboutTitle="Équipements" aboutText={equip} />
				</div>
			</div>
		)  );
}