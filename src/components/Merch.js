import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import MerchItem from './subcomponents/MerchItem'

class Merch extends Component {
	state = {
		title: 'Merchandise'
	};
	render() {
		

		return (
			<Container className='childrenBG' fluid>
				<Row> {/* TITLE ROW */}
					<Col>
						<Fade left slow cascade>
							<h1 >
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
								<MerchItem />
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
								<MerchItem />
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
								<MerchItem />
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
