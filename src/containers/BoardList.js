import BoardList from '../components/lists/BoardList';
import { connect } from 'react-redux';
import { addListItem, setItemComplete } from '../actions/actions';

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (fields, boardId, listId) => dispatch(addListItem(fields[0].value, boardId, listId)),
		completeItem: (itemId, listId, boardId) => dispatch(setItemComplete(itemId, listId, boardId)),
	}
}	


// CONVERT SELECTORS
const mapStateToProps = (state, {boardId, listId}) => {
	return {
		listItems: state.boards.reduce((arr, board) => {
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
}	

export default connect(mapStateToProps, mapDispatchToProps)(BoardList);