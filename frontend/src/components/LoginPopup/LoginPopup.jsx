import React, { useState } from "react";
import { assets } from "../../assets/assets";
import './LoginPopup.css'
const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => {
              setShowLogin(false);
            }}
            src={assets.cross_icon}
            alt=""
          />
        </div>

        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="your name" required />
          )}
          <input type="email" placeholder="your email" required />
          <input type="password" placeholder="your password" required />
        </div>
        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing i agreee with terms and condition</p>
        </div>
        {
          currState==="Login"? <p>
          creatr a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span>
        </p>: <p>
          already have acocunt <span onClick={()=>setCurrState("Login")}>Login here</span>
        </p>
        }
       
       
      </form>
    </div>
  );
};

export default LoginPopup;
