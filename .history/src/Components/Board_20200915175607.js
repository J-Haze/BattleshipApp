import React from "react"
import shipFactory from "../factories/ship"
import gameboardFactory from "../factories/gameboard"
import player from "../factories/player"
import Player from "./Player.js"

function Board(square) {
   
    const squareItems = squares.map((square) =>
        <Square
        square={square.}
        // key={book.title}
        // book={book}
        // handleDelete={handleDelete}
        // toggleRead={toggleRead}
        // toggleReading={toggleReading}
        // toggleNotRead={toggleNotRead}
        />
    );

    return (
        <div>{squareItems}</div>
    )
}

export default Board;