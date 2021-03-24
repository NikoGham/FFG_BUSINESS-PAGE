import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Nav from 'react-bootstrap/Nav'
import Collapse from 'react-bootstrap/Collapse'

const CardsMem = ({ header, image, stats, ach }) => {
 //  const [tabState, setTabState] = useState({
 //   className1: '',
 //   className2: 'hide',
 //   className3: 'hide',
 //  })

 const [openA, setOpenA] = useState(false)
 const [openS, setOpenS] = useState(true)

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
   <Card className='cardAth childrenText ' bg='dark' text='light' border='dark'>
    <Card.Header as='h4'>{header}</Card.Header>
    <div className='profileImgOut'>
     <Card.Img className='profileImgIn' variant='top' src={image} style={{ height: 'auto' }} />
    </div>

    <Card.Header>
     <Nav justify variant='tabs' defaultActiveKey='#first'>
      <Nav.Item>
       <Nav.Link
        href='#first'
        onClick={() => {
         // eslint-disable-next-line
         {
          openA ? setOpenA(!openA) : console.log(openA)
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
        href='#Achievements'
        onClick={() => {
         // eslint-disable-next-line
         {
          openS ? setOpenS(!openS) : console.log(openS)
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
       <Card.Text style={{ color: 'white', textDecoration: 'none' }}>
        {stats.map((stat) => (
         <div>
          <i class='fas fa-angle-double-right'></i>
          <li style={{ display: 'inline' }} key={stat.id}>
           {stat.stat}
          </li>
         </div>
        ))}
       </Card.Text>
      </div>
     </Collapse>

     <Collapse in={openA}>
      <div id='collapse-text'>
       <Card.Text style={{ color: 'white', textDecoration: 'none' }}>
        {ach.map((el) => (
         <div>
          <i class='far fa-check-circle'></i>

          <li style={{ display: 'inline' }} key={el.id}>
           {el.ach}
          </li>
         </div>
        ))}
       </Card.Text>
      </div>
     </Collapse>
    </Card.Body>
   </Card>
  </CardDeck>
 )
}

export default CardsMem
