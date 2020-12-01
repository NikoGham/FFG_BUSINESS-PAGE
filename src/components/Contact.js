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
				
					<Row style={styleDiv}>
						<Footer />
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
	height: '10vh',
	width: '100vw', 
	position: "relative", 
	bottom: '0px'
};





export default Child;
