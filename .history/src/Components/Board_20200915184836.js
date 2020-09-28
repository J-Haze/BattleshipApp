import React from "react"
import shipFactory from "../factories/ship"
import gameboardFactory from "../factories/gameboard"
import player from "../factories/player"
import Square from "./Square.js"
// import Player from "./Player.js"

function Board(playerOne) {

    let squares = playerOne.gameboard.board;
    console.log(squares)


    const squareItems = squares.map((square) =>
        <Square
            square={square}
            // key={square.}
        // key={book.title}
        // book={book}
        // handleDelete={handleDelete}
        // toggleRead={toggleRead}
        // toggleReading={toggleReading}
        // toggleNotRead={toggleNotRead}
        />
    );

    return (
        // <div>{squareItems}</div>

        <div> {squareItems} </div>
    )
}

export default Board;