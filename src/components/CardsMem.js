import React from 'react';
import {
  Card, CardHeader, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

const Cards = (props) => {
  return (
    <CardDeck >
     <Card className="hoverCard" style={{ backgroundColor: '#333', borderColor: '#333'}}>
  <CardHeader> {props.header1}</CardHeader>
        <CardImg top width="100%" src={props.image1} alt="Card image cap" />
        <CardBody>
          <CardTitle>Full Time</CardTitle>
          <CardSubtitle>£30 Per month</CardSubtitle>
          <CardText>Access All Sessions</CardText>
          
        </CardBody>
      </Card>
      <Card style={{ backgroundColor: '#333', borderColor: '#333' }}>
      <CardHeader> {props.header2}</CardHeader>

        <CardImg top width="75%" src="./assets/1875.jpg" alt="Card image cap" />
        <CardBody>
  <CardTitle>{props.header2}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
        </CardBody>
      </Card>
      <Card style={{ backgroundColor: '#333', borderColor: '#333', width:'75%' }}>
      <CardHeader> {props.header3}</CardHeader>
        <CardImg top width="75%" src="./assets/1875.jpg" alt="Card image cap" />
        <CardBody>
  <CardTitle>{props.header3}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default Cards;
