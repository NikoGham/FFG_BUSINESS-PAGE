import React from 'react';
import Image from 'react-bootstrap/Image';

const Affiliateitem = ({ className, text, image, club, web, inst, fb }) => {
	return (
		<div className='affItem'>
			<div className='gridText'>
				{text}
				{club && (
					<ul>
						<li>Head Coach: Craig Ewers</li>
						<li>
							<i class='fas fa-home' /><a href={web}>{web}</a>
						</li>
						<li>
							<i className='fab fa-instagram ' />{inst}
						</li>
						<li>
							<i className='fab fa-facebook ' />{fb}
						</li>
					</ul>
				)}
			</div>

			<div>
				<Image className={className} src={image} alt='Logo' />
			</div>
		</div>
	);
};

export default Affiliateitem;
