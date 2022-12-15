import './resume.scss';

import github from '../../assets/github.svg';
import gmail from '../../assets/gmail.svg';
import linkedin from '../../assets/linkedin.svg';

const ResumeTwo = () => {
	return (
		<div className="resume-container">
			<header>
				<div className="resume-header-title">
					<h1>Donovan Allen</h1>
					<h2>Senior Web Engineer</h2>
				</div>
			</header>

			<div className="resume-content">
				<div className="resume-content-left">
					<div className="resume-content-section">
						<h4>experience</h4>
						<div className="resume-content-entry">
							<h3>engineer ii</h3>
							<h5>lululemon</h5>
							<h5>february 2022 - present | remote/houston, tx</h5>
						</div>
						<div className="resume-content-entry">
							<h3>sr. software engineer</h3>
							<h5>deloitte digital</h5>
							<h5>
								june 2018 - february 2022 | 3+ years | arlington, va/new york
								city, ny
							</h5>
						</div>
						<div className="resume-content-entry">
							<h3>software consultant</h3>
							<h5>counterpoint consulting</h5>
							<h5>february 2017 - may 2018 | 1+ year | vienna, va</h5>
						</div>
						<div className="resume-content-entry">
							<h3>operations lead</h3>
							<h5>cove</h5>
							<h5>
								september 2013 - september 2016 | 3 years | washington, dc
							</h5>
						</div>
					</div>
					<div className="resume-content-section">
						<h4>education</h4>
						<div className="resume-content-entry">
							<h3>certificate, web development immersive</h3>
							<h5>general assembly</h5>
							<h5>september 2016 - december 2016 | washington, dc</h5>
						</div>
						<div className="resume-content-entry">
							<h3>bachelor of arts, international affairs</h3>
							<h5>george washington university</h5>
							<h5>august 2009 - december 2013 | washington, dc</h5>
						</div>
					</div>
				</div>
				<div className="resume-content-right">
					<ul className="resume-content-entry">
						<li>
							<span>email: </span>
							<br />
							hello@donovanallen.dev
						</li>
						<li>
							<span>phone: </span>
							<br />
							+1 202 468 7022
						</li>
						<li>
							<span>location: </span>
							<br />
							houston, tx
						</li>
					</ul>
					<div>
						<h4 className="resume-content-entry-heading">competencies</h4>
						<ul className="resume-content-entry-long">
							<li>full-stack software development</li>
							<span>·</span>
							<li>user experience</li>
							<span>·</span>
							<li>data visualization</li>
							<span>·</span>
							<li>software infrastructure</li>
							<span>·</span>
							<li>interaction design</li>
							<span>·</span>
							<li>rapid prototyping</li>
							<span>·</span>
							<li>agile development</li>
						</ul>
						<h4 className="resume-content-entry-heading">
							tools & technologies
						</h4>
						<div className="resume-content-sub-entry">
							<h4 className="resume-content-entry-sub-heading">development</h4>
							<ul className="resume-content-entry-long">
								<li>javascript</li>
								<span>·</span>
								<li>typescript</li>
								<span>·</span>
								<li>java</li>
								<span>·</span>
								<li>angular</li>
								<span>·</span>
								<li>react</li>
								<span>·</span>
								<li>redux</li>
								<span>·</span>
								<li>vue</li>
								<span>·</span>
								<li>node</li>
								<span>·</span>
								<li>next.js</li>
								<span>·</span>
								<li>d3</li>
								<span>·</span>
								<li>postgres</li>
								<span>·</span>
								<li>python</li>
								<span>·</span>
								<li>html</li>
								<span>·</span>
								<li>css/sass</li>
							</ul>
							<h4 className="resume-content-entry-sub-heading">
								infrastructure
							</h4>
							<ul className="resume-content-entry-long">
								<li>git</li>
								<span>·</span>
								<li>docker</li>
								<span>·</span>
								<li>jenkins</li>
								<span>·</span>
								<li>gitlab</li>
								<span>·</span>
								<li>aws</li>
								<span>·</span>
								<li>sentry</li>
								<span>·</span>
								<li>kibana</li>
								<span>·</span>
								<li>mulesoft</li>
								<span>·</span>
								<li>kubernetes</li>
								<span>·</span>
								<li>kafka</li>
								<span>·</span>
								<li>terraform</li>
								<span>·</span>
							</ul>
							<h4 className="resume-content-entry-sub-heading">ux/design</h4>
							<ul className="resume-content-entry-long">
								<li>figma</li>
								<span>·</span>
								<li>contentful</li>
							</ul>
						</div>
						<h4>languages</h4>
						<ul className="resume-content-entry-long">
							<li>english (native)</li>
							<span>·</span>
							<li>spanish (proficient)</li>
							<span>·</span>
							<li>farsi, afrikaans (beginner)</li>
						</ul>
						<h4>links</h4>
						<ul className="resume-content-entry">
							<li>donovanallen.dev</li>
							<li>github.com/donovanallen</li>
							<li>linkedin.com/in/donovan-allen</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResumeTwo;
