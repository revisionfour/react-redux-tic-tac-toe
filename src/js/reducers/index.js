import { combineReducers } from 'redux'

import Board from './reducerBoard'
import Message from './reducerMessage'

const rootReducer = combineReducers({
	Board,
	Message
});

export default rootReducer;