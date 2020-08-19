import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
class Navbar extends Component {
  state = {};
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <nav>
        <ul>
          <a className="linkSocial" href="https://www.instagram.com/fullfatjudo/" target="blank">
            <li>
              <i className="fab fa-instagram"></i>
            </li>
          </a>
          <li>
            <Link
              className="link"
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="link"
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              className="link"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
