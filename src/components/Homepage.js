import React from 'react';

const Homepage = () => {
   return (
      <>

         <section className="banner">
            <img src="../../assets/images/Banner-1.png" alt />
            <div className="banner_caption">
               <aside>Low-Cost Insurance Leads That Can Boost Your ROI</aside>
            </div>
         </section>

         <section className="smallform">
            <div className="container">
               <form>
                  <div className="forninput">
                     <div className="forntitle">
                        <aside>Lorem ipsum set amet</aside>
                     </div>
                     <input type="text" placeholder="Name" />
                     <input type="text" placeholder="Phone" />
                     <input type="text" placeholder="Email" />
                     <select>
                        <option>Select</option>
                        <option>Auto Insurance</option>
                        <option>Home Insurance</option>
                        <option>Health Insurance</option>
                        <option>Life Insurance</option>
                     </select>
                  </div>
                  <div className="fornbtn">
                     <button>START GETTING LEADS</button>
                  </div>
               </form>
            </div>
         </section>


         <section className="comnpadding Get_connect">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-xxl-7 col-xl-7 col-lg-10">
                     <span className="subtitle">Lorem ipsum set amet</span>
                     <h1 className="comntitle">GET CONNECTED TO HIGH INTENT CONSUMERS THAT ARE ACTIVELY SHOPPING FOR INSURANCE</h1>
                  </div>
               </div>
               <div className="row justify-content-center">
                  <div className="col-xxl-10 col-xl-10 col-lg-10">
                     <p>With our extensive network of online properties and bleeding edge marketing tools and techniques, we generate 1000s of insurance leads daily. Our leads are generated on our own websites and are never purchased from 3rd party aggregators
                        or outside vendors.</p>
                  </div>
               </div>
               <div className="row">
                  <div className="col-12">
                     <ul className="list-unstyled connectlist">
                        <li>
                           <div className="icondiv">
                              <img src="../../assets/images/icon-1.png" alt />
                           </div>
                           <span>HIGH VOLUME IN EVERY STATE</span>
                        </li>
                        <li>
                           <div className="icondiv">
                              <img src="../../assets/images/icon-2.png" alt />
                           </div>
                           <span>HIGH CONTACT RATIO</span>
                        </li>
                        <li>
                           <div className="icondiv">
                              <img src="../../assets/images/icon-3.png" alt />
                           </div>
                           <span>LOW PRICING</span>
                        </li>
                        <li>
                           <div className="icondiv">
                              <img src="../../assets/images/icon-4.png" alt />
                           </div>
                           <span>EASY RETURN POLICY</span>
                        </li>
                        <li>
                           <div className="icondiv">
                              <img src="../../assets/images/icon-5.png" alt />
                           </div>
                           <span>TCPA COMPLIANT</span>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </section>
         <section className="comnpadding Get_Started">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-md-6">
                     <h2 className="comntitle">Get Started Today!</h2>
                     <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo .</p>
                     <input type="text" placeholder="Email" />
                     <button className="comnbtn">GET LEADS NOW</button>
                  </div>
                  <div className="col-md-6 text-center">
                     <img src="../../assets/images/get-1.png" alt />
                  </div>
               </div>
            </div>
         </section>
         <section className="comnpadding top_lead">
            <div className="container">
               <div className="top_head">
                  <span className="subtitle">Lorem ipsum set amet</span>
                  <h2 className="comntitle">Our Top Leads Types</h2>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
               </div>
               <ul className="nav nav-tabs lead_tab" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                     <button className="nav-link active" id="auto-tab" data-bs-toggle="tab" data-bs-target="#auto" type="button" role="tab" aria-controls="auto" aria-selected="true">
                        <div className="tab_box">
                           <img src="../../assets/images/auto-insurance.svg" className="tab_2" alt />
                           <img src="../../assets/images/auto-insurance-1.svg" className="tab_1" alt />
                           <aside>Auto Insurance</aside>
                        </div>
                     </button>
                  </li>
                  <li className="nav-item" role="presentation">
                     <button className="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="false">
                        <div className="tab_box">
                           <img src="../../assets/images/home-insurance.svg" className="tab_1" alt />
                           <img src="../../assets/images/home-insurance-1.svg" className="tab_2" alt />
                           <aside>Home Insurance</aside>
                        </div>
                     </button>
                  </li>
                  <li className="nav-item" role="presentation">
                     <button className="nav-link" id="health-tab" data-bs-toggle="tab" data-bs-target="#health" type="button" role="tab" aria-controls="health" aria-selected="false">
                        <div className="tab_box">
                           <img src="../../assets/images/health-insurance.svg" className="tab_1" alt />
                           <img src="../../assets/images/health-insurance-1.svg" className="tab_2" alt />
                           <aside>Health Insurance</aside>
                        </div>
                     </button>
                  </li>
                  <li className="nav-item" role="presentation">
                     <button className="nav-link" id="life-tab" data-bs-toggle="tab" data-bs-target="#life" type="button" role="tab" aria-controls="life" aria-selected="false">
                        <div className="tab_box">
                           <img src="../../assets/images/life-insurance.svg" className="tab_1" alt />
                           <img src="../../assets/images/life-insurance-1.svg" className="tab_2" alt />
                           <aside>Life Insurance</aside>
                        </div>
                     </button>
                  </li>
               </ul>
               <div className="tab-content lead_content" id="myTabContent">
                  <div className="tab-pane fade show active" id="auto" role="tabpanel" aria-labelledby="auto-tab">
                     <div className="row align-items-center">
                        <div className="col-lg-6">
                           <div className="tab_left">
                              <img src="../../assets/images/auto-insurance-left.png" alt />
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="tab_right">
                              <aside>Auto Insurance</aside>
                              <p>We are the one of the premier insurance lead generation companies that has been in business for well over a decade now. We specialize in providing top quality leads with 100% conversion potential agents across the United
                                 States. Hence, if you are looking to grow your business, we are in a position to help you. Take advantage of our services for targeting consumers who have genuine interest in buying insurance policies. We also provide
                                 auto insurance leads to reach out to past customers and convert them. Also, it is believed that auto insurance internet leads can help you to achieve your sales target.</p>
                              <a href="#" className="comnbtn lead_btn">View More</a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                     <div className="row align-items-center">
                        <div className="col-lg-6">
                           <div className="tab_left">
                              <img src="../../assets/images/home-insurance-left.jpg" alt />
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="tab_right">
                              <aside>Home Insurance</aside>
                              <p>We are the one of the premier insurance lead generation companies that has been in business for well over a decade now. We specialize in providing top quality leads with 100% conversion potential agents across the United
                                 States. Hence, if you are looking to grow your business, we are in a position to help you. Take advantage of our services for targeting consumers who have genuine interest in buying insurance policies. We also provide
                                 auto insurance leads to reach out to past customers and convert them. Also, it is believed that auto insurance internet leads can help you to achieve your sales target.</p>
                              <a href="#" className="comnbtn lead_btn">View More</a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="tab-pane fade" id="health" role="tabpanel" aria-labelledby="health-tab">
                     <div className="row align-items-center">
                        <div className="col-lg-6">
                           <div className="tab_left">
                              <img src="../../assets/images/health-insurance-left.jpg" alt />
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="tab_right">
                              <aside>Health Insurance</aside>
                              <p>We are the one of the premier insurance lead generation companies that has been in business for well over a decade now. We specialize in providing top quality leads with 100% conversion potential agents across the United
                                 States. Hence, if you are looking to grow your business, we are in a position to help you. Take advantage of our services for targeting consumers who have genuine interest in buying insurance policies. We also provide
                                 auto insurance leads to reach out to past customers and convert them. Also, it is believed that auto insurance internet leads can help you to achieve your sales target.</p>
                              <a href="#" className="comnbtn lead_btn">View More</a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="tab-pane fade" id="life" role="tabpanel" aria-labelledby="life-tab">
                     <div className="row align-items-center">
                        <div className="col-lg-6">
                           <div className="tab_left">
                              <img src="../../assets/images/life-insurance-left.jpg" alt />
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="tab_right">
                              <aside>Life Insurance</aside>
                              <p>We are the one of the premier insurance lead generation companies that has been in business for well over a decade now. We specialize in providing top quality leads with 100% conversion potential agents across the United
                                 States. Hence, if you are looking to grow your business, we are in a position to help you. Take advantage of our services for targeting consumers who have genuine interest in buying insurance policies. We also provide
                                 auto insurance leads to reach out to past customers and convert them. Also, it is believed that auto insurance internet leads can help you to achieve your sales target.</p>
                              <a href="#" className="comnbtn lead_btn">View More</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="work">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-6 col-xxl-7">
                     <div className="work_detail">
                        <span className="subtitle">Lorem ipsum set amet</span>
                        <h3 className="comntitle">How Does It Work?</h3>
                        <ul className="style_1">
                           <li>Sign up online or talk to a sales rep and setup your account.</li>
                           <li>Load funds &amp; give you’re your delivery data &amp; lead assignment preferences. </li>
                           <li>Start receiving leads on your delivery date.</li>
                           <li>Start selling insurance!</li>
                        </ul>
                        <a href="#" className="comnbtn">START GETTING LEADS</a>
                     </div>
                  </div>
                  <div className="col-lg-6 col-xxl-5">
                     <div className="work_inner">
                        <a href="#"><img src="../../assets/images/work-img.png" alt /></a>
                        <ul className="style_2">
                           <li>Get Customer Details</li>
                           <li>Set The Appointment</li>
                           <li>Grow Your Business</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="comnpadding sales">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-3">
                     <div className="nav nav-pills  sale_tab" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button className="nav-link active" id="v-pills-one1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-one1" type="button" role="tab" aria-controls="v-pills-one1" aria-selected="true">Lorem ipsum</button>
                        <button className="nav-link" id="v-pills-two2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-two2" type="button" role="tab" aria-controls="v-pills-two2" aria-selected="false">Dolor Sit</button>
                        <button className="nav-link" id="v-pills-three3-tab" data-bs-toggle="pill" data-bs-target="#v-pills-three3" type="button" role="tab" aria-controls="v-pills-three3" aria-selected="false">Sadipscing</button>
                        <button className="nav-link" id="v-pills-four4-tab" data-bs-toggle="pill" data-bs-target="#v-pills-four4" type="button" role="tab" aria-controls="v-pills-four4" aria-selected="false">Aliquyam</button>
                     </div>
                  </div>
                  <div className="col-lg-9">
                     <div className="tab-content sale_content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-one1" role="tabpanel" aria-labelledby="v-pills-one1-tab">
                           <div className="row align-items-center">
                              <div className="col-lg-7">
                                 <div className="sale_left">
                                    <span className="subtitle">Lorem ipsum set amet</span>
                                    <h4 className="comntitle">Increase your sales pipeline today!</h4>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo .</p>
                                    <a href="#" className="sale_btn comnbtn">GET TRIAL NOW</a>
                                 </div>
                              </div>
                              <div className="col-lg-5">
                                 <div className="sale_right text-center">
                                    <img src="../../assets/images/sale-img.png" alt />
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-two2" role="tabpanel" aria-labelledby="v-pills-two2-tab">
                           <div className="row align-items-center">
                              <div className="col-lg-7">
                                 <div className="sale_left">
                                    <span className="subtitle">Lorem ipsum set amet</span>
                                    <h4 className="comntitle">Increase your sales pipeline today!</h4>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo .</p>
                                    <a href="#" className="sale_btn comnbtn">GET TRIAL NOW</a>
                                 </div>
                              </div>
                              <div className="col-lg-5">
                                 <div className="sale_right text-center">
                                    <img src="../../assets/images/sale-img.png" alt />
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-three3" role="tabpanel" aria-labelledby="v-pills-three3-tab">
                           <div className="row align-items-center">
                              <div className="col-lg-7">
                                 <div className="sale_left">
                                    <span className="subtitle">Lorem ipsum set amet</span>
                                    <h4 className="comntitle">Increase your sales pipeline today!</h4>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo .</p>
                                    <a href="#" className="sale_btn comnbtn">GET TRIAL NOW</a>
                                 </div>
                              </div>
                              <div className="col-lg-5">
                                 <div className="sale_right text-center">
                                    <img src="../../assets/images/sale-img.png" alt />
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-four4" role="tabpanel" aria-labelledby="v-pills-four4-tab">
                           <div className="row align-items-center">
                              <div className="col-lg-7">
                                 <div className="sale_left">
                                    <span className="subtitle">Lorem ipsum set amet</span>
                                    <h4 className="comntitle">Increase your sales pipeline today!</h4>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo .</p>
                                    <a href="#" className="sale_btn comnbtn">GET TRIAL NOW</a>
                                 </div>
                              </div>
                              <div className="col-lg-5">
                                 <div className="sale_right text-center">
                                    <img src="../../assets/images/sale-img.png" alt />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

      </>
   )
}

export default Homepage