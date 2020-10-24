import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
 
  const style = {
    padding: "1rem",
  }



 

  return (
    <Container fluid className="footer-sdd">
      <Row>
        <Col md={2} >
          
        </Col>
        <Col>
                <a style={style} target="_blank" rel="noopener noreferrer" href={"https://www.instagram.com/fullfatjudo/"}>
                   <i className="fab fa-instagram linkSocial"></i>
                </a>
           
        
         
          
           
                <a style={style}  target="_blank" rel="noopener noreferrer" href={"https://www.instagram.com/fullfatjudo/"}>
                   <i className="fab fa-youtube linkSocial"></i>
                </a>
         
        
         
      
                <a style={style} target="_blank" rel="noopener noreferrer" href={"https://www.instagram.com/fullfatjudo/"}>
                   <i className="fab fa-facebook linkSocial"></i>
                </a>
           
        
          </Col>
      
        <Col md={2}>
          <span className="footer-link
          ">
            Crafted by
            <a target={"_blank"}  rel="noopener noreferrer" href="https://www.nickgillham.co.uk"> Nick @ Small Dog Designs</a>
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
