import './portfolio.scss';
import { useState } from 'react';
import scilentImg1 from './images/scilent-digital/scilent-lettermark-design.png';
import scilentImg2 from './images/scilent-digital/scilent-wordmark-design.png';
import scilentImg3 from './images/scilent-digital/IMG_0910.PNG';
import scilentImg4 from './images/scilent-digital/IMG_0914.JPG';
import scilentImg5 from './images/scilent-digital/scilent-bg-white.png';
import scilentImg6 from './images/scilent-digital/Screenshot 2023-05-24 at 3.25.31 PM.png';
// import scilentImg7 from './images/scilent-digital/Lettermark + Wordmark (White).mp4';

import sdImg1 from './images/sd01/Login-2.png';
import sdImg2 from './images/sd01/Player.png';
import sdImg3 from './images/sd01/Review Engine-2.png';

import performImg1 from './images/perform/sample-form-app.png';

import dnvnImg1 from './images/dnvnhaus/DNVN Minimal.png';
import dnvnImg2 from './images/dnvnhaus/DNVN.png';
import dnvnImg3 from './images/dnvnhaus/Screenshot 2023-05-24 at 3.25.49 PM.png';
import dnvnImg4 from './images/dnvnhaus/Screenshot 2023-05-24 at 3.25.56 PM.png';
// add screen recording of this

// import MediaComponent from './portfolio-items/portfolio-items';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { Carousel } from 'react-responsive-carousel';

const carouselItems1 = [
	scilentImg1,
	scilentImg2,
	scilentImg3,
	scilentImg4,
	scilentImg5,
	scilentImg6,
];

const carouselItems2 = [sdImg1, sdImg2, sdImg3];

const carouselItems3 = [performImg1];

const carouselItems4 = [dnvnImg1, dnvnImg2, dnvnImg3, dnvnImg4];

const Portfolio = () => {
	return (
		<div className="container">
			<div className="portfolio-item">
				<div className="portfolio-item-content">
					<Carousel
						centerMode
						autoPlay
						stopOnHover
						thumbWidth={100}
						infiniteLoop
						emulateTouch
						width={'80%'}
						className="carousel"
					>
						{carouselItems1.map((item) => {
							return (
								<img src={item} alt="" className="portfolio-item-content-img" />
							);
						})}
					</Carousel>
				</div>
				<div className="portfolio-item-text">
					<h2>scilent digital</h2>
					<h3>a digital agency</h3>
					<ul>
						<li>brand identity</li>
						<li>market research</li>
						<li>design & style guidance</li>
						<li>development (web)</li>
					</ul>
				</div>
			</div>
			<div className="portfolio-item left">
				<div className="portfolio-item-content">
					<Carousel
						autoPlay
						stopOnHover
						thumbWidth={100}
						infiniteLoop
						emulateTouch
						width={'80%'}
						className="carousel"
					>
						{carouselItems4.map((item) => {
							return (
								<img src={item} alt="" className="portfolio-item-content-img" />
							);
						})}
					</Carousel>
				</div>
				<div className="portfolio-item-text">
					<h2>dnvn.haus</h2>
					<h3>official homepage for dnvn (artist/producer)</h3>
					<ul>
						<li>brand identity</li>
						<li>logo design</li>
						<li>development (web)</li>
					</ul>
				</div>
			</div>
			<div className="portfolio-item">
				<div className="portfolio-item-content">
					<Carousel
						autoPlay
						stopOnHover
						thumbWidth={100}
						infiniteLoop
						emulateTouch
						width={'80%'}
						className="carousel"
					>
						{carouselItems2.map((item) => {
							return (
								<img src={item} alt="" className="portfolio-item-content-img" />
							);
						})}
					</Carousel>
				</div>
				<div className="portfolio-item-text">
					<h2>project SD01</h2>
					<h3>a revolutionary music experience platform</h3>
					<ul>
						<li>brand identity</li>
						<li>user experience</li>
						<li>market research</li>
						<li>design & style guidance</li>
						<li>development (web + mobile)</li>
						<li>business development</li>
					</ul>
				</div>
			</div>
			<div className="portfolio-item left">
				<div className="portfolio-item-content">
					<Carousel
						autoPlay
						stopOnHover
						thumbWidth={100}
						infiniteLoop
						emulateTouch
						width={'50%'}
						className="carousel"
					>
						{carouselItems3.map((item) => {
							return (
								<img src={item} alt="" className="portfolio-item-content-img" />
							);
						})}
					</Carousel>
				</div>
				<div className="portfolio-item-text">
					<h2>perFORM</h2>
					<h3>
						a design case study for a blockchain-based fantasy sports platform
					</h3>
					<ul>
						<li>brand identity</li>
						<li>logo design</li>
						<li>user experience</li>
						<li>market research</li>
						<li>development (web + mobile + web3)</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
