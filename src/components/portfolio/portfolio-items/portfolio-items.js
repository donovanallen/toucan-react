import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import './portfolio-items.scss';

const MediaComponent = ({ mediaItems }) => {
	const renderCarousel = mediaItems.length > 3;

	if (renderCarousel) {
		return (
			<Carousel
				showThumbs={false}
				showStatus={false}
				// dynamicHeight={true}
				// width={`${1 / mediaItems.length}%`}
				className="carousel"
			>
				{mediaItems.map((item, index) => (
					<div key={index} className="mediaItem">
						{item}
						{/* Render the media item (image or video) */}
						{/* Add your own rendering logic for images or videos */}
					</div>
				))}
			</Carousel>
		);
	}

	return (
		<div className="flexRow">
			{mediaItems.map((item, index) => (
				<div key={index} className="mediaItem">
					{item}
					{/* Render the media item (image or video) */}
					{/* Add your own rendering logic for images or videos */}
				</div>
			))}
		</div>
	);
};

export default MediaComponent;
