import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-grey-50">
      <div className="w-3/4 mx-auto p-3">
        <div className="flex">
          <div className="flex-[0.25]">
            <Link to="/">HOME</Link>
          </div>
          <div className="flex-[0.5]">
            <Link to="/create">Create Product</Link>
          </div>
          <div className="flex-[0.25]">
            <Link
              className="rounded-md px-3 py-1 bg-blue-700 text-white hover:bg-blue-900"
              to="/"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
