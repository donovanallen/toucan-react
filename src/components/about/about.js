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
					<span className="flood-right">Southern US</span>, raised in{' '}
					<span className="flood-right">South Africa</span>, educated in{' '}
					<span className="flood-right">Washington, D.C.</span>, and currently
					based in <span className="flood-right">Houston, Texas</span>, I have
					developed a deep appreciation for human connection, personal growth,
					meaningful experiences, and creative expression. My diverse background
					has played a significant role in my exploration and expansion of the
					intersection between technology, art, communication, and design.
				</p>
				<p>
					I am a passionate technologist with a strong focus on web design and
					creating exceptional user experiences. I am driven by the desire to
					push the boundaries of digital innovation and ensure that the deepest
					capabilities of the web are accessible to everyone, both now and in
					the future.
				</p>
				{/* <p>
					In my free time, I love watching and playing{' '}
					<span className="flood-right">soccer</span> and immersing myself in
					the world of <span className="flood-right">Formula 1</span>. I also
					have a passion for creating music and experiementing with the latest{' '}
					<span className="flood-right">music tech</span>, exploring new corners
					of <span className="flood-right">the world</span>, and the
					exhilaration of <span className="flood-right">driving</span> fast
					cars.
				</p> */}
			</div>
		</div>
	);
};

export default About;
