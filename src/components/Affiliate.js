import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import { Row } from 'react-bootstrap'


import headImage from '../assets/17.jpg'
import Footer from './Footer'

class Affiliate extends Component {

    state = {
        headText: "We are proud to work with our affiliates who through mutual aid, benefit and trust, help our athletes walk the path to greatness.",
        subText: "Our head coach Matthew hucker holds full First Aid, Child Protection, DBS certification and club insurance.",
        subsubText: "Full Fat Grappling holds full membership with Britsh Judo Council and the UKBJJA."
    }




	render() {
		return (
			<div className='childrenBG'>
				<header>
					<img
						src={headImage}
						alt='Background'
						id='aboutImageBg'
					/>
				</header>

				<div id='aboutTitle'>
					<Fade left cascade>
						<h1>Affiliates</h1>
					</Fade>
				</div>
				<div className='about-content'>
					<div id='headContainerAff'>

						<Fade right slower>
							<div id='headParaContainerAff'>
								<p id='headParaAff'>
								{this.state.headText}<br />
									<br /> {this.state.subText} <br /> <br />
                                    {this.state.subsubText}
								</p>
							</div>
						</Fade>
					</div>

					<Fade left slow>
						<div className='imageContainerAbout'>
							<p>
							 <br /> <br />

							</p>
						</div>
					</Fade>
					<Fade left slow>
						<div className='imageContainerAbout'>

						</div>
					</Fade>

					<Fade left slow>
						<div className='imageContainerAbout'>
						</div>
					</Fade>

					<Fade left slow>
						<div className='imageContainerAbout'>
							<p id='bottomTextAbout'></p>
						</div>
					</Fade>
				</div>

				<Row style={styleDiv}>
					<Footer />
				</Row>
			</div>
		)
	}
}

const styleDiv = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	height: '8vh'
}

export default Affiliate
