import "./footer.scss";
import { Info } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <div className="footer">
      <div
        className="footer-text"
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <div className="footer-icon">
          <Info color="white" strokeWidth={2} size={16} />
        </div>
        {hovered && (
          <>
            <a
              className={hovered ? "show" : "hide"}
              href="https://www.github.com/donovanallen/donovanallen.github.io"
              target="_blank"
            >
              © 2022 Neil Donovan Allen
            </a>
          </>
        )}
      </div>
      <div className="footer-arrow">
        {/* <a href="contact">
          <ArrowDown color="white" strokeWidth={1} size={32} />
        </a> */}
      </div>
    </div>
  );
};

export default Footer;
