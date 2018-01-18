import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Playlist = props => {

  const playlistRender = () => props.compositions.map((item, key) => {
      return <div className="row body" key={ key }>
        <div>{ item.artist }</div>
        <div>{ item.song }</div>
        <div>{ item.genre }</div>
        <div>{ item.year }</div>
      </div>
  });

  return (
    <Fragment>
         { playlistRender() }
    </Fragment>
  );

};

Playlist.propTypes = {
  compositions: PropTypes.array.isRequired
};

export default Playlist;