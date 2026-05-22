import "./style.scss";

function Hero({ heading, subheading, subtitle }){

	const imageIndex = [1, 2, 3, 4, 5];

	return (
		<section className="hero-section">
			{imageIndex.map((index) => (
				<div
					key={index}
					className={`hero-image-0${index}`}>
					<h1>{heading}</h1>
					<p>{subheading}</p>
				</div>)
			)}
			<p>{subtitle}</p>
		</section>
	);
}

export default Hero;
