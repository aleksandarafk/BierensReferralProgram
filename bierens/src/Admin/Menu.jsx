import React from  "react";
import "./style.css";
import logo from "./image/bierens-logo-white.png";

function Menu () {
    return (
        <div id="menu">
            <header>
                <img src={logo} id="logo"/>
            </header>
            <main>
                <div id="main-inner">
                    <ul>
                        <li><a>Dashboard</a></li>
                        <li><a>Users</a></li>
                        <li><a>Rewards</a></li>
                        <li><a>Feedback</a></li>
                    </ul>
                </div>
            </main>
            <footer></footer>
        </div>
    )
}

export default Menu;