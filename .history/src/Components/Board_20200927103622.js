import React, { useState, useEffect } from "react"
import Row from "./Row.js"


function Board(props) {
    let { id, board, phase, boardID, handlePlaceShip, update } = props;

    const [rowState, setRows] = useState([]);

    useEffect(() => {
        let rows = [];
        for (let i = 0; i < board.length; i += 10) {
            rows.push(board.slice(i, i + 10));
        }
        setRows(rows);
    }, [update]
    );

    return (
        <div id={id} className="board">
            {rowState.map((row, i) => {
                return (
                    <Row
                        key={i}
                        roww={i}
                        rowObj={row}
                        phase={phase}
                        boardID={boardID}
                        handlePlaceShip={handlePlaceShip}
                    />
                );
            })
            }
        </div>
    )
}

export default Board;