import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import data from '../yourdata';

const Footer = () => {
  const listStyleFoot = {
    listStyle: 'none',
    float:"left", 
    color: '#ffffff', 
    position: 'absolute', 
  };

  const styleLink = {
    listStyle: 'none',
    color: '#ffffff', 
    position: 'absolute',
    left: '0.5em'
  };

 

  return (
    <Container fluid className="footer-sdd">
      <Row>
        <Col >
          <ul style={listStyleFoot}>
            {data.social.map((link, index) => (
              <li key={index} >
                <a  target="_blank" rel="noopener noreferrer" href={link.url}>
                  {link.name} <i className="fab fa-instagram linkSocial"></i>
                </a>
              </li>
            ))}
          </ul>
        </Col>
        <Col></Col>
      
        <Col auto>
          <span className="footer-link
          ">
            Crafted by
            <a target={"_blank"} href="https://www.nickgillham.co.uk"> Nick @ Small Dog Designs</a>
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
