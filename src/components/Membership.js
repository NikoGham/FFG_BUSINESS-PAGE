import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Footer from './Footer'
import { Container, Row, Col } from 'react-bootstrap'
import CardsMem from './subcomponents/CardsMem'

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
								header1={'Standard'}
								image1={'./assets/standard.jpg'}
								header2={'Premium'}
								image2={'./assets/5.jpg'}
							/>
						</Fade>
					</Col>
					<Col md={3} />
				</Row>
				<Row>
					<Col />
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
