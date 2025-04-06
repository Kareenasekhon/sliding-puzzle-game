import React, { useState, useEffect } from 'react';
import PuzzleBoard from './PuzzleBoard';
import WinMessage from './WinMessage';

const PuzzleGame = () => {
  const [tiles, setTiles] = useState([1, 2, 3, 4, 5, 6, 7, 8, null]);
  const [moves, setMoves] = useState(0);
  const [isWon, setIsWon] = useState(false);

  const shuffle = () => {
    const newTiles = [...tiles];
    for (let i = newTiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newTiles[i], newTiles[j]] = [newTiles[j], newTiles[i]];
    }
    setTiles(newTiles);
    setMoves(0);
    setIsWon(false);
  };

  useEffect(() => {
    shuffle();
  }, []);

  const checkWin = (currentTiles) => {
    const solution = [1, 2, 3, 4, 5, 6, 7, 8, null];
    return currentTiles.every((tile, index) => tile === solution[index]);
  };

  const handleTileClick = (index) => {
    if (isWon) return;

    const emptyIndex = tiles.indexOf(null);
    const row = Math.floor(index / 3);
    const emptyRow = Math.floor(emptyIndex / 3);
    const col = index % 3;
    const emptyCol = emptyIndex % 3;

    if (
      (Math.abs(row - emptyRow) === 1 && col === emptyCol) ||
      (Math.abs(col - emptyCol) === 1 && row === emptyRow)
    ) {
      const newTiles = [...tiles];
      [newTiles[index], newTiles[emptyIndex]] = [newTiles[emptyIndex], newTiles[index]];
      setTiles(newTiles);
      setMoves(moves + 1);

      if (checkWin(newTiles)) {
        setIsWon(true);
      }
    }
  };

  return (
    <div className="puzzle-container">
      <h1 style={{ textAlign: 'center', color: '#00008B', margin: '10px 0' }}>Sliding Puzzle</h1>
      <div className="moves">Moves: {moves}</div>
      <PuzzleBoard tiles={tiles} onTileClick={handleTileClick} />
      <div className="controls">
        <button onClick={shuffle}>New Game</button>
      </div>
      {isWon && <WinMessage moves={moves} onPlayAgain={shuffle} />}
    </div>
  );
};

export default PuzzleGame;
