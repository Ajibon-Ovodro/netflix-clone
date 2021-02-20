import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { setAuth, checkAuth } from "../../utils/auth";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [data, setData] = useState({ username: "", password: "" });
  if (checkAuth()) {
    console.log("working");
    history.replace("/");
  }
  const inputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let { username, password } = data;
    if (username === "" || password === "") {
      return false;
    }
    return true;
  };

  const loginHandler = () => {
    if (validate()) {
      setAuth(JSON.stringify(data));
      history.replace("/");
    }
  };

  return (
    <section className="auth">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="login">
        <h1 className="login__title">Sign In</h1>
        <div className="login__group">
          <input
            className="login__group__input"
            type="text"
            name="username"
            required
            onChange={inputHandler}
          />
          <label className="login__group__label">Username</label>
        </div>
        <div className="login__group">
          <input
            className="login__group__input"
            type="password"
            name="password"
            required
            onChange={inputHandler}
          />
          <label className="login__group__label">Password</label>
        </div>
        <button className="login__sign-in" type="button" onClick={loginHandler}>
          Sign In
        </button>
      </div>
    </section>
  );
};

export default Login;
