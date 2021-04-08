import React, { Component } from "react"
import Fade from "react-reveal/Fade"
import Footer from "./Footer"
import { Container, Row, Col } from "react-bootstrap"
import CardsMem from "./subcomponents/CardsMem"

class Membership extends Component {
 render() {
  

  return (
   <Container className="childrenBG" fluid>
    <Row>
     <Col>
      <Fade left cascade>
       <h1 id="memTitle">Memberships</h1>
      </Fade>
     </Col>
    </Row>
    <Row>
     <Col md={2} />
     <Col>
      <Fade left duration={1000}>
       <CardsMem
        header1={"Standard"}
        image1={"./assets/standard.jpg"}
        header2={"Premium"}
        image2={"./assets/5.jpg"}
        header3={"1-2-1 Training"}
        image3={"./assets/1212.jpg"}
       />
      </Fade>
     </Col>
     <Col md={2} />
    </Row>

    {/*FOOTER SECTION */}

    <Row className='footerDrop'>
    <Footer />
   </Row>
   </Container>
  )
 }
}

export default Membership
