import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Home extends Component {

	render() {

		const {isMobile} = this.props

		return (
			<div>
				<h1>Home</h1>
				<span>
					{ isMobile ? 'Modo Mobile' : 'Modo Desktop'}
				</span>
			</div>
		)
	}
}

Home.propTypes = {
	isMobile: PropTypes.bool
}

function mapStateToProps(state){
	return {
		isMobile: state.device.isMobile
	}
}

export default connect(mapStateToProps, null)(Home)
