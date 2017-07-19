import React from 'react'
import {render} from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Bluebird from 'bluebird'
import { Provider } from 'react-redux'

import './index.css'
import AppRoutes from './routes'
import registerServiceWorker from './registerServiceWorker'

import configureStore from './lib/configureStore'

import rootReducer from './reducers'

// Bluebird pisara a las promesas por defecto
//Configuracion de Bluebird
window.Promise = Bluebird
Bluebird.config({ warning: false })

window.addEventListener('unhandledrejection', error => {
	error.preventDefault()

	if(process.env.NODE_ENV !== 'production') {
		console.warn('Warning Promises', error.detail)
	} 
})


//Configurar Store
const store = configureStore({
	initialState: window.initialState
}, rootReducer)

render(
	<Provider store={store}>
		<Router>
			<AppRoutes />
		</Router>
	</Provider>
	, document.getElementById('root'))
registerServiceWorker()
