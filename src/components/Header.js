import React, { useState, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Fade from 'react-reveal/Fade'

import Particles from './subcomponents/Particles'

const Header = () => {
 const [isMobile, setMobile] = useState(false)

 useEffect(() => {
    if (window.innerWidth < 500) {
        setMobile(true)
       }
 }, [])


 const [loaded, setLoaded] = useState(false)

 window.onload = () => {
  setLoaded(true)
 }

 return (
  <div className='homeBG'>
   {isMobile? null : <Particles />}

   {!loaded && <Spinner animation='border' variant='warning' />}
   {loaded && <p id='hucker-title'>Matthew Hucker's</p>}
   {loaded && (
    <Fade duration={3000}>
     <h1 id='fullFatTitle'>FULL FAT </h1>
    </Fade>
   )}
   {loaded && (
    <Fade delay={1000} duration={3000}>
     <h1 id='grappleStyle'>GRAPPLING</h1>
    </Fade>
   )}
  </div>
 )
}

export default Header
