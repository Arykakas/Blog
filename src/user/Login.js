import React, { useState } from "react";

const Login = ({ dispatch }) => {
  const [username, setUsername] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN", username });
      }}
    >
      <label htmlFor="login-username">Username:</label>
      <input
        type="text"
        name="login-username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        id="login-username"
      />
      <label htmlFor="login-password">Password:</label>
      <input type="password" name="login-password" id="login-password" />
      <input type="submit" disabled={username.length === 0} value="Login" />
    </form>
  );
};

export default Login;
