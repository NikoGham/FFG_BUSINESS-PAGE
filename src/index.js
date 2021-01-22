import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css'; 
import'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/normalize.css'
import './css/demo.css'
import './css/component.css'

import Nav from './Nav'

// import Header from './components/Header';
// import About from './components/About';
// import Contact from './components/Contact';
// import Membership from './components/Membership';
// import Timetable from './components/Timetable';
// import Merch from './components/Merch';

ReactDOM.render(<Nav />, document.getElementById('header'))


// ReactDOM.render(<Header />, document.getElementById('header'));
// ReactDOM.render(<About />, document.getElementById('about'));
// ReactDOM.render(<Contact />, document.getElementById('contact'));
// ReactDOM.render(<Membership />, document.getElementById('membership')); 
// ReactDOM.render(<Timetable />, document.getElementById('timetable')); 
// ReactDOM.render(<Merch />, document.getElementById('merch')); 
/*ReactDOM.render(<Sidebar />, document.getElementById('menu-11'))

/*  NIKO WHAT IF YOU IMPORT THE INDIVIDUAL COMPONENTS AND THEN 
RENDER THEM SEPERATELY, THEN MAKE UP A BIT OF CONDITIONAL JS DEPENDENT ON A CLICK EVENT?

Well this seems to work... must be a cleaner way to do it though ; 13.09.20 */






/* POTENTIAL REFACTOR SOLUTION 
const list = document.getElementsByTagName("UL");

console.log(list) 

*/ 