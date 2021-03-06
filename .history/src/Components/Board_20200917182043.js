import React, { useState, useEffect } from "react"
// import shipFactory from "../factories/ship"
// import gameboardFactory from "../factories/gameboard"
// import player from "../factories/player"
// import Square from "./Square.js"
import Row from "./Row.js"
// import Player from "./Player.js"

function Board(props) {
    let { board, handleClick } = props;

    // console.log("123:", {board})
    // let squares = board;
    // console.log({ squares })
    
    const [rowState, setRows] = useState([]);

    let rows = [];
    let size = 10;

    useEffect((size, rows) => {
        rows = [];
        for (let i = 0; i < board.length; i += size) {
            rows.push(board.slice(i, i + size));
        }
        setRows(rows);
        console.log("rows", rows)
        console.log("New Rows:", rowState)
    },
        [board]
    );



    return (
        // <div>{squareItems}</div>

        <div>
            <div> test </div>
            <div className="board">
                {/* {squareItems} */}
                {rowState.map((row, i) => {
                    return (
                        <Row
                            key={i}
                            roww={i}
                            rowObj={row}
                            handleClick={handleClick}
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
        </div>
    )
}

export default Board;