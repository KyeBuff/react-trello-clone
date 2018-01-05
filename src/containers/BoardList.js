import BoardList from '../components/lists/BoardList';
import { connect } from 'react-redux';
import { addListItem, toggleItemComplete } from '../actions/actions';
import {selectListItems} from '../reducers/reducer';

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (fields, boardId, listId) => dispatch(addListItem(fields[0].value, boardId, listId)),
		toggleItemComplete: (itemId, listId, boardId) => dispatch(toggleItemComplete(itemId, listId, boardId)),
	}
}	

const mapStateToProps = (state, {listId, boardId}) => {
	return {
		listItems: selectListItems(state, listId, boardId)
	}
}	

export default connect(mapStateToProps, mapDispatchToProps)(BoardList);