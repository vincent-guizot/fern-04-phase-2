import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="w-3/4 mx-auto p-3">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default MainLayout;
