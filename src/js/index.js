import React from 'react'
import { render } from 'react-dom'

// These 2 imports are needed for the store
import { Provider } from 'react-redux'
// import { createStore } from 'redux'

import App from './components/App'

import {store} from './state/store';

render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.querySelector('.container')
)