const actionTypes = {
	ADD_NEW_BOARD: '[Boards] addNewBoard',
	ADD_LIST_TO_BOARD: '[Boards][Board] addListToBoard',
	ADD_LIST_ITEM: '[Boards][Board][List] addListItem',
	SET_ITEM_COMPLETE: '[Boards][Board][List][Items][Item] toggleItemComplete',
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

const addListItem = (itemValue, boardId, listId) => ({
	type: actionTypes.ADD_LIST_ITEM,
	itemValue,
	boardId,
	listId,
});

const toggleItemComplete = (itemId, listId, boardId) => ({
	type: actionTypes.SET_ITEM_COMPLETE,
	itemId,
	listId,
	boardId,
});

export {
	addNewBoard,
	addListToBoard,
	addListItem,
	toggleItemComplete
}