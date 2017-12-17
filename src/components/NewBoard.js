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
	<section>
		<Form fields={fields} submitText="Create" />
	</section>
);

export default NewBoard;