import BoardList from '../components/lists/BoardList';
import { connect } from 'react-redux';
import { addListItem } from '../actions/actions';

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (fields, boardId, listId) => dispatch(addListItem(fields[0].value, boardId, listId)),
	}
}	

export default connect(null, mapDispatchToProps)(BoardList);