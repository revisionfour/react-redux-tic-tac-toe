import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { clearBoard, setMessage, setBar } from '../actions/index'

import Board from './Board'

class App extends React.Component {

	clearBoard(){
		this.props.clearBoard();
		this.props.setMessage({
			message:''
		});
		this.props.setBar({className:''});

	}

	render(){
		return (
			<div>
				<div id="tic-tac-toe">Tic Tac Toe</div>
				<div id="results" className="text-center">{this.props.message}</div>
				<Board board={this.props.board} currentPlayer={this.props.currentPlayer} currentClass={this.props.currentClass} />
				<h1 className="text-center">Current Player</h1>
				<div id="current-player" className="text-center">{this.props.currentPlayer}</div>
				<button id="clear-button" className="btn btn-danger" onClick={this.clearBoard.bind(this)}>Reset Game</button>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		board: state.Board.board,
		currentPlayer: state.Board.currentPlayer,
		message: state.Message.message,
		currentClass: state.Message.className
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({clearBoard, setMessage, setBar}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);