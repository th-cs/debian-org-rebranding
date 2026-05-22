import "./style.scss";
import searchIcon from "/src/assets/icons/search-icon.svg"

function SearchBar(){

	return (
		<div className="search-bar-wrapper">
			<input type="text" placeholder="O que está procurando?"/>
			<button type="button">
				<img
					src={searchIcon}
					alt="Ícone de uma lupa"/>
			</button>
		</div>
	);
}

export default SearchBar;
