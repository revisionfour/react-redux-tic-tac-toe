export const SET_PLAY = 'SET_PLAY';

export function setPlay(action){
	return {
		type: SET_PLAY,
		// index: 
		board: action.board,
		currentPlayer: action.currentPlayer
	}
}

export function clearBoard(){
	return {
		type: 'CLEAR_BOARD'
	}
}

export function setMessage(action){
	return {
		type: 'SET_MESSAGE',
		message: action.message
	}
}

export function setBar(action){
	return {
		type: 'SET_BAR',
		className: action.className
	}
}