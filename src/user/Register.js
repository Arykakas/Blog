import React, { useState } from "react";

const Register = ({ dispatch }) => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  function _onChange(attr, value) {
    attr(value);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "REGISTER", username });
      }}
    >
      <label htmlFor="register-username">Username:</label>
      <input
        type="text"
        onChange={(e) => _onChange(setUsername, e.target.value)}
        value={username}
        name="register-username"
        id="register-username"
      />
      <label htmlFor="register-password">Password:</label>
      <input
        type="password"
        onChange={(e) => _onChange(setpassword, e.target.value)}
        value={password}
        name="register-password"
        id="register-password"
      />
      <label htmlFor="register-password-repeat">Repeat password:</label>
      <input
        type="password"
        name="register-password-repeat"
        onChange={(e) => _onChange(setPasswordRepeat, e.target.value)}
        id="register-password-repeat"
        value={passwordRepeat}
      />
      <input
        type="submit"
        value="Register"
        disabled={
          username.length === 0 ||
          password.length === 0 ||
          password !== passwordRepeat
        }
      />
    </form>
  );
};

export default Register;
