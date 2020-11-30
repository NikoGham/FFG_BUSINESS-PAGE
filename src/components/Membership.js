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
             <Container className='childrenBG' fluid >
             <Row>
               <Col>
                 <div>
                   <Fade left>
                     <h1 className="memTitle">Memberships </h1>
                   
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
            {/*FOOTER SECTION */}
				<Row style={FooterContainer}>
					<Row id="memFooter" style={styleDiv}>
						<Footer />
					</Row>
					<Row style={styleDiv2}>
          <p> Full Fat Grappling, Pratten's Charlton La, Radstock BA3 4BD, United Kingdom| 07877 816 749 | info@fullfatgrappling.com</p>					</Row>
				</Row>
           </Container>
           )
}
}


const styleDiv = {
	backgroundColor: 'var(--goldGrappFont)',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	height: '8vh',
	width: '100%'
};

const styleDiv2 = {
	backgroundColor: 'var(--caramelFont)',
	display: 'flex',
	alignContent: 'center',
	justifyContent: 'center',
	height: '7vh',
	width: '100%',
	color: '#000',
	fontFamily: 'Montserrat'
};

const FooterContainer = {
	backgroundColor: 'var(--caramelFont)',
	position: 'static',
	width: 'auto',
	bottom: '0px',
	display: 'flex',
  justifyContent: 'center', 
  
};

export default Membership
