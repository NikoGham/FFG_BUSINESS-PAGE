import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Work from './components/work';
import Contact from './components/Contact';


ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<About />, document.getElementById('about'));
ReactDOM.render(<Work />, document.getElementById('work'));
ReactDOM.render(<Contact />, document.getElementById('contact')); 


/*  NIKO WHAT IF YOU IMPORT THE INDIVIDUAL COMPONENTS AND THEN 
RENDER THEM SEPERATELY, THEN MAKE UP A BIT OF CONDITIONAL JS DEPENDENT ON A CLICK EVENT?*/


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
