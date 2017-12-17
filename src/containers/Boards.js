import Boards from '../components/Boards';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		boards: state.boards,
	}
}	

export default connect(mapStateToProps)(Boards);