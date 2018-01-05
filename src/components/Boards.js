import React, {Component} from 'react';
import BoardLink from './buttons/BoardLink';
import NewBoard from './NewBoard';

class Boards extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addingBoard: false,
		}

		this.addBoard = this.addBoard.bind(this);
		this.showAddBoard = this.showAddBoard.bind(this);
	}

	addBoard(data) {
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
				<NewBoard onSubmit={this.addBoard}/>
				:
				<button
					className="btn-board btn-board--new"
					onClick={this.showAddBoard} 
				>Create a new board...</button>
				}
				{
					this.props.boards.map((board, i) => {
						return <BoardLink 
											key={i} 
											text={board.boardName} 
											href={"boards/"+board.id} 
											className="btn-board" 
										/>
					})
				}
			</nav>
		);
	}
};

export default Boards;