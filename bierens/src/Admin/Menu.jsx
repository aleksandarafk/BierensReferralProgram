import React from  "react";
import "./Nav.css";
import logo from "./image/bierens-logo-white.png";
import logouticon from "./image/logout.png"
import { Link } from "react-router-dom";

function Menu () {
    return (
        <div id="menu">
            <div class="header">
                <img src={logo} id="logo"/>
            </div>
            <div class="main">
                <div id="main-inner">
                    <ul id="list">
                        <Link to="/Dashboard"><li class="inner-list"><a class="a" href="#">Dashboard</a></li></Link>
                        <Link to="/Admin/Users"> <li class="inner-list"><a class="a" href="#">Users</a></li></Link>
                       <Link to="/Rewards"> <li class="inner-list"><a class="a" href="#">Rewards</a></li></Link>
                       <Link to="/Feedback"> <li class="inner-list"><a class="a" href="#">Feedback</a></li></Link>
                    </ul>
                </div>
            </div>
            <div class="footer">
                <ul>
                    <li class="inner-list"><a class="a" href="#"><img src={logouticon}/> Log out</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;