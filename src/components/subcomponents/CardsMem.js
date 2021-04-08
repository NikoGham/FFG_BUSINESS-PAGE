import React from "react"
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"

function CardsMem({ header1, header2, header3, image1, image2, image3 }) {
 return (
  <CardDeck>
   <Card className="subTextFont cardText " bg="dark">
    <Card.Img variant="top" src={image1} />
    <Card.Body>
     <Card.Title>
      {header1} <hr />
     </Card.Title>
     <Card.Text id="cardMemPriceText">
      Child - 4 Sessions per month £20 <br></br>
      Adult - 4 Sessions per month £30
     </Card.Text>
    </Card.Body>
   </Card>
   <Card className="subTextFont cardText " bg="dark">
    <Card.Img variant="top" src={image2} />
    <Card.Body>
     <Card.Title>
      {header2}
      <hr />
     </Card.Title>
     <Card.Text id="cardMemPriceText">
      Child - Access all sessions £40 <br></br>
      Adult - Access all sessions £60
     </Card.Text>
    </Card.Body>
   </Card>
   <Card className="subTextFont cardText " bg="dark">
    <Card.Img variant="top" src={image3} />
    <Card.Body>
     <Card.Title>
      {header3}
      <hr />
     </Card.Title>
     <Card.Text id="cardMemPriceText">£40 per hour</Card.Text>
    </Card.Body>
   </Card>
  </CardDeck>
 )
}

export default CardsMem
