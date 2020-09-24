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
              <div className="about-content">
                <h1>
                  <Fade left cascade>
                    About.
                  </Fade>
                </h1>
                <Fade bottom>
                  <p>{data.abouttext}</p>
                </Fade>
              </div>
            </div>{' '}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
