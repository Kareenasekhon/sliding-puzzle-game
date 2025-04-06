import React from 'react';
import '../index.css';

const Tile = ({ tile, index, onClick }) => {
  return (
    <div
      className={`tile ${tile === null ? 'empty' : ''}`}
      onClick={() => onClick(index)}
    >
      {tile}
    </div>
  );
};

export default Tile;
