import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';

const AgentsOwl = {
   loop: true,
   margin: 20, // Margin-right = 20px
   nav: true,
   dots: false,
   autoplay: false,
   autoplaySpeed: 1000,
   smartSpeed: 1000,
   navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
   ],
   responsive: {
      0: {
         items: 1
      },
      600: {
         items: 1
      },
      768: {
         items: 2
      },
      1024: {
         items: 3
      },
      1367: {
         items: 3
      }
   }
}

const ClientOwl = {
   loop: true,
   margin: 60, // Margin-right = 20px
   dots: false,
   autoplay: false,
   autoplaySpeed: 1000,
   smartSpeed: 1000,
   nav: true,
   navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
   ],
   responsive: {
      0: {
         items: 1,

      },
      600: {
         items: 2,
      },
      768: {
         items: 4,
      },
      1025: {
         items: 4,
      },
      1366: {
         items: 6,
         touchDrag: false,
         pullDrag: false,
         mouseDrag: false,
      }
   }
}

const Footer = () => {

   const { pathname } = useLocation();
   return (
      <>

         {(pathname !== "/Aboutus" && pathname !== "/Pricing" && pathname !== "/FAQ" && pathname !== "/Contact") &&
            <section className="business">
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-lg-6">
                        <h4 className="comntitle">See how we can help you Grow Your Business</h4>
                        <p className="subtitle">Enter your website to get started now</p>
                        <input type="text" placeholder="http://" />
                        <button className="comnbtn">NEXT STEP</button>
                     </div>
                     <div className="col-lg-6">
                        <div className="text-center">
                           <img src="../../assets/images/business-img.png" alt />
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         }

         {(pathname !== "/Contact") &&
            <section className="comnpadding agent">
               <div className="top_img"><img src="../../assets/images/agent-pat-top.png" alt /></div>
               <div className="bottom_img"><img src="../../assets/images/agent-pat-bottom.png" alt /></div>
               <div className="container position-relative">
                  <div className="agent_head">
                     <span className="subtitle">Lorem ipsum set amet</span>
                     <h5 className="comntitle">Hear It From Our Satisfied Insurance Agents</h5>
                  </div>
                  <OwlCarousel id='agent' {...AgentsOwl}>

                     <div className="item">
                        <div className=" agent_box">
                           <div className="top">
                              <img src="../../assets/images/agent-1.png" alt />
                              <div className="caption">
                                 <aside>John Doe</aside>
                                 <p>Lorem ipsum</p>
                              </div>
                           </div>
                           <hr />
                           <div className="bottom">
                              <div className="star">
                                 <i className="fa fa-star" />
                                 <i className="fa fa-star" />
                                 <i className="fa fa-star" />
                                 <i className="fa fa-star" />
                                 <i className="fa fa-star-half-o" />
                              </div>
                              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos</p>
                           </div>
                        </div>
                     </div>

                     <div className="item">
                        <div className=" agent_box">
                           <div className="top">
                              <img src="../../assets/images/agent-2.png" alt />
                              <div className="caption">
                                 <aside>John Doe</aside>
                                 <p>Lorem ipsum</p>
                              </div>
                           </div>
                           <hr />
                           <div className="bottom">
                              <div className="star">
                                 <i className="fa fa-star" />
                                 <i className="fa fa-star" />
                                 <i className="fa fa-star" />
                                 <i className="fa fa-star" />
                                 <i className="fa fa-star-half-o" />
                              </div>
                              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos</p>
                           </div>
                        </div>
                     </div>
                     <div className="item">
                        <div className=" agent_box">
                           <div className="top">
                              <img src="../../assets/images/agent-3.png" alt />
                              <div className="caption">
                                 <aside>John Doe</aside>
                                 <p>Lorem ipsum</p>
                              </div>
                           </div>
                           <hr />
                           <div className="bottom">
                              <div className="star">
                                 <i className="fa fa-star" />
                                 <i className="fa fa-star" />
                                 <i className="fa fa-star" />
                                 <i className="fa fa-star" />
                                 <i className="fa fa-star-half-o" />
                              </div>
                              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos</p>
                           </div>
                        </div>
                     </div>
                     <div className="item">
                        <div className=" agent_box">
                           <div className="top">
                              <img src="../../assets/images/agent-1.png" alt />
                              <div className="caption">
                                 <aside>John Doe</aside>
                                 <p>Lorem ipsum</p>
                              </div>
                           </div>
                           <hr />
                           <div className="bottom">
                              <div className="star">
                                 <i className="fa fa-star" />
                                 <i className="fa fa-star" />
                                 <i className="fa fa-star" />
                                 <i className="fa fa-star" />
                                 <i className="fa fa-star-half-o" />
                              </div>
                              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos</p>
                           </div>
                        </div>
                     </div>
                     <div className="item">
                        <div className=" agent_box">
                           <div className="top">
                              <img src="../../assets/images/agent-2.png" alt />
                              <div className="caption">
                                 <aside>John Doe</aside>
                                 <p>Lorem ipsum</p>
                              </div>
                           </div>
                           <hr />
                           <div className="bottom">
                              <div className="star">
                                 <i className="fa fa-star" />
                                 <i className="fa fa-star" />
                                 <i className="fa fa-star" />
                                 <i className="fa fa-star" />
                                 <i className="fa fa-star-half-o" />
                              </div>
                              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos</p>
                           </div>
                        </div>
                     </div>
                     <div className="item">
                        <div className=" agent_box">
                           <div className="top">
                              <img src="../../assets/images/agent-3.png" alt />
                              <div className="caption">
                                 <aside>John Doe</aside>
                                 <p>Lorem ipsum</p>
                              </div>
                           </div>
                           <hr />
                           <div className="bottom">
                              <div className="star">
                                 <i className="fa fa-star" />
                                 <i className="fa fa-star" />
                                 <i className="fa fa-star" />
                                 <i className="fa fa-star" />
                                 <i className="fa fa-star-half-o" />
                              </div>
                              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos</p>
                           </div>
                        </div>
                     </div>

                  </OwlCarousel>
               </div>
            </section>
         }


         {(pathname !== "/Contact") &&
            <section className="client">
               <div className="container">

                  <OwlCarousel id='client' {...ClientOwl}>

                     <div className="item">
                        <img src="../../assets/images/client-1.png" alt />
                     </div>
                     <div className="item">
                        <img src="../../assets/images/client-2.png" alt />
                     </div>
                     <div className="item">
                        <img src="../../assets/images/client-3.svg" alt />
                     </div>
                     <div className="item">
                        <img src="../../assets/images/client-4.png" alt />
                     </div>
                     <div className="item">
                        <img src="../../assets/images/client-5.png" alt />
                     </div>
                     <div className="item">
                        <img src="../../assets/images/client-6.png" alt />
                     </div>

                  </OwlCarousel>
               </div>
            </section>
         }

         {(pathname !== "/Contact") &&
            <section className="know">
               <div className="container">
                  <div className="know_inner">
                     <div className="inner_left">
                        <img src="../../assets/images/bell-solid-badged.png" alt />
                        <div className="content">
                           <h5 className="comntitle">Be the first one to know</h5>
                           <span className="subtitle">Get email alerts when leads that match your requirements</span>
                        </div>
                     </div>
                     <a href="#" className="know_btn">GET ALERTS NOW !</a>
                  </div>
               </div>
            </section>
         }

         <footer>
            <div className="container">
               <div className="row">
                  <div className="col-lg-3 col-md-6">
                     <h6 className="comntitle">QUICK LINKS</h6>
                     <ul>
                        <li><NavLink to="/" href="#">Home</NavLink></li>
                        <li><NavLink to="/Aboutus" href="#">About Us</NavLink></li>
                        <li><NavLink to="/Pricing" href="#">Pricing</NavLink></li>
                        <li><NavLink to="/Contact" href="#">Contact Us</NavLink></li>
                        <li><NavLink to="" href="#">Terms of sale</NavLink></li>
                     </ul>
                  </div>
                  <div className="col-lg-3 col-md-6">
                     <h6 className="comntitle">LEAD TYPES</h6>
                     <ul>
                        <li><NavLink to="/Insurances" href="#">Auto Insurance Leads</NavLink></li>
                        <li><NavLink to="/Insurances" href="#">Home Insurance Leads</NavLink></li>
                        <li><NavLink to="/Insurances" href="#">Health Insurance Leads</NavLink></li>
                        <li><NavLink to="/Insurances" href="#">Life Insurance Leads</NavLink></li>
                     </ul>
                  </div>
                  <div className="col-lg-3 col-md-6">
                     <h6 className="comntitle">CONTACT US</h6>
                     <ul className="contact">
                        <li><i className="fa fa-map-marker" /> 10 Four Seasons Place 10th Floor, Toronto Ontario M9B 6H7 Canada</li>
                        <li><a href="mailto:sales@insuranceleadsstore.com"><i className="fa fa-envelope" /> sales@insuranceleadsstore.com</a></li>
                     </ul>
                  </div>
                  <div className="col-lg-3 col-md-6 text-lg-center">
                     <img src="../../assets/images/logo.png" className="foot_logo" alt />
                     <div className="social">
                        <ul>
                           <li><a href="#"><i className="fa fa-facebook" /></a></li>
                           <li><a href="#"><i className="fa fa-twitter" /></a></li>
                           <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                           <li><a href="#"><i className="fa fa-instagram" /></a></li>
                           <li><a href="#"><i className="fa fa-youtube-play" /></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
               <hr />
               <div className="footer-bottom">
                  <p>All rights reserved © 2021 By Insuranceleadsstore.com</p>
               </div>
            </div>
         </footer>


      </>
   )
}

export default Footer