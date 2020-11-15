import React from 'react';

const Footer = () => {
	return (
		<div>
			<a style={style} target='_blank' rel='noopener noreferrer' href={'https://www.instagram.com/fullfatjudo/'}>
				<i className='fab fa-instagram linkSocial' />
			</a>

			<a
				style={style}
				target='_blank'
				rel='noopener noreferrer'
				href={'https://www.youtube.com/channel/UCRJJTwwSe01lx7-yKlUePhg/'}
			>
				<i className='fab fa-youtube linkSocial' />
			</a>

			<a
				className='linkSocial'
				style={style}
				target='_blank'
				rel='noopener noreferrer'
				href={'https://www.instagram.com/fullfatjudo/'}
			>
				<i className='fab fa-facebook linkSocial' />
			</a>
		</div>
	);
};

const style = {
	paddingLeft: '3rem',
	paddingRight: '3rem'
};



export default Footer;
