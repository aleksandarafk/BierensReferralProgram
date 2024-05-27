import React from "react";
import "./Landing-apply.css";
import RightSideImg from "./Images/Right-side-img.png"

function Howtoapply(){
    return (
    <div className="How-to-apply">
    <div className="How-to-apply-text">
        <h1>Refer, <span className="Earn">Earn,</span> Repeat.</h1>
        <p>Apply today for the chance of being accepted into our B2B referral program. Earn special perks and rewards based on your referral performance.</p>
        <div className="Email-and-Button">
            <input type="text" className="email" name="email" placeholder="example@bierens.com" />
            <button>Apply</button>
        </div>
    </div>
    <div >
        <img className="RightImg"src={RightSideImg} alt="img" />
    </div>
</div>
)
}
export default Howtoapply;