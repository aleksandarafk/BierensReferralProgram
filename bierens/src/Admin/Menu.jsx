import React from  "react";
import "./Nav.css";
import logo from "./image/bierens-logo-white.png";
import logouticon from "./image/logout.png"

function Menu () {
    return (
        <div id="menu">
            <header>
                <img src={logo} id="logo"/>
            </header>
            <main>
                <div id="main-inner">
                    <ul>
                        <li><a href="#">Dashboard</a></li>
                        <li><a href="#">Users</a></li>
                        <li><a href="#">Rewards</a></li>
                        <li><a href="#">Feedback</a></li>
                    </ul>
                </div>
            </main>
            <footer>
                <ul>
                    <li><a href="#"><img src={logouticon}/> Log out</a></li>
                </ul>
            </footer>
        </div>
    )
}

export default Menu;