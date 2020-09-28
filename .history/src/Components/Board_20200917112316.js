import React from "react"
// import shipFactory from "../factories/ship"
// import gameboardFactory from "../factories/gameboard"
// import player from "../factories/player"
// import Square from "./Square.js"
import Row from "./Row.js"
// import Player from "./Player.js"

function Board({ player, handleClick }) {

    let squares = player.gameboard.board;
    let size = 10; let rows = [];
    for (let i = 0; i < squares.length; i += size) {
        rows.push(squares.slice(i, i + size));
    }
    console.log("rows", rows)
    // let rowOne = squares.splice(0, 10);
    //squares should be an array of all the squares

    console.log("rows:", rows)
    console.log("squares:", squares)

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