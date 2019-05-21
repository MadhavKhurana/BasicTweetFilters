import React, { Component } from "react";
import Profile from "./profile.jsx";
import Posts from './posts.jsx'

class App extends Component {
    //    state{
    //
    //    }

    render() {
        return (
            <div className="row">
                <div className="col-md-2">
                    <Profile />
                </div>
                <div className="col-md-8">
                    <Posts />
                </div>
            </div>
        );
    }
}

export default App;
