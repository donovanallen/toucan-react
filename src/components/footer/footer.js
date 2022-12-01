import './footer.scss';
import { Info } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
	const [hovered, setHovered] = useState(false);
	const toggleHover = () => setHovered(!hovered);

	return (
		<div className="footer">
			<a href="https://github.com/donovanallen/toucan-react" target="_blank">
				<div
					className="footer-text"
					onMouseEnter={toggleHover}
					onMouseLeave={toggleHover}
				>
					<Info color="white" strokeWidth={2} size={36} />
					<span className={hovered ? 'show' : 'hide'}>
						© 2022 Neil Donovan Allen
					</span>
				</div>
			</a>
			<div className="footer-arrow">
				{/* <a href="contact">
          <ArrowDown color="white" strokeWidth={1} size={32} />
        </a> */}
			</div>
		</div>
	);
};

export default Footer;
