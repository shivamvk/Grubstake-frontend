import React, { useState, useCallback } from "react";
import Router from "./Router";
import { AuthContext } from "./shared/context/auth-context";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router isLoggedIn={isLoggedIn}/>
    </AuthContext.Provider>
  );
}

export default App;
