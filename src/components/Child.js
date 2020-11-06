import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Footer from './Footer';
import { Container, Row, Col } from 'react-bootstrap';
import ChildCarousel from './subcomponents/ChildCarousel'

class Child extends Component {
  render() {

    const headerStyle = {
      margin: "3rem",
     };

    return (
      <Container className='childrenBG' fluid>
        <Row>
          <Col>
            <div>
              <Fade left>
                <h1 style={headerStyle}>Child Athletes <hr /></h1>
                
              </Fade>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <ChildCarousel />
          </Col>
        </Row>
        <Row>
          <Col >
          <Footer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Child;
