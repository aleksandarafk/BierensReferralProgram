import React from "react";
import Popup from "../Admin/Popup";

const Referral = () => {
    
    const getPopup = JSON.parse(localStorage.getItem("feedbackSent"));
    return(
    
    <div className="main-container">
        <h1>Referral</h1>
        {getPopup && <Popup/>}
        </div>)
}

export default Referral;