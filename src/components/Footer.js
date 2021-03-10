import React from 'react';

const Footer = () => {
	return (
		<div id='FooterContainerDiv'>
			<hr style={{ width: '100%', margin: 'auto' }} />

			<div style={style}>
				<a target='_blank' rel='noopener noreferrer' href={'https://www.instagram.com/ffgrappling/'}>
					<i className='fab fa-instagram linkSocial' />
				</a>

				<a
					target='_blank'
					rel='noopener noreferrer'
					href={'https://www.youtube.com/channel/UCRJJTwwSe01lx7-yKlUePhg/'}
				>
					<i className='fab fa-youtube linkSocial' />
				</a>

				<a target='_blank' rel='noopener noreferrer' href={'https://m.facebook.com/FULLFATGRAPPLING/?refid=17'}>
					<i className='fab fa-facebook linkSocial' />
				</a>
			</div>
			<div>
				<p id='footerText'>
					{' '}
					Full Fat Grappling, Pratten's Charlton La, Radstock BA3 4BD, United Kingdom| 07877 816 749 |
					info@fullfatgrappling.co.uk
				</p>
			</div>
		</div>
	);
};

const style = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-evenly',
	alignContent: 'center',
	margin: '1rem'
};

export default Footer;
