import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import App from "../components/Dashboard.jsx";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div id="content">
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark ">
                    <a className="navbar-brand" href="#">
                        TWEETFILTER
                    </a>
                </nav>

                <Switch>
                    <Route path="/" exact={true} component={App} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;
