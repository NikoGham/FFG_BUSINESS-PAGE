import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import ContactForm from './subcomponents/ContactForm';

class Contact extends Component {
	state = {};
	render() {
		return (
			<Container className='childrenBG contact' fluid>
				<Row>
					{/* TOP ROW WITH HEADING  */}
					<Col>
						<h1>
							<Fade bottom cascade>
								Contact us
								<Fade left delay={500}>
								</Fade>
							</Fade>
						</h1>
					</Col>
				</Row>
				{/* MIDDLE ROW FOR CONTENT */}
				<Row>
					<Col md={1} />
					<Col md={5}>
						<Fade delay>
							<iframe
								width='600'
								height='500'
								src='https://maps.google.com/maps?q=full%20fat%20grappling,%20Radstock%20BA3%204BD&t=&z=13&ie=UTF8&iwloc=B&output=embed'
								frameborder='0'
								scrolling='no'
								marginheight='0'
								marginwidth='0'
								title='Location'
							/>
						</Fade>
					</Col>
					{/* FORM COLUMN */}

					<Col md={5}>
						<Fade delay={500}>
							<ContactForm />
						</Fade>
					</Col>
					<Col md={1} />
				</Row>
				{/*FOOTER SECTION */}
				<Row style={FooterContainer}>
					<Row style={styleDiv}>
						<Footer />
					</Row>
					<Row style={styleDiv2}>
					<p> Full Fat Grappling, Pratten's Charlton La, Radstock BA3 4BD, United Kingdom| 07877 816 749 | info@fullfatgrappling.com</p>					</Row>
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
	display: 'flex',
	alignContent: 'center',
	alignItems: 'center',

	justifyContent: 'center',
	height: '7vh',
	width: '100%',
	color: '#000',
	fontFamily: 'Montserrat'
};

const FooterContainer = {
	backgroundColor: 'var(--caramelFont)',
	position: 'relative',
	width: 'auto',
	bottom: '0px',
	display: 'flex',
	justifyContent: 'center',
	marginTop: '1rem'
};
export default Contact;
