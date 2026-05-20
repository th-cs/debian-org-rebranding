import "./style.scss";

function Hero({ heading, subheading, subtitle }){

	return (
		<section className="hero-section">
			<div className="hero-image">
				<h1>{heading}</h1>
				<p>{subheading}</p>
			</div>
			<p>{subtitle}</p>
		</section>
	);
}

export default Hero;
