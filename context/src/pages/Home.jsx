import React, { useContext, useEffect } from "react";
import ContentCard from "../components/FetchContext/ContentCard";
import useGetContents from "../hooks/useGetContents";
import FetchContext from "../context/FetchContext";

function Home() {
  const { contents } = useContext(FetchContext);
  useGetContents();

  return (
    <>
      <div className="w-3/4 mx-auto">
        <div className="w-full bg-cyan-700 p-5 text-center">
          <p className="text-2xl font-medium text-white">
            Fetch Api with React Context
          </p>
        </div>
        <div className="w-full p-5">
          <div className="mb-3">
            <p className="text-xl"> Contents List</p>
          </div>
          <hr />
          <div className="grid grid-cols-5 gap-5 mt-3">
            {contents.map((content) => {
              return <ContentCard content={content}></ContentCard>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
