import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {

  // ALWAYS load clean object
  const [auth, setAuth] = useState(() => {
    const raw = localStorage.getItem("auth_v2");
    return raw ? JSON.parse(raw) : null;
  });

  const login = ({ token, user }) => {
    const payload = {
      token,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      }
    };

    localStorage.setItem("auth_v2", JSON.stringify(payload));
    setAuth(payload);
  };

  const logout = () => {
    localStorage.removeItem("auth_v2");
    setAuth(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token: auth?.token || null,
        user: auth?.user || null,
        role: auth?.user?.role || null,
        isAuthenticated: !!auth?.token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
