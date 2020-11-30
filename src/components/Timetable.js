import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Footer from './Footer';
import { Container, Row, Col, Table } from 'react-bootstrap';


class Child extends Component {
	render() {
		return (
			<Container className='childrenBG' fluid>
				{/*CAROSEL BACKGROUND TOP SECTION */}

				<Row >
				
				</Row>
				{/*CONTENT SECTION */}

				<Row>
					<Col>
						<div  style={{}}>
							<Fade left>
								<h1 id="memTitle">Timetable </h1>
                <hr style={{width: "25%", margin: "auto"}} />
							</Fade>
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={2} />
					<Col className='childrenText' md={8}>
						<Fade left slow>
            <Table className="tablebg" hover striped size="sm" bordered responsive variant="dark" >
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
						</Fade>
						<Fade left slow>
							<p>
								An apple is an edible fruit produced by an apple tree (Malus domestica). Apple trees are
								cultivated worldwide and are the most widely grown species in the genus Malus. The tree
								originated in Central Asia, where its wild ancestor, Malus sieversii, is still found
								today. Apples have been grown for thousands of years in Asia and Europe and were brought
								to North America by European colonists. Apples have religious and mythological
							
							</p>
							<hr />
						</Fade>
					</Col>
					<Col md={2} />
				</Row>
				{/*FOOTER SECTION */}
				<Row style={FooterContainer}>
					<Row style={styleDiv}>
						<Footer />
					</Row>
					<Row style={styleDiv2}>
						<p>
							
							Full Fat Grappling, Pratten's Charlton La, Radstock BA3 4BD, United Kingdom| 07877 816 749 |
							info@fullfatgrappling.com
						</p>
					</Row>
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
	position: 'static',
	width: 'auto',
	bottom: '0px',
	display: 'flex',
	justifyContent: 'center'
};




export default Child;
