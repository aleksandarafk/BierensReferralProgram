import React from "react";
import Howdoesitwork from "./Howdoesitwork";
import './style.css'
import "./Landing-apply.css";
import Howtoapply from "./How-to-apply";
import Landingtop from "./landingtop";

const Landing = () => {
    return(
        <div>
        <Landingtop/>
        <Howdoesitwork />
        <Howtoapply/>
        </div>
    )
}

export default Landing;
