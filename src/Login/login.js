import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./login.css";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const login = { email, password };
    let response = await axios.post("http://localhost:5000/login", login);
    console.log(response);
    window.localStorage.setItem("login_token", response.data.token);
    setEmail("");
    setPassword("");
    if (response.data.message === "Allow") history.push("/home");
    else history.push("/login");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="offset-4 col-4">
          <div className="head">
            <h1>Login Page</h1>
            <form
              className="card"
              onSubmit={handleSubmit}
              style={{ background: "rgb(37,37,37)" }}
            >
              <label className="form-label mb-2" htmlFor="email">
                Email
              </label>
              <div className="icons">
                <input
                  className="form-control mb-2"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  type="email"
                  autoComplete="off"
                />
                <EmailIcon style={{ color: "white", size: "2rem" }} />
              </div>
              <label className="form-label mb-2" htmlFor="password">
                Password
              </label>
              <div className="icons">
                <input
                  className="form-control mb-2"
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  type="password"
                  autoComplete="off"
                />
                <LockIcon style={{ color: "white" }} />
              </div>
              <button
                className="btn btn-primary mb-2"
                type="submit"
                style={{ marginTop: "1rem" }}
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
