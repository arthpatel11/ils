import React from 'react'

const Contact = () => {
   return (
      <>

         <div>
            <section className="banner smallban">
               <img src="../../assets/images/banner-4.jpg" alt />
               <div className="banner_caption">
                  <aside>Get In Touch</aside>
               </div>
            </section>
            <section className="contact">
               <div className="continn">
                  <div className="contform">
                     <span className="subtitle">CONTACT WITH US</span>
                     <h1 className="comntitle">Have any question? feel free to contact with us.</h1>
                     <ul className="list-unstyled">
                        {/* <li>
                  <p>CALL US FOR IMIDITATE SUPPORT</p>
                  <a href="tel:+1 (062) 109-9222">+1 (062) 109-9222</a>
              </li> */}
                        <li>
                           <p>SEND US EMAIL FOR INQUIRY</p>
                           <a href="mailto:sales@insuranceleadsstore.com">sales@insuranceleadsstore.com</a>
                        </li>
                     </ul>
                     <form>
                        <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                           <input type="email" className="form-control" placeholder="Email Address" />
                        </div>
                        <div className="form-group">
                           <input type="tel" className="form-control" placeholder="Phone" />
                        </div>
                        <div className="form-group">
                           <input type="text" className="form-control" placeholder="Subject" />
                        </div>
                        <div className="form-group">
                           <textarea className="form-control" placeholder="Message" rows={3} defaultValue={""} />
                        </div>
                        <button type="submit" className="comnbtn">Submit</button>
                     </form>
                  </div>
                  <div className="contmap">
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.0361827470706!2d-79.56365610385114!3d43.6474155387011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b38287321ec3f%3A0x13ec54b463102115!2sParking%20lot%2C%2010%20Four%20Seasons%20Pl%20%2310th%2C%20Etobicoke%2C%20ON%20M9B%206H7%2C%20Canada!5e0!3m2!1sen!2sin!4v1639126917400!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} />
                  </div>
               </div>
            </section>
         </div>


      </>
   )
}

export default Contact