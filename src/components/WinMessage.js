import React from 'react';

const WinMessage = ({ moves, onPlayAgain }) => {
  return (
    <div className="win-message">
      <h2>Congratulations!</h2>
      <p>You solved the puzzle in {moves} moves!</p>
      <button onClick={onPlayAgain}>Play Again</button>
    </div>
  );
};

export default WinMessage;
