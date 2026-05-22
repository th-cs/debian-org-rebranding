import "./style.scss";
import Hero from "../Hero";
import SearchBar from "../SearchBar";
import debianIcon from "../../assets/icons/debian-icon.svg";
import debianWhiteIcon02 from "../../assets/icons/debian-white-icon-02.svg";
import downloadIcon from "../../assets/icons/download-icon.svg";

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
				<div className="about-debian-wrapper">
					<div className="about-debian-info">

					</div>
					<div className="about-debian-get">
						<img
							src={debianWhiteIcon02}
							alt="Ícone do Debian branco"/>
						<div className="get-debian">
							<button type="button" className="get-debian-button">
								<img
									src={downloadIcon}
									alt=""/>
								Obter o Debian
							</button>
							<p>13.5.0 | Trixie | Stable version</p>
						</div>
						<div className="get-debian-links">
							<a href="#">Manual de Instalação</a>
							<a href="#">Notas de Lançamento</a>
							<a href="#">Outras versões</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Main;
