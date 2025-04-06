import React from 'react';

const Controls = ({ shuffle }) => {
  return (
    <div className="controls">
      <button onClick={shuffle}>New Game</button>
    </div>
  );
};

export default Controls;
