import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Footer from './Footer';
import { Container, Row, Col, Table } from 'react-bootstrap';

class Timetable extends Component {
  render() {

    const headerStyle = {
      margin: "3rem",
     };

    return (
      <Container fluid>
        <Row>
          <Col>
            <div>
              <Fade left>
                <h1 style={headerStyle}>Timetable <hr /></h1>
                
              </Fade>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={2}></Col>
          <Col >
          <Table hover striped bordered variant="dark" size="sm">
      <thead>
        <tr>
          <th></th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <th scope="row" >6:00 - 7:00</th>
          <td></td>
          <td>Full Time Athletes - Adult</td>
          <td></td>
          <td>Full Time Athletes - Adult</td>
          <td></td>
          <td></td>
          <td>Full Time Athletes - Adult</td>
        </tr>
        <tr>
          <th scope="row">16:30 - 17:15</th>
          <td></td>
          <td>Judo PT </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">17:00 - 17:45</th>
          <td>Child Athletes - Judo - 5-8yrs</td>
          <td></td>
          <td></td>
          <td>Judo PT</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">18:00 - 18:45</th>
          <td>Child Athletes - Judo - 8-13yrs</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">18:00 - 19:00</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td> Power and Agility </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">18:00 - 19:20</th>
          <td></td>
          <td>Mobility and Core</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          
        </tr>
       
        
      </tbody>
    </Table>
          </Col>
          <Col xs={2}>
            
          </Col>
        </Row>
        
        <Row >
        <Col md={{span: 12}}>
        <Footer />

        </Col>
        </Row>
      </Container>
    );
  }
}

export default Timetable;
