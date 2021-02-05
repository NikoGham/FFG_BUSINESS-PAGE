import React from 'react';
import Image from 'react-bootstrap/Image'

const Affiliateitem = ({title, text, image}) => {
	return (
		<div className='affItem'>
			<h1>{title}</h1>
			<div className='gridText'>{text}</div>
			<div className='gridImage'><Image className='imageAboutAff' src={image} alt='Logo' /></div>
		</div>
	);
};

export default Affiliateitem;
