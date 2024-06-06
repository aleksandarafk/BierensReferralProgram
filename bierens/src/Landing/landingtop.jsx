import React from  "react";
import "./landingtop.css";
import "./Landing-apply.css";
import introimage from "./image/LandingPage-image.png";

function Landingtop () {
    return (
        <>
        <div className="Top-Landing">
            <div className="Top-Landing-text">
                <h1>
                Grow your <span className="network">network. </span> <br/> Earn better <span className="network">rewards. </span>
                </h1>
                <p>
                Grow your network with Bierens, access exclusive events, earn unique rewards for each referral trough our referral program. Become a Bierens Associate today.
                </p>
                <br/>
                <button class="button-calltoaction">Read more</button>
            </div>
            <div>
            <img className="RightImgTop" src={introimage} alt="img" />
            </div>
        
      </div>
      </>
    )
}

export default Landingtop;