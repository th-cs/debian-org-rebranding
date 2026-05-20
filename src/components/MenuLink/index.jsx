import "./style.scss"

function MenuLink({ label }) {

	return (
		<a href="#">
			<li className="menu-link-text">
				{label}
			</li>
		</a>
	);
}

export default MenuLink;
