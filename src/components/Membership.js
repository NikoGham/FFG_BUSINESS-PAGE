import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Footer from './Footer';
import { Container, Row, Col } from 'reactstrap';
import CardsMem from './CardsMem'

 class Membership extends Component {
    render() {
        const headerStyle = {
            margin: "3rem",
           };
         
         
           return (
             <Container fluid>
             <Row>
               <Col>
                 <div>
                   <Fade left>
                     <h1 style={headerStyle}>Memberships <hr /></h1>
                   
                   </Fade>
                 </div>
               </Col>
             </Row>
             <Row >
                 <Col md={2}>     
                 </Col>
               <Col>
               <Fade left duration={1000}>
               <CardsMem header1={"Child Athletes"} image1={"./assets/1875.jpg"} header2={"Adult Athletes"} header3={"Part-time Athletes"}/>
               </Fade>
               </Col>
               <Col md={2}>
               </Col>
             </Row>
             <Row>
             <Col >
               </Col>
             </Row>
             <Row>
               <Col>
               <h2 style={headerStyle}> </h2>
               </Col>
             </Row>
             <Row >
               <Col >
               <Footer />
               </Col>
             </Row>
           </Container>
           )
}
}

export default Membership
