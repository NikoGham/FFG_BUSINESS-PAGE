import React, { Component } from "react"
import Fade from "react-reveal/Fade"
import { Row } from "react-bootstrap"
import Image from "react-bootstrap/Image"
import child from "../assets/CHILD_PHOTO.jpg"
import child1 from "../assets/Adult.jpg"
import child2 from "../assets/bvsg.jpg"

import headImage from "../assets/17.jpeg"
import Footer from "./Footer"

import data from "../components/data/yourdata"

class About extends Component {
 state = {
  title: "CREED",
 }

 // Small notes - Bring 1st image in so more symmetrical. Grey out more when on menu. Change Japanese Characters to red jap color pallette.

 render() {
  return (
   <div className="childrenBG">
    <header>
     <img src={headImage} alt="Background" id="aboutImageBg" />
    </header>

    <div id="aboutTitle">
     <Fade left cascade>
      <h1>CREED</h1>
     </Fade>
    </div>
    <div className="about-content">
     <div id="headContainer">
      <ul>
       <Fade left slow>
        <li>
         <a style={{color: "white"}}href="https://www.youtube.com/watch?v=Xf2-9eCsYjE"> Courtesy</a> <span className="specChars">礼儀</span>
        </li>
        <hr />
       </Fade>
       <Fade left slow>
        <li>
         Courage <span className="specChars">勇気</span>
        </li>
        <hr />
       </Fade>
       <Fade left slow>
        <li>
         Honesty <span className="specChars">正直</span>
        </li>
        <hr />
       </Fade>

       <Fade left slow>
        <li>
         Honour <span className="specChars">名誉</span>
        </li>
        <hr />
       </Fade>

       <Fade left slow>
        <li>
         Modesty <span className="specChars">謙虚</span>
        </li>
        <hr />
       </Fade>

       <Fade slow left>
        <li>
         Respect <span className="specChars">尊敬 </span>
        </li>
        <hr />
       </Fade>
       <Fade slow left>
        <li>
         Self Control <span className="specChars">自制心</span>
        </li>
        <hr />
       </Fade>
       <Fade slow left>
        <li>
         Friendship <span className="specChars">友情</span>
        </li>
        <hr />
       </Fade>
      </ul>
      <Fade right slower>
       <div id="headParaContainer">
        <p id="headPara">
         Welcome to FULL FAT GRAPPLING. <br /> The home of great ambition and
         high expectation.
         <br />
         <br /> Our focus is to benefit anyone in any grappling sport,
         specialising in the olympic sport of JUDO.
        </p>
       </div>
      </Fade>
     </div>

     <Fade left slow>
      <div className="imageContainerAbout">
       <Image className="imageAbout" src={child} alt="Child Throw in Judo" />
       <p>
        {data.abouttext2} <br /> <br />
        {data.abouttext21}
       </p>
      </div>
     </Fade>
     <Fade left slow>
      <div className="imageContainerAbout">
       <p>{data.abouttextQuote}</p>

       <Image className="imageAbout" src={child2} alt="Child Throw in Judo" />
      </div>
     </Fade>

     <Fade left slow>
      <div className="imageContainerAbout">
       <Image className="imageAbout" src={child1} alt="Child Throw in Judo" />
       <p>{data.abouttext3}</p>
      </div>
     </Fade>
    </div>

    <Row style={styleDiv}>
     <Footer />
    </Row>
   </div>
  )
 }
}

const styleDiv = {
 display: "flex",
 alignItems: "center",
 justifyContent: "center",
 height: "8vh",
}

export default About
