import React from 'react';
import NavBar from './components/NavBar';
import PuzzleGame from './components/PuzzleGame';
import './index.css';

const App = () => {
  return (
    <>
      <NavBar />
      <div style={{ paddingTop: '80px' }}>
        <PuzzleGame />
      </div>
    </>
  );
};

export default App;
