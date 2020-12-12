import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';
import data from '../yourdata';
import Particles from './subcomponents/Particles'
import { Container, Row, Col } from 'react-bootstrap'

class Header extends Component {
	state = {};

	render() {
		return (
			<Container className='homeBG' fluid>
				<Particles />
				<Row>
					<Col>
						<p className='header-title'>
							<Fade duration={5000} delay={2000}>
								<span className='nameHeader'>{data.headerTagline[0]}</span>
							</Fade>
						</p>
					</Col>
				</Row>

				<Row>
					<Col md={12}>
						<Flash  delay={2100} >
							<h1 className='heading-background'>FULL FAT </h1>
						</Flash>
					</Col>
				</Row>
				<Row>
					<Col md={12}>
						<Flash  delay={2100} >
							<h1 id='grappleStyle'>
								GRAPPLING
							</h1>
						</Flash>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Header;
