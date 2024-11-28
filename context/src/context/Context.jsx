import React, { createContext, useState } from "react";

const Context = createContext();

export function ContextProvider({ children }) {
  const [count, setCount] = useState(0);
  const value = {
    count,
    setCount,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Context;
