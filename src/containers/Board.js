import Board from '../components/Board';
import { connect } from 'react-redux';
import {addListToBoard} from '../actions/actions';
import {selectBoard} from '../reducers/reducer';

const mapStateToProps = (state, {boardId}) => {
	return {
		board: selectBoard(state, boardId),
	}
}	

const mapDispatchToProps = (dispatch, {boardId}) => {
	return {
		onAddList: (listName) => dispatch(addListToBoard(listName, boardId)),
	}
}	

export default connect(mapStateToProps, mapDispatchToProps)(Board);