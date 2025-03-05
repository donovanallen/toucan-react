import './about.scss';
import baffle from 'baffle';
import { useEffect } from 'react';

const greetings = [
	'hey!',
	'¡hola!',
	'sawubona!',
	'howzit!',
	'bonjour!',
	'hallo!',
	'hej!',
	'ciao!',
	'yerrr!',
];

const About = () => {
	const getText = () => {
		const index = Math.floor(Math.random() * greetings.length);
		return greetings[index];
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const scrambleText = () => {
		const b = baffle('.baffle');
		b.start()
			.set({
				characters: '█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>',
				speed: 200,
			})
			.text((text) => getText())
			.reveal(500);
	};

	useEffect(() => {
		setInterval(() => {
			scrambleText();
		}, 3000);
	}, [scrambleText]);

	return (
		<div className="about-content">
			{/* <div className="about-content-heading">
				<h1 className="baffle">hey!</h1>
			</div> */}
			<div className="about-content-text">
				<p>
					I'm a Frontend + Design Engineer with 10+ years of experience and a proven track record delivering high-impact features
					driving revenue, enhancing user experience, and improving code resilience and developer experience across a wide range of industries, organizations, and user bases.
					I'm specialized in rapid prototyping, micro-frontend architecture, design systems and developing advanced, human-centered UI and elevated digital
					experiences.
				</p>
			</div>
		</div>
	);
};

export default About;
