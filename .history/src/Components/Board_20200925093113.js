import React, { useState, useEffect } from "react"
// import shipFactory from "../factories/ship"
// import gameboardFactory from "../factories/gameboard"
// import player from "../factories/player"
// import Square from "./Square.js"
import Row from "./Row.js"
// import Player from "./Player.js"

function Board(props) {
    let { id, board, phase, boardID, handlePlaceShip, update } = props;

    // console.log("123:", {board})
    // let squares = board;
    // console.log({ squares })

    const [rowState, setRows] = useState([]);

    // let rows = [];


    useEffect(() => {
        let rows = [];
        for (let i = 0; i < board.length; i += 10) {
            rows.push(board.slice(i, i + 10));
        }
        setRows(rows);
        console.log("inner board:", board)
        // console.log("rows", rows)
        // console.log("New Rows:", rowState)
        // console.log("Use Effect Board")
    }, [update]
        // [board]
    );



    return (
        <div id={id} className="board">
            {/* {squareItems} */}
            {rowState.map((row, i) => {
                return (
                    <Row
                        key={i}
                        roww={i}
                        rowObj={row}
                        phase={phase}
                        boardID={boardID}
                        handlePlaceShip={handlePlaceShip}
                    // position={[i, j]}
                    // position={square}
                    // key={square.}
                    // key={book.title}
                    // book={book}
                    // handleDelete={handleDelete}
                    // toggleRead={toggleRead}
                    // toggleReading={toggleReading}
                    // toggleNotRead={toggleNotRead}
                    />
                );
            })
            }
        </div>
    )
}

export default Board;