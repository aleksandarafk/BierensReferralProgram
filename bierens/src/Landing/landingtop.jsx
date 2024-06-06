import React from  "react";
import "./landingtop.css";
import introimage from "./image/LandingPage-image.png";

function Landingtop () {
    return (
        <div id="landing-top">
            <header></header>
            <main>
                <div id="main-inner">
                    <div class="main-inner-content" id="main-inner-left">
                        <div id="main-inner-left-inner">
                            <h1 class="landing-h1">Grow your <a class="highlight">network</a>.<br /> Earn better <a class="highlight">rewards</a>.</h1>
                            <p id="landing-top-text">Grow your network with Bierens, access exclusive events, earn unique rewards for each referral trough our referral program. Become a Bierens Associate today.</p>
                            <button class="button-calltoaction">Read more</button>
                        </div>
                    </div>
                    <div class="main-inner-content" id="main-inner-right">
                        <div id="main-inner-right-inner">
                            <img src={introimage} id="landing-top-image" />
                        </div>
                    </div>
                </div>
            </main>
            <footer></footer>
        </div>
    )
}

export default Landingtop;