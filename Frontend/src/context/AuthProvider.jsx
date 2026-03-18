import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );

  // This enables the search bar functionality
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, searchQuery, setSearchQuery }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);