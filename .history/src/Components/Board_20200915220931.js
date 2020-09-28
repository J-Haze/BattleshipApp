import React from "react"
import shipFactory from "../factories/ship"
import gameboardFactory from "../factories/gameboard"
import player from "../factories/player"
import Square from "./Square.js"
// import Player from "./Player.js"

function Board({ player, gameboard, pSquares }) {

    // let squares = player.gameboard
    //squares should be an array of all the squares

    // const squareItems = squares.map((row, i) => {
    //     return row.map((square, j) => {
    //         return (
    //             <Square
    //                 key={j}
    //                 squareObj={square}
    //                 // position={[i, j]}
    //                 position={i*10 + j}
    //             // key={square.}
    //             // key={book.title}
    //             // book={book}
    //             // handleDelete={handleDelete}
    //             // toggleRead={toggleRead}
    //             // toggleReading={toggleReading}
    //             // toggleNotRead={toggleNotRead}

    //             />
    //         );
    //     });
    // }

    // );

    // console.log("squares:", square)

    return (
        // <div>{squareItems}</div>

        <div>
            <div> test </div>
            <div className="board">
                {/* {squareItems} */}
                {pSquares.map((row, i) => {
                    return row.map((square, j) => {
                        return (
                            <Square
                                key={j}
                                squareObj={square}
                                // position={[i, j]}
                                position={i * 10 + j}
                            // key={square.}
                            // key={book.title}
                            // book={book}
                            // handleDelete={handleDelete}
                            // toggleRead={toggleRead}
                            // toggleReading={toggleReading}
                            // toggleNotRead={toggleNotRead}
                            />
                        );
                    });
                })}
            </div>
        </div>
    )
}

export default Board;