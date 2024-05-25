import React, { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { setUserCredential } from "../features/auth/authSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { fetchAuth, isLoading, error, response } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchAuth("http://localhost:4000/api/user/signup", email, password);
    console.log(email, password);
  };

  // one the API call is made to the /api/user/ endpoint the we'll get the response in the response variable destructured from useAuth() hook. So whenever the response variable changes this useEffect will execute the inside code block and update the user credentials stored in client state and client localStorage
  useEffect(() => {
    // set credentials to client state
    dispatch(setUserCredential(response));
    // set credentials to localStorage
    localStorage.setItem("momentum-user-credentials", JSON.stringify(response));
  }, [response]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <h1>Signup form </h1>
      <input
        type="email"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        className="w-[300px]"
      />
      <input
        type="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
        className="w-[300px]"
      />
      {!isLoading ? <button>signup</button> : <h1>isloading...</h1>}
      {error && <p>{error}</p>}
    </form>
  );
};

export default Signup;
