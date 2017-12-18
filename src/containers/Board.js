import Board from '../components/Board';
import { connect } from 'react-redux';
import {addListToBoard} from '../actions/actions';

const mapStateToProps = (state, {boardId}) => {
	return {
		board: state.boards.reduce((ob, board) => {
			if(board.id === +boardId) {
				return {
					...ob,
					...board
				}
			}
			return ob;
		}, {}),
	}
}	

const mapDispatchToProps = (dispatch, {boardId}) => {
	return {
		onAddList: (listName) => dispatch(addListToBoard(listName, boardId)),
	}
}	

export default connect(mapStateToProps, mapDispatchToProps)(Board);