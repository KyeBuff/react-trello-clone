import React from 'react';
import { Link } from 'react-router-dom';

const NewBoardButton = (props) => (
	<Link className="btn-board" to="/new">Create a new board</Link>
);

export default NewBoardButton;