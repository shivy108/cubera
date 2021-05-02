import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const usernameHandler = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
    console.log(username);
  };

  const passwordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
    console.log(password);
  };

  const loginHandler = () => {
    axios
      .post("http://localhost:8000/api/token/", { username, password })
      .then(() => history.push("/"));
  };

  return (
    <div>
      <h1>Login</h1>
      <h2>username</h2>
      <input type="text" onChange={usernameHandler} />
      <h2>password</h2>
      <input type="password" onChange={passwordHandler} />
      <div className="button" onClick={loginHandler}>
        login
      </div>
    </div>
  );
}

export default Login;
