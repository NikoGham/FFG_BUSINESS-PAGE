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

				<Row style={styleDiv2}>
					<Footer />
				</Row>
			</Container>
		);
	}
}

const styleDiv2 = {
	backgroundColor: 'var(--caramelFont)',
	display: 'flex',
	flexDirection: 'row',

	justifyContent: 'center',
	height: '10vh',
	width: '100vw',
	color: '#000',
	fontFamily: 'Montserrat',
	position: 'relative',
	bottom: '0px',
	marginTop: '10vh'
};
export default Membership
