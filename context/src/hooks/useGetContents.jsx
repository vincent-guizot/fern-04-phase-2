import React, { useContext, useEffect } from "react";
import FetchContext from "../context/FetchContext";
import { fetchContents } from "../services";

function useGetContents() {
  const { setContents } = useContext(FetchContext);

  const getAllContents = async () => {
    try {
      const result = await fetchContents();
      setContents(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllContents();
  });

  return;
}

export default useGetContents;
