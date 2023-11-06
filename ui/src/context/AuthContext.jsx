import { createContext, useContext, useEffect, useState } from "react";

import { usersData } from "data";

const initAuthContext = {
  user: usersData.anonymous,
  setUser: () => {},
};

const AuthContext = createContext(initAuthContext);

export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(usersData.anonymous);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const value = {
    user,
    setUser,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};
