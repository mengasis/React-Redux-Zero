export default function deviceReducer(state = {}){
	let isMobile = state.isMobile
	return Object.assign({}, state, { isMobile })
}