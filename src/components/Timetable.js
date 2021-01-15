import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Footer from './Footer'
import { Container, Row, Col } from 'react-bootstrap'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

class Child extends Component {
	render() {
		return (
			<Container className='childrenBG' fluid>
				{/*CONTENT SECTION */}

				<Row>
					<Col>
						<div>
							<Fade left cascade>
								<h1 id='memTitle'>Timetable </h1>
							</Fade>
						</div>
					</Col>
				</Row>
				{/* TABLE DATA */}
				<Row>
					<Col md={2} />
					<Col className='childrenText' md={8}>
						<Fade left slow>
							<Table className='tablebg'>
								<Thead>
									<Tr>
										<Th>MONDAY</Th>
										<Th>TUESDAY</Th>
										<Th>WEDNESDAY</Th>
										<Th>THURSDAY</Th>
										<Th>FRIDAY</Th>
										<Th>SATURDAY</Th>
										<Th>SUNDAY</Th>
									</Tr>
								</Thead>
								<Tbody>
									{/* ROW 1  */}
									<Tr>
										<Td>N/A</Td>
										<Td>
											6:00-7:00 Full time Athletes <br />17:00-18:00 Child Athletes<br />18:00-19:00 Child
											Athlete PT
										</Td>									
										<Td>N/A</Td>

										<Td>6:00-7:00 Full time Athletes</Td>
										<Td>N/A</Td>
										<Td>N/A</Td>

										<Td>6:00-7:00 Full time Athletes</Td>
									</Tr>
								
								</Tbody>
							</Table>
						</Fade>
						{/* COMMENT DATA */}

						<Fade left slow>
							<p id="timeTableText">
								Regular training was declared essential by Kano in his cornerstone book, the Kodokan.
								The benefits of repeat muscle exposure and mental stimulation provide for the
								foundations to high calibre combat rediness and spiritual personal development.
							</p>
						</Fade>
					</Col>
					<Col md={2} />
				</Row>

				{/*FOOTER SECTION */}

				<Row>
					<Footer />
				</Row>
			</Container>
		)
	}
}


export default Child
