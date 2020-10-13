import React
 from 'react';
import Fade from 'react-reveal/Fade';
import Footer from './Footer';
import { Container, Row, Col } from 'reactstrap';
import AdultCarousel from './AdultCarousel'

/* Remember Niko, it's just fancy Javascript */ 


const Adult = (props) => {

  const headerStyle = {
   margin: "3rem",
  };


  return (
    <Container fluid>
    <Row>
      <Col>
        <div>
          <Fade left>
            <h1 style={headerStyle}>Adult Athletes  <hr /></h1>
          
          </Fade>
        </div>
      </Col>
    </Row>
    <Row>
      <Col>
      <AdultCarousel />
      </Col>
    </Row>
    <Row>
      <Col>
      <h2 style={headerStyle}> Inspiring Excellence through Courage and Committment </h2>
      </Col>
    </Row>
    <Row >
      <Col >
      <Footer />
      </Col>
    </Row>
  </Container>
  );
};



export default Adult;
