import Board from '../components/Board';
import { connect } from 'react-redux';
import {addListToBoard} from '../actions/actions';

const mapStateToProps = (state, {boardId}) => {
	return {
	}
}	

const mapDispatchToProps = (dispatch, {boardId}) => {
	return {
		onAddList: (listName) => dispatch(addListToBoard(listName, boardId)),
	}
}	

export default connect(mapStateToProps, mapDispatchToProps)(Board);