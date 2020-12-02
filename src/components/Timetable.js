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
							Regular training was declared essential by Kano in his cornerstone book, the Kodokan. The benefits of repeat muscle exposure and mental stimulation provide for the foundations to high calibre combat rediness and spiritual personal development. 
							</p>
							<hr />
						</Fade>
					</Col>
					<Col md={2} />
				</Row>
					{/*FOOTER SECTION */}

          <Row style={styleDiv2}>
					<Footer />
				</Row>
			</Container>
		);
	}
}

const styleDiv2 = {
	backgroundColor: 'var(--caramelFont)',
	display: 'flex',
	flexDirection: 'row',

	justifyContent: 'center',
	height: '10vh',
	width: '100vw',
	color: '#000',
	fontFamily: 'Montserrat',
	position: 'relative',
	bottom: '0px',
	marginTop: '10vh'
};


export default Child;
