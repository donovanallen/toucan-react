import './portfolio.scss';

import { Link } from 'react-router-dom';
import PortfolioData from './portfolio-data';

const Portfolio = () => {
	const items = PortfolioData.items;

	return (
		<div className="container">
			{items.map((item) => (
				<>
					<div className="portfolio-item">
						<Link to={item.link}>
							<img
								src={item.images[0].src}
								alt={item.images[0].alt}
								className="portfolio-item-img"
							/>
						</Link>

						<div className="portfolio-item-text">
							<div>
								<h3 className="portfolio-item-text-title">{item.title}</h3>
								<p className="portfolio-item-desc">{item.overview}</p>
							</div>
							<div className="portfolio-item-skills">
								{item.skills.map((skill, index) => {
									return (
										<span>
											{!!index && ' | '}
											{skill}
										</span>
									);
								})}
							</div>
						</div>
					</div>
					<hr />
				</>
			))}
		</div>
	);
};

export default Portfolio;
