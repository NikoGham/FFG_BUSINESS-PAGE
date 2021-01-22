import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from './Footer'
import MerchItem from './subcomponents/MerchItem'
import WhiteTee from '../assets/WhiteTee1.jpg'
import BlackBack from '../assets/BlackTeeBack.jpeg'
import BlackFront from '../assets/BlackTee.jpeg'
import BlackJumperFront from '../assets/BlackHood.jpeg'
import GreyBack from '../assets/GreyTee.jpeg'
import GreyFront from '../assets/GreyTeeFront.jpeg'
import GreyJumperFront from '../assets/GreyHood.jpeg'
import PinkJumperFront from '../assets/PinkHoodie.jpeg'
import RuckSack from '../assets/RuckSack.jpeg'
import SackFront from '../assets/SackFront.jpeg'
import LeftHat from '../assets/LeftHat1.jpg'
import FrontHat from '../assets/FrontHat1.jpg'
import RightHat from '../assets/RightHat1.jpg'
import BlackTeeChuck from '../assets/BlackTeeChuck1.jpg'
// import KidsTeeBlack from '../assets/KidsTeeBlack.jpg'
import ShortsSide from '../assets/ShortsSide.jpg'
import SackBlack from '../assets/SackBlack.jpg'
import SackBlue from '../assets/SackBlue.jpg'
import SackPink from '../assets/SackPink.jpg'

const Merch = () => {
	const [ teePrice ] = useState('£30')
	const [ hoodPrice ] = useState('£35')
	const [ pinkHoodPrice ] = useState('£30')
	const [ ruckSackPrice ] = useState('£25')
	const [ sackPrice ] = useState('£60')
	const [ shortPrice ] = useState('£25')
	const [ kidsTeePrice ] = useState('£15')
	// const [ kidsShortsPrice ] = useState('£15')
	// const [ kidsHoodyPrice ] = useState('£25')

	const [ hatPrice ] = useState('£18')

	return (
		<Container className='childrenBG' fluid>
			<Row>
				{/* TITLE ROW */}
				<Col>
					<Fade left slow cascade>
						<h1 id='memTitle'>Merchandise</h1>
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
								box1Price={teePrice}
								box2Price={teePrice}
								box3Price={teePrice}
								box4Price={hoodPrice}
								box5Price={ruckSackPrice}
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
								box1Price={teePrice}
								box2Price={teePrice}
								box3Price={pinkHoodPrice}
								box4Price={hoodPrice}
								box5Price={sackPrice}
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
								box1={LeftHat}
								box1Text='Hat'
								box2Text='Hat'
								box3Text='Hat'
								box4Text='Kids Tee / Kids Shorts '
								box5Text='Shorts'
								box2={RightHat}
								hatTrue={true}
								box3={FrontHat}
								box1Price={hatPrice}
								box2Price={hatPrice}
								box3Price={hatPrice}
								box4Price={kidsTeePrice}
								box5Price={shortPrice}
								zoomBox={BlackTeeChuck}
								shadowBox={ShortsSide}
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
								box1={SackBlue}
								box2={SackPink}
								box3={SackBlack}
								hatTrue={true}

								box1Text='Rucksack'
								box2Text='Rucksack'
								box3Text='Rucksack'
								box1Price={ruckSackPrice}
								box2Price={ruckSackPrice}
								box3Price={ruckSackPrice}
							/>
						</Row>
					</Fade>
				</Col>
				<Col md={2} />
			</Row>
			{/*FOOTER SECTION */}

			<Row style={styleDiv2}>
				<Footer />
			</Row>
		</Container>
	)
}

const styleDiv2 = {
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
}

export default Merch
