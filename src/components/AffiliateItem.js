import React, {useState, useEffect} from 'react';
import Image from 'react-bootstrap/Image';

const Affiliateitem = ({ className, text, image, club, web, inst, fb }) => {

	const [isBig, setIsBig] = useState(false)

	useEffect(()=> {
		if(window.innerWidth > 500) {
			setIsBig(true)
		} else {
			setIsBig(false)
		}
	}, [])

	return (
		<div className='affItem'>
			<div className='gridText'>
				<h4 className={ club && "clubTitleAff"}>{text}</h4><div>

			</div>
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
			{((isBig) | (!club) )&& <Image className={className} src={image} alt='Logo' />}



		</div>
	);
};

export default Affiliateitem;
