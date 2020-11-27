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
						<Flash duration={10000} delay={2100} cascade>
							<h1 className='heading-background'>FULL FAT </h1>
						</Flash>
					</Col>
				</Row>
				<Row>
					<Col md={12}>
						<Flash duration={10000} delay={2100} cascade>
							<h1>
								<span id='grappleStyle'>GRAPPLING</span>
							</h1>
						</Flash>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Header;
