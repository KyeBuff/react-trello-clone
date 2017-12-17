import NewBoard from '../components/NewBoard';
import { connect } from 'react-redux';
import {addNewBoard} from '../actions/actions';

const mapDispatchToProps = dispatch => {
	return {
		//send board name to reducer
		onSubmit: (data) => dispatch(addNewBoard(data[0].value)),
	}
}	

export default connect(null, mapDispatchToProps)(NewBoard);