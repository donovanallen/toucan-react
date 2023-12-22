import { Link } from 'react-router-dom';
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

			{overview && <p className="portfolio-page-overview">{overview}</p>}

			{images.length && images[0]?.src && (
				<img className="portfolio-page-hero-img" src={images[0]?.src} />
			)}

			{desc && <p className="portfolio-page-desc">{desc}</p>}

			{images.length && images[1]?.src && (
				<img className="portfolio-page-hero-img" src={images[1]?.src} />
			)}

			{features &&
				features.map((feature) => (
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
				<div className="portfolio-page-footer">
					<hr />
					<Link to={nextPage.link}>
						<div className="portfolio-page-footer-content">
							<img
								className="portfolio-page-footer-image"
								src={nextPage.images[0].src}
							/>
							<div className="portfolio-page-footer-title">
								<h3>{nextPage.title}</h3>
								<p>{nextPage.subtitle}</p>
							</div>
						</div>
					</Link>
				</div>
			)}
		</div>
	);
};

export default PortfolioPage;
