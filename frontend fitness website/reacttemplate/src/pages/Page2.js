import React from 'react';

function Page2(){
    return(
        <div>


              <div id="stars">
        <div className="container images4">
          <div className="row">
              {/* <!-- First Div --> */}
              <div className="col-md-6 mt-md-5">
                  <div>   
                      <img src="assets/images/Serives01.png" className="img-fluid" />
                  </div>
              </div>
    
              {/* <!-- Second Div --> */}
              <div className="col-md-6 mt-md-5">
                  <div>
                       <img src="assets/images/Box2.png" className="img-fluid" />
                      </div>
                  </div>
              </div>
          
         
          <div className="row mt-4">
             {/*  <!-- Third Div --> */}
              <div className="col-md-6 mb-md-5 special2">
                  <div>
                      <img src="assets/images/Box3.png" className="img-fluid" />
                  </div>
                  
                       
                  
              </div>
    
              {/* <!-- Fourth Div --> */}
              <div className="col-md-6 mb-md-5">
                  <div className="">
                       <img src="assets/images/Box4.png" className="img-fluid" />
                  </div>
              </div>
          </div>
      </div>
      </div>
    
     


        </div>
    )
}

export default Page2;