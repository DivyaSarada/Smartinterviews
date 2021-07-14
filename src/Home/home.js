import React from "react";
import "./home.css";
import logo from "./images/header_logo.png";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const logout = (e) => {
    window.localStorage.clear();
    history.push("/login");
  };
  return (
    <div className="home">
      <h1> Welcome to Smart Interviews</h1>
      <img src={logo} className="image"></img>
      <p>
        Learn and improve problem solving skills using any programming language
        of your choice. Apply concepts of Data Structures & Algorithms to devise
        optimal and efficient solutions. Get Directions. Browse Courses. View
        Testimonials. Sign Up Online. Prepare for Software Developer roles at
        top-notch product-based companies like Google, Amazon, Adobe and many
        more.
      </p>
      <button
        onClick={logout}
        className="btn btn-dark"
        style={{ fontSize: "2rem" }}
      >
        Log Out
      </button>
    </div>
  );
}
export default Home;
