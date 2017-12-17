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

const reducer = (state=initialState, action) => {
	switch(action.type) {
		case '[Boards] addNewBoard': return addNewBoard(state, action.data);
		default: 
			return state;
	}
}

export default reducer;