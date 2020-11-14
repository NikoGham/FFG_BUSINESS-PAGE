import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import child from '../assets/CHILD_PHOTO.jpg';
import child1 from '../assets/Adult.jpg';
import Footer from './Footer';

import data from '../yourdata';

class About extends Component {
	state = {
		title: 'CREED'
	};

	// Small notes - Bring 1st image in so more symmetrical. Grey out more when on menu. Change Japanese Characters to red jap color pallette.
	// Coding => How can I achieve a task and win a battle with the skills and tools I currently know and/or can discover and learn.

	render() {
		const honor = data.abouttextlist;
		const honorList = honor.map((item, index) => (
			<h4 key={index}>
				{item}
				<hr />
			</h4>
		));

		const headerStyle = {
			fontFamily: 'MoykoTitle',
			color: 'var(--optimalOnBlack)'
		};

		const styleList = {
			fontFamily: 'Nanum Myeongjo, serif',
			fontSize: '100%',
			listStyle: 'none'
		};

		return (
			<Container className='childrenBG' fluid>
				<Row>
					<Col>
						<div className='about'>
							<Fade left cascade>
								<h1> {this.state.title}</h1>
								<hr></hr>
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
									Welcome to FULL FAT GRAPPLING. The home of great ambition and high expectation. Our
									focus is to benefit anyone in any grappling sport, specialising in the Olympic sport
									of JUDO.
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
							</Fade>

							<Row>
								<Col>
									<Fade slow>
										<p>{data.abouttext21}</p>
										<hr />
									</Fade>
									<Fade slow>
										<p>{data.abouttextQuote}</p>
									</Fade>
									<Fade slow>
										<Image src={child1} alt='Child Throw in Judo' thumbnail />
									</Fade>
									<Fade slow>
										<p>{data.abouttext3}</p>
										<hr />
									</Fade>
									<Fade slow>
										<p>{data.abouttext31}</p>
										<Image src={child1} alt='Child Throw in Judo' thumbnail />
									</Fade>
									<Fade slow>
										<p>{data.abouttext4}</p>
									</Fade>
								</Col>
							</Row>
						</div>
					</Col>
					<Col md={2} />
				</Row>

				<Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<Footer />
				</Row>
			</Container>
		);
	}
}

export default About;
