import React, { useState, useEffect } from "react"
import shipFactory from "../factories/ship"
import gameboardFactory from "../factories/gameboard"
import player from "../factories/player"
import Board from "./Board.js"

function Game() {

    //Write logic that modertes the games (turns and GameOver etc.)

    const [playerOne, setPlayerOne] = useState(player("Player"))
    const [computer, setComputer] = useState(player("Player"))
    //^^should I use state or a variable?

    console.log("here", playerOne)
    console.log("comp", computer)

    


    return (
        <div id="game">
            <div id="col-one" className="column">
                <Board
                    player={playerOne}
                />


            </div>
            <div id="col-two" className="column">
                <Board
                    player={computer}

                />
            </div>

        </div>
    )
}

export default Game;