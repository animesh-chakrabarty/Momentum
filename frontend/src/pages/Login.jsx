import React, { useState } from "react";
import { useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userCred = useSelector((state) => state.auth.userCredentials);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  console.log(userCred)

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
      <button>login</button>
    </form>
  );
};

export default Login;
