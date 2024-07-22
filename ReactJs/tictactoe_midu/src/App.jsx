import { useState } from 'react';
import './App.css';
import confetti from 'canvas-confetti';
import {TURNS} from './constants/index';
import WinnerModal from './components/WinnerModal';
import {checkEndGame, checkWinner} from './logic/board'
import Board from './components/Board';
import Turn from './components/Turn';
import { resetGameStorage, saveGameStorage } from './logic/storage';

function App() { 
  const [board, setBoard] = useState(() => {
    const boardFromLocalStorage = window.localStorage.getItem('board');
    return JSON.parse(boardFromLocalStorage) ?? Array(9).fill(null);
  });
  
  const [turn, setTurn] = useState(() => {
    const turnFromLocalStorage = window.localStorage.getItem('turn');
    return turnFromLocalStorage ?? TURNS.X;
  });

  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    const newBoard =  [...board];
    
    if(newBoard[index] || winner) return;
    
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    const newWinner = checkWinner(newBoard);
    
    saveGameStorage(newTurn, newBoard);
    
    if(newWinner){
      confetti();
      setWinner(newWinner)
    }
    else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }
  
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage();
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <Board board={board} updateBoard={updateBoard}/>
      <Turn turn={turn} />
      <button onClick={resetGame}>Reiniciar Juego</button>
      <WinnerModal winner={winner} resetGame={resetGame}/>
    </main>
  )
}

export default App