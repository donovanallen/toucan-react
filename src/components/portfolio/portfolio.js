import './portfolio.scss';

import PortfolioData from './portfolio-data';

const Portfolio = () => {
	const items = PortfolioData.items;

	const PortfolioItem = (item) => {
		return (
			<>
				<div className="portfolio-item">
					<a href={item.link}>
						<img
							src={item.images[0].src}
							alt={item.images[0].alt}
							className="portfolio-item-img"
						/>
					</a>

					<div className="portfolio-item-text">
						<div>
							<h4 className="portfolio-item-text-title">{item.title}</h4>
						</div>
						<h5 className="portfolio-item-desc">{item.overview}</h5>
					</div>
				</div>
			</>
		);
	};

	return (
		<div className="container">
			{items.map((item, index) => (
				<>
					<PortfolioItem {...item} />
					{index !== items.length - 1 && <hr />}
				</>
			))}
		</div>
	);
};

export default Portfolio;
