import React from 'react'
import { MDBBtn, MDBIcon, MDBInput } from 'mdbreact';


const ContactForm = () => {

 return (

  <form name="contact" method="post" id="contactForm">
  <input type="hidden" name="form-name" value="contact" />
  <div className="grey-text subFontText">
    <MDBInput label="Your name" name="name"  group type="text" validate error="wrong"
      success="right" />
    <MDBInput required label="Your email" name="email" group type="email" validate error="wrong"
      success="right" />
    <MDBInput label="Subject" name="subject" group type="text"  validate error="wrong" success="right" />
    <MDBInput type="textarea" rows="2" label="Your message" name="message"  />
  </div>
  <div  className="text-center ">
    <MDBBtn type="submit" outline className="subTextFont" color="warning">
      Send
      <MDBIcon far icon="paper-plane" className="ml-1" />
    </MDBBtn>
  </div>
</form>
 )
}

export default ContactForm
