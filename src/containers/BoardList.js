import BoardList from '../components/lists/BoardList';
import { connect } from 'react-redux';

// const mapStateToProps = state => {
// 	return {
// 		boards: state.boards,
// 	}
// }	

const mapDispatchToProps = state => {
	return {
		boards: state.boards,
	}
}	

export default connect(null, mapDispatchToProps)(BoardList);