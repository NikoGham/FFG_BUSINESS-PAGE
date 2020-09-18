import React from 'react';
import { Container, Row, Col } from 'reactstrap';

 const Sidebar = props => {

    return (
      <Container fluid={true}>
        {' '}
        <ul>
          <Row>
            <Col lg={4}></Col>
            <Col lg={4}><li>
              <span onclick="showAbout()">ABOUT</span>
            </li></Col>
            <Col lg={4}></Col>
            
          </Row>

          <br />
          <li>
            <button onclick="showChild()">Child Athletes</button>
          </li>
          <br />
          <li>
            <button onclick="showAdult()">Adult Athletes</button>
          </li>
          <br />
          <li>
            <button onclick="showMember()">Membership</button>
          </li>
          <br />
          <li>
            <button onclick="showTimetable()">Timetable</button>
          </li>
          <br />
          <li>
            <button onclick="showContact()">Contact</button>
          </li>
          <br />
          <li>
            <button onclick="showMerch()">Merch</button>
          </li>
        </ul>
      </Container>
    );
  
}


export default Sidebar;
