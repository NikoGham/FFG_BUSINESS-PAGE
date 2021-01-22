import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Footer from './Footer'
import { Container, Row, Col } from 'react-bootstrap'
import CardsMem from './CardsMem'
import image1 from '../assets/4.jpg'
import image2 from '../assets/12.jpg'

class Membership extends Component {
	render() {
		const headerStyle = {
			margin: '3rem'
		}

		return (
			<Container className='childrenBG' fluid>
				<Row>
					<Col>
						<Fade left cascade>
							<h1 id='memTitle'>Memberships </h1>
						</Fade>
					</Col>
				</Row>
				<Row>
					<Col md={3} />
					<Col>
						<Fade left duration={1000}>
							<CardsMem
								header1={'STANDARD'}
								image1={image1}
								header2={'PREMIUM'}
								image2={image2}
							/>
						</Fade>
					</Col>
					<Col md={3} />
				</Row>
				<Row>
					<Col />
				</Row>
				<Row>
					<Col>
						<h2 style={headerStyle}> </h2>
					</Col>
				</Row>
				{/*FOOTER SECTION */}

				<Row style={styleDiv2}>
					<Footer />
				</Row>
			</Container>
		)
	}
}

const styleDiv2 = {
	display: 'flex',
	flexDirection: 'row',

	justifyContent: 'center',
	fontFamily: 'Montserrat',
	position: 'relative',
	bottom: '0px'
}
export default Membership
