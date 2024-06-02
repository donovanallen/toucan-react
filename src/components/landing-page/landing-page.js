import './landing-page.scss';
import Typed from 'react-typed';
import { motion } from 'framer-motion';

const marqueeList = [
	'web + mobile developer',
	'ui/ux designer',
	'full-stack software engineer',
	'creator',
	'plant dad',
	'athlete',
	'coach',
	'musician',
	'design technologist',
	'third-culture kid',
	'available for work',
];

const LandingPage = () => {
	return (
		<div className="app-content">
			<header className="app-header">
				<svg className="svg-container" viewBox="0 0 152 14">
					<text className="svg-text" x="-1.1%" y="100%">
						donovan
						<tspan className="landmark">allen</tspan>
					</text>
				</svg>
				<Typed
					className="hero-typed-text"
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
