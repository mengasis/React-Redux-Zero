import React, { Component } from 'react'

import Header from './Global/Header'
import Content from './Global/Content'
import Footer from './Global/Footer'
import './App.css'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header title="B2BTrack" />
				<Content />
				<Footer copyright="My Copyright ®"/>
			</div>
		)
	}
}

export default App
