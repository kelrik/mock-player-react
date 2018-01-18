import React, { PropTypes } from 'react';
import Playlist from './Playlist';
import Header from '../containers/Header';

const Table = props => {
  return (
      <div className="blocks">
        <Header />
        <Playlist compositions={ props.compositions } />
      </div>
  )
};


Table.propTypes = {
  //compositions: PropTypes.array.isRequired
};

export default Table;