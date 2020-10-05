import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Footer from './Footer';
import { Container, Row, Col } from 'reactstrap';

class Child extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div>
              <Fade>
                <h1>Child Athletes</h1>
                <hr />
              </Fade>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
          </Col>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    );
  }
}

export default Child;
