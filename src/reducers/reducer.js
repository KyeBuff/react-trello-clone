const initialState = {
	boards: [],
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
		complete: false,
	}

	list.items.push(listItem);

	const newBoards = state.boards.map(b => b.id === boardId ? board : b);

	return {
		...state,
		boards: newBoards,
	}
}

const toggleItemComplete = (state, itemId, listId, boardId) => {

	const boards = [...state.boards];

	const board = boards.find(board => board.id === boardId);

	let boardLists = board.lists;

	const list = boardLists.find(list => list.id === listId);

	const listItems = list.items;

	const newListItems = listItems.map(item => {
		if(item.id === itemId) {
			item.complete = !item.complete;
		}
		return item;
	});

	list.items = newListItems;

	board.lists = boardLists.map(l => l.id === listId ? list : l);

	const newBoards = state.boards.map(b => b.id === boardId ? board : b);

	return {
		...state,
		boards: newBoards,
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