import './resume.scss';

import github from '../../assets/github.svg';
import gmail from '../../assets/gmail.svg';
import linkedin from '../../assets/linkedin.svg';

const ResumeTwo = () => {
	return (
		<div className="resume-container">
			<div className="resume-header-title">
				<h2>Donovan Allen</h2>
				<h3>Senior Web Engineer</h3>
			</div>

			<div className="resume-content">
				<div className="resume-content-left">
					<div className="resume-content-section">
						<h4>experience</h4>
						<div className="resume-content-entry">
							<p>engineer ii</p>
							<p>lululemon</p>
							<span>february 2022 - present | remote/houston, tx</span>
						</div>
						<div className="resume-content-entry">
							<p>sr. software engineer</p>
							<p>deloitte digital</p>
							<span>
								june 2018 - february 2022 | 3+ years | arlington, va/new york
								city, ny
							</span>
						</div>
						<div className="resume-content-entry">
							<p>software consultant</p>
							<p>counterpoint consulting</p>
							<span>february 2017 - may 2018 | 1+ year | vienna, va</span>
						</div>
						<div className="resume-content-entry">
							<p>operations lead</p>
							<p>cove</p>
							<span>
								september 2013 - september 2016 | 3 years | washington, dc
							</span>
						</div>
					</div>
					<div className="resume-content-section">
						<h4>education</h4>
						<div className="resume-content-entry">
							<p>certificate, web development immersive</p>
							<p>general assembly</p>
							<span>september 2016 - december 2016 | washington, dc</span>
						</div>
						<div className="resume-content-entry">
							<p>bachelor of arts, international affairs</p>
							<p>george washington university</p>
							<span>august 2009 - december 2013 | washington, dc</span>
						</div>
					</div>
				</div>
				<div className="resume-content-right">
					<ul className="resume-content-entry">
						<li>
							<p>email: </p>
							hello@donovanallen.dev
						</li>
						<li>
							<p>phone: </p>
							+1 202 468 7022
						</li>
						<li>
							<p>location: </p>
							houston, tx
						</li>
					</ul>
					<div>
						<p className="resume-content-entry-heading">competencies</p>
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
						<p className="resume-content-entry-heading">tools & technologies</p>
						<div className="resume-content-sub-entry">
							<p className="resume-content-entry-sub-heading">development</p>
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
							<p className="resume-content-entry-sub-heading">infrastructure</p>
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
							<p className="resume-content-entry-sub-heading">ux/design</p>
							<ul className="resume-content-entry-long">
								<li>figma</li>
								<span>·</span>
								<li>contentful</li>
							</ul>
						</div>
						<p>languages</p>
						<ul className="resume-content-entry-long">
							<li>english (native)</li>
							<span>·</span>
							<li>spanish (proficient)</li>
							<span>·</span>
							<li>farsi, afrikaans (beginner)</li>
						</ul>
						<p>links</p>
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
