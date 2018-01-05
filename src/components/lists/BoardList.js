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

const BoardList = (props) => {
	// On submit/toggle takes the ids of their specifics to ensure targeting of correct part of state
	return (
		<section className="board-list-section">
			<h2>{props.name}</h2>
			<Form 
				fields={fields} 
				btnRequired={false} 
				onSubmit={(fields) => props.onSubmit(fields, props.boardId, props.listId)} 
			/>
			<ul className="board-list">
				{props.listItems.map(item => {
					return <ListItem 
						key={item.id} 
						value={item.value} 
						complete={item.complete} 
						onClick={ () => props.toggleItemComplete(item.id, props.listId, props.boardId) }
					/>
					}
				)}
			</ul>
		</section>
	)
}

export default BoardList;

