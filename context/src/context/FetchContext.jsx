import { createContext, useState } from "react";

const FetchContext = createContext();

export function FetchContextProvider({ children }) {
  const [contents, setContents] = useState([]);
  const value = {
    contents,
    setContents,
  };

  return (
    <FetchContext.Provider value={value}>{children}</FetchContext.Provider>
  );
}

export default FetchContext;
