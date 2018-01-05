import React from 'react';
import { Link } from 'react-router-dom';

const BoardButton = (props) => (
	<button 
		className={props.className} 
		onClick={props.onClick}
	>{props.text}
	</button>
);

export default BoardButton;