import './portfolio-page.scss';

const PortfolioPage = ({
	title,
	subtitle,
	overview,
	images,
	desc,
	features,
	nextPage,
}) => {
	return (
		<div className="portfolio-page">
			<div className="portfolio-page-heading">
				<h2 className="portfolio-page-heading-title">{title}</h2>
				<h3 className="portfolio-page-subtitle">{subtitle}</h3>
			</div>

			<p className="portfolio-page-overview">{overview}</p>

			{images.length && images[0]?.src && (
				<img className="portfolio-page-hero-img" src={images[0]?.src} />
			)}

			<p className="portfolio-page-desc">{desc}</p>

			{images.length && images[1]?.src && (
				<img className="portfolio-page-hero-img" src={images[1]?.src} />
			)}

			{features.map((feature) => (
				<div className="portfolio-page-feature">
					<p className="portfolio-page-desc portfolio-page-feature-desc">
						{feature.description}
					</p>
					{feature.images.map((image) => (
						<img className="portfolio-page-feature-img" src={image.src} />
					))}
				</div>
			))}

			{nextPage && (
				<div>
					<hr />
					<h3 className="portfolio-page-subtitle">{nextPage.title}</h3>
				</div>
			)}
		</div>
	);
};

export default PortfolioPage;
