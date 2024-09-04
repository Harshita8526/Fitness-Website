import React from "react";
import Header from "./pages/Header";

import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
//import Contactusform from './pages/Contactusform';
// import { Link } from 'react-router-dom';

import "./App.css";
import Contactusform from "./pages/Contactusform";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Sports from "./pages/Sports";
import  Products  from "./pages/Products";
import  Login  from "./pages/Login";
import Login2 from "./pages/Login2"
import Clickher from "./pages/Clickher";

function App() {
  return (
    //  <div className="App">
    <>
      <Main>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="company" element={<Company />} />
          <Route path="stars" element={<Sports />} />
          <Route path="pro" element={<Products />} />
          <Route path="login" element={<Login />} />
          <Route path="/sign_up" element={<Login2 />} />
          <Route path="contactus" element={<Contactusform />} />
          <Route path="/click" element={<Clickher />} />
        </Routes>
      </Main>

      {/* <Routes> */}
      {/* <Route path='/' element={<Home />} /> */}
      {/* <Route path='contactusform' element={<Contactusform />} />
     </Routes> */}
      {/* </div> */}
    </>
  );
}

export default App;
