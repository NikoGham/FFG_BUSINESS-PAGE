import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';

function CardsMem({ header1, header2, image1, image2 }) {
	return (
		<CardDeck>
			<Card className='subTextFont cardText ' bg='dark'>
				<Card.Img variant='top' src={image1} />
				<Card.Body>
					<Card.Title>
						{header1} <hr />
					</Card.Title>
					<Card.Text id='cardMemPriceText'>
						Child - 4 Sessions per month - £20 <br></br>
						Adult - 4 Sessions per month - £30 
					</Card.Text>
				</Card.Body>

				<Card.Footer>
					<Button style={style} variant='warning'>
						Enquire
					</Button>
				</Card.Footer>
			</Card>
			<Card className='subTextFont cardText ' bg='dark'>
				<Card.Img variant='top' src={image2} />
				<Card.Body>
					<Card.Title>
						{header2}
						<hr />
					</Card.Title>
					<Card.Text id='cardMemPriceText'>
						Child - Access All Sessions - £40 <br></br>
						Adult - Access All Sessions - £60 
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Button style={style} variant='warning'>
						Enquire
					</Button>
				</Card.Footer>
			</Card>
		</CardDeck>
	);
}

const style = {
	width: '75%',
	height: ''
};

export default CardsMem;
