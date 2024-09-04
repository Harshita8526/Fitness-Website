import React, { useState } from 'react';
import axios from 'axios';
import './SignIn.css';

import NavBar from "./NavBar";
import { Link, useNavigate } from 'react-router-dom';

function SignUpForm() {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSignUp = () => {
    axios.post("http://localhost:8000/login", formData)
      .then((response) => {
        if (response.status === 200) {
          const masg = "Login successful"
          let d = response.data;
          console.log(d.msg);
          console.log(masg);
          if (d.msg === masg) {
            window.alert('Login successful');
            navigate('/'); 
          } else {
            window.alert('Login Unsuccessful');
          }
        }
      });
  };

  return (
    <>
    <NavBar />
    <div className=" form-container margin">
      <h1 className="text-center">Login Page</h1>
      <div className="signup-row">
        <div className="signup-col signup-col-left text-center">
          <div className="signup-form-group">
            <label htmlFor="email">Enter Email</label>
            <input
              type="email"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="signup-form-control"
              id="email"
              name="email"
              autoComplete="off"
            />
          </div>
          <div className="signup-form-group">
            <label htmlFor="password">Enter Password</label>
            <input
              type="password"
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="signup-form-control"
              id="password"
              name="password"
              autoComplete="off"
            />
          </div>
          <div className="signup-form-group">
            <button
              className="signup-btn signup-btn-primary mx-auto mt-3"
              type="button"
              onClick={handleSignUp}
            >
              Sign In
            </button>
            <p className="message">
               Not registered?<Link to="/sign_up">Create an account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default SignUpForm;
