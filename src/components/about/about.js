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
					As a third-culture kid born in the{' '}
					<span className="flood-right">southern US</span>, raised in{' '}
					<span className="flood-right">South Africa</span>, educated in{' '}
					<span className="flood-right">Washington, D.C.</span>, and currently
					based in <span className="flood-right">Houston, Texas</span>, I've
					always valued human connection, growth, experiences, and expression.
					My background has been important for me in exploring and expanding the
					intersection of technology, art, communication, and design.
				</p>
				<p>
					I’m a technologist at heart, but specifically interested in web
					design, human user experiences and pushing digital and creative
					boundaries to bring the deepest of the web’s capabilities to everyone,
					for now and the future.
				</p>
				<p>
					When I’m not in front of my monitor, I like to play and watch{' '}
					<span className="flood-right">soccer</span> and{' '}
					<span className="flood-right">Formula 1</span>, make{' '}
					<span className="flood-right">music</span>,{' '}
					<span className="flood-right">explore</span> new places, and{' '}
					<span className="flood-right">drive</span> fast cars.
				</p>
			</div>
		</div>
	);
};

export default About;
