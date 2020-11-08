import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button'

function CardsMem({ header1, header2, image1, image2 }) {
	return (
		<div>
			<CardDeck >
				<Card  bg="light" >
					<Card.Img  variant='top' src={image1} />
					<Card.Body>
						<Card.Title>{header1} <hr></hr></Card.Title>
						<Card.Text>

							<p>Child - 4 Sessions per month - £20 </p>
							<p>Adult - 4 Sessions per month - £30 </p>						
						
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<Button style={style} variant="secondary">Enquire</Button>
					</Card.Footer>
				</Card>
				<Card bg="dark" >
					<Card.Img variant='top' src={image2} />
					<Card.Body>
						<Card.Title>{header2}<hr></hr></Card.Title>
						<Card.Text>
						<p>Child - Access All Sessions - £40 </p>
							<p>Adult - Access All Sessions - £50 </p>						</Card.Text>
					</Card.Body>
					<Card.Footer>
					<Button style={style} variant="secondary" >Enquire</Button>

					</Card.Footer>
				</Card>
			
			</CardDeck>
		</div>
	);
}

const style = {
	width: "50%", 
	height: ""
}

export default CardsMem;
