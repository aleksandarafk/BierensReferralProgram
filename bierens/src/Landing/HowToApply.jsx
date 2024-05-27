import React from "react";
import "./Landing-apply.css";

function HowToApply(){
    return(
        <section className="How-to-apply">
            <div className="How-to-apply-text">
                <h1>Refer, <span className="Earn">Earn,</span> Repeat.</h1>
                <p>Apply today for the chance of being accepted into our B2B referral program. Earn special perks and rewards based on your referral performance.</p>
                <div className="Email-and-Button">
                    <input type="text" className="email" name="email" placeholder="example@bierens.com" />
                    <button>Apply</button>
                </div>
            </div>
            <div className="Right-side-img">
                <img/>
            </div>
        </section>
    )

}
export default HowToApply;

