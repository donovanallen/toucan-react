import { useState } from 'react';
import './landing-page.scss';
import Typed from 'react-typed';

const marqueeList = [
	'mobile + web engineer',
	'creator',
	'plant dad',
	'web designer',
	'athlete',
	'musician',
	'tinkerer',
	'innovator',
	'third-culture kid',
	'available for work',
];

const LandingPage = () => {
	// const [hovered, setHovered] = useState(false);
	// const toggleHover = () => setHovered(!hovered);

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
				></Typed>
			</header>
		</div>
	);
};

export default LandingPage;
