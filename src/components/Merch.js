import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer'
import MerchItem from './subcomponents/MerchItem'
import WhiteTee from '../assets/white_front.jpg'
import WhiteBack from '../assets/white_back.jpg'
import BlackBack from '../assets/black_back.jpg'
import BlackFront from '../assets/black_front.jpg'
import BlackJumperFront from '../assets/blackJumper_front.jpg'
import GreyBack from '../assets/grey_back.jpg'
import GreyFront from '../assets/grey_front.jpg'
import GreyJumperFront from '../assets/greyJumper_Front.jpg'
import PinkJumperFront from '../assets/pinkJumper_front.jpg'


class Merch extends Component {
	state = {
		title: 'Merchandise'
	};
	render() {
		

		return (
			<Container className='childrenBG' fluid>
				<Row> {/* TITLE ROW */}
					<Col>
						<Fade left slow cascade>
							<h1 >
								{' '}
								{this.state.title}
							</h1>
						</Fade>
					</Col>
				</Row>
				<Row>
					<Col md={2} />
					<Col>
						<Fade left slow>
							<Row>
								<MerchItem box1={WhiteTee} box2={BlackFront} zoomBox={BlackJumperFront} shadowBox={WhiteBack} box3={BlackBack} />
							</Row>
						</Fade>
					</Col>
					<Col md={2} />
				</Row>
				<Row>
					<Col md={2} />
					<Col>
						<Fade left slow>
							<Row>
							<MerchItem box1={GreyBack} box2={GreyFront} zoomBox={GreyJumperFront} shadowBox={WhiteBack} box3={PinkJumperFront} />							</Row>
						</Fade>
					</Col>
					<Col md={2} />
				</Row>
				<Row>
					<Col md={2} />
					<Col>
						<Fade left slow>
							<Row>
							</Row>
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
						<p> Full Fat Grappling, Pratten's Charlton La, Radstock BA3 4BD, United Kingdom| 07877 816 749 | info@fullfatgrappling.com</p>
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
	position: 'relative',
	width: 'auto',
	bottom: '0px',
	display: 'flex',
	justifyContent: 'center'
};

export default Merch;
