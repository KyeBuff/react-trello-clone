import React, {Component} from 'react';
import BoardButton from './buttons/BoardButton';
import NewBoard from './NewBoard';

class Boards extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addingBoard: false,
		}

		this.onSubmit = this.onSubmit.bind(this);
		this.showAddBoard = this.showAddBoard.bind(this);
	}

	onSubmit(data) {
		this.props.addBoard(data);
		this.setState({addingBoard: false})
	}

	showAddBoard() {
		this.setState({addingBoard: true})
	}

	//List of boards here with board links
	render() {
		return (
			<nav className="boards-menu">
				{this.state.addingBoard ? 
				<NewBoard onSubmit={this.onSubmit}/>
				:
				<button
					className="btn-board btn-board--new"
					onClick={this.showAddBoard} 
				>Create a new board...</button>
				}
				{
					this.props.boards.map((board, i) => {
						return <BoardButton key={i} text={board.boardName} href={"boards/"+board.id} className="btn-board" />
					})
				}
			</nav>
		);
	}
};

export default Boards;