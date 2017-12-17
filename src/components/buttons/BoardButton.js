import React from 'react';
import { Link } from 'react-router-dom';

const BoardButton = (props) => (
	<Link className="btn-board" to={"/" + props.href} >{props.text}</Link>
);

export default BoardButton;