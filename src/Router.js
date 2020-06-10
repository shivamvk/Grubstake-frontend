import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import AfterAuth from "./intermediate/AfterAuth";
import Dashboard from "./User/Dashboard/Dashboard";
import Profile from "./User/Profile/Profile";
import Logout from "./Auth/Logout";
import Event from "./Event/Event";
import CreateEvent from "./Event/CreateEvent";
import Home from "./Home/Home";
import MainNavigation from "./shared/Navigation/MainNavigation";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import ProfileEditPage from "./User/Profile/sections/ProfileEditPage";

const Router = (props) => {
  let routes;
  if (props.isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <MainNavigation />
          <Home />
        </Route>
        <Route path="/logout" exact>
          <Logout />
        </Route>
        <Route path="/intermediate/after-auth" exact>
          <AfterAuth />
        </Route>
        <Route path="/user/dashboard" exact>
          <MainNavigation />
          <Dashboard />
        </Route>
        <Route path="/user/dashboard/event/:eventId" exact>
          <MainNavigation />
          <Event />
        </Route>
        <Route path="/user/profile" exact>
          <MainNavigation />
          <Profile />
        </Route>
        <Route path="/user/profile/edit" exact>
          <MainNavigation />
          <ProfileEditPage />
        </Route>
        <Route path="/create/event/:page" exact>
          <CreateEvent />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <MainNavigation />
          <Home />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        {/* remove these later */}
        <Route path="/intermediate/after-auth" exact>
          <AfterAuth />
        </Route>
        <Route path="/user/dashboard" exact>
          <MainNavigation />
          <Dashboard />
        </Route>
        <Route path="/user/dashboard/event/:eventId" exact>
          <MainNavigation />
          <Event />
        </Route>
        <Route path="/user/profile" exact>
          <MainNavigation />
          <Profile />
        </Route>
        <Route path="/user/profile/edit" exact>
          <MainNavigation />
          <ProfileEditPage />
        </Route>
        <Route path="/create/event/:page" exact>
          <CreateEvent />
        </Route>
        <Redirect to="/login" />
      </Switch>
    );
  }
  return (
    <BrowserRouter>
      <main>{routes}</main>
    </BrowserRouter>
  );
};

export default Router;
