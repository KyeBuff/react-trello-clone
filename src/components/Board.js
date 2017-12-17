import React, {Component} from 'react';

class Board extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props.board);
		return (
			<section>
				<p>The board is{this.props.boardId}</p>
			</section>
		)
	}
	
}

export default Board;