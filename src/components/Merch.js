import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import MerchItem from './subcomponents/MerchItem';
import WhiteTee from '../assets/white_front.jpg';
import WhiteBack from '../assets/white_back.jpg';
import BlackBack from '../assets/black_back.jpg';
import BlackFront from '../assets/black_front.jpg';
import BlackJumperFront from '../assets/blackJumper_front.jpg';
import GreyBack from '../assets/grey_back.jpg';
import GreyFront from '../assets/grey_front.jpg';
import GreyJumperFront from '../assets/greyJumper_Front.jpg';
import PinkJumperFront from '../assets/pinkJumper_front.jpg';

class Merch extends Component {
	state = {
		title: 'Merchandise'
	};
	render() {
		return (
			<Container className='childrenBG' fluid>
				<Row>
					{' '}
					{/* TITLE ROW */}
					<Col>
						<Fade left slow cascade>
							<h1 className='memTitle'>{this.state.title}</h1>
						</Fade>
					</Col>
				</Row>
				<Row>
					<Col md={2} />
					<Col>
						<Fade left slow>
							<Row>
								<MerchItem
									box1={WhiteTee}
									box1Text='White Tee'
									box2={BlackFront}
									zoomBox={BlackJumperFront}
									shadowBox={WhiteBack}
									box3={BlackBack}
								/>
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
								<MerchItem
									box1={GreyBack}
									box1Text='Grey Tee'
									box2={GreyFront}
									zoomBox={GreyJumperFront}
									shadowBox={WhiteBack}
									box3={PinkJumperFront}
								/>{' '}
							</Row>
						</Fade>
					</Col>
					<Col md={2} />
				</Row>
				<Row>
					<Col md={2} />
					<Col>
						<Fade left slow>
							<Row />
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
	height: '10vh',
	width: '100vw',
	color: '#000',
	fontFamily: 'Montserrat',
	position: 'relative',
	bottom: '0px',
	marginTop: '10vh'
};

export default Merch;
