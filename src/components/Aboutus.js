import React from 'react'

const Aboutus = () => {

   return (
      <>
         <section className="banner smallban">
            <img src="../../assets/images/banner-3.jpg" alt />
            <div className="banner_caption">
               <aside>About Us</aside>
            </div>
         </section>
         <section className="comnpadding Get_connect">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-xxl-7 col-xl-7 col-lg-10">
                     <h1 className="comntitle">ABOUT THE COMPANY</h1>
                  </div>
               </div>
               <div className="row justify-content-center">
                  <div className="col-xxl-10 col-xl-10 col-lg-10">
                     <p>We could say that we are the best and the greatest on this planet, isn’t that why all the typical sales-pitch based product websites have the “About us” page? But we will refrain from going there and try to keep our pitch real simple:</p>
                  </div>
               </div>
            </div>
         </section>
         <section className="comnpadding offer">
            <div className="container">
               <div className="top_head">
                  <h2 className="comntitle">WHAT WE OFFER</h2>
               </div>
               <div className="row">
                  <div className="col-md-12">
                     <div className="offerbox">
                        <span>01</span>
                        <aside>We probably have the lowest cost, sold-once, web-generated insurance leads on the web.</aside>
                     </div>
                     <div className="offerbox">
                        <span>02</span>
                        <aside>We probably can provide you the best ROI due to our low cost.</aside>
                     </div>
                     <div className="offerbox">
                        <span>03</span>
                        <aside>We probably could be your one stop shop for all your insurance lead needs.</aside>
                     </div>
                     <div className="offerbox">
                        <span>04</span>
                        <aside>Do we guarantee that every call you make will be picked up? No, we don’t. But yes, we will have a very good contact rate</aside>
                     </div>
                     <div className="offerbox">
                        <span>05</span>
                        <aside>Do we guarantee that every call that is picked up will end up in a quote? No, we don’t. But yes, we can say that if you open your call correctly and pitch the right product at competitive prices, you have a great change to quote
                           every consumer you talk to.</aside>
                     </div>
                     <div className="offerbox">
                        <span>06</span>
                        <aside>Do we guarantee that every quote you make will end into a policy sale? Absolutely not, nobody can. As we all know, selling insurance can be like sowing seeds, some plants could bloom, some simply wont. All you can do is quote the
                           best product the most competitive pricing and keep doing that over and over again.</aside>
                     </div>
                     <div className="offerbox">
                        <span>07</span>
                        <aside>We can provide and assist you with all the tools you might need to be successful with online generated leads, after all it takes a different type of effort to close online leads.</aside>
                     </div>
                     <div className="offerbox">
                        <span>08</span>
                        <aside>Our online, self-serve system is easy to use, you can setup and fund your account yourself or call our sales team to help you setup your account today!</aside>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="comnpadding counter">
            <div className="container">
               <ul className="list-unstyled maincount">
                  <li className="countbox">
                     <aside>2347</aside>
                     <p>business insured</p>
                  </li>
                  <li className="countbox">
                     <aside>1473</aside>
                     <p>people saved</p>
                  </li>
                  <li className="countbox">
                     <aside>7450</aside>
                     <p>active clinets</p>
                  </li>
                  <li className="countbox">
                     <aside>3240</aside>
                     <p>happy clients</p>
                  </li>
               </ul>
            </div>
         </section>

         <section className="comnpadding begin">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-md-6">
                     <h3 className="comntitle">here's how to begin</h3>
                     <p className="subtitle">We just need to get some of your information and then we will contact you to make sure we are a good fit for you. There will be no pressure, contracts, or hidden fees - fill out this form to get started.</p>
                  </div>
                  <div className="col-md-6">
                     <form className="beginform">
                        <input type="text" className="form-control" placeholder="Full Name" />
                        <input type="tel" className="form-control" placeholder="Work Phone" />
                        <input type="email" className="form-control" placeholder="Work Email" />
                        <select className="form-select" aria-label="Default select example">
                           <option selected>select</option>
                           <option value={1}>auto insurance</option>
                           <option value={2}>health insurance</option>
                           <option value={3}>home insurance</option>
                           <option value={4}>life insurance</option>
                        </select>
                        <div className="text-center w-100">
                           <button type="submit" className="comnbtn">Get Started</button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </section>



      </>
   )
}

export default Aboutus