import Etoile from "../assets/images/Pages/Logements/Etoile.png";
import EtoileVide from "../assets/images/Pages/Logements/EtoileVide.png";
import "../css/style.css";
export default function Notes({ score }) {
	const stars = [1, 2, 3, 4, 5];
	return (
		<div className="note">
			{stars.map((level) =>
				score >= level ? (
					<img
						key={level.toString()}
						className="etoile"
						src={Etoile}
						alt="notes étoiles"
					/>
				) : ( //affichage conditionnel des étoiles de score, pleine ou vide selon le score passé en props
					<img
						key={level.toString()}
						className="etoile"
						src={EtoileVide}
						alt="notes étoiles"
					/>
				)
			)}
		</div>
	);
}