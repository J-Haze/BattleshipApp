import React from "react"
import shipFactory from "../factories/ship"
import gameboardFactory from "../factories/gameboard"
import player from "../factories/player"
import Square from "./Square.js"
// import Player from "./Player.js"

function Board({ player }) {

    let squares = player.gameboard.board;
    //squares should be an array of all the squares

    console.log("squares:", squares)

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
                {squares.map((square) => {
                    return (
                        <Square
                            key={square}
                            squareObj={square}
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