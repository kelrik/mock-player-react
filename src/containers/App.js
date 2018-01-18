import { connect } from 'react-redux';
import App from '../components/App';
import { fetchAll } from '../actions/index';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  fetchAll: () => dispatch(fetchAll())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);