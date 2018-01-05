import Boards from '../components/Boards';
import { connect } from 'react-redux';
import {addNewBoard} from '../actions/actions';
import {selectBoards} from '../reducers/reducer';

const mapStateToProps = state => {
	return {
		boards: selectBoards(state),
	}
}	

const mapDispatchToProps = dispatch => {
	return {
		//send board name to reducer
		addBoard: (data) => dispatch(addNewBoard(data[0].value)),
	}
}	

export default connect(mapStateToProps, mapDispatchToProps)(Boards);