import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Work from './components/work';
import Contact from './components/Contact';


/*ReactDOM.render(<App about={about} />, document.getElementById('root'));*/
ReactDOM.render(<Header />, document.getElementById('header'));
/*ReactDOM.render(<About />, document.getElementById('about'));
ReactDOM.render(<Work />, document.getElementById('work'));
ReactDOM.render(<Contact />, document.getElementById('contact'));


/*  NIKO WHAT IF YOU IMPORT THE INDIVIDUAL COMPONENTS AND THEN 
RENDER THEM SEPERATELY, THEN MAKE UP A BIT OF CONDITIONAL JS DEPENDENT ON A CLICK EVENT?*/
