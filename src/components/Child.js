import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Footer from './Footer';
import { Container, Row, Col } from 'react-bootstrap';
import ChildCarousel from './subcomponents/ChildCarousel';

import {
	MDBCarousel,
	MDBCarouselCaption,
	MDBCarouselInner,
	MDBCarouselItem,
	MDBView,
	MDBMask,
	MDBContainer
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
						length={2}
						showControls={true}
						showIndicators={true}
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
									<img
										className='d-block w-100'
										src={image3}
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
								<h1>Child Athletes </h1>
							</Fade>
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={2} />
					<Col className='childrenText' md={8}>
						<Fade left slow>
							<p>
								An apple is an edible fruit produced by an apple tree (Malus domestica). Apple trees are
								cultivated worldwide and are the most widely grown species in the genus Malus. The tree
								originated in Central Asia, where its wild ancestor, Malus sieversii, is still found
								today. Apples have been grown for thousands of years in Asia and Europe and were brought
								to North America by European colonists. Apples have religious and mythological
								significance in many cultures, including Norse, Greek, and European Christian tradition.
								Apple trees are large if grown from seed. Generally, apple cultivars are propagated by
								grafting onto
							</p>
						</Fade>
						<Fade left slow>
							<p>
								An apple is an edible fruit produced by an apple tree (Malus domestica). Apple trees are
								cultivated worldwide and are the most widely grown species in the genus Malus. The tree
								originated in Central Asia, where its wild ancestor, Malus sieversii, is still found
								today. Apples have been grown for thousands of years in Asia and Europe and were brought
								to North America by European colonists. Apples have religious and mythological
								significance in many cultures, including Norse, Greek, and European Christian tradition.
								Apple trees are large if grown from seed. Generally, apple cultivars are propagated by
								grafting onto rootstocks, which control the size of the resulting tree. There are more
								than 7,500 known cultivars of apples, resulting in a range of desired characteristics.
								Different cultivars are bred for various tastes and use, including cooking, eating raw
								and cider production. Trees and fruit are prone to a number of fungal, bacterial and
								pest problems, which can be controlled by a number of organic and non-organic means. In
								2010, the fruit's genome was sequenced as part of research on disease control and
								selective breeding in apple production. Worldwide production of apples in 2018 was 86
								million tonnes, with China accounting for nearly half of the total.[3]{' '}
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
						<p> Unit 4, 24 Norbury Road, Cardiff, CF5 3AU | 08420934824 | info@fullfatgrappling.com</p>
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
	position: 'static',
	width: '100%',
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

export default Child;
