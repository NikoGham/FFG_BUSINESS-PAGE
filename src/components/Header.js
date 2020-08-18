import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import Flash from 'react-reveal/Flash';
import Pulse from 'react-reveal/Pulse';
import data from '../yourdata';

class Header extends Component {
  state = {};

  render() {
    return (
      <div>
        <Flash cascade>
          {' '}
          <h1 className="heading-background">FULLFAT</h1>
        </Flash>

        <header>
          <h1 className="nameHeader"></h1>
        </header>
        <Fade bottom>
          <p className="header-title">
            <span className="nameHeader">{data.headerTagline[0]}</span>
            <br></br>

            <span className="caramelFont">
              <Roll> {data.headerTagline[1]}</Roll>

              <Roll delay={500} duration={1000}>{data.headerTagline[2]}</Roll>

              <Roll delay={1000}>{data.headerTagline[3]}</Roll>

              <Roll delay={1500}>{data.headerTagline[4]}</Roll>
            </span>
          </p>
        </Fade>
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
