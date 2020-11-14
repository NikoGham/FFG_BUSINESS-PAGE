import React from "react";

import { MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

const ContactForm = () => {
return (

      <form>
        <div className="grey-text subFontText">
          <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Subject" icon="tag" group type="text"  validate error="wrong" success="right" />
          <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
        </div>
        <div className="text-center ">
          <MDBBtn outline className="subTextFont" color="warning">
            Send
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
        </div>
      </form>

);
};

export default ContactForm;