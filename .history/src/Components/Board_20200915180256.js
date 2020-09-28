import React from "react"
import shipFactory from "../factories/ship"
import gameboardFactory from "../factories/gameboard"
import player from "../factories/player"
import Player from "./Player.js"

function Board(player) {

    let squares = player.gameboard();


    // const squareItems = squares.map((square) =>
    //     <Square
    //         square={square}
    //     // key={book.title}
    //     // book={book}
    //     // handleDelete={handleDelete}
    //     // toggleRead={toggleRead}
    //     // toggleReading={toggleReading}
    //     // toggleNotRead={toggleNotRead}
    //     />
    // );

    return (
        // <div>{squareItems}</div>

        <div> {squares} </div>
    )
}

export default Board;