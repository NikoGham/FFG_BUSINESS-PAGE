import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import MerchCarousel from './MerchCarousel';

class Merch extends Component {
	state = {
		title: 'Merchandise'
	};
	render() {
		const headerStyle = {
			margin: '3rem'
		};

		return (
			<Container fluid>
				<Row>
					<Col>
						<Fade left slow cascade>
							<h1 style={headerStyle}>
								{' '}
								{this.state.title} <hr />
							</h1>
						</Fade>
					</Col>
				</Row>
				<Row>
					<Col md={2} />
					<Col>
						<Fade left slow>
							<Row>
								<MerchCarousel />
							</Row>
						</Fade>
					</Col>
					<Col md={2} />
				</Row>
			</Container>
		);
	}
}

export default Merch;
