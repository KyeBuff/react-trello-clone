import React from 'react';
import { Link } from 'react-router-dom';

const BoardLink = (props) => (
	<Link className={props.className} to={"/" + props.href} >{props.text}</Link>
);

export default BoardLink;