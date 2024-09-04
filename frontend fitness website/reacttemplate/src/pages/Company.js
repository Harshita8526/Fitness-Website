import React from "react";
import NavBar from "./NavBar";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Company = () => {

const [company,setcompany]=useState([])
const [click,setclick]=useState(false)
  useEffect(()=>{
    const getcompany=async()=>{
      const response = await axios.get("http://localhost:8000/about");
      console.log(response);
      setcompany(response.data)
    }
    getcompany()
  },[])

 
  return (
    <div id="Company">
      <NavBar />
      <div className="container company_separate">
        <div className="row custom-margin-top">
          <div className="col-md-6 ">
            <div className="inner_div p-3">
              <div className="page4_bring">
                <h2>
                  BRING YOUR
                  <br /> PERFORMANCE <br />
                  TO HIGHER LEVEL
                </h2>
              </div>
              <p>
                Are you ready to take your fitness to the next level? Whether
                you're aiming to build strength or improve overall well-being,
                we provide the guidance to help you reach your peak performance.
              </p>

            
                {
                 click?<div>
                  {company.map((e)=>{
                    return <div><p>{e.about_title}</p></div>
                  })}
                 </div>:<div></div>
              }

              <div class="know_div1 ">   <button id ="button" onClick={()=>{setclick(!click)}} >{click?'Showless':'Know'} </button></div> 
             
            </div>
          </div>

          <div className="col-md-6 page4_girl1">
            <div className="">
              <img
                src="assets/images/girl_img1.png"
                alt="Image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Company;





