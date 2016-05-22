const initialState = {
	message: '',
	className: ''
};

export default function(state = initialState, action){
	switch(action.type){
		case 'SET_BAR':
			return {
				className: action.className ? action.className + ' show' : action.className,
				message: state.message
			}
		case 'SET_MESSAGE':
			return {
				className: state.className,
				message: action.message
			}
		default:
			return state;
	}
}