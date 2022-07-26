import React from 'react'
import Accordion from "./Accordion";

const questionsAnswers = [
   {
     question: "higher quality",
     answer: "Our aged leads come to you pre-validated, representing real people who have recently been shopping in-market for quotes in your vertical.",
   },
   {
     question: "advanced filtering",
     answer: "Get the prospects you want and none of the junk! Sort by State, Age, Phone Type, Zip Code, or how recently they’ve been searching for quotes.",
   },
   {
     question: "more affordable",
     answer: "For a fraction of the cost of real-time leads keep your sales pipeline packed with validated Internet leads from prospects who were looking for what you’re selling.",
   },
   {
     question: "real protection",
     answer: "Aged Lead Store cares about you and your information. Credit card processing and lead distribution are handled in a secure, encrypted platform with no card storage.",
   },
   {
     question: "serious sales support",
     answer: "We don’t just sell Internet leads. We support you with a wealth of resources and strategies to build a complete sales system.",
   },
   {
      question: "we're just easier",
      answer: "Filtering allows you to target just the leads you want with a self-service platform and $100 minimum order. Download is instant! For complex orders, we offer hands on service.",
    },
 ];

const Insurances = () => {
   return (
      <>

         <section className="banner smallban">
            <img src="../../assets/images/banner-2.jpg" alt />
            <div className="banner_caption">
               <aside>Low-Cost Insurance Leads That Can Boost Your ROI</aside>
            </div>
         </section>
         <section className="smallform">
            <div className="container">
               <form className="sform">
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
                     <ul className="conlist">
                        <li>High intent Auto Insurance leads in all 50 states and high volume in all major metropolitan areas.</li>
                        <li>All our auto leads are web generated and come with a Jornaya LeadID token to ensure TCPA compliance.</li>
                        <li>Single car, multiple car leads available.</li>
                        <li>Single driver, multiple driver leads available.</li>
                        <li>Credit rating available to separate low credit, sub-prime consumers.</li>
                     </ul>
                  </div>
               </div>
            </div>
         </section>
         <section className="comnpadding Get_Started">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-md-6">
                     <h2 className="comntitle">High Quality Sales Leads. Delivered</h2>
                     <p>Discover a new way to run high-velocity sales. Get higher efficiency out of your call center, feet-on-street, digital sales and merchant operations.</p>
                     <input type="text" placeholder="Email" />
                     <button className="comnbtn">GET LEADS NOW</button>
                  </div>
                  <div className="col-md-6 text-center">
                     <img src="../../assets/images/get-1.png" alt />
                  </div>
               </div>
            </div>
         </section>
         <section className="comnpadding withils">
            <div className="container">
               <div className="top_head">
                  <span className="subtitle">We find, verify, and deliver customers to you.</span>
                  <h2 className="comntitle">Power your Insurance Sales.</h2>
               </div>
               <div className="row">
                  <div className="col-md-6">
                     <div className="withleft">
                        <aside>Before ILS</aside>
                        <img src="../../assets/images/withleft.png" className="w-100" alt />
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="withright">
                        <aside>With ILS</aside>
                        <img src="../../assets/images/withright.png" className="w-100" alt />
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="comnpadding grow">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-xl-8 col-md-12">
                     <div className="growbox">
                        <div className="row align-items-center">
                           <div className="col-xl-9 col-lg-8">
                              <h3 className="comntitle">The easy way to connect with insurance shoppers.</h3>
                              <label htmlFor="website">Enter your website to get started now</label>
                              <input type="text" placeholder="Email" />
                              <button className="comnbtn">GET LEADS NOW</button>
                           </div>
                           <div className="col-xl-3 col-lg-4">
                              <div className="growimg">
                                 <img src="../../assets/images/grow-graph.png" alt /></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="comnpadding goal">
            <div className="container">
               <div className="goalbox">
                  <h3 className="comntitle">Lead Generation That Works! Real Prospects With Real Interest in Quotes</h3>
                  <a href="#" className="comnbtn">Free Trial</a>
               </div>
            </div>
            <div className="goalimg1"><img src="../../assets/images/goalimg1.svg" alt /></div>
            <div className="goalimg2"><img src="../../assets/images/goalimg2.svg" alt /></div>
         </section>
         
         <section className="comnpadding own">
            <div className="container">
               <div className="top_head">
                  <h4 className="comntitle">Why do so many use and trust Insurance Leads Store?</h4>
                  <p>Accelerate your pipeline with ZoomInfo’s portfolio of solutions that combine B2B intelligence &amp; company contact data with engagement software, and dynamic workflows.</p>
               </div>
               <div className="row align-items-center">
                  <div className="col-lg-6">
                  <Accordion questionsAnswers={questionsAnswers} />
                  </div>
                  <div className="col-lg-6">
                     <img src="../../assets/images/own-1.svg" className="ownimg" alt />
                  </div>
               </div>
            </div>
         </section>
         <section className="comnpadding build">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-6">
                     <img src="../../assets/images/build-img.svg" className="buildimg" alt />
                  </div>
                  <div className="col-lg-6">
                     <div className="top_head">
                        <h4 className="comntitle">who we are</h4>
                        <p>With access to over 200 million contacts at 20 million companies, you can generate leads when you need them. With access to over 200 million contacts at 20 million companies, you can generate leads when you need them. With access
                           to over 200 million contacts at 20 million companies, you can generate leads when you need them.</p>
                        <p>With access to over 200 million contacts at 20 million companies, you can generate leads when you need them. </p>
                        <a href="#" className="comnbtn">Get Started</a>
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
         <section className="store">
            <div className="container">
               <a className="moreless-button" href="javascript: void(0);">Read more</a>
               <div className="storehide">
                  <div className="row">
                     <div className="col-md-6">
                        <div className="storeinner">
                           <aside>Why Choose Insurance Leads Store?</aside>
                           <p>Our website attracts hundreds of potential customers that are in search of customized insurance solutions every day. They fill up online application forms online and on scrutiny of their requests, we validate their interests.
                              Only verified auto insurance leads are sent to agents after matching them with agent needs. We also provide live leads transfers, agents can directly talk to probable clients over phone and convert them into sales to earn
                              money.
                           </p>
                           <ul className="storelist">
                              <li>High quality 24/7 customer services are available for all clients</li>
                              <li>Advanced filters in system ensure supply of genuine lead prospects</li>
                              <li>Flexible lead generation program options without any contracts</li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="storeinner">
                           <aside>Save Money and Enjoy Peace of Mind with <span>Cheap Auto Insurance Leads</span></aside>
                           <p>Our primary objective is to serve as a bridge between agents and consumers. Finding the right type of insurance policy can be overwhelming for many buyers. This is mainly due to the fact that there has to be a balance between
                              coverage levels and premium.</p>
                           <p>Our primary objective is to serve as a bridge between agents and consumers. Finding the right type of insurance policy can be overwhelming for many buyers. This is mainly due to the fact that there has to be a balance between
                              coverage levels and premium.</p>
                        </div>
                     </div>
                     <div className="col-12">
                        <div className="top_head">
                           <h4 className="comntitle">Benefits of Low Cost Auto Insurance Leads</h4>
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className="storebox">
                           <div className="boxicon">
                              <i className="fa fa-flag-checkered" />
                           </div>
                           <aside>PREQUALIFIED</aside>
                           <p>GET LEADS CATEGORISED BY RISK LEVELS AND AGE</p>
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className="storebox">
                           <div className="boxicon">
                              <i className="fa fa-check-square-o" />
                           </div>
                           <aside>HIGH QUALITY</aside>
                           <p>ONLY INTEREST VERIFIED AUTO LEADS ARE SENT TO AGENTS</p>
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className="storebox">
                           <div className="boxicon">
                              <i className="fa fa-fighter-jet" />
                           </div>
                           <aside>Faster</aside>
                           <p>Create account, retrieve leads instantly and check out</p>
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className="storebox">
                           <div className="boxicon">
                              <i className="fa fa-shield" />
                           </div>
                           <aside>SECURE</aside>
                           <p>Safe lead distribution procedure and credit card processing </p>
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className="storebox">
                           <div className="boxicon">
                              <i className="fa fa-refresh" />
                           </div>
                           <aside>FLEXIBLE</aside>
                           <p>No deposit is required, pay as you go</p>
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className="storebox">
                           <div className="boxicon">
                              <i className="fa fa-handshake-o" />
                           </div>
                           <aside>Trusted</aside>
                           <p>Proven track record for providing high quality leads</p>
                        </div>
                     </div>
                     <div className="col-12">
                        <div className="text-center">
                           <a href="#" className="comnbtn">Sign up for Free</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="comnpadding sample">
            <div className="container">
               <div className="top_head">
                  <span className="subtitle">Lorem Ipsum Set Amet</span>
                  <h4 className="comntitle">auto insurance lead sample</h4>
               </div>
               <table className="table custable">
                  <tbody>
                     <tr>
                        <th>First Name</th>
                        <td>Orlando</td>
                        <th>Last Name</th>
                        <td>Palazzo</td>
                     </tr>
                     <tr>
                        <th>Address</th>
                        <td>Friendship Lane</td>
                        <th>City</th>
                        <td>San Jose</td>
                     </tr>
                     <tr>
                        <th>State</th>
                        <td>FL</td>
                        <th>Zip</th>
                        <td>95131</td>
                     </tr>
                     <tr>
                        <th>Email</th>
                        <td>glennmayer@gmail.com</td>
                        <th>Home Phone</th>
                        <td>408-579-56</td>
                     </tr>
                     <tr>
                        <th>Work Phone</th>
                        <td>408-579-56</td>
                        <th>Date of Birth (MM/DD/YYYY)</th>
                        <td>12/16/1989</td>
                     </tr>
                     <tr>
                        <th>Occupation</th>
                        <td>Sales</td>
                        <th>Own or Rent</th>
                        <td>Own</td>
                     </tr>
                     <tr>
                        <th>Best Time To Call</th>
                        <td>Evening</td>
                        <th>Number Of Ticket</th>
                        <td>0</td>
                     </tr>
                     <tr>
                        <th>Your Credit Score</th>
                        <td>Good</td>
                        <th>Insurance Company</th>
                        <td>Geico Casualty</td>
                     </tr>
                     <tr>
                        <th>Expire Date</th>
                        <td>01-03-2019</td>
                        <th>DUI</th>
                        <td>NO</td>
                     </tr>
                     <tr>
                        <th>Number Of Accident</th>
                        <td>0</td>
                        <th>Vehicle</th>
                        <td>1</td>
                     </tr>
                     <tr>
                        <th>Year</th>
                        <td>2012</td>
                        <th>Make</th>
                        <td>HONDA</td>
                     </tr>
                     <tr>
                        <th>Model</th>
                        <td>ACCORD LX</td>
                        <th>Submodel</th>
                        <td>2WD SEDAN 4 DOOR - 2.4L L4 MPI DOHC 16V NM4</td>
                     </tr>
                     <tr>
                        <th>Primary Use</th>
                        <td>Work</td>
                        <th>Annual Milage</th>
                        <td>12000</td>
                     </tr>
                     <tr>
                        <th>Coverage Level</th>
                        <td>Standard Protection</td>
                        <th>Vehicle Garaged</th>
                        <td>On Street</td>
                     </tr>
                     <tr>
                        <th>Comp Coll Deduct</th>
                        <td>No Coverage</td>
                     </tr>
                  </tbody>
               </table>
               <div className="text-center">
                  <a href="#" className="comnbtn">Download</a>
               </div>
            </div>
         </section>

      </>

   )
}

export default Insurances