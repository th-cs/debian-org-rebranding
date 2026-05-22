import "./style.scss"
import MenuLink from "/src/components/MenuLink";
import MenuDebianButton from "/src/components/MenuDebianButton";
import debianLogo from "/src/assets/icons/debian-logo-icon.svg";
import globeIcon from "/src/assets/icons/globe-icon.svg";

function Header() {
	return (
		<header>
			<div className="header-menu">
				<button type="button">
					<img
						src={debianLogo}
						alt="Ícone da logo do Debian"/>
				</button>
				<div className="menu-options">
					<button type="button" className="menu-globe-icon">
						<img
							src={globeIcon}
							alt="Ícone de um globo"/>
					</button>
					<nav>
						<ul>
							<MenuLink label="Blog"/>
							<MenuLink label="Notícias"/>
							<MenuLink label="Wiki"/>
						</ul>
					</nav>
					<MenuDebianButton label="Obter o Debian"/>
				</div>
			</div>
		</header>
	);
}

export default Header;
