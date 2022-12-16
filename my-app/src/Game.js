import React, { useState } from 'react';

const Square = (props) => {
    const [value, setValue] = useState(null);
    return (
        <button
            className="square"
            onClick={() => props.onClick()}
        >
            {value}
        </button>
    );
}

const Board = (props) => {
    const [squares, setSquares] = useState(Array(9).fill(null));

    const handleClick = (i) => {
        const ss = squares.slice();
        ss[i] = 'X';
        setSquares(ss);
    }

    const renderSquare = (i) => {
        return <Square value={squares[i]} onClick={() => handleClick(i)} />;
    }

    const status = 'Next player: X';

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

const Game = (props) => {
    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    );
}

export default Game;
