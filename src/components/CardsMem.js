import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button'

function CardsMem({ header1, header2, header3, image1 }) {
	return (
		<div>
			<CardDeck>
				<Card>
					<Card.Img variant='top' src={image1} />
					<Card.Body>
						<Card.Title>{header1} <hr></hr></Card.Title>
						<Card.Text>

							<p>Child - 4 Sessions per month - £20 </p>
							<p>Adult - 4 Sessions per month - £30 </p>						
						
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className='text-muted'>Enquire...</small>
						<Button></Button>
					</Card.Footer>
				</Card>
				<Card>
					<Card.Img variant='top' src='holder.js/100px160' />
					<Card.Body>
						<Card.Title>{header2}<hr></hr></Card.Title>
						<Card.Text>
							This card has supporting text below as a natural lead-in to additional content.{' '}
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className='text-muted'>Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>
				<Card>
					<Card.Img variant='top' src='holder.js/100px160' />
					<Card.Body>
						<Card.Title>{header3}</Card.Title>
						<Card.Text>
			
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className='text-muted'>Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>
			</CardDeck>
		</div>
	);
}

export default CardsMem;
