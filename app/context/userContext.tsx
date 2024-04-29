"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { User, UserContextType } from "../lib/definitions";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserSessionProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("user") || "null");
    }
    return null;
  });
  const [users, setUsers] = useState<User[]>(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("users") || "[]");
    }
    return [];
  });
  const router = useRouter();

  const login = (userData: User) => {
    const existingUser = users.find(
      (user) =>
        user.email === userData.email && user.password === userData.password
    );
    if (existingUser) {
      setUser(existingUser);
      router.push("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "User not found",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  const logout = () => {
    setUser(null);
  };

  const createUser = (userData: User) => {
    localStorage.setItem("users", JSON.stringify([...users, userData]));
    setUsers([...users, userData]);
  };

  return (
    <UserContext.Provider value={{ users, user, login, logout, createUser }}>
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
