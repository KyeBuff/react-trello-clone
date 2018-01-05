import Boards from '../components/Boards';
import { connect } from 'react-redux';
import {addNewBoard} from '../actions/actions';

const mapStateToProps = state => {
	return {
		boards: state.boards,
	}
}	

const mapDispatchToProps = dispatch => {
	return {
		//send board name to reducer
		addBoard: (data) => dispatch(addNewBoard(data[0].value)),
	}
}	

export default connect(mapStateToProps, mapDispatchToProps)(Boards);