import React, { Component } from 'react'
import logo from './images/logo.svg'
import './css/Header.css'
import PropTypes from 'prop-types'

class Header extends Component {

	render() {

		const title = this.props.title

		return (
			<div className="Header">
				<div className="Logo">
					<img src={logo} alt="logo"/>
					<h2>{title}</h2>
				</div>
			</div>
		)
	}
}

Header.propTypes = {
	title: PropTypes.string.isRequired
}

export default Header
