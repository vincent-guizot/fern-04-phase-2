//Auth.jsx

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [images, setImages] = useState([
    {
      public_id: "qeboihktgbruufgajt9a",
    },
    {
      public_id: "bub4klha8brm68p0q7be",
    },
  ]);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (userData) => {
      if (userData) {
        setUser(userData);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider
      value={{ user, setUser, loading, setLoading, images, setImages }}
    >
      {children}
    </AuthContext.Provider>
  );
}
