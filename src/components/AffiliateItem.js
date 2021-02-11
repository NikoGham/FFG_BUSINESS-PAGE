import React from 'react';
import Image from 'react-bootstrap/Image';

const Affiliateitem = ({ className, text, image, club, web, inst, fb }) => {
	return (
		<div className='affItem'>
			<div className='gridText'>
				<h4>{text}</h4>
				{club && (
					<ul>
						<li>Head Coach: Craig Ewers</li>
						<li>
							<i class='fas fa-home' />
							<a target='_blank' rel='noopener noreferrer' href={web}>
								{' '}
								craigewersacademy.co.uk
							</a>
						</li>
						<li>
							<i className='fab fa-instagram ' />

							<a target='_blank' rel='noopener noreferrer' href={inst}>
								{' '}
								@ce_mma_
							</a>
						</li>
						<li>
							<i className='fab fa-facebook ' />

							<a target='_blank' rel='noopener noreferrer' href={fb}>
								{' '}
								/craigewersacademy
							</a>
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
