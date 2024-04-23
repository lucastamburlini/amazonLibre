"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { User, UserContextType } from "../lib/definitions";

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserSessionProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("user") || "null");
    }
    return null;
  });
  const [users, setUsers] = useState<User[]>([]);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ users, user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("The User context must be used within a UserProvider");
  }
  return context;
};

export default UserContext;
