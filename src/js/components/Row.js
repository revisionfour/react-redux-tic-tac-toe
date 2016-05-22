import React from 'react'

export default class Row extends React.Component {

  handleClick(key){
    // alert('This is the key -> ' + key);

  }

  render(){
  	var colVal = this.props.row * 3;

    return (
      <div className="board-row">
        <span key={colVal} onClick={this.handleClick.bind(this, colVal)}>{this.props.boardState[colVal]}</span>
        <span key={colVal+1} onClick={this.handleClick.bind(this, colVal+1)}>{this.props.boardState[colVal+1]}</span>
        <span key={colVal+2} onClick={this.handleClick.bind(this, colVal+2)}>{this.props.boardState[colVal+2]}</span>
      </div>
    )

  }

}




// return (
//       <div className="board-row">
//         <div key={colVal} onClick={this.handleClick.bind(this, colVal)}></div>
//         <div key={colVal+1} onClick={this.handleClick.bind(this, colVal+1)}></div>
//         <div key={colVal+2} onClick={this.handleClick.bind(this, colVal+2)}></div>
//       </div>
//     )