import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Membership from './components/Membership'
import Timetable from './components/Timetable'
import Merch from './components/Merch'


const App = () => {
	return (
		<Router>
			<Fragment>
				<Switch>
					<Route exact path='/' component={Header} />
					<Route exact path='/Creed' component={About} />
					<Route exact path='/Cotact' component={Contact} />
					<Route exact path='/Membership' component={Membership} />
					<Route exact path='/Timetable' component={Timetable} />
					<Route exact path='/Merch' component={Merch} />
				</Switch>
			</Fragment>
		</Router>
	)
}

export default App
