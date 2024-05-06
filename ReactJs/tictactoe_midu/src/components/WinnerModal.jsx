import Square from "./Square";

const WinnerModal = ({winner, resetGame}) => {
    if (winner === null) return;
    
    const winnerText = winner ? 'Ganó': 'Empate';
    
    return ( 
        <section className='winner'>
            <div className='text'>
                <h2>{winnerText}</h2>
                <header className='win'>
                    {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                    <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
            </div>
        </section> 
    )
}

export default WinnerModal
