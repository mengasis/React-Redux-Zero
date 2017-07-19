import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from './Global/Header'
import Content from './Global/Content'
import Footer from './Global/Footer'
import './App.css'

class App extends Component {
	render() {

		const { children } = this.props

		return (
			<div className="App">
				<Header title="B2BTrack" />
				<Content body={children}/>
				<Footer copyright="My Copyright ®"/>
			</div>
		)
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired
}

export default App
