import React from 'react'
import Fade from 'react-reveal/Fade'
import Footer from './Footer'
import { Container, Row, Col } from 'react-bootstrap'
import AthleteCard from './subcomponents/AthleteCard'
import data from './data/athleteData'
import image1 from '../assets/oc.png'
import image2 from '../assets/ng.png'

const Athletes = () => {

const length = data.cardData.length
let i;
for(i=0;i<length;i++){
	

}


 return (
  <Container className='childrenBG' fluid>
   <Row>
    <Col>
     <Fade left cascade>
      <h1 id='memTitle'>Athlete Profiles</h1>
     </Fade>
    </Col>
   </Row>
   {/* Athelete Cards */}
   <Row>

    <Col>
     <AthleteCard header={data.cardData[0].name} image={image2} stats={data.cardData[0].stats} grades={data.cardData[0].grades} ach={data.cardData[0].ach} />
    </Col>
    <Col>
     <AthleteCard header='title' image={image1} />
    </Col>
    <Col>
     <AthleteCard header='title' image={image1} />
    </Col>
   </Row>

   {/*FOOTER SECTION */}

   <Row className='footerDrop'>
    <Footer />
   </Row>
  </Container>
 )
}

export default Athletes
