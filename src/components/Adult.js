import React
 from 'react';
import Fade from 'react-reveal/Fade';
import Footer from './Footer';
import { Container, Row, Col } from 'reactstrap';
import AdultCarousel from './AdultCarousel'

/* Remember Niko, it's just fancy Javascript */ 


const Adult = (props) => {
  return (
    <Container>
    <Row>
      <Col>
        <div>
          <Fade left>
            <h1>Adult Athletes</h1>
            <hr />
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
      <h2>Text </h2>
      </Col>
    </Row>
    <Row>
      <Footer />
    </Row>
  </Container>
  );
};



export default Adult;
