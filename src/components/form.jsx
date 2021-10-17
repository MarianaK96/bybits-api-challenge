import React, { useState } from "react";
import { login } from "../services/AuthService";
// import { determineMessage } from "../utils/errorHandling";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="checkbox" name="Show Password" />
        <label htmlFor="password">Show password</label>
        <p>{errorMessage}</p>
        <button
          type="submit"
          onClick={async () => setResponseData(await login(username, password))}
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Form;
