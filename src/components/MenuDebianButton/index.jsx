import "./style.scss"
import debianWhite from "/src/assets/icons/debian-white-icon.svg";

function MenuDebianButton({ label }) {
	return (
		<button type="button" className="menu-debian-button">
			<img
				src={debianWhite}
				alt="Ícone do símbolo do Debian branco"/>
			{label}
		</button>
	);
}

export default MenuDebianButton;
