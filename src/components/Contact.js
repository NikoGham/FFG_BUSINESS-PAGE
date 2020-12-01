import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import ContactForm from './subcomponents/ContactForm';



class Child extends Component {
	render() {
		return (
			<Container className='childrenBG' fluid>
			
				{/*CONTENT SECTION */}

				<Row>
					<Col>
						<div>
							<Fade left>
								<h1 id="childTitle">contact us </h1>
								<hr style={{width: "25%", margin: "auto"}} />

							</Fade>
						</div>
					</Col>
				</Row>
				<Row >
					<Col sm={1} />
					<Col className='childrenText' sm={5}>
						<Fade left slow>
						<iframe
								src='https://maps.google.com/maps?q=full%20fat%20grappling,%20Radstock%20BA3%204BD&t=&z=13&ie=UTF8&iwloc=B&output=embed'
								frameBorder='100'
								scrolling='no'
								marginHeight='0'
								marginWidth='0'
								title='Location'
							/>
						</Fade>
						</Col>
						<Col sm={5}>
						<Fade left slow>
						<ContactForm />
						</Fade>
						</Col>					
					<Col sm={1} />
				</Row>
				{/*FOOTER SECTION */}
				<Row style={FooterContainer}>
					<Row style={styleDiv}>
						<Footer />
					</Row>
					<Row style={styleDiv2}>
						<p>
							Full Fat Grappling, Pratten's Charlton La, Radstock BA3 4BD, United Kingdom| 07877 816 749 |
							info@fullfatgrappling.com
						</p>
					</Row>
				</Row>
			</Container>
		);
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
	position: 'fixed',
	width: '100%',
	bottom: '0px',
	display: 'flex',
	justifyContent: 'center', 
	
};




export default Child;
