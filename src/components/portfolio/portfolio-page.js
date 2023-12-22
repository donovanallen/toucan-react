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
				<p className="portfolio-page-subtitle">{subtitle}</p>
			</div>

			{overview && <h5 className="portfolio-page-overview">{overview}</h5>}

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
					<a href={nextPage.link}>
						<div className="portfolio-page-footer-content">
							<img
								className="portfolio-page-footer-image"
								src={nextPage.images[0].src}
							/>
							<div className="portfolio-page-footer-title">
								<span>Next Project</span>
								<h4>{nextPage.title}</h4>
								<h5>{nextPage.subtitle}</h5>
							</div>
						</div>
					</a>
				</div>
			)}
		</div>
	);
};

export default PortfolioPage;
