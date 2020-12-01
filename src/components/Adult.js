import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Footer from './Footer';
import { Container, Row, Col } from 'react-bootstrap';

import {
	MDBCarousel,
	MDBCarouselInner,
	MDBCarouselItem,
	MDBView,
	MDBMask,
} from 'mdbreact';


import image5 from '../assets/5.jpg';
import image7 from '../assets/7.jpg';

class Adult extends Component {
	render() {
		return (
			<Container className='childrenBG' fluid>
				{/*CAROSEL BACKGROUND TOP SECTION */}

				<Row style={carouselContainer}>
					<MDBCarousel
						activeItem={1}
						length={2}
						showControls={false}
						showIndicators={false}
						className='z-depth-1'
						 
					>
						<MDBCarouselInner>
							<MDBCarouselItem itemId='1'>
								<MDBView style={carouselItem}>
									<img className='d-block w-100' src={image5} alt='First slide' />
									<MDBMask overlay='black-light' />
								</MDBView>
							</MDBCarouselItem>

							<MDBCarouselItem itemId='2'>
								<MDBView>
									<img
										className='d-block w-100'
										src={image7}
										alt='Third slide'
									/>
									<MDBMask overlay='black-light' />
								</MDBView>
							</MDBCarouselItem>
						</MDBCarouselInner>
					</MDBCarousel>
				</Row>
				{/*CONTENT SECTION */}

				<Row>
					<Col>
						<div>
							<Fade left>
								<h1>Adult Athletes </h1>
							</Fade>
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={2} />
					<Col className='childrenText' md={8}>
						<Fade left slow>
							<p>
						
							</p>
						</Fade>
						<Fade left slow>
							<p>
								
							</p>
							<hr />
						</Fade>
					</Col>
					<Col md={2} />
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
	justifyContent: 'center'
};

const carouselContainer = {
	position: 'fixed',
	top: '0px',
	height: '50%',
	width: '100%',
	opacity: 0.3
};

const carouselItem = {
};

export default Adult