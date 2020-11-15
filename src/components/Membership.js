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
             <Container className='childrenBG' fluid noGutters>
             <Row>
               <Col>
                 <div>
                   <Fade left>
                     <h1 >Memberships </h1>
                   
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
					<Row style={styleDiv}>
						<Footer />
					</Row>
					<Row style={styleDiv2}>
						<p> Unit 4, 24 Norbury Road, Cardiff, CF5 3AU | 08420934824 | info@fullfatgrappling.com</p>
					</Row>
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
  opacity: 0.6
};

export default Membership
