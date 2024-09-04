import React, { useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './SignUp.css';

const Login2 = () => {
  let navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    console.log('Submitting signup request with:', name, email, password);

    try {
      const response = await axios.post(
        'http://localhost:8000/signup_submit',
        {
          name: name,
          email: email,
          pass: password
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          validateStatus: function (status) {
            return status === 200 || status === 401;
          },
        }
      );

      if (response.status === 200) {
        alert(`Welcome, you are now signed up as ${name}`);
        navigate('/');
      } else {
        alert(`Signup failed: ${response.data.message}`);
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="form-container">
        <form onSubmit={handleSignup}>
          <div className="sign-up-form">Sign Up</div>
          <div className="form-group">
            <label htmlFor="username">Full Name</label>
            <input
              type="text"
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
              name="name"
              id="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              id="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
              name="pass"
              id="pass"
            />
          </div>
          <div>
            <input className="submit-btn" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Login2;
