 import React, { useState, useEffect } from 'react';
 import "./Users.css";

function Users() {

    return (
        <div id='section_users'>
            <p id='users_title'>Users</p>
            <p id='users_title_clarification'>Currently enrolled users in the referral program</p>
            <div id='number_users'>
                <p>Users: 86</p>
                <p>Deleted: 0</p>    
            </div>
        </div>
    );
}

export default Users;
        