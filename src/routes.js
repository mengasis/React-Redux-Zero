import React from 'react'
import { Route, Switch } from 'react-router-dom'


//Containers
import App from './components/App'
import About from './components/About'
import Contact from './components/Contact'
import Home from './conteiners/Home'
import Page404 from './components/Page404'

const AppRoutes = () =>
	<App>
		<Switch>
			<Route path="/about" component={About} />
			<Route path="/contact" component={Contact} />
			<Route exact path="/" component={Home} />
			<Route component={Page404} />
		</Switch>
	</App>

export default AppRoutes