import React, {Component} from 'react';
import Form from './forms/Form';
import AddListButton from './buttons/AddListButton';
import BoardList from '../containers/BoardList';
import FourOhFour from './FourOhFour';

const fields = [{label: 'What shall we call your list?', type: 'text', value:''}];

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addingList: false,
		}
		this.showListForm = this.showListForm.bind(this);
		this.hideListForm = this.hideListForm.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	showListForm() {
		this.setState({addingList: true});
	}
	
	hideListForm() {
		this.setState({addingList: false});
	}

	onSubmit(fields) {
		const listName = fields[0].value;
		this.props.onAddList(listName);
		this.setState({addingList: false});
	}	

	render() {
		const { board } = this.props;
		// Show 404 if no board using id
		return (
			<div>
				{this.props.board ? 
				<section className="section-board">
					<h2>{board.boardName}</h2>
					<div className="board-lists">
					{	board.lists ? 
							board.lists.map(list => (<BoardList 
									key={list.id} 
									name={list.name} 
									boardId={board.id} 
									listId={list.id}
								/>
							))
						: null
					}
					{ !this.state.addingList ? 
						/*Toggle between button to add list and form to add new list*/
						<AddListButton onClick={this.showListForm} />
						:
						<section className="form-new-list">
							<Form 
								fields={fields} 
								submitText="Add list" 
								onSubmit={this.onSubmit} 
								submitClass="new-board-submit" 
								btnRequired={true}
							/>
							<button 
								className="new-board-cancel"
								onClick={this.hideListForm}
							>
							X
							</button>
						</section>
					}
					</div>
				</section>
				:
				<FourOhFour />
				}
			</div>
		)
	}
						
}

export default Board;