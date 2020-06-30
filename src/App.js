import React, { useEffect } from "react";
import Router from "./Router";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";

function App() {
  const {
    token,
    userId,
    userName,
    userEmail,
    isLoggedIn,
    login,
    logout,
  } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        userId: userId,
        token: token,
        userName: userName,
        userEmail: userEmail,
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
      }}
    >
      <Router isLoggedIn={isLoggedIn} />
    </AuthContext.Provider>
  );
}

export default App;
