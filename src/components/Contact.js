import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Footer from './Footer';

class Contact extends Component {
  state = {};
  render() {
    return (
      <Container fluid>
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
                 
          <Col md={6}>
      <Form>
<FormGroup>
  <Label for="nameBox">Name</Label>
  <Input type="text" name="text" id="nameBox" placeholder="Athlete Name" bsSize="lg"></Input>
</FormGroup>
<FormGroup>
  <Label for="emailBox">Email</Label>
  <Input type="email" name="email" id="emailBox" placeholder="Email"></Input>
</FormGroup>
<FormGroup>
  <Label for="regardingSelect">What is your query regarding?</Label>
  <Input type="select" name="selectMulti" id="regardingSelect" >
    <option>Child Athletes</option>
    <option>Adult Athletes</option>
    <option>Membership</option>
    <option>Timetable</option>
    <option>Why isn't my heel hook working?</option>
    <option>Teach me how to throw for BJJ</option>
    <option>Other</option>
  </Input>
</FormGroup>
<FormGroup>
  <Label for="textArea">Message</Label>
  <Input type="textarea" name="text" id="textArea"></Input>
</FormGroup>
      </Form>
<Button>Submit</Button>
          </Col>
        </Row>
        {/* BOTTOM ROW FOR FOOTER  */}
        <Row>
          <Col>
            <Fade bottom></Fade>
          </Col>
          <Col sm={'AUTO'}>
            <Footer />
          </Col>
          {/*Why the fuck does AUTO work nicely but auto doesn;t? */}
        </Row>
      </Container>
    );
  }
}

export default Contact;
