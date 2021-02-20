import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Nav from 'react-bootstrap/Nav'
import Collapse from 'react-bootstrap/Collapse'

const CardsMem = ({ header, image, stats, grades,ach }) => {
 //  const [tabState, setTabState] = useState({
 //   className1: '',
 //   className2: 'hide',
 //   className3: 'hide',
 //  })

 const [openA, setOpenA] = useState(false)
 const [openS, setOpenS] = useState(true)
 const [openG, setOpenG] = useState(false)

 //  const { className1, className2, className3 } = tabState

 //  const onclickSta = () => {
 //   setTabState({ ...tabState, className1: '', className2: 'hide', className3: 'hide' })
 //  }

 //  const onclickGra = () => {
 //   setTabState({ ...tabState, className1: 'hide', className2: '', className3: 'hide' })
 //  }

 //  const onclickAch = () => {
 //   setTabState({ ...tabState, className1: 'hide', className2: 'hide', className3: '' })
 //  }

 return (
  <CardDeck>
   <Card className='cardAth text-center' bg='dark' text='light' border='dark'>
    <Card.Header as='h4'>{header}</Card.Header>
    <Card.Img variant='top' src={image} />
    <Card.Header>
     <Nav justify variant='tabs' defaultActiveKey='#first'>
      <Nav.Item>
       <Nav.Link
        href='#first'
        onClick={() => {
         // eslint-disable-next-line
         {
          openA
           ? setOpenA(!openA)
           : console.log(openA) || openG
           ? setOpenG(!openG)
           : console.log(openG)
         }

         setOpenS(!openS)
        }}
        aria-controls='collapse-text'
        aria-expanded={openS}
       >
        Stats
       </Nav.Link>
      </Nav.Item>
      <Nav.Item>
       <Nav.Link
        href='#grades'
        onClick={() => {
         // eslint-disable-next-line
         {
          openS
           ? setOpenS(!openS)
           : console.log(openS) || openA
           ? setOpenA(!openA)
           : console.log('Ready to rock and roll')
         }
         setOpenG(!openG)
        }}
        aria-controls='collapse-text'
        aria-expanded={openG}
       >
        Grades
       </Nav.Link>
      </Nav.Item>
      <Nav.Item>
       <Nav.Link
        href='#third'
        onClick={() => {
         // eslint-disable-next-line
         {
          openS
           ? setOpenS(!openS)
           : console.log(openS) || openG
           ? setOpenG(!openG)
           : console.log(openG)
         }
        setTimeout(setOpenA(!openA), 5000)
        }}
        aria-controls='collapse-text'
        aria-expanded={openA}
       >
        Achievements
       </Nav.Link>
      </Nav.Item>
     </Nav>
    </Card.Header>
    <Card.Body>
     {/* <Card.Subtitle className="m-2 text-muted">Card Subtitle</Card.Subtitle> */}
     <Collapse in={openS}>
      <div id='collapse-text'>
       <Card.Text>{stats}</Card.Text>
      </div>
     </Collapse>
     <Collapse in={openG}>
      <div id='collapse-text'>
       <Card.Text>{grades}</Card.Text>
      </div>
     </Collapse>
     <Collapse in={openA}>
      <div id='collapse-text'>
       <Card.Text>{ach}</Card.Text>
      </div>
     </Collapse>
    </Card.Body>
   </Card>
  </CardDeck>
 )
}

export default CardsMem
