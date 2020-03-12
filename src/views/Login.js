import React, { useState } from "react";
import "../views/Login.css";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const formOnSubmitHandler = event => {
    event.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: email, password: password })
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
        if (data.token) {
          history.push("/home");
        } else if (data.error) {
          alert(data.error);
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__container--img">
          <h1 className="login2">Log in</h1>
        </div>
        <div className="login__container--input">
          <form onSubmit={formOnSubmitHandler}>
            <label for="fname">Email</label>
            <input
              type="text"
              id="fname"
              value={email}
              onChange={event => setEmail(event.target.value)}
              placeholder="Enter your Email"
            />
            <label for="fpassword">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
              placeholder="Enter your Password"
            />
            <button className="button" type="submit">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
