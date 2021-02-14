import React, { useState } from 'react'

import Particles from './subcomponents/Particles'

const Header = () => {

 const [loaded, setLoaded] = useState(false)

 window.onload = () => {
	 setLoaded(true)
 }



 return (
  <div className='homeBG'>
   <Particles />

   {loaded && <p id='hucker-title'>Matthew Hucker's</p>}
   <h1 id='fullFatTitle'>FULL FAT </h1>

   <h1 id='grappleStyle'>GRAPPLING</h1>
  </div>
 )
}

export default Header
