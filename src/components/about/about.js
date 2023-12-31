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
					As a third-culture kid born in the Southern US, raised in South
					Africa, educated in Washington, D.C., and currently based in Houston,
					Texas, I've gained a deep appreciation for creative expression through
					universal human connection.
				</p>
				<p>
					I'm driven by the mission of enhancing the intersections between
					technology, art, communication, and design through unforgettable user
					experiences and pushing the boundaries of digital innovation to ensure
					that the deepest capabilities of the web are accessible to everyone,
					now and in the future.
				</p>
			</div>
		</div>
	);
};

export default About;
