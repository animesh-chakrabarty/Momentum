import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../hooks/useAuth";
import { setUserCredential } from "../features/auth/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { fetchAuth, isLoading, error, response } = useAuth();
  const dispatch = useDispatch();
  const userCred = useSelector((state) => state.auth.userCredentials);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchAuth("http://localhost:4000/api/user/login", email, password);
    console.log(email, password);
  };

  useEffect(() => {
    response &&
      localStorage.setItem(
        "momentum-user-credentials",
        JSON.stringify(response)
      );
    response && dispatch(setUserCredential(response));
  }, [response]);

  console.log(userCred);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <h1>Login form</h1>
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
      {!isLoading ? <button>login</button> : <h1>Loading...</h1>}
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;
