import React from 'react'
import Fade from 'react-reveal/Fade'
import Footer from './Footer'
import { Container, Row, Col } from 'react-bootstrap'
import AthleteCard from './subcomponents/AthleteCard'

import data from './data/athleteData'
import image3 from '../assets/oc.jpg'
import image1 from '../assets/ng.jpg'
import image2 from '../assets/ch.jpg'
import image0 from '../assets/mh.jpg'
import image4 from '../assets/wa.jpg'
import image5 from '../assets/jd.jpg'
import image6 from '../assets/char1.jpeg'
import image7 from '../assets/char2.jpeg'
import image8 from '../assets/hazzer.jpeg'

const Athletes = () => {
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
    <Col id='rightLine'>
     <Row>
      <Col lg={1} />
      <Col lg={5}>
       <AthleteCard
        header={data.cardData[0].name}
        image={image0}
        stats={data.cardData[0].stats}
        grades={data.cardData[0].grades}
        ach={data.cardData[0].ach}
       />
      </Col>
      <Col lg={5}>
       <AthleteCard
        header={data.cardData[5].name}
        image={image5}
        stats={data.cardData[5].stats}
        grades={data.cardData[5].grades}
        ach={data.cardData[5].ach}
       />
      </Col>
     </Row>
     <Row>
      <Col lg={1} />

      <Col lg={5}>
       <AthleteCard
        header={data.cardData[1].name}
        image={image1}
        stats={data.cardData[1].stats}
        grades={data.cardData[1].grades}
        ach={data.cardData[1].ach}
       />
      </Col>
      <Col lg={5}>
       <AthleteCard
        header={data.cardData[6].name}
        image={image8}
        stats={data.cardData[6].stats}
        grades={data.cardData[6].grades}
        ach={data.cardData[6].ach}
       />
      </Col>
     </Row>
     <Row>
      <Col lg={1} />

      <Col lg={5}>
       <AthleteCard
        header={data.cardData[7].name}
        image={image7}
        stats={data.cardData[7].stats}
        grades={data.cardData[7].grades}
        ach={data.cardData[7].ach}
       />
      </Col>
      <Col lg={5}>
       <AthleteCard
        header={data.cardData[8].name}
        image={image6}
        stats={data.cardData[8].stats}
        grades={data.cardData[8].grades}
        ach={data.cardData[8].ach}
       />
      </Col>
     </Row>
    </Col>

    <Col>
     <Row>
      <Col lg={1} />

      <Col lg={5}>
       <AthleteCard
        header={data.cardData[2].name}
        image={image2}
        stats={data.cardData[2].stats}
        grades={data.cardData[2].grades}
        ach={data.cardData[2].ach}
       />
      </Col>
      <Col lg={5}>
       <AthleteCard
        header={data.cardData[3].name}
        image={image3}
        stats={data.cardData[3].stats}
        grades={data.cardData[3].grades}
        ach={data.cardData[3].ach}
       />
      </Col>
     </Row>
     <Row>
      <Col lg={1} />

      <Col lg={5}>
       <AthleteCard
        header={data.cardData[4].name}
        image={image4}
        stats={data.cardData[4].stats}
        grades={data.cardData[4].grades}
        ach={data.cardData[4].ach}
       />
      </Col>
     </Row>
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
