import { useState } from 'react';
import './landing-page.scss';
import Typed from 'react-typed';

const marqueeList = [
	'mobile + web engineer',
	'creator',
	'plant dad',
	'human-centered designer',
	'athlete',
	'UI artisan',
	'musician',
	'amateur mixologist',
	'tinkerer',
	'favorite uncle x2',
	'music producer',
	'third-culture kid',
];

const LandingPage = () => {
	const [hovered, setHovered] = useState(false);
	const toggleHover = () => setHovered(!hovered);

	return (
		<div className="app-content">
			<header
				className="app-header"
				// onMouseEnter={toggleHover}
				// onMouseLeave={toggleHover}
			>
				<div className="hero-heading-text">
					{/* <span className="hero-heading-vert">neil</span> */}
					<h1 className="hero-heading-h1">
						donovan
						<span className="landmark">allen</span>
					</h1>
				</div>
				<Typed
					className="hero-marquee-text"
					strings={marqueeList}
					typeSpeed={60}
					backDelay={2000}
					backSpeed={30}
					cursorChar={'_'}
					shuffle
					loop
					// stopped={hovered === true}
				></Typed>
			</header>
			{/* <div className="app-content-text">
				<p className="app-content-text-header">currently:</p>
				<p>
					<span>
						creating digital elevated experiences at{' '}
						<a href="https://shop.lululemon.com" target="_blank">
							lululemon
						</a>
					</span>
				</p>
				<p>
					bringing cutting-edge tech solutions to all at{' '}
					<a href="https://scilent.digital" target="_blank">
						scilent digital
					</a>
				</p>
				<p>
					expressing myself as{' '}
					<a href="https://dnvn.haus" target="_blank">
						dnvn
					</a>
				</p>
			</div> */}
			{/* <p>
            "Whatever our role, we are designers of information. Our choices
            alter the presentation and flow of human knowledge. We control how
            people find, understand, and use information in every facet of their
            lives.
          </p>
          <p>We must be very, very careful."</p>
          <p>
            - Lisa Marie Marquis, "Everyday Information Architecture" (2019)
          </p>
          <ArrowDown className="content-arrow-down" size={36} strokeWidth={1} /> */}
		</div>
	);
};

export default LandingPage;
