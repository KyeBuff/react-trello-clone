import Board from '../components/Board';
import { connect } from 'react-redux';

const mapStateToProps = (state, {boardId}) => {
	return {
		board: state.boards.filter(board => board.id !== boardId),
	}
}	

export default connect(mapStateToProps)(Board);