import React from "react";
import "./landingtop.css";
import introimage from "./image/LandingPage-image.png";

function Landingtop() {
  const scrollToSection = () => {
    const section = document.getElementById('section2_container');
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="Top-Landing">
        <div className="Top-Landing-text">
          <h1>
            Grow your <span className="network">network. </span> <br /> Earn better <span className="network">rewards. </span>
          </h1>
          <p>
            Grow your network with Bierens, access exclusive events, earn unique rewards for each referral through our referral program. Become a Bierens Associate today.
          </p>
          <br />
          <button className="button-calltoaction" onClick={scrollToSection}>Read more</button>
        </div>
        <div>
          <img className="RightImgTop" src={introimage} alt="img" />
        </div>
      </div>
    </>
  );
}

export default Landingtop;
