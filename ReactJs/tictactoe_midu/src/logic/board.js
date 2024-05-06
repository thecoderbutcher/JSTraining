import {WINNER_MATCH} from '../constants/index';

export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null);
}

export const checkWinner = (boardToCheck) => {
  for(const combo of WINNER_MATCH){
    const [a,b,c] = combo
    if(
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ){
      return boardToCheck[a];
    }
  }
}