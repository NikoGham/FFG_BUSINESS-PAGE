import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import child from '../assets/CHILD_PHOTO.jpg';
import child1 from '../assets/Adult.jpg';
import headImage from '../assets/17.jpg';
import Footer from './Footer';

import data from '../yourdata';

class About extends Component {
	state = {
		title: 'CREED'
	};

	// Small notes - Bring 1st image in so more symmetrical. Grey out more when on menu. Change Japanese Characters to red jap color pallette.
	// Coding => How can I achieve a task and win a battle with the skills and tools I currently know and/or can discover and learn.

	render() {
	
		const styleList = {
			fontFamily: 'Montserrat',

			listStyle: 'none'
		};

		return (
			<Container className='childrenBG' fluid>
				{/* Header */}
				<header className='' style={{ maxWidth: 1500 }} id='home'>
					<img
						className=''
						src={headImage}
						alt='Architecture'
						style={{ height: '100vh', width: '100%', opacity: 0.2, position: 'fixed', zIndex: '0' }}
					/>
				</header>

				<Row>
					<Col>
						<div className='about'>
							<Fade left cascade>
								<h1> {this.state.title}</h1>
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
								<Col sm={1} />
									<Col sm={6}>
										<div>
											<Image src={child} alt='Child Throw in Judo' thumbnail />
										</div>
									</Col>
									<Col
										sm={true}
										style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
									>
										<ul style={styleList}>
											<li>Courtesy <span className="specChars">礼儀</span> </li>
											<hr /> 
											<li>Courage <span className="specChars">勇気</span></li>
											<hr />
											<li> Honesty <span className="specChars">正直</span> </li>
											<hr />
											<li>Honour <span className="specChars">名誉</span> </li>
											<hr />
											<li> Modesty <span className="specChars">謙虚</span> </li>
											<hr />
											<li> Respect <span className="specChars">尊敬 </span></li>
											<hr />
											<li>Self Control <span className="specChars">自制心</span> </li>
											<hr />
											<li> Friendship <span className="specChars">友情</span> </li>
											<hr />
										</ul>
									</Col>
									<Col sm={1} />

								</Row>
							</Fade>

							<Row>
								<Col>
									<Fade left slow>
										<p>{data.abouttext21}</p>
										<hr />
									</Fade>
									<Fade right slow>
										<p>{data.abouttextQuote}</p>
									</Fade>
									<Fade left slow>
										<Image src={child1} alt='Child Throw in Judo' thumbnail />
									</Fade>
									<Fade right slow>
										<p>{data.abouttext3}</p>
									</Fade>

									<Fade left slow>
										<p>{data.abouttext4}</p>
										<hr />
									</Fade>
								</Col>
							</Row>
						</div>
					</Col>
					<Col md={2} />
				</Row>

				<Row style={styleDiv}>
					<Footer />
				</Row>
			</Container>
		);
	}
}

const styleDiv = {
	backgroundColor: 'var(--goldGrappFont)',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	height: '8vh'
};

export default About;
