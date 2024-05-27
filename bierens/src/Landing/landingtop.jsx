import React from  "react";
import "./style.css";
import introimage from "./image/LandingPage-image.png";

function Landingtop () {
    return (
        <div id="landing-top">
            <header></header>
            <main>
                <div id="main-inner">
                    <div class="main-inner-content" id="main-inner-left">
                    <h1 class="landing-h1">Grow your <a class="highlight">network</a>.
                        Earn better <a class="highlight">rewards</a>.</h1>
                    <p id="landing-top-text">Grow your network with Bierens, access exclusive events, earn unique rewards for each referral trough our referral program. Become a Bierens Associate today.</p>
                        <a href="#"><button class="button-calltoaction">Read more</button></a>
                    </div>
                    <div class="main-inner-content" id="main-inner-right">
                    <img src={introimage} id="landing-top-image" />
                    </div>
                </div>
            </main>
            <footer></footer>
        </div>
    )
}

export default Landingtop;