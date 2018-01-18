import { connect } from 'react-redux';
import Menu from '../components/Menu';
import { createNewRecord } from '../actions/index'

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  createNewRecord: () => dispatch(createNewRecord())
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);