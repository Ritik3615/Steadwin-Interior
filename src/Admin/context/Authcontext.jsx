import { createContext, useContext, useState, useEffect } from "react";

// 1. Create context
const AuthContext = createContext();

// 2. Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const login = (data) => {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Custom hook to use auth
export const useAuth = () => useContext(AuthContext);
