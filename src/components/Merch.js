import React, {useState} from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import MerchItem from './subcomponents/MerchItem';
import WhiteTee from '../assets/WhiteTee1.jpg';
import BlackBack from '../assets/BlackTeeBack.jpeg';
import BlackFront from '../assets/BlackTee.jpeg';
import BlackJumperFront from '../assets/BlackHood.jpeg';
import GreyBack from '../assets/GreyTee.jpeg';
import GreyFront from '../assets/GreyTeeFront.jpeg';
import GreyJumperFront from '../assets/GreyHood.jpeg';
import PinkJumperFront from '../assets/PinkHoodie.jpeg';
import RuckSack from '../assets/RuckSack.jpeg';
import SackFront from '../assets/SackFront.jpeg';

const Merch = () => {

	const [teePrice] = useState('£30')
	const [hoodPrice] = useState("£40")

		return (
			<Container className='childrenBG' fluid>
				<Row>
					{/* TITLE ROW */}
					<Col>
						<Fade left slow cascade>
							<h1 id='memTitle'>Merchandise</h1>
							<hr style={{ width: '50%', margin: 'auto' }} />

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
									box2Text='Black Tee'
									box3Text='Black Tee'
									box4Text='Black Hoodie'
									box5Text='Camo Rucksack'
									box2={BlackFront}
									zoomBox={BlackJumperFront}
									shadowBox={RuckSack}
									box3={BlackBack}
									teePrice={teePrice}
									hoodPrice={hoodPrice}
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
									box2Text='Grey Tee'
									box3Text='Pink Hoodie'
									box4Text='Grey Hoodie'
									box5Text='Camo Gym Bag'
									box2={GreyFront}
									zoomBox={GreyJumperFront}
									shadowBox={SackFront}
									box3={PinkJumperFront}
									teePrice={teePrice}
									hoodPrice={hoodPrice}
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
