import React, {Component} from 'react';
import Form from './forms/Form';
import AddListButton from './buttons/AddListButton';

const fields = [{label: 'What shall we call your list?', type: 'text', value:''}];

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addingList: false,
		}
		this.showListForm = this.showListForm.bind(this);
	}

	showListForm() {
		this.setState({addingList: true});
	}

	onSubmit(fields) {
		console.log(fields);
	}	

	render() {
		return (
			<section className="section-board">
				{ !this.state.addingList ? 
					<AddListButton onClick={this.showListForm} />
					:
					<section className="form-new-board">
						<Form fields={fields} submitText="Add list" onSubmit={this.onSubmit} submitClass="new-board-submit" />
					</section>
				}
			</section>
		)
	}
	
}

export default Board;