import './scilent-ui.scss';
import { useState } from 'react';
import { Figma, Github } from 'lucide-react';
import typogImg from '../images/scilent-ui/Scilent UI - Music UI Kit - Typography.png';
import colorsImg from '../images/scilent-ui/Scilent UI - Music UI Kit - Color.png';

import heroImage from '../images/scilent-ui/Scilent UI - Music UI Kit - Cover.png';

const ScilentMusic = () => {
	const [fullscreenImage, setFullscreenImage] = useState(null);

	const toggleFullscreen = (imageSrc) => {
		if (fullscreenImage === imageSrc) {
			setFullscreenImage(null);
		} else {
			setFullscreenImage(imageSrc);
		}
	};

	return (
		<div className="scilent-ui-page">
			{/* HERO */}
			<h1 style={{ textAlign: 'center' }}>scilent ui</h1>
			<h3 style={{ textAlign: 'center' }}>
				A component and utility library for digital music interfaces
			</h3>
			{/* <img src={heroImage} alt="scilent music hero" /> */}
			<hr />

			{/* <h3>design guidelines</h3> */}
			<a
				href="https://github.com/donovanallen/scilent-ui/blob/main/DESIGN.md"
				target="_blank"
				rel="noopener noreferrer"
			>
				design guidelines
			</a>
			<hr />
			<h3>style guide</h3>

			<div className="features">
				<div className="feature scilent-music-media-item">
					<img
						src={heroImage}
						alt="scilent music hero"
						onClick={() => toggleFullscreen(heroImage)}
						className={fullscreenImage === heroImage ? 'fullscreen' : ''}
					/>
				</div>
				<div className="feature scilent-music-media-item">
					<img
						src={typogImg}
						alt="scilent music login mockup"
						onClick={() => toggleFullscreen(typogImg)}
						className={fullscreenImage === typogImg ? 'fullscreen' : ''}
					/>
				</div>
				<div className="feature scilent-music-media-item">
					<img
						src={colorsImg}
						alt="scilent music review mockup"
						onClick={() => toggleFullscreen(colorsImg)}
						className={fullscreenImage === colorsImg ? 'fullscreen' : ''}
					/>
				</div>
			</div>

			{/* Fullscreen overlay */}
			{fullscreenImage && (
				<div
					className="fullscreen-overlay"
					onClick={() => setFullscreenImage(null)}
				>
					<img
						src={fullscreenImage}
						alt="Fullscreen view"
						onClick={() => setFullscreenImage(null)}
					/>
				</div>
			)}

			<hr />

			{/* Links */}
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					gap: 'var(--space-m)',
					width: '100%',
					justifyContent: 'center',
				}}
			>
				<a
					href="https://www.figma.com/design/Bqh3px6uH4VKDGkdypcFPu/Scilent-UI---Music-UI-Kit?m=auto&t=j1dMJQCfbQbhBJUf-1"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Figma
						style={{
							opacity: 0.3,
							transition: 'opacity 0.3s ease',
							'&:hover': {
								opacity: 1,
							},
						}}
					/>
				</a>
				<a
					href="https://github.com/donovanallen/scilent-ui"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Github
						style={{
							opacity: 0.3,
							transition: 'opacity 0.3s ease',
							'&:hover': {
								opacity: 1,
							},
						}}
					/>
				</a>
			</div>
		</div>
	);
};

export default ScilentMusic;
