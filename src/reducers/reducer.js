const initialState = {
	boards: [],
}

// local id variable to simulate id generation in a db
let lastId = 1;

// Add news board to boards array
const addNewBoard = (state, data) => {
	//Spread to maintain existing values in state.
	//Take existing boards arr elements and append a new board object
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

// local id variable to simulate id generation in a db
let lastListId = 1;

// Adds new list to board targeting board with it's id
const addListToBoard = (state, listName, boardId) => {

	const list = {
		id: lastListId++,
		name: listName,
		items: [],
	},

	//Map over boards and add list to board when id matches
	boardsWithListArr = state.boards.map(board => {
		if(board.id === +boardId) {
			board.lists.push(list)
		}
		return board;
	});

	return {
		...state,
		boards: boardsWithListArr,
	};
}

// Local id controlling variable for list items

let listItemId = 1;

// Adds list item to a specific list within a board. boardId and listId required for targeting
const addListItem = (state, itemValue, boardId, listId) => {

	//spread maintains immutability
	const boards = [...state.boards],

	listItem = {
		id: listItemId++,
		value: itemValue,
		complete: false,
	},

	//Map over boards and target id of board and list to update the boards list items
	boardsWithListItem = boards.map(board => {
		if(board.id === boardId) {
			board.lists.find(list => list.id === listId).items.push(listItem);
		}
		return board;
	});

	return {
		...state,
		boards: boardsWithListItem,
	}
}

const toggleItemComplete = (state, itemId, listId, boardId) => {

	const boards = [...state.boards],

	//Map over boards and target id of board, list and item to toggle the items complete status
	boardsWithItemComplete = boards.map(board => {
		if(board.id === boardId) {
			board.lists.find(list => list.id === listId).items.map(item => {
				if(item.id === itemId) {
					item.complete = !item.complete;
				}
				return item;
			}); 
		}
		return board;
	});

	return {
		...state,
		boards: boardsWithItemComplete,
	}
}

const reducer = (state=initialState, action) => {
	switch(action.type) {
		case '[Boards] addNewBoard': return addNewBoard(state, action.data);
		case '[Boards][Board] addListToBoard': return addListToBoard(state, action.listName, action.boardId);
		case '[Boards][Board][List] addListItem': return addListItem(state, action.itemValue, action.boardId, action.listId);
		case '[Boards][Board][List][Items][Item] toggleItemComplete': return toggleItemComplete(state, action.itemId, action.listId, action.boardId);
		default: 
			return state;
	}
}

// Selectors

const selectBoards = state => state.boards;

const selectBoard = (state, boardId) => {
	return state.boards.reduce((ob, board) => {
		if(board.id === +boardId) {
			return {
				...ob,
				...board
			}
		}
		return ob;
	}, []);
}

const selectListItems = (state, listId, boardId) => {
	return state.boards.reduce((arr, board) => {
		if(board.id === boardId) {
			return [
				...arr,
				...board.lists.reduce((arr, list) => {
					if(list.id === listId) {
						return [
							...arr,
							...list.items,
						]
					}
					return arr;
				}, []),
			]
		}
		return arr; 
	},[])
}

export default reducer;

export {
	selectBoards,
	selectBoard,
	selectListItems
}