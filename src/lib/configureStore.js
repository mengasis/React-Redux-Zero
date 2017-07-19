import fetch from 'isomorphic-fetch'
import promiseMiddleware from 'redux-promise-middleware'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import { createStore, applyMiddleware } from 'redux'

//Middleware de Redux - Despachara las acciones e injectara los middlewares
const injectMiddleware = deps => ({ dispatch, getState }) => next => action =>
	next(typeof action === 'function'
		? action({ ...deps, dispatch, getState })
		: action
	)

export default function configureStore(options, rootReducer) {
	const { initialState = {}} = options

	const middleware = [
		injectMiddleware({
			fetch: fetch
		}),
		//Ayudara colocando sufijos a las promesas
		promiseMiddleware({
			promiseTypeSuffixes: ['START', 'SUCCESS', 'ERROR']
		}),
		reduxImmutableStateInvariant()
	]

	return createStore(rootReducer, initialState, applyMiddleware(...middleware))
}