import React, { Component } from 'react'
import './css/Footer.css'
import PropTypes from 'prop-types'

class Footer extends Component {
	render() {
		const {copyright = 'Default ®'} = this.props

		return (
			<p className="Footer">
				{copyright}
			</p>
		)
	}
}

Footer.propTypes = {
	copyright: PropTypes.string
}

export default Footer
