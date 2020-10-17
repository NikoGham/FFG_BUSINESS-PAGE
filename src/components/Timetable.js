import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Footer from './Footer';
import { Container, Row, Col, Table } from 'reactstrap';

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
          <Col>
          <Table hover>
      <thead>
        <tr>
          <th></th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
          </Col>
        </Row>
        <Row>
          <Col >
          <Footer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Timetable;
