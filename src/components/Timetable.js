import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Footer from './Footer';
import { Container, Row, Col, Table } from 'react-bootstrap';

class Timetable extends Component {
  render() {



    return (
      <Container className='childrenBG' fluid>
        <Row>
          <Col>
            <div>
              <Fade left>
                <h1 >Timetable </h1>
                
              </Fade>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={2}></Col>
          <Col >
       
      <Table className=" tablebg" hover striped bordered variant="dark" size="sm">
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
        
      {/*FOOTER SECTION */}
				<Row style={FooterContainer}>
					<Row style={styleDiv}>
						<Footer />
					</Row>
					<Row style={styleDiv2}>
          <p> Full Fat Grappling, Pratten's Charlton La, Radstock BA3 4BD, United Kingdom| 07877 816 749 | info@fullfatgrappling.com</p>					</Row>
				</Row>
      </Container>
    );
  }
}

const styleDiv = {
	backgroundColor: 'var(--goldGrappFont)',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	height: '8vh',
	width: '100%'
};

const styleDiv2 = {
	backgroundColor: 'var(--caramelFont)',
	display: 'flex',
	alignContent: 'center',
	justifyContent: 'center',
	height: '7vh',
	width: '100%',
	color: '#000',
	fontFamily: 'Montserrat'
};

const FooterContainer = {
	backgroundColor: 'var(--caramelFont)',
	position: 'absolute',
	width: '100%',
	bottom: '0px',
	display: 'flex',
	justifyContent: 'center'
};
export default Timetable;
