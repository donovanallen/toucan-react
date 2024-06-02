import './resume.scss';

import github from '../../assets/github.svg';
import gmail from '../../assets/gmail.svg';
import linkedin from '../../assets/linkedin.svg';

const ResumeTwo = () => {
	return (
		<div className="resume-container">
			<div className="resume-header">
				<div className="resume-header-title">
					<h2>Donovan Allen</h2>
					<h4>Senior Frontend Engineer</h4>
				</div>
				<div className="resume-header-icons">
					<a href="mailto:hello@donovanallen.dev" target="_blank">
						<img className="icon" src={gmail} alt="gmail icon" />
					</a>
					<a href="https://www.linkedin.com/in/donovan-allen" target="_blank">
						<img className="icon" src={linkedin} alt="linkedin icon" />
					</a>
					<a href="https://www.github.com/donovanallen" target="_blank">
						<img className="icon" src={github} alt="github icon" />
					</a>
				</div>
			</div>

			<div className="resume-content">
				<div className="resume-content-left">
					<div className="resume-content-section">
						<h3>experience</h3>
						<div className="resume-content-entry">
							<p>frontend engineer</p>
							<a href="https://shop.lululemon.com/" target="_blank">
								<h5>lululemon</h5>
							</a>
							<span>february 2022 - April 2023</span>
							<span>remote/houston, tx</span>
						</div>
						<div className="resume-content-entry">
							<p>sr. software engineer</p>
							<a href="https://www.deloittedigital.com/" target="_blank">
								<h5>deloitte digital</h5>
							</a>
							<span>june 2018 - february 2022</span>
							<span>arlington, va/new york city, ny</span>
						</div>
						<div className="resume-content-entry">
							<p>software consultant</p>
							<a href="https://www.counterpointconsulting.com/" target="_blank">
								<h5>counterpoint consulting</h5>
							</a>
							<span>february 2017 - may 2018</span>
							<span>vienna, va</span>
						</div>
						<div className="resume-content-entry">
							<p>operations lead</p>
							<a href="https://www.cove.is/" target="_blank">
								<h5>cove</h5>
							</a>
							<span>september 2013 - september 2016</span>
							<span>washington, dc</span>
						</div>
					</div>
					<div className="resume-content-section">
						<h3>education</h3>
						<div className="resume-content-entry">
							<p>web development immersive</p>
							<a href="https://generalassemb.ly/" target="_blank">
								<h5>general assembly</h5>
							</a>
							<span>september 2016 - december 2016 | washington, dc</span>
						</div>
						<div className="resume-content-entry">
							<p>bachelor of arts, international affairs</p>
							<a href="https://www.gwu.edu/" target="_blank">
								<h5>george washington university</h5>
							</a>
							<span>august 2009 - december 2013 | washington, dc</span>
						</div>
						<div className="resume-content-entry">
							<p>hs diploma, international baccalaureate</p>
							<a href="https://www.aisj-jhb.com/" target="_blank">
								<h5>american international school of johannesburg</h5>
							</a>
							<span>2005 - 2009 | johannesburg, south africa</span>
						</div>
					</div>
				</div>
				<div className="resume-content-right">
					{/* <ul className="resume-content-entry">
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
					</ul> */}
					<div>
						<div className="resume-content-section">
							<h4 className="resume-content-entry-heading">skills</h4>
							<ul className="resume-content-entry-long">
								<li>full-stack software development</li>
								<span>·</span>
								<li>mobile development</li>
								<span>·</span>
								<li>user experience</li>
								<span>·</span>
								<li>data visualization</li>
								<span>·</span>
								<li>software architecture</li>
								<span>·</span>
								<li>visual design</li>
								<span>·</span>
								<li>interaction design</li>
								<span>·</span>
								<li>rapid prototyping</li>
								<span>·</span>
								<li>content management</li>
								<span>·</span>
								<li>agile development</li>
							</ul>
						</div>
						<div className="resume-content-section">
							<h4 className="resume-content-entry-heading">technologies</h4>
							<div className="resume-content-sub-entry">
								<h5 className="resume-content-entry-sub-heading">
									development
								</h5>
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
									<li>react native</li>
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
									<li>css/sass/tailwind</li>
								</ul>

								<h5 className="resume-content-entry-sub-heading">
									infrastructure
								</h5>
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
									<li>gcp</li>
									<span>·</span>
									<li>vercel</li>
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
								</ul>
								<h5 className="resume-content-entry-sub-heading">ux/design</h5>
								<ul className="resume-content-entry-long">
									<li>figma</li>
									<span>·</span>
									<li>contentful</li>
									<span>·</span>
									<li>adobe cc</li>
								</ul>
							</div>
						</div>
						<div className="resume-content-section">
							<h4>languages</h4>
							<ul className="resume-content-entry-long">
								<li>english (native)</li>
								<span>·</span>
								<li>spanish (proficient)</li>
								<span>·</span>
								<li>farsi, afrikaans (beginner)</li>
							</ul>
						</div>

						<div className="resume-content-section">
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
		</div>
	);
};

export default ResumeTwo;
