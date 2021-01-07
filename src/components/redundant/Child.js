import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Footer from '../Footer';
import { Container, Row, Col } from 'react-bootstrap';

import {
	MDBCarousel,
	MDBCarouselInner,
	MDBCarouselItem,
	MDBView,
	MDBMask,
	
} from 'mdbreact';

import image2 from '../assets/2.jpg';
import image4 from '../assets/4.jpg';
import image3 from '../assets/3.jpg';
import image5 from '../assets/5.jpg';
import image6 from '../assets/6.jpg';
import image7 from '../assets/7.jpg';

class Child extends Component {
	render() {
		return (
			<Container className='childrenBG' fluid>
				{/*CAROSEL BACKGROUND TOP SECTION */}

				<Row style={carouselContainer}>
					<MDBCarousel
						activeItem={1}
						length={6}
						showControls={false}
						showIndicators={false}
						className='z-depth-1'
					>
						<MDBCarouselInner>
							<MDBCarouselItem itemId='1'>
								<MDBView style={carouselItem}>
									<img className='d-block w-100' src={image2} alt='First slide' />
									<MDBMask overlay='black-light' />
								</MDBView>
							</MDBCarouselItem>

							<MDBCarouselItem itemId='2'>
								<MDBView>
									<img className='d-block w-100' src={image3} alt='Third slide' />
									<MDBMask overlay='black-light' />
								</MDBView>
							</MDBCarouselItem>
							<MDBCarouselItem itemId='3'>
								<MDBView>
									<img className='d-block w-100' src={image4} alt='Third slide' />
									<MDBMask overlay='black-light' />
								</MDBView>
							</MDBCarouselItem>
							<MDBCarouselItem itemId='4'>
								<MDBView>
									<img className='d-block w-100' src={image5} alt='Third slide' />
									<MDBMask overlay='black-light' />
								</MDBView>
							</MDBCarouselItem>
							<MDBCarouselItem itemId='5'>
								<MDBView>
									<img className='d-block w-100' src={image6} alt='Sixth slide' />
									<MDBMask overlay='black-light' />
								</MDBView>
							</MDBCarouselItem>
							<MDBCarouselItem itemId='6'>
								<MDBView>
									<img className='d-block w-100' src={image7} alt='Seventh slide' />
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
								<h1 id="childTitle">Child Athletes </h1>
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
	height: '15vh',
	width: '100vw',
	color: '#000',
	fontFamily: 'Montserrat',
	position: 'relative',
	bottom: '0px',
	marginTop: '10vh'
};

const carouselContainer = {
	position: 'fixed',
	top: '0px',
	height: '100%',
	width: '100%',
	opacity: 0.3
};

const carouselItem = {};

export default Child;
