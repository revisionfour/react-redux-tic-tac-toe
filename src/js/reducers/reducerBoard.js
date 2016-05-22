import { SET_PLAY } from '../actions/index';

const initialState = {
	board: ['','','','','','','','',''],
	currentPlayer: 'X',
	message: ''
};

export default function(state = initialState, action){
	switch(action.type){
		case SET_PLAY:
			return {
				id: action.index,
				board: action.board,
				currentPlayer: action.currentPlayer
			}
		case 'CLEAR_BOARD':
			return {
				board: ['','','','','','','','',''],
				currentPlayer: 'X'
			}
		default:
			return state;
	}
}