import React from 'react';
import Form from './forms/Form';
import { Link } from 'react-router-dom';

const fields = [
	{
		label: 'What shall we call the board?',
		type: 'text',
		value: '',
	},
]

const NewBoard = (props) => (
	<section>
		<Form fields={fields} submitText="Create" onSubmit={props.onSubmit} />
		<Link to="/">Back</Link>
	</section>
);

export default NewBoard;