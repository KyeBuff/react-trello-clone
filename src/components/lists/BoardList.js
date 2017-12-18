import React from 'react';
import ListItem from './ListItem';
import Form from '../forms/Form';

const fields = [
	{
		label: null,
		type: 'text',
		value: '',
	}
];

const BoardList = (props) => (
	<section className="board-list-section">
		<h2>{props.name}</h2>
		<Form fields={fields} btnRequired={false} onSubmit={props.onSubmit} />
		<ul className="board-list">
		</ul>
	</section>
);

export default BoardList;