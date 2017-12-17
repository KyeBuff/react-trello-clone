const actionTypes = {
	ADD_NEW_BOARD: '[Boards] addNewBoard',
}

const addNewBoard = (data) => ({
	type: actionTypes.ADD_NEW_BOARD,
	data,
});

export {
	addNewBoard,
}