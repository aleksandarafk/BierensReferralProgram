import React from "react";
import Howdoesitwork from "./Howdoesitwork";
import './how-does-it-work.css'
import "./Landing-apply.css";
import Howtoapply from "./How-to-apply";
import Landingtop from "./landingtop";

const Landing = () => {
    return(
        <div className="landing-main-container">
        <Landingtop/>
        <Howdoesitwork />
        <Howtoapply/>
        </div>
    )
}

export default Landing;
