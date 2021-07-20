import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Auth } from "../views/Auth/auth.js"
import { Home } from "../views/Home/home.js";
import { Details } from "../views/Details/details.js";

export const Router = () => {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/auth" component={Auth}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/posts/:id" component={Details}/>
            </Switch>
        </BrowserRouter>
    )
}