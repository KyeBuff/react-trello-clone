import Board from '../components/Board';
import { connect } from 'react-redux';
import {addListToBoard} from '../actions/actions';
import {fetchBoard} from '../reducers/reducer';

const mapStateToProps = (state, {boardId}) => {
	return {
		board: fetchBoard(state, boardId),
	}
}	

const mapDispatchToProps = (dispatch, {boardId}) => {
	return {
		onAddList: (listName) => dispatch(addListToBoard(listName, boardId)),
	}
}	

export default connect(mapStateToProps, mapDispatchToProps)(Board);