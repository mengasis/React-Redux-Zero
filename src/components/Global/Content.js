import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './css/Content.css'

class Content extends Component {

	constructor(props){
		super(props)
	

		this.state = {
			count: 0
		}

		this.handleCountClick = this.handleCountClick.bind(this)
	}	

	componentDidMount() {
		this.setState({
			count: 1
		})
	}

	handleCountClick(e) {
		if(e.target.id === 'suma'){
			this.setState({
				count: this.state.count + 1
			})
		}

		if(e.target.id === 'resta' && this.state.count > 0){
			this.setState({
				count: this.state.count - 1
			})
		}

		if(e.target.id === 'reset'){
			this.setState({
				count: 0
			})
		}

	}
	

	render() {

		const { body = 'Lorem' } = this.props

		return (
			<div className="Content">
				{body}
				<h4>Counter: {this.state.count}</h4> 
				<button id="suma" onClick={this.handleCountClick} > + </button>
				<button id="resta" onClick={this.handleCountClick} > - </button>
				<button id="reset" onClick={this.handleCountClick} > Reset </button>
				<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                    porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                    exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                    esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
                    voluptas nulla pariatur?
				</p>
			</div>
		)
	}
}

Content.propTypes = {
	body: PropTypes.object.isRequired
}

export default Content
