import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      {/* navbar start */}
      <div className="container-fluid bg">
        <header className="container-fluid nav_style mx-auto">
          <div className="row">
            <div className="col-md-10 col-11 mx-auto ">
              <nav className="navbar navbar-expand-lg navbar-dark ">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">
                    <img src="assets/images/Logo.png" className="image-fluid" />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link to="/" className="nav-link" href="#">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/company"
                          offset={-100}
                          className="nav-link"
                          href="#"
                        >
                          Company
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/stars"
                          offset={30}
                          className="nav-link"
                          href="#"
                        >
                          Sports Stars
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/pro"
                          offset={-24}
                          className="nav-link"
                          href="#"
                        >
                          Products
                        </Link>
                      </li>
                      <li className="nav-item">
                      
                        <Link to="/contactus" offset={-100} className="nav-link">Contact</Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/login"
                          offset={-100}
                          className="nav-link"
                          href="#"
                        >
                         Sign In
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
               
           

              <div className="line">
                <img src="assets/images/dot_line.png" />
              </div>
            </div>
          </div>
        </header>

        {/*<!--navbar end-->  */}

        {/*  <!--main header part start--> */}
        <div id="home_page">
          <div className="container-fluid">
            <div className="row">
              <div className="col-11 col-md-10 mx-auto">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <p className="header_text">
                      BOOST
                      <br className="power" />
                      YOUR POWER
                      <br />
                      NOW
                    </p>
                    <p className="header_text2">
                      Welcome to our wellness website, where we offer expert
                      guidance on fitness, nutrition, and overall well-being.
                      Join us on the path to a healthier, happier you.
                    </p>
                   <Link to="/click"> <div className="click">
                       Click Here
                      <img src=" assets/images/click_rect.png" />
                    </div>
                    </Link>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="float-end cycle">
                      <figure>
                        <img
                          src="assets/images/race-img1.png"
                          className="image-fluid"
                        />
                      </figure>
                      <div className="cycle2">
                        <img
                          src="assets/images/race-img1 copy.png"
                          className="image-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          
            
          </div>
        </div>
        {/* <!--main header part end--> */}

        {/*  <!--Page 2 start--> */}

        <div id="stars">
          <div className="container images4">
            <div className="row">
             
              <div className="col-md-6 mt-md-5">
                <div>
                  <img src="assets/images/s1_box.png" className="img-fluid" />
                </div>
              </div>

             
              <div className="col-md-6 mt-md-5">
                <div>
                  <img src="assets/images/s2_box.png" className="img-fluid" />
                </div>
              </div>
            </div>

            <div className="row mt-4">
              
              <div className="col-md-6 mb-md-5 special2">
                <div>
                  <img src="assets/images/s3_box.png" className="img-fluid" />
                </div>
              </div>

             
              <div className="col-md-6 mb-md-5">
                <div className="">
                  <img src="assets/images/s4_box.png" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  <!--Page 2 start--> */}

        {/*  <!--Page 3 start--> */}
        <div id="pro">
          <div className="container">
            <div className="row">
              <div className="content_page3">EXPLORE THE NEWEST PRODUCTS</div>
              <div className="content_page3_s">
                Discover a wide selection of top-quality fitness products,
                carefully curated to help you reach your health and wellness
                goals. We've got everything you need to enhance your fitness
                journey.
              </div>
            </div>

            <div className="row some-element ">
              <div className=" col-md-4 mt-md-5">
                <img src="assets/images/Proudoct1.png" />
              </div>
              <div className="col-md-4 mt-md-5">
                <img src="assets/images/Product2.png" />
              </div>
              <div className=" col-md-4 mt-md-5">
                <img src="assets/images/Product3.png" />
              </div>
            </div>
          </div>
        </div>

        {/* <!--Page 3 end--> */}

        {/*  <!--Page 4 start--> */}
        <div id="Company">
          <div className="container">
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
                    Are you ready to take your fitness to the next level?
                    Whether you're aiming to build strength or improve overall
                    well-being, we provide the guidance to help you reach your
                    peak performance.
                  </p>

                <div class="know_div1"><Link to="/click">     <button id="button">Know </button></Link></div>
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

        {/*   <!-- style="width: 600px; height: 200px;" to change image heigth and width place it after img-fluid-->
         */}
        {/*  <!--Page 4 end--> */}

        {/*  <!--Page 5 start--> */}

        <div className="container">
          <div className="row custom-margin-top2">
            <div className="col-md-6 img_girl2">
              <div className="image_girl2">
                <img
                  src="assets/images/girl_img2.png"
                  alt="Image"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="inner_div2 p-3">
                <h2>
                  BRING YOUR
                  <br /> PERFORMANCE <br />
                  TO HIGHER LEVEL
                </h2>
                <p>
                  Whether you're aiming to build strength or improve overall
                  well-being, we provide the guidance to help you reach your
                  peak performance.
                </p>

               
                <div class="know_div"><Link to="/sign_up">     <button id="button2">Know </button></Link></div>
              </div>
            </div>
          </div>
        </div>
        {/*   <!--Page 5 end--> */}

        {/*    <!--Page 6 start--> */}
        <div id="buy">
          <div className="container-fluid">
            <div className="row sign_email">
              <div className="col-md-6 sign">
                <h4>
                  Sign up to our newsletter
                  <br />
                  <div className="off"> get a 10% off voucher</div>
                </h4>
              </div>
              <div className="col-md-6 email ">
              <Link to ="/login" className="footer_signup"> <h3>Enter Your Email &nbsp;&nbsp; Submit</h3></Link>
               
              </div>
            </div>
          </div>
        </div>

        {/*  <!--Page 6 end--> */}

        {/* <!--Page 7 start--> */}

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="logo_down">
                <img src="assets/images/Logo.png" />
                <br />
                <p className="page7_para">
                  Magento provides different methods payment methods in order to
                  allow you to accept payments using different payement
                  processors like Pay... Magento provides different methods
                  payment nts using different payement processors like Pay...
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="small_box">
                <div className="support">
                  <h3 className="support_heading">Support</h3>
                  <ul>
                    <li class="links_tag"><a href="https://www.facebook.com/"> Facebook</a></li>
                    <li class="links_tag"><a href="https://twitter.com/?lang=en"> Twitter</a></li>
                    <li class="links_tag"><a href="https://www.google.co.in/">Google+</a></li>
                    <li class="links_tag"><a href="https://in.pinterest.com/">Pinterest</a></li>
                    {/* <li class="links_tag"><a href="https://www.linkedin.com/feed/"> LinkedIn</a></li> */}
                  </ul>
                </div>

                <div className="acc">
                  <h3 className="acc_heading">Account</h3>
                  <ul>
                    <li><Link to ="/sign_up" className="footer_signup">Sign Up</Link></li>
                    <li><Link to ="/login" className="footer_signup"> Sign In</Link></li>
                    <li><Link to ="/pro" className="footer_signup">Wishlist</Link></li>
                    <li><Link to ="/login" className="footer_signup">Check out</Link></li>
                    {/* <li><Link to ="/sign_up" className="footer_signup">Track My Order</Link></li> */}
                  </ul>
                </div>

                <div className="cat1">
                  <h3 className="cat1_heading">Categories</h3>
                  <ul>
                  <li><Link to ="/stars" className="footer_signup">Men</Link></li>
                  <li><Link to ="/company" className="footer_signup">Women</Link></li>
                  <li><Link to ="/pro" className="footer_signup">Accessories</Link></li>
                  <li><Link to ="/pro" className="footer_signup">Bags & shoes</Link></li>
                  {/* <li><Link to ="/pro" className="footer_signup">Lookbooks</Link></li> */}
                  </ul>
                </div>

                <div className="cat2">
                  <h3 className="cat2_heading">Categories</h3>
                  <ul>
                  <li><Link to ="/stars" className="footer_signup">Men</Link></li>
                  <li><Link to ="/company" className="footer_signup">Women</Link></li>
                  <li><Link to ="/pro" className="footer_signup">Accessories</Link></li>
                  <li><Link to ="/pro" className="footer_signup">Bags & shoes</Link></li>
                  {/* <li><Link to ="/sign_up" className="footer_signup">Lookbooks</Link></li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*   <!-- div foot container fludi end here-->
        <!--Page 7 end-->
    <!--Grey Box start--> */}

        <div className="row">
          <div className="col-md-12 grey_box">
            Developed by Harshita Kashyap
          </div>
        </div>
        {/*  <!--Grey Box End--> */}

        {/* <!-- Optional JavaScript; choose one of the two! --> */}

        {/*  <!-- Option 1: Bootstrap Bundle with Popper --> */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"
        ></script>

        {/*  <!-- Option 2: Separate Popper and Bootstrap JS -->
        <!--
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
        --> */}
      </div>

     
    </div>
  );
}

export default Header;
