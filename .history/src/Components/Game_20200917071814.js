import React, { useState, useEffect } from "react"
import shipFactory from "../factories/ship"
import gameboardFactory from "../factories/gameboard"
import player from "../factories/player"
import Board from "./Board.js"

function Game() {

    const destroyer = shipFactory(2)
    const submarine = shipFactory(3)
    const cruiser = shipFactory(3)
    const battleship = shipFactory(4)
    const carrier = shipFactory(5)

    //Write logic that modertes the games (turns and GameOver etc.)

    const [playerOne, setPlayerOne] = useState(player("Player"))
    const [computer, setComputer] = useState(player("Player"))
    //^^should I use state or a variable?

    console.log("here", playerOne)
    console.log("comp", computer)

    const placeShipsPlayer = () => {
        playerOne.gameboard.placeShip(carrier, 5, 11, "vertical");
        playerOne.gameboard.placeShip(battleship, 4, 11, "vertical");
        playerOne.gameboard.placeShip(cruiser, 3, 82, "horizontal");
        playerOne.gameboard.placeShip(submarine, 3, 19, "horizontal");
        playerOne.gameboard.placeShip(destroyer, 2, 6, "horizontal");
    }

    placeShipsPlayer();

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