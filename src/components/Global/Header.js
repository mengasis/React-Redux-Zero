import React, { Component } from 'react'
import logo from './images/logo.svg'
import './css/Header.css'
import PropTypes from 'prop-types'

class Header extends Component {

	static propTypes = {
		title: PropTypes.string.isRequired
	};

	render() {
		return (
			<div className="Header">
				<div className="Logo">
					<img src={logo} alt="logo"/>
					<h2>B2B Track</h2>
				</div>
			</div>
		)
	}
}

export default Header
