import { connect } from 'react-redux';
import Header from '../components/Header';
import { sortPlaylist } from '../actions/index'

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  sortPlaylist: (filter) => dispatch(sortPlaylist(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);