import React, { Component } from 'react'

import Particles from './subcomponents/Particles'

class Header extends Component {
	state = {}

	render() {
		return (
			<div className='homeBG'>
				<Particles />
				<p id='hucker-title'>Matthew Hucker's</p>

				<h1 id='fullFatTitle'>FULL FAT </h1>

				<h1 id='grappleStyle'>GRAPPLING</h1>
			</div>
		)
	}
}

export default Header
