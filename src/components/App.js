import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '../containers/Table';
import Menu from '../containers/Menu';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchAll();
  }

  render() {
    return (
        <div className="wrapper">
          <Table />
          <Menu />
        </div>
    );
  }
}

App.propTypes = {
   fetchAll: PropTypes.func.isRequired,
};

export default App;
