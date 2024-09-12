import PortfolioPage from '../portfolio-page';
import PortfolioData from '../portfolio-data';
import './scilent-music.scss';
import {
	Activity,
	MessageSquare,
	Music,
	Plus,
	Phone,
	Laptop,
	Rocket,
} from 'lucide-react';
import loginMockup from '../images/sd01/Login-2.png';
import profileMockup from '../images/sd01/Profile-1.png';
import reviewMockup from '../images/sd01/Review Engine-2.png';
import heroImage from '../images/sd01/sm_mockup_mobile3-logo2.png';
import reviewBeta from '../images/sd01/reviews-feature-mockup-desktop.png';
import insightsBeta from '../images/sd01/insights-feature-mockup-mobile_2.png';
import releasesBeta from '../images/sd01/releases-feature-mockup-mobile.png';
import socialBeta from '../images/sd01/social-feature-mockup-mobile_2.png';

const ScilentMusic = () => {
	// const scilentMusicContent = PortfolioData.items[1];
	// const nextPage = PortfolioData.items[2];

	return (
		<div className="scilent-music-page">
			{/* HERO */}
			<h1>scilent music</h1>
			<h3 style={{ textAlign: 'center' }}>
				An original music app designed to elevate the listening experience
			</h3>
			<img src={heroImage} alt="scilent music hero" />
			<hr />

			{/* CONCEPT */}
			<h2>concept</h2>
			<p>
				The idea for this project came from my unique combination of passions
				for music technology, visual and interactive design, and my personal
				vision for an evolution of the modern digital music consumption
				landscape. The concept began as application based on three main
				functional pillars that, when working in concert, can provide a
				revolution digital music experience for listeners and fans of all types.{' '}
			</p>
			<ul>
				<li>
					<div className="feature-li">
						<Activity size={60} />
						<p>music data + visualization</p>
					</div>
				</li>
				<Plus size={60} />
				<li>
					<div className="feature-li">
						<MessageSquare size={60} />
						<p>social/sharing features</p>
					</div>
				</li>
				<Plus size={60} />
				<li>
					<div className="feature-li">
						<Music size={60} />
						<p>new/upcoming releases</p>
					</div>
				</li>
			</ul>
			<hr />

			{/* INSPO/RESEARCH */}
			<h2>inspo</h2>
			<h2>/research</h2>
			<p>
				Initial research on existing apps, products, services, and user personas
				in those spaces (as well as drawing on my personal experiences), the
				following priorities were established:
			</p>
		
			<div className="features">
				<div className="feature">
					<div className="feature-heading">
						<Activity />
						<h3>music data + visualization</h3>
					</div>
					<ul className="feature-details">
						<li>
							<p>platform-agnostic</p>
						</li>
						<li>
							<p>real-time data + insights</p>
						</li>
					</ul>
				</div>

				<div className="feature">
					<div className="feature-heading">
						<MessageSquare />
						<h3>social/sharing features</h3>
					</div>
					<ul className="feature-details">
						<li>
							<p>authenticity/verification</p>
						</li>
						<li>
							<p>nuanced music conversation</p>
						</li>
					</ul>
				</div>

				<div className="feature">
					<div className="feature-heading">
						<Music />
						<h3>new/upcoming releases</h3>
					</div>
					<ul className="feature-details">
						<li>
							<p>comprehensive curation</p>
						</li>
						<li>
							<p>release day excitement</p>
						</li>
					</ul>
				</div>
			</div>
			<hr />

			{/* DESIGN */}
			<h2>design</h2>
			<p>
				The visual design of this process included research on relevant existing
				UI's, creation of rough wireframes, and mockups.
			</p>
			<div className="features">
				<div className="feature scilent-music-media-item">
					<img src={loginMockup} alt="scilent music login mockup" />
					<h3>Support for multiple streaming sources</h3>
				</div>
				<div className="feature scilent-music-media-item">
					<img src={profileMockup} alt="scilent music profile mockup" />
					<h3>dynamic profile with comprehensive feed of music activity</h3>
				</div>
				<div className="feature scilent-music-media-item">
					<img src={reviewMockup} alt="scilent music review mockup" />
					<h3>
						music review functionality supercharged with dynamic, real-time data
						insights
					</h3>
				</div>
			</div>
			<hr />

			{/* ARCHITECTURE */}
			<h2>architecture</h2>
			<h2>/tech stack</h2>
			<p>
				The initial prototype was built for mobile using React Native and the
				Expo framework, with some basic API integrations with the Spotify Web
				API, which gave me the opportunity to familiarize myself with native
				mobile development. After creating a working prototype, work was pivoted
				to a web version in order to build out more robust features and build on
				particular data intensive features. This became the foundation for the
				private and public beta versions to be released soon.
			</p>
			<h3>More coming soon...</h3>
			{/* <div className="features">
				<div className="feature">
					<div className="feature-li">
						<h4 className="feature-heading">v0</h4>
						<Phone size={60} />
					</div>
				</div>
				<div className="feature">
					<div className="feature-li">
						<h4 className="feature-heading">current</h4>
						<Laptop size={60} />
					</div>
				</div>
				<div className="feature">
					<div className="feature-li">
						<h4 className="feature-heading">future</h4>
						<Rocket size={60} />
					</div>
				</div>
			</div> */}
			<hr />

			{/* DEVELOPMENT */}
			<h2>development</h2>
			<h2>/current state</h2>
			<p>
				The beta version of the app was built for web with an emphasis on mobile
				responsiveness and accessibility, using NextJS, React, TailwindCSS,
				Vercel, and Prisma, with more advanced data integrations with the
				Spotify Web API, Musicbrainz API, and Muso.AI.
			</p>
			{/* <img src={reviewsBeta} alt='scilent music review mockup' /> */}
			<img src={reviewBeta} alt="scilent music review mockup" />
			<img src={insightsBeta} alt="scilent music review mockup" />
			<img src={releasesBeta} alt="scilent music review mockup" />
			<img src={socialBeta} alt="scilent music review mockup" />
			<hr />

			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 'var(--space-m)',
				}}
			>
				<h4>Sign up for the beta at:</h4>
				<a
					href="https://scilent-music-web.vercel.app/beta"
					style={{
						alignSelf: 'center',
						justifySelf: 'center',
						textAlign: 'center',
					}}
				>
					scilent.music
				</a>
			</div>
		</div>
	);
};

export default ScilentMusic;
