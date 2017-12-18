const initialState = {
	boards: []
}

let lastId = 1;

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
		name: listName,
		items: [],
	}

	const withListArr = state.boards.map(board => {
		if(board.id === +boardId) {
			board.lists.push(list)
		}
		return board;
	});

	console.log(withListArr);

	return {
		...state,
		boards: withListArr,
	};
}

const reducer = (state=initialState, action) => {
	switch(action.type) {
		case '[Boards] addNewBoard': return addNewBoard(state, action.data);
		case '[Boards][Board] addListToBoard': return addListToBoard(state, action.listName, action.boardId);
		default: 
			return state;
	}
}

export default reducer;