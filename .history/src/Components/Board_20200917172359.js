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
    
    const [rows, setRows] = useState([]);

    let size = 10;

    useEffect(() => {
        setPlayerBoard(pBoard)
    },
        [props]
    );

    for (let i = 0; i < board.length; i += size) {
        rows.push(board.slice(i, i + size));
    }
    console.log("rows", rows)
    setRows(rows)

    console.log("rows2 :", rows)

    console.log("handleClick1:", handleClick)



    return (
        // <div>{squareItems}</div>

        <div>
            <div> test </div>
            <div className="board">
                {/* {squareItems} */}
                {rows.map((row, i) => {
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