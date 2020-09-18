import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';
import Pulse from 'react-reveal/Pulse';
import data from '../yourdata';
import { Container, Row, Col, Jumbotron } from 'reactstrap';

class Header extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Flash forever={true} duration={3000} delay={2100} cascade>
              <h1 className="heading-background">FULLFAT</h1>
            </Flash>

            <p className="header-title">
              <Fade duration={5000} delay={2000}>
                <span className="nameHeader">{data.headerTagline[0]}</span>
              </Fade>

              <span className="caramelFont">
                <Pulse> {data.headerTagline[1]}</Pulse>

                <Pulse delay={750}>{data.headerTagline[2]}</Pulse>

                <Pulse delay={1250}>{data.headerTagline[3]}</Pulse>

                <Pulse delay={1750}>{data.headerTagline[4]}</Pulse>
              </span>
            </p>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    );
  }
}

export default Header;
