const actionTypes = {
	ADD_NEW_BOARD: '[Boards] addNewBoard',
	ADD_LIST_TO_BOARD: '[Boards][Board] addListToBoard',
}

const addNewBoard = (data) => ({
	type: actionTypes.ADD_NEW_BOARD,
	data,
});

const addListToBoard = (listName, boardId) => ({
	type: actionTypes.ADD_LIST_TO_BOARD,
	listName,
	boardId,
});

export {
	addNewBoard,
	addListToBoard
}