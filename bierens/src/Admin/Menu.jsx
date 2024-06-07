import React from  "react";
import "./Nav.css";
import logo from "./image/bierens-logo-white.png";
import logouticon from "./image/logout.png"

function Menu () {
    return (
        <div id="menu">
            <div class="header">
                <img src={logo} id="logo"/>
            </div>
            <div class="main">
                <div id="main-inner">
                    <ul id="list">
                        <li class="inner-list"><a class="a" href="#">Dashboard</a></li>
                        <li class="inner-list"><a class="a" href="#">Users</a></li>
                        <li class="inner-list"><a class="a" href="#">Rewards</a></li>
                        <li class="inner-list"><a class="a" href="#">Feedback</a></li>
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