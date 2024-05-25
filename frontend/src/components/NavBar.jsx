import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { logout } = useLogout();
  const user = useSelector((state) => state.auth.userCredentials);
  const handleLogout = () => {
    logout();
  };
  return (
    <div>
      <h1>Momentum</h1>
      {user ? (
        <div className="flex justify-end gap-10">
          <h1>{user?.user?.email}</h1>
          <button onClick={handleLogout} className="px-4 py-2 bg-blue-400">
            logout
          </button>
        </div>
      ) : (
        <div className="flex justify-end gap-10">
          <Link to="/login" className="px-4 py-2 bg-blue-400">
            Login
          </Link>
          <Link to="/signup" className="px-4 py-2 bg-blue-400">
            Signup
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
