import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import './Login.css';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // @TODO: Check if email or password is empty
    
    // If email and password is correct, navigate to dashboard
    navigate("/dashboard");
  }
 
  return (
    <div className="form">
      {/* <img className="logo" src={logo} alt="jade_logo" /> */}
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <p>Sign into your account</p> 
        
        <div className="form-section">
          <input type="text" name="email" placeholder="Email (name@domain.com)" id="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-section">
          <input type="password" name="password" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)} />
        </div>

        <p className="low-vis-text">
          Don't have an account? {" "}
          <Link className="links" to="/registration" >
            Register
          </Link>
        </p>

        <div className="form-button">
          <input type="submit" value="Sign In" />
        </div>
        {/* Error Message */}
        {error !== "" ?
          <div className="error-msg"> {error} </div> : ""
        }
      </form>
    </div>
  );
}

export default Login;