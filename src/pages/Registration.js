import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import './Registration.css';

function Registration() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
    e.preventDefault();

    // @TODO: Check if any entries are empty
    
    // If no empty fields, navigate back to login
    navigate("/login");
    }


  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <p>Fill in the fields to successfully register</p> 
        
        <div className="form-section">
          <input type="text" name="email" placeholder="Email (name@domain.com)" id="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-section">
          <input type="password" name="password" placeholder="Password" id="email" onChange={(e) => setPassword(e.target.value)} />
        </div>

        <p className="low-vis-text">
          Don't have an account? {" "}
          <Link className="links" to="/registration" >
            Register
          </Link>
        </p>

        <div className="login-button">
          <input type="submit" value="Sign In" />
        </div>
      </form>
    </div>
  );
}

export default Registration;