import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home/Home";
import MainNavigation from "./shared/Navigation/MainNavigation";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import { AuthContext } from "./shared/context/auth-context";
import AfterAuth from "./intermediate/AfterAuth";
import Dashboard from "./User/Dashboard/Dashboard";
import Profile from "./User/Profile/Profile";

function App() {
  const [isLoggenIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggenIn: isLoggenIn, login: login, logout: logout }}
    >
      <Router>
        <main>
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
          <Route path="/intermediate/after-auth" exact>
            <AfterAuth />
          </Route>
          <Route path="/user/dashboard" exact>
            <MainNavigation />
            <Dashboard />
          </Route>
          <Route path="/user/profile" exact>
            <MainNavigation />
            <Profile />
          </Route>
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
