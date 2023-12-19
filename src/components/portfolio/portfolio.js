import './portfolio.scss';

import smCoverImage from './images/sd01/sm_mockup_mobile3-logo2.png';
import luluCoverImage from './images/lululemon/lululemon_gg_desktop-3.png';
import f1CoverImage from './images/f1/Design Case Study - F123.001.jpeg';

const Portfolio = () => {
	const items = [
		{
			title: 'Holiday Gift Guide, 2022-23',
			skills: ['web development'],
			imageUrl: luluCoverImage,
			link: '',
			description: "lululemon's festive web experience for the holidays",
		},
		{
			title: 'scilent music',
			skills: [
				'mobile development',
				'web development',
				'ui/ux',
				'visual design',
				'interaction design',
			],
			imageUrl: smCoverImage,
			link: '',
			description:
				'An original music app designed to elevate the listening experience',
		},
		{
			title: 'F1 23 Case Study',
			skills: ['ui/ux', 'visual design'],
			imageUrl: f1CoverImage,
			link: '',
			description:
				'A case study on enhancing the user experience of EA Sports F1 23',
		},
	];

	return (
		<div className="container">
			{items.map((item) => (
				<>
					<div className="portfolio-item">
						<img src={item.imageUrl} alt="" className="portfolio-item-img" />
						<div className="portfolio-item-text">
							<div>
								<h3 className="portfolio-item-text-title">{item.title}</h3>
								<p className="portfolio-item-desc">{item.description}</p>
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
