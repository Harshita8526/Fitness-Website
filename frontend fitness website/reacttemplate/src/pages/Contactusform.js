import React, { useRef } from 'react';
import NavBar from "./NavBar";
import axios from 'axios';

const Contactusform = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const setvalue=()=>{
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;
    return { Name:name,Email:email,Message:message}
  }
  const handleSubmit =async (e) => {
    e.preventDefault();
   const value= setvalue();

   
   
    const response=await axios.post("http://localhost:8000/contactus/add",{
    Name:nameRef.current.value,Email:emailRef.current.value,Message:messageRef.current.value
    })
    console.log(response)

    
    nameRef.current.value = '';
    emailRef.current.value = '';
    messageRef.current.value = '';
  };

  return (
    <div> 
      <NavBar />
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={nameRef} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailRef} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Comments</label>
          <textarea id="message" ref={messageRef} rows="4" required></textarea>
        </div>
        <button type="submit" className="submit-button-contact">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Contactusform;

