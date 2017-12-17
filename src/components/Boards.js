import React from 'react';
import BoardButton from './buttons/BoardButton';

const Boards = (props) => (
	<nav className="boards-menu">
		<BoardButton text="Create a new board..." href="new" className="btn-board btn-board--new" />
		{
			props.boards.map((board, i) => {
				return <BoardButton key={i} text={board.boardName} href={"boards/"+board.id} className="btn-board" />
			})
		}
	</nav>
);

export default Boards;