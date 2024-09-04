// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// //import Logo from "../images/Logo.png";
// function register() {
//   return (
//     <section id="register">
//       <nav className="navbar navbar-expand-lg bg-light">
//         <div className="container-fluid">
//           <div className="logo navbar-brand">
//             {/* <img src={Logo} className="img-fluid" alt="Logo" /> */}
//           </div>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link to="/" className="nav-link active" aria-current="page">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/register" className="nav-link active">
//                   About Us
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/register" className="nav-link active">
//                   Register Now
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/contact" className="nav-link">
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <div className="container-fluid bg-light py-3">
//         <header className="text-center header2">
//           <h1>SIGN IN!</h1>
//         </header>
//       </div>
//       <section className="container  w-50 text-light p-2">
//         <form className="row g-3 p-3 form">
//           <div className="col-md-4">
//             <label for="validationDefault01" className="form-label">
//               First name
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="validationDefault01"
//               required
//             />
//           </div>
//           <div className="col-md-4">
//             <label for="validationDefault02" className="form-label">
//               Last name
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="validationDefault02"
//               required
//             />
//           </div>
//           <div className="col-md-4">
//             <label for="validationDefaultUsername" className="form-label">
//               Username
//             </label>
//             <div className="input-group">
//               <span className="input-group-text" id="inputGroupPrepend2">
//                 @
//               </span>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="validationDefaultUsername"
//                 aria-describedby="inputGroupPrepend2"
//                 required
//               />
//             </div>
//           </div>
//           <div className="col-md-6">
//             <label for="inputEmail4" className="form-label">
//               Email
//             </label>
//             <input type="email" className="form-control" id="inputEmail4" />
//           </div>
//           <div className="col-md-6">
//             <label for="inputPassword4" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               className="form-control"
//               id="inputPassword4"
//             />
//           </div>
//           <div className="col-12">
//             <label for="inputAddress" className="form-label">
//               Address
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="inputAddress"
//               placeholder="1234 Main St"
//             />
//           </div>
//           <div className="col-12">
//             <label for="inputAddress2" className="form-label">
//               Address 2
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="inputAddress2"
//               placeholder="Apartment, studio, or floor"
//             />
//           </div>
//           <div className="col-md-6">
//             <label for="inputCity" className="form-label">
//               City
//             </label>
//             <input type="text" className="form-control" id="inputCity" />
//           </div>
//           <div className="col-md-4">
//             <label for="inputState" className="form-label">
//               State
//             </label>
//             <select id="inputState" className="form-select">
//               <option selected>Choose...</option>
//               <option>...</option>
//             </select>
//           </div>
//           <div className="col-md-2">
//             <label for="inputZip" className="form-label">
//               Zip
//             </label>
//             <input type="text" className="form-control" id="inputZip" />
//           </div>
//           <div className="col-12">
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="checkbox"
//                 id="gridCheck"
//               />
//               <label className="form-check-label" for="gridCheck">
//                 Check me out
//               </label>
//             </div>
//           </div>
//           <div className="col-12">
//             <button type="submit" className="btn btn-primary">
//               Sign in
//             </button>
//           </div>
//         </form>
//       </section>
//     </section>
//   );
// }
// export default register;
