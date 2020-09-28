import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'reactstrap';
import child from '../assets/CHILD_PHOTO.jpg'
import data from '../yourdata';

class About extends Component {
  state = {};

  render() {
    const honor = data.abouttextlist;
    const honorList = honor.map((item, index) => <li key={index}>{item}</li>);

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
            <div className="about-content">
              <Fade left slow>
                <p>{data.abouttext}</p>
                <Row>
                  <Col><div><img src={child} alt="Child Throw in Judo" style={{margin: "auto", width: "10rem"}}></img></div></Col>
                  <Col>
                    <ul style={styleList}> {honorList} </ul>
                  </Col>
                </Row>

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

const styleList = {
  color: "#fffff", 
  fontFamily: 'Lato', 
  listStyle: 'none'
}

export default About;
