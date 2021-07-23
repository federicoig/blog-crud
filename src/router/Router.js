import React from "react";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute.js";
import { Auth } from "../views/Auth/auth.js"
import { Home } from "../views/Home/home.js";
import { Details } from "../views/Details/details.js";
import { CreatePost } from "../views/createPost/createPost.js";
import { EditPost } from "../views/editPost/editPost.js";

export const Router = () => {

    return(
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route exact path="/auth" component={Auth}/>
                <PrivateRoute path="/home" component={Home}/>
                <PrivateRoute path="/posts/edit-post/:id" component={EditPost}/>
                <PrivateRoute path="/posts/create-post" component={CreatePost}/>
                <PrivateRoute path="/posts/:id" component={Details}/>
            </Switch>
        </HashRouter>
    )
}