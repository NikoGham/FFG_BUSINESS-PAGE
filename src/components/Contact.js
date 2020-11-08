import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col} from 'react-bootstrap';
import Footer from './Footer'
import ContactForm from "./subcomponents/ContactForm"

class Contact extends Component {
  state = {};
  render() {
    return (
      <Container className='childrenBG contact' fluid>
        <Row>
          {/* TOP ROW WITH HEADING  */}
          <Col>
            <h1>
              <Fade bottom cascade>
                Contact us
                <Fade left delay={500}>
                  <hr />
                </Fade>
              </Fade>
            </h1>
          </Col>
        </Row>
        {/* MIDDLE ROW FOR CONTENT */}
        <Row>
          <Col md={6}>
            <Fade delay>
              <iframe
                width="600"
                height="500"
                src="https://maps.google.com/maps?q=full%20fat%20grappling,%20Radstock%20BA3%204BD&t=&z=13&ie=UTF8&iwloc=B&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                title="Location"
              ></iframe>
            </Fade>
          </Col>
                  {/* FORM COLUMN */}
        
          <Col md={2}>
          </Col>
        </Row>
        {/* BOTTOM ROW FOR FOOTER  */}
        <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
					<Footer />
				</Row>
      </Container>
    );
  }
}

export default Contact;
