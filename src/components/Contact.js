import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from './Footer'
import ContactForm from './subcomponents/ContactForm'

class Contact extends Component {
 render() {
  return (
   <Container fluid>
    {/*CONTENT SECTION */}
    <Row>
     <Col>
      <div>
       <Fade left cascade>
        <h1 id="contactTitle">contact</h1>
       </Fade>
      </div>
     </Col>
    </Row>
    <Row>
     <Col />
     <Col>
      <Fade left slow>
       <iframe
        src='https://maps.google.com/maps?q=full%20fat%20grappling,%20Radstock%20BA3%204BD&t=&z=13&ie=UTF8&iwloc=B&output=embed'
        frameBorder='100'
        scrolling='no'
        marginHeight='0'
        marginWidth='0'
        title='Location'
       />
      </Fade>
     </Col>
     <Col />
    </Row>
    <Row className="contactFormRow" >
      <Fade left slow>
       <ContactForm />
      </Fade>
    </Row>
    {/*FOOTER SECTION */}
    <Row className="footerDrop">
     <Footer  />
    </Row>
   </Container>
  )
 }
}


export default Contact
