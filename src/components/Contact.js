import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class Contact extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>
          <Fade bottom cascade>
            {' '}
            Get in touch.
          </Fade>
        </h1>
        <Fade bottom>
          <div className="contact-content">
            <h1>
          Use,  <br></br>
              <span className="amazing-color">Your Judo</span>
            </h1>
            <a href={`mailto:${data.contactEmail}`} className="email">
              {data.contactEmail}
            </a>
            <ul>
              {data.social.map((link, index,) => (
                <li key={index}>
                  <a target="_blank" rel="noopener noreferrer" href={link.url}>
                    {link.name} <i className="fab fa-instagram linkSocial"></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Fade>

        <span className="footer">
          Made by <a href="www.nickgillham.co.uk"> Nick @ Small Dog Designs</a>
        </span>
      </div>
    );
  }
}

export default Contact;
