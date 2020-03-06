import React from "react";
import "../views/Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__container--img">
          <img className="login-img" src="..." alt="login-img" />
          <h2>Log in</h2>
        </div>
        <div className="login__container--input">
          <form>
            <label for="fname">User Name</label>
            <input type="text" id="fname" placeholder="Enter your Full Name" />
            <label for="fpassword">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your Password"
            />
          </form>
          <button type="button">Log in</button>
        </div>
      </div>
    </div>
  );
};
export default Login;
