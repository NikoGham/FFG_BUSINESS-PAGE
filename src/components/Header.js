import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';
import Pulse from 'react-reveal/Pulse';
import data from '../yourdata';

class Header extends Component {
  state = {};

  render() {
    return (
      <div>
        <header></header>
        <Flash forever={true} duration={3000} cascade>
          {' '}
          <h1 className="heading-background">FULLFAT</h1>
        </Flash>
        <p className="header-title">
          <Fade duration={5000} delay={2000}>
            <span className="nameHeader">{data.headerTagline[0]}</span>
          </Fade>

          <span className="caramelFont">
            <Pulse> {data.headerTagline[1]}</Pulse>

            <Pulse delay={750}>{data.headerTagline[2]}</Pulse>

            <Pulse delay={1250}>{data.headerTagline[3]}</Pulse>

            <Pulse delay={1750}>{data.headerTagline[4]}</Pulse>
          </span>
        </p>

        {/**
        <header>
          <Flash count={3}  bottom cascade>
            <h1 className="nameHeader">{data.name}</h1>
          </Flash>
        </header>

        <Flash delay={4000} duration={10000} forever={true}  cascade>
          <h1 className="heading-background" style={{ color: '#292829' }}>
            FULLFAT
          </h1>
        </Flash>
       

       
          <p className="header-title" style={{ color: '#cf9332' }}>
            <Roll delay={1000}> {data.headerTagline[1]}</Roll>
            <Roll delay={1500}> {data.headerTagline[2]}</Roll>
            <Roll delay={2000}> {data.headerTagline[3]}</Roll>
            <Roll delay={2500}> {data.headerTagline[4]}</Roll>
          </p>
       */}
      </div>
    );
  }
}

export default Header;
