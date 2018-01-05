import React from 'react';

const ListItem = (props) => (
	<li className={props.complete ? "board-list-item board-list-item-complete" : "board-list-item"}>
		{props.value} {props.complete ? <button onClick={props.onClick} className="btn-item-complete">Tick</button> : <button onClick={props.onClick} className="btn-item-incomplete">Tick</button>}
	</li>
);

export default ListItem;