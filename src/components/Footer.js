import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import data from '../yourdata';

const Footer = () => {
  return (
    <Container className="footer-sdd">
      <Row>
        <Col>
          <ul style={listStyleFoot}>
            {data.social.map((link, index) => (
              <li key={index}>
                <a target="_blank" rel="noopener noreferrer" href={link.url}>
                  {link.name} <i className="fab fa-instagram linkSocial"></i>
                </a>
              </li>
            ))}
          </ul>
        </Col>
        <Col md="3">
          <span>
            Crafted by{' '}
            <a href="www.nickgillham.co.uk"> Nick @ Small Dog Designs</a>
          </span>
        </Col>
        <div></div>
      </Row>
    </Container>
  );
};

const listStyleFoot = {
  listStyle: "none"
}

export default Footer;
