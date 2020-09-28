import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'reactstrap';

import data from '../yourdata';

class About extends Component {
  state = {};

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <div className="about">
              <h1>
                <Fade left cascade>
                  About.
                </Fade>
              </h1>
            </div>{' '}
          </Col>
        </Row>
        <Row>
          <Col md={2}></Col>
          <Col>
          <p>We recognise</p>
            <div className="about-content">
              <Fade bottom>
                <p>{data.abouttext}</p>
                <p>{data.abouttextlist}</p>
                <p>{data.abouttext2}</p>
                <p>{data.abouttext3}</p>
                <p>{data.abouttext4}</p>



              </Fade>
            </div>
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    );
  }
}

export default About;
