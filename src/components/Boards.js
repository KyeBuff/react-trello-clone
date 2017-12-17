import React from 'react';
import BoardButton from './buttons/BoardButton';

const Boards = (props) => (
	<section>
		<BoardButton text="Create a new board..." href="new" />
		{
			props.boards.map((board, i) => {
				return <BoardButton key={i} text={board.boardName} href={"boards/"+board.id} />
			})
		}
	</section>
);

export default Boards;