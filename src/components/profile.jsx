import React, { Component } from "react";
import "./profile.css";

const Profile = () => {
    return (
        <div>
            <br />
            <div align='center'><img
                id="dp"
                className="rounded-circle"
                src={require("./pic.jpg")}
            /></div>
            <div align="center" id='name'>
                <br />
                <p>Madhav Khurana</p>
            </div>
        </div>
    );
};

export default Profile;
