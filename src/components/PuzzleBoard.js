import React from 'react';
import Tile from './Tile';

const PuzzleBoard = ({ tiles, onTileClick }) => {
  return (
    <div className="puzzle-board">
      {tiles.map((tile, index) => (
        <Tile key={index} tile={tile} index={index} onClick={onTileClick} />
      ))}
    </div>
  );
};

export default PuzzleBoard;
