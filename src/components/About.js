import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import child from '../assets/CHILD_PHOTO.jpg';
import data from '../yourdata';

class About extends Component {
	state = {
		title: 'About'
	};

	render() {
		const honor = data.abouttextlist;
		const honorList = honor.map((item, index) => <h4 key={index}>{item}<hr /></h4>);

		const headerStyle = {
			margin: '3rem',
			fontFamily: 'MoykoTitle',
			color: 'var(--blackJapPalette)'
		};

		const styleList = {
			color: 'var(--blackJapPalette)',
			fontFamily: 'MoykoTitle',
			listStyle: 'none'
		};

		
		return (
			<Container className='aboutBG' fluid>
				<Row>
					<Col>
							<div className='about'>
							<Fade left cascade>
									<h1 style={headerStyle}>
										{' '}
										{this.state.title} <hr />
									</h1>
								</Fade>
							
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={2} />
					<Col>
						<div className='about-content'>
							<Fade left slow>
								<p>{data.abouttext}</p>
								<Row>
									<Col>
										<div>
											<Image src={child} alt='Child Throw in Judo' thumbnail />
										</div>
									</Col>
									<Col style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
										<ul style={styleList}> {honorList} </ul>
									</Col>
								</Row>
								<Row>
									<p>{data.abouttext21}</p>
									<p>{data.abouttextQuote}</p>

									<p>{data.abouttext3}</p>
									<p>{data.abouttext31}</p>
									<p>{data.abouttext4}</p>
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
