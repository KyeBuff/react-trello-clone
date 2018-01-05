import React, {Component} from 'react';
import Form from './forms/Form';
import AddListButton from './buttons/AddListButton';
import BoardList from '../containers/BoardList';

const fields = [{label: 'What shall we call your list?', type: 'text', value:''}];

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addingList: false,
		}
		this.showListForm = this.showListForm.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	showListForm() {
		this.setState({addingList: true});
	}

	onSubmit(fields) {
		const listName = fields[0].value;
		this.props.onAddList(listName);
	}	

	render() {
		const { lists, id } = this.props.board;
		return (
			<section className="section-board">
				{	lists ? 
						lists.map(list => {
							return <BoardList 
								key={list.id} 
								name={list.name} 
								boardId={id} 
								listId={list.id}
							/>
						})
					: null
				}
				{ !this.state.addingList ? 
					<AddListButton onClick={this.showListForm} />
					:
					<section className="form-new-board">
						<Form fields={fields} submitText="Add list" onSubmit={this.onSubmit} submitClass="new-board-submit" btnRequired={true} />
					</section>
				}
			</section>
		)
	}
						
}

export default Board;