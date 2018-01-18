import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ sortPlaylist }) => (
    <div className="row header">
      <div onClick={ () => sortPlaylist('artist') }>Исполнитель</div>
      <div onClick={ () => sortPlaylist('song') }>Песня</div>
      <div onClick={ () => sortPlaylist('genre') }>Жанр</div>
      <div onClick={ () => sortPlaylist('year') }>Год</div>
    </div>
);

export default Header;