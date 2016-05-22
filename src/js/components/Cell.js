import React from 'react'

import { bindActionCreators } from 'redux'

class Cell extends React.Component{
	handleClick(val){
		this.props.changeBoard(val);
	}

	render(){
		console.log('Rendering Cell');
		var insideText;
		var className = "";

		var self = this;

		if(this.props.value){
			insideText = this.props.value;
		}
		else{
			insideText = this.props.currentPlayer;
			className="hidden-hover";
		}

		return (
			<div className="cell">
				<div onClick={this.handleClick.bind(this, self.props.keyVal)} className={className}>{insideText}</div>
			</div>
		)
	}
}

export default Cell;