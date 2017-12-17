import React from 'react';
import Form from './forms/Form';

const fields = [
	{
		label: 'What shall we call the board?',
		type: 'text',
		value: '',
	},
]

const NewBoard = (props) => (
	<section className="form-new-board">
		<Form fields={fields} submitText="Create" onSubmit={props.onSubmit} submitClass="new-board-submit" />
	</section>
);

export default NewBoard;