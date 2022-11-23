import "./about.scss";
import baffle from "baffle";
import { useEffect } from "react";

const greetings = [
  "hey!",
  "¡hola!",
  "sawubona!",
  "howzit!",
  "bonjour!",
  "hallo!",
  "hej!",
  "ciao!",
  "yerrr!",
];

const About = () => {
  const getText = () => {
    const index = Math.floor(Math.random() * greetings.length);
    return greetings[index];
  };

  const scrambleText = () => {
    const b = baffle(".baffle");
    b.start()
      .set({
        characters: "█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>",
        speed: 200,
      })
      .text((text) => getText())
      .reveal(500);
  };

  useEffect(() => {
    setInterval(() => {
      scrambleText();
    }, 3000);
  }, [scrambleText]);

  return (
    <div className="about">
      <div className="about-content">
        <div className="about-content-heading">
          <h1 className="baffle">hey!</h1>
        </div>
        <div className="about-content-text">
          <p>
            I'm a third-culture kid born in{" "}
            <span className="flood-right">Augusta, Georgia</span>, raised in{" "}
            <span className="flood-right">South Africa</span>, educated and
            adulted in <span className="flood-right">Washington, D.C.</span> and
            currently based in{" "}
            <span className="flood-right">Houston, Texas</span>. I’m currently a
            frontend engineer supporting the sweatlife at{" "}
            <span className="flood-right">lululemon</span> while continuing to
            scratch my creative itches in my free time. I value human
            connection, growth, and comedy.
          </p>
          <p>
            I’m a technologist at heart, but specifically interested in web
            design, human user experiences and pushing digital and creative
            boundaries to bring the deepest of the web’s capabilities to
            everyone, for now and the future. My background and experiences have
            pushed me to explore and expand the intersection of technology, art,
            communication and design.
          </p>
          <p>
            When I’m not in front of my monitor, I like to play and watch{" "}
            <span className="flood-right">soccer</span> and{" "}
            <span className="flood-right">Formula 1</span>, make{" "}
            <span className="flood-right">music</span>,{" "}
            <span className="flood-right">explore</span> new places, and{" "}
            <span className="flood-right">drive</span> fast cars.
          </p>
          <p>
            This site was built from scratch in React using a combination of
            open-source libraries. Find out more{" "}
            <a
              target="_blank"
              href="https://github.com/donovanallen/donovanallen.github.io#readme"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
      <div className="about-content-secondary">
        {/* <h2>my digital toolbox</h2>
        <ul>
          <li>React</li>
          <li>Angular</li>
          <li>Figma</li>
          <li>Nord</li>
          <li>Lucide Icons</li>
          <li>Next.js</li>
          <li>Tidal</li>
          <li>Twitter</li>
          <li>VSCode</li>
        </ul> */}
      </div>
    </div>
  );
};

export default About;
