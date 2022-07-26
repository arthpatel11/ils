import React from 'react'

const Pricing = () => {
   return (
      <>

         <section className="banner smallban">
            <img src="../../assets/images/banner-3.jpg" alt />
            <div className="banner_caption">
               <aside>Insurance Leads Pricing</aside>
            </div>
         </section>

         <section className="comnpadding Get_connect">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-xxl-7 col-xl-7 col-lg-10">
                     <h1 className="comntitle">PRICING DETAILS OF INSURANCE LEAD TYPES</h1>
                  </div>
               </div>
               <div className="row justify-content-center">
                  <div className="col-xxl-10 col-xl-10 col-lg-10">
                     <p>Our pricing structure is very simple, more you buy, cheaper it gets:</p>
                     <ul className="conlist">
                        <li>All orders are pre-pay via your online account.</li>
                        <li>Minimum 1000 lead purchase required.</li>
                        <li>Bulk payment terms available on purchases more them 5000 leads, subject to credit check.</li>
                        <li>No refunds available.</li>
                        <li>No automatic rebilling, pay as you go. Minimum recharge of 1000 leads required.</li>
                        <li>No Returns, all leads are final sales.</li>
                     </ul>
                  </div>
               </div>
            </div>
         </section>

         <section className="comnpadding sample">
            <div className="container">
               <div className="top_head">
                  <h4 className="comntitle">pricing</h4>
               </div>
               <div className="row justify-content-center">
                  <div className="col-lg-9">
                     <table className="table table-striped table-bordered table-hover customtable">
                        <tbody>
                           <tr>
                              <th>Lead Type</th>
                              <th>4 hour old to 7 days</th>
                              <th>8-30 days</th>
                              <th>31-60 days</th>
                           </tr>
                           <tr>
                              <th>Auto Insurance</th>
                              <td>$0.70</td>
                              <td>$0.40</td>
                              <td>$0.20</td>
                           </tr>
                           <tr>
                              <th>Health Insurance</th>
                              <td>$0.70</td>
                              <td>$0.40</td>
                              <td>$0.20</td>
                           </tr>
                           <tr>
                              <th>Home Insurance</th>
                              <td>$0.70</td>
                              <td>$0.40</td>
                              <td>$0.20</td>
                           </tr>
                           <tr>
                              <th>Life Insurance</th>
                              <td>$0.70</td>
                              <td>$0.40</td>
                              <td>$0.20</td>
                           </tr>
                           <tr>
                              <th>Medicare</th>
                              <td>$0.70</td>
                              <td>$0.40</td>
                              <td>$0.20</td>
                           </tr>
                        </tbody>
                     </table>
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

export default Pricing