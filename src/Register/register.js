import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import "./register.css";
function Register() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormsg, seterrormsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const registration = { email, password, verified: false };
    let response = await axios.post(
      "http://localhost:5000/register",
      registration
    );
    seterrormsg(response.data.message);
    setEmail("");
    setPassword("");
    if (response.data.message === "Customer Registered") {
      history.push("/login");
    } else history.push("/register");

    alert(
      "You have successfully signed up,please verify your mail before logging in..."
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="offset-4 col-4">
          <div className="head">
            <h1>Registration Page</h1>

            <form
              className="card"
              onSubmit={handleSubmit}
              style={{ background: "rgb(37,37,37)" }}
            >
              <label className="form-label mb-2" htmlFor="email">
                Email{" "}
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
                <div className="iconpadding">
                  <EmailIcon style={{ color: "white" }} />
                </div>
              </div>
              <label className="form-label mb-2" htmlFor="password">
                Password
              </label>
              <div className="icons">
                {" "}
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
                <div className="iconpadding">
                  <LockIcon style={{ color: "white" }} />
                </div>
              </div>

              <button
                className="btn btn-primary mb-2"
                type="submit"
                style={{ marginTop: "1rem" }}
              >
                SIGN UP
              </button>
            </form>
          </div>
          <strong>{errormsg}</strong>
          <h5 className="mb-2">Already have an account?</h5>
          <button
            className="btn btn-primary mb-2"
            onClick={() => {
              history.push("/login");
            }}
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
