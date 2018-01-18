import { connect } from 'react-redux';
import Table from '../components/Table';
import { selectors } from '../reducers'

const mapStateToProps = (state) => ({
  compositions: selectors.getCompositions(state)
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Table);