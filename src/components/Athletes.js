import React from 'react'
import Fade from 'react-reveal/Fade'
import Footer from './Footer'
import { Container, Row, Col } from 'react-bootstrap'
import AthleteCard from './subcomponents/AthleteCard'
import data from './data/athleteData'
import image3 from '../assets/oc.png'
import image1 from '../assets/ng.png'
import image2 from '../assets/ch.png'
import image0 from '../assets/mh.png'

const Athletes = () => {
 const length = data.cardData.length
 var i
 for (i = 0; i < length; i++) {
  console.log(i)
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
     <AthleteCard
      header={data.cardData[0].name}
      image={image0}
      stats={data.cardData[0].stats}
      grades={data.cardData[0].grades}
      ach={data.cardData[0].ach}
     />
    </Col>
    <Col>
     <AthleteCard
      header={data.cardData[1].name}
      image={image1}
      stats={data.cardData[1].stats}
      grades={data.cardData[1].grades}
      ach={data.cardData[1].ach}
     />
    </Col>
    <Col>
     <AthleteCard
      header={data.cardData[2].name}
      image={image2}
      stats={data.cardData[2].stats}
      grades={data.cardData[2].grades}
      ach={data.cardData[2].ach}
     />
    </Col>
   </Row>
   <Row>
    <Col>
     <AthleteCard
      header={data.cardData[3].name}
      image={image3}
      stats={data.cardData[3].stats}
      grades={data.cardData[3].grades}
      ach={data.cardData[3].ach}
     />{' '}
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
