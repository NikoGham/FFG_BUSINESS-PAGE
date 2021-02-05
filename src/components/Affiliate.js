import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Row } from 'react-bootstrap';
import Blob from './subcomponents/blob1';
import Affiliateitem from './AffiliateItem';
import image from '../assets/CEA.png'

// import headImage from '../assets/31731.jpg'
import Footer from './Footer';

class Affiliate extends Component {
	state = {
		headText:
			'We are proud to work with our affiliates. Through mutual aid, benefit and trust, they help our athletes walk the path to success.',
		subText:
			' Our head coach Matthew Hucker holds full First Aid, Child Protection, DBS certification and club insurance.',
		subsubText:
			'Full Fat Grappling holds full membership with Britsh Judo Council and the UKBJJA.We believe in taking the difficult route to attain higher grade classification, providing for better development of fundamentals and technique.'
	};

	render() {
		return (
			<div className='childrenBG'>
				{/* <header>
					<img
						src={headImage}
						alt='Background'
						id='aboutImageBg'
					/>
				</header> */}
				<Blob />

				<div id='aboutTitle'>
					<Fade left cascade>
						<h1>Affiliates</h1>
					</Fade>
				</div>
				<div className='about-contentAff'>
					<div id='headContainerAff'>
						<Fade right slower>
							<div id='headParaContainerAff'>
								<p id='headParaAff'>
									{this.state.headText}
									<br />
									<br /> {this.state.subText} <br /> <br />
									{this.state.subsubText}
								</p>
							</div>
						</Fade>
					</div>

					<Fade left slow>
						<Affiliateitem title={"Clubs"} text={"Craig Ewer's Academy"} image={image} />
					</Fade>
					<Fade left slower>
						<Affiliateitem text={null} />
					</Fade>
					<Fade left slower>
						<Affiliateitem text={null} />
					</Fade>
				</div>

				<Row style={styleDiv}>
					<Footer />
				</Row>
			</div>
		);
	}
}

const styleDiv = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	height: '8vh'
};

export default Affiliate;
