import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";

export const AuthContext = createContext(null);

export default function AuthContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userData) => {
      if (userData) {
        console.log("masuk if");
        setUser(userData);
        setLoading(false);
        // localStorage.setItem("user", JSON.stringify(userData));
      } else {
        console.log("masuk else");
        setUser(null);
        setLoading(false);
        // localStorage.removeItem("user");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
