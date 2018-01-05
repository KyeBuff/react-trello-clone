import React from 'react';
import { Link } from 'react-router-dom';

const FourOhFour = () => (
	<div className="page-not-found">
		<p className="page-not-found__message">Oops! That page does not exist. Click <Link className="page-not-found__link" to="/">here</Link> to go back to the home page.</p>
	</div>
)

export default FourOhFour;