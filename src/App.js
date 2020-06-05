import React, { useState, useCallback } from "react";
import Router from "./Router";
import { AuthContext } from "./shared/context/auth-context";


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
      <Router isLoggenIn={isLoggenIn}/>
    </AuthContext.Provider>
  );
}

export default App;
