import React, { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Header = () => {

   const { pathname } = useLocation();
   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);

   return (
      <>

         <header>
            <div className="headtop">
               <div className="container">
                  <div className="row">
                     <div className="col-12">
                        <div className="topraw">
                           <div className="topleft">
                              <a href="tel:+1(062)109-9222"> <i className="fa fa-phone" /> +1 (062) 109-9222</a>
                              <a href="mailto:sales@insuranceleadsstore.com"> <i className="fa fa-envelope" /> sales@insuranceleadsstore.com</a>
                           </div>
                           <div className="topright">
                              <a href className="fa fa-facebook" />
                              <a href className="fa fa-twitter" />
                              <a href className="fa fa-linkedin" />
                              <a href className="fa fa-instagram" />
                              <a href className="fa fa-youtube-play" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light">
               <div className="container">
                  <NavLink to="/" className="navbar-brand" href="#">
                     <img src="../../assets/images/logo.png" alt />
                  </NavLink>
                  <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                           <NavLink to="/" className="nav-link" aria-current="page" href="#">HOME</NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink to="/Aboutus" className="nav-link">ABOUT US</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                              LEAD TYPES
                           </a>
                           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <li><NavLink to="/Insurances" className="dropdown-item" href="#">Auto Insurance</NavLink></li>
                              <li><a className="dropdown-item" href="#">Home Insurance</a></li>
                              <li><a className="dropdown-item" href="#">Health Insurance</a></li>
                              <li><a className="dropdown-item" href="#">Life Insurance</a></li>
                           </ul>
                        </li>
                        <li className="nav-item">
                           <NavLink to="/Pricing" className="nav-link" href>PRICING</NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink to="/FAQ" className="nav-link" href>FAQ</NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink to="/Contact" className="nav-link" href>CONTACT US</NavLink>
                        </li>
                        <li className="nav-item login">
                           <a className="nav-link" href>LOGIN</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </nav>
         </header>


      </>
   )
}

export default Header