
import Banniere from "../Composants/Banniere/Banniere";
import Collapse from "../Composants/Collapse/Collapse"
import banniereAbout from "../assets/images/Pages/About/Banniere.png";
import aboutArray from "../Datas/about.json" // j'ai créé un fichier JSON avec les données des collapses
import "../css/style.css";
export default function About() {
	return (
		<>
			 <Banniere image={banniereAbout}/>
			{aboutArray.map((rule, id) => (
				<Collapse
					key={id}
					aboutTitle={rule.aboutTitle}
					aboutText={rule.aboutText}
					aboutStyle="about-style"
				/>
			))}
		</>
	);
}