import "./style.scss";
import Hero from "../Hero";
import SearchBar from "../SearchBar";
import debianIcon from "../../assets/icons/debian-icon.svg"

function Main() {
	return (
		<main>
			<Hero
				heading="O Sistema Operacional Universal."
				subheading="Livre para qualquer pessoa usar, modificar e
					distribuir"
				subtitle="*Fotografias capturadas da Estação Espacial
					Internacional da NASA, onde os laptops possuem Debian."/>
			<section className="about-debian">
				<img
					src={debianIcon}
					alt="Ícone do Debian"/>
				<h2>Debian é um sistema operacional livre e completo.</h2>
				<SearchBar />
			</section>
		</main>
	);
}

export default Main;
