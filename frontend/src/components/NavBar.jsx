import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between">
      <h1>Momentum</h1>
      <Link to="/login" className="px-4 py-2 bg-blue-400">
        Login
      </Link>
      <Link to="/signup" className="px-4 py-2 bg-blue-400">
        Signup
      </Link>
    </div>
  );
};

export default NavBar;
