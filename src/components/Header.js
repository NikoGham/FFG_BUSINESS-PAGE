import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';
import Pulse from 'react-reveal/Pulse';
import data from '../yourdata';
import { Container, Row, Col } from 'react-bootstrap';
import Particles from 'react-tsparticles';

class Header extends Component {
  state = {};

  render() {
    return (
      <Container fluid>
        < Particles width={"100%"} id="tsparticles" params={{
          background: {
            color: {
              value: "",
            },
          },
          fpsLimit: 30,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
                speed: 3,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }} />
        <Row>
          <Col>
            <Flash  duration={10000} delay={2100} cascade>
              <h1 className="heading-background">FULL FAT</h1>
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
       
      </Container>
    );
  }
}

export default Header;
