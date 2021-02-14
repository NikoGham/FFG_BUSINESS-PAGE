import React from 'react'
import Fade from 'react-reveal/Fade'
import Footer from './Footer'
import { Container, Row, Col } from 'react-bootstrap'

const  Athletes = () => {

		const headerStyle = {
			margin: '3rem'
		}

		return (
			<Container className='childrenBG' fluid>
				<Row>
					<Col>
						<Fade left cascade>
							<h1 id='memTitle'>Athlete Profiles</h1>
						</Fade>
					</Col>
				</Row>
				<Row>
					<Col md={3} />
					<Col>
						<Fade left duration={1000}>

						</Fade>
					</Col>
					<Col md={3} />
				</Row>
				<Row>
					<Col />
				</Row>
				<Row>
					<Col>
					</Col>
				</Row>
				{/*FOOTER SECTION */}

				<Row style={styleDiv}>
					<Footer />
				</Row>
			</Container>
		)
	}


    const styleDiv = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '8vh'
    };
export default Athletes
