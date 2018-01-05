const initialState = {
	boards: [
		{
			boardName: "To do list",
			id: 100,
			lists: [
				{
					id: 1,
					name: 'My list',
					items: [],
				},
				{
					id: 2,
					name: 'My 2nd list',
					items: [],
				}
			]
		}
	]
}

let lastId = 1;
let lastListId = 1;

const addNewBoard = (state, data) => {
	return {
		...state,
		boards: [
			...state.boards,
			{
				boardName: data,
				id: lastId++,
				lists: [],
			}
		]
	};
}

const addListToBoard = (state, listName, boardId) => {

	const list = {
		id: lastListId++,
		name: listName,
		items: [],
	}

	const withListArr = state.boards.map(board => {
		if(board.id === +boardId) {
			board.lists.push(list)
		}
		return board;
	});

	return {
		...state,
		boards: withListArr,
	};
}

// Local id controlling variable for list items

let listItemId = 1;

const addListItem = (state, itemValue, boardId, listId) => {

	const boards = [...state.boards];

	const board = boards.find(board => board.id === boardId);

	const list = board.lists.find(list => list.id === listId);

	const listItem = {
		id: listItemId++,
		value: itemValue,
	}

	list.items.push(listItem);

	const newBoards = state.boards.map(b => b.id === boardId ? board : b);

	return {
		...state,
		newBoards,
	}
}

const reducer = (state=initialState, action) => {
	switch(action.type) {
		case '[Boards] addNewBoard': return addNewBoard(state, action.data);
		case '[Boards][Board] addListToBoard': return addListToBoard(state, action.listName, action.boardId);
		case '[Boards][Board][List] addListItem': return addListItem(state, action.itemValue, action.boardId, action.listId);
		default: 
			return state;
	}
}

export default reducer;