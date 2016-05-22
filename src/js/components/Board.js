import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { setPlay, clearBoard, setMessage, setBar } from '../actions/index'

import _ from 'lodash'

import Cell from './Cell'
import Row from './Row'

class Board extends React.Component {
  constructor(){
    super();

    this.changeBoard = this.changeBoard.bind(this);
  }

  changeBoard(index){
    if(this.props.board[index] != ''){
      return;
    }

    var newBoard = _.cloneDeep(this.props.board);
    var currentPlayer = this.props.currentPlayer;

    newBoard[index] = currentPlayer;

    this.props.setPlay({
      board: newBoard,
      currentPlayer: this.props.currentPlayer == 'X' ? 'O' : 'X'
    });

    this.checkWinner(currentPlayer, newBoard);
  }

  checkCross(checkPlayer, currentBoard){
    if(currentBoard[0] == checkPlayer && currentBoard[4] == checkPlayer && currentBoard[8] == checkPlayer){
      this.props.setBar({className: 'cross1'});
      return true;
    }
    else if(currentBoard[2] == checkPlayer && currentBoard[4] == checkPlayer && currentBoard[6] == checkPlayer){
      this.props.setBar({className: 'cross2'});
      return true;
    }
    return false;
  }

  checkDraw(currentBoard){
    for(var i=0; i<currentBoard.length; i++){
      if(currentBoard[i] == ''){
        return false;
      }
    }
    return true;
  }

  checkHorizontal(checkPlayer, currentBoard){
    if(currentBoard[0] == checkPlayer && currentBoard[1] == checkPlayer && currentBoard[2] == checkPlayer){
      this.props.setBar({className: 'horizontal1'});
      return true;
    }
    else if(currentBoard[3] == checkPlayer && currentBoard[4] == checkPlayer && currentBoard[5] == checkPlayer){
      this.props.setBar({className: 'horizontal2'});
      return true;
    }
    else if(currentBoard[6] == checkPlayer && currentBoard[7] == checkPlayer && currentBoard[8] == checkPlayer){
      this.props.setBar({className: 'horizontal3'});
      return true;
    }

    return false;
  }

  checkVertical(checkPlayer, currentBoard){
    if(currentBoard[0] == checkPlayer && currentBoard[3] == checkPlayer && currentBoard[6] == checkPlayer){
      this.props.setBar({className: 'vertical1'});
      return true;
    } 
    else if(currentBoard[1] == checkPlayer && currentBoard[4] == checkPlayer && currentBoard[7] == checkPlayer){
      this.props.setBar({className: 'vertical2'});
      return true;
    }
    else if(currentBoard[2] == checkPlayer && currentBoard[5] == checkPlayer && currentBoard[8] == checkPlayer){
      this.props.setBar({className: 'vertical3'});
      return true;
    }
    return false;
  }

  checkWinner(currentPlayer, currentBoard){
    if(this.checkHorizontal(currentPlayer, currentBoard) || 
      this.checkVertical(currentPlayer, currentBoard) || 
      this.checkCross(currentPlayer, currentBoard)
    ){
      this.clearBoard(currentPlayer + ' has won!');
    }
    else if(this.checkDraw(currentBoard)){
      this.clearBoard('Game is a draw!');
    }
  }

  clearBoard(message){
    this.props.setMessage({
      message: message
    });
  }

  render(){
    var self = this;

    console.log('Rendering board!!');

    return (
      <div id="gameboard">
        {this.props.board.map(function(cellVal, i){
          return <Cell key={i} keyVal={i} value={cellVal} changeBoard={self.changeBoard} currentPlayer={self.props.currentPlayer} />
        })}
        <div id="winner-bar" className={this.props.currentClass}></div>
        <div id="cover"></div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ setPlay, clearBoard, setMessage, setBar }, dispatch);
}

export default connect(null, mapDispatchToProps)(Board);



