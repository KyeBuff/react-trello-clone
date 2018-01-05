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

// On submit/toggle takes the ids of their specifics to ensure targeting of correct part of state
const BoardList = ({name, onSubmit, boardId, listId, listItems, toggleItemComplete}) => (
	<section className="board-list-section">
		<h2>{name}</h2>
		<Form 
			fields={fields} 
			btnRequired={false} 
			onSubmit={(fields) => onSubmit(fields, boardId, listId)} 
		/>
		<ul className="board-list">
			{listItems.map(({id, value, complete}) => (
				<ListItem 
					key={id} 
					value={value} 
					complete={complete} 
					onClick={ () => toggleItemComplete(id, listId, boardId) }
				/>
				)
			)}
		</ul>
	</section>
)

export default BoardList;

