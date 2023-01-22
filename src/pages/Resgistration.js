import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import './Login.css';

function Registration() {

  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkpassword, setCheckPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  function handleSubmit(e) {
  e.preventDefault();

  // @TODO: Check if any entries are empty
  if (!fname || !lname || !email || !password || !checkpassword) {
    setError("Please fill out all fields.");
    return;
  }
  
  // If no empty fields, navigate back to login
  navigate("/login");
  }


  return (
    <div className="form-block">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <p>Fill in the fields to register for an account</p> 
        
        <div className="form-section">
          <input type="text" name="fname" placeholder="First Name" id="fname" onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="form-section">
          <input type="text" name="lname" placeholder="Last Name" id="lname" onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="form-section">
          <input type="text" name="email" placeholder="Email (name@domain.com)" id="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-section">
          <input type="password" name="password" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-section">
          <input type="password" name="check password" placeholder="Re-enter Password" id="checkpassword" onChange={(e) => setCheckPassword(e.target.value)} />
        </div>

        <div className="form-button">
          <input type="submit" value="Register" />
        </div>
        {/* Error Message */}
        {error !== "" ?
          <div className="error-msg"> {error} </div> : ""
        }
      </form>
    </div>
  );
}

export default Registration;