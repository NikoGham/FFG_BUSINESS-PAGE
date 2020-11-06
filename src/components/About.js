import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import child from '../assets/CHILD_PHOTO.jpg';
import child1 from '../assets/Adult.jpg';

import data from '../yourdata';

class About extends Component {
	state = {
		title: ''
	};

	render() {
		const honor = data.abouttextlist;
		const honorList = honor.map((item, index) => (
			<h4 key={index}>
				{item}
				<hr />
			</h4>
		));

		const headerStyle = {
			margin: '3rem',
			fontFamily: 'MoykoTitle',
			color: 'var(--blackJapPalette)'
		};

		const styleList = {
			color: 'var(--creamJapPalette)',
			fontFamily: 'Nanum Myeongjo, serif',
			fontSize: '200%',
			textTransform: 'touppercase',
			listStyle: 'none'
		};

		return (
			<Container className='childrenBG' fluid>
				<Row>
					<Col>
						<div className='about'>
							<Fade left cascade>
								<h1 style={headerStyle}> {this.state.title}</h1>
							</Fade>
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={2} />
					<Col>
						<div className='about-content'>
							<Fade left slow>
								<p>
									Welcome to Full Fat Grappling. <br></br> 
									<hr></hr>
									The home of great ambition and high
									expectation. Our focus is to benefit anyone in any grappling sport, specialising in
									the Olympic sport of JUDO.
								</p>
								<Row>
									<Col>
										<div>
											<Image src={child} alt='Child Throw in Judo' thumbnail />
										</div>
									</Col>
									<Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
										<ul style={styleList}> {honorList} </ul>
									</Col>
								</Row>
								<Row>
									<Col>
										<p>{data.abouttext21}</p>
										<hr />

										<p>{data.abouttextQuote}</p>

										<Image src={child1} alt='Child Throw in Judo' thumbnail />

										<p>{data.abouttext3}</p>
										<hr />
										<p>{data.abouttext31}</p>
										<Image src={child1} alt='Child Throw in Judo' thumbnail />

										<p>{data.abouttext4}</p>
									</Col>
								</Row>
							</Fade>
						</div>
					</Col>
					<Col md={2} />
				</Row>
			</Container>
		);
	}
}

export default About;
