import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="w-3/4">
          <div className="text-center">
            <p className="text-2xl p-3">Product Pages</p>
            <Link
              className="ml-2 mb-5 rounded-md px-3 py-2 bg-blue-500 hover:bg-blue-700 text-white"
              to="/create"
            >
              Create Product
            </Link>
          </div>
          <hr />
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Layout;
