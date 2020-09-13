import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Work from './components/work';
import Contact from './components/Contact';
import Adult from './components/Adult';
import Membership from './components/Membership';
import Timetable from './components/Timetable';
import Merch from './components/Merch';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<About />, document.getElementById('about'));
ReactDOM.render(<Work />, document.getElementById('work'));
ReactDOM.render(<Contact />, document.getElementById('contact'));
ReactDOM.render(<Adult />, document.getElementById('adult'));
ReactDOM.render(<Membership />, document.getElementById('membership')); 
ReactDOM.render(<Timetable />, document.getElementById('timetable')); 
ReactDOM.render(<Merch />, document.getElementById('merch')); 

/*  NIKO WHAT IF YOU IMPORT THE INDIVIDUAL COMPONENTS AND THEN 
RENDER THEM SEPERATELY, THEN MAKE UP A BIT OF CONDITIONAL JS DEPENDENT ON A CLICK EVENT?

Well this seems to work... must be a cleaner way to do it though ; 13.09.20 */

const menuBtn = document.querySelector('.menu-btn');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    // Set Menu State
    showMenu = false;
  }
}
