import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Footer from './Footer';
import { Container, Row, Col } from 'react-bootstrap';
import CardsMem from './CardsMem'

 class Membership extends Component {
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
                     <h1 >Memberships <hr /></h1>
                   
                   </Fade>
                 </div>
               </Col>
             </Row>
             <Row >
                 <Col md={3}>     
                 </Col>
               <Col>
               <Fade left duration={1000}>
               <CardsMem header1={"Standard"} image1={"./assets/10.png"} header2={"Premium"} image2={"./assets/5.jpg"} />
               </Fade>
               </Col>
               <Col md={3}>
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
               </Col>
             </Row>
            <Footer />
           </Container>
           )
}
}

export default Membership
