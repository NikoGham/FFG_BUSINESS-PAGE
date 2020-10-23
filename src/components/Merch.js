import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'reactstrap';

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
						<div className=''>
							<h1>
								<Fade left slow cascade>
									<h1 style={headerStyle}>
										{' '}
										{this.state.title} <hr />
									</h1>
								</Fade>
							</h1>
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={2} />
					<Col>
						<Fade left slow>
							<p />
							<Row>
								<Col />
								<Col />
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
