import { useState, useCallback, useEffect } from "react";

let logoutTimer;

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [token, setToken] = useState();
  const [userId, setUserId] = useState();
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();

  const login = useCallback(
    (token, uid, userName, userEmail, expirationDate) => {
      setIsLoggedIn(true);
      setUserId(uid);
      setToken(token);
      setUserName(userName);
      setUserEmail(userEmail);
      const currentTimePlusHour =
        expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
      setTokenExpirationDate(currentTimePlusHour);
      localStorage.setItem(
        "userData",
        JSON.stringify({
          userId: uid,
          token: token,
          userName: userName,
          userEmail: userEmail,
          expirationDate: currentTimePlusHour.toISOString(),
        })
      );
    },
    []
  );

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
    setToken(null);
    setTokenExpirationDate(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remaingTime = tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remaingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [logout, token, tokenExpirationDate]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (
      userData &&
      userData.userId &&
      userData.token &&
      userData.userName &&
      userData.userEmail &&
      new Date(userData.expirationDate) > new Date()
    ) {
      login(
        userData.token,
        userData.userId,
        userData.userName,
        userData.userEmail,
        new Date(userData.expirationDate)
      );
    }
  }, [login]);

  return { token, userId, userName, userEmail, isLoggedIn, login, logout };
};
