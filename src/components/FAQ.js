import React from 'react'

const FAQ = () => {
   return (
      <>
         <section className="banner smallban">
            <img src="../../assets/images/about.jpg" alt />
            <div className="banner_caption">
               <aside>FAQ's</aside>
            </div>
         </section>


         <section className="comnpadding offer">
            <div className="container">
               <div className="top_head">
                  <h2 className="comntitle">FREQUENTLY ASKED QUESTIONS</h2>
               </div>
               <div className="row">
                  <div className="col-md-12">
                     <div className="offerbox">
                        <span>01</span>
                        <aside>Que: How Do You Generate Your Leads? <br />
                           Ans: All our leads are web generated through a network of websites we own. We use proprietary marketing techniques and in-house developed tools to generate high-quality, high-intent and high-volume leads daily.</aside>
                     </div>
                     <div className="offerbox">
                        <span>02</span>
                        <aside>Que: Are Your Leads TCPA Compliant? <br />
                           Ans: Yes. We generate a unique Jornaya LeadID token with every lead that identifies the origin of the lead and captures the TCPA consent. Check jornaya.com for more information.</aside>
                     </div>
                     <div className="offerbox">
                        <span>03</span>
                        <aside>Que: What Is Your Return Policy? <br />
                           Ans: We do not take any returns, all sales are FINAL. To keep the cost down and provide a low cost option to our buyers, we do not take any returns.</aside>
                     </div>
                     <div className="offerbox">
                        <span>04</span>
                        <aside>Que: Are Your Leads TCPA Compliant? <br />
                           Ans: Yes. We generate a unique Jornaya LeadID token with every lead that identifies the origin of the lead and captures the TCPA consent. Check jornaya.com for more information.</aside>
                     </div>
                     <div className="offerbox">
                        <span>05</span>
                        <aside>Que: Do You Offer Refunds? <br />
                           Ans: No, we do not offer any refunds. Partial or otherwise. We will continue to deliver till your balance is over and delivery will pause once the account has no balance.</aside>
                     </div>
                     <div className="offerbox">
                        <span>06</span>
                        <aside>Que: Can You Integrate With Our CRM? <br />
                           Ans: Yes, we can integrate with all online CRMs, as long as posting specifications, field mapping and credentials are provided. All integrations are custom developed by our tech team and can take 24-48 hours and requires communicating with our tech team via the online ticketing system. We do not integrate with any offline quote management systems, unless an online bridge is available.</aside>
                     </div>
                     <div className="offerbox">
                        <span>07</span>
                        <aside>Que: Can I Get A Free Trial? <br />
                           Ans: No, we do not offer free trials, it costs money to generate leads and to keep the cost low for a high-quality product, free trial is not available.</aside>
                     </div>
                  </div>
               </div>
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

export default FAQ