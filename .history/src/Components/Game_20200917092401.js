import React, { useState, useEffect } from "react"
import shipFactory from "../factories/ship"
// import gameboardFactory from "../factories/gameboard"
import player from "../factories/player"
import Board from "./Board.js"
// import { set } from "date-fns"

function Game() {

    const destroyer = shipFactory(2)
    const submarine = shipFactory(3)
    const cruiser = shipFactory(3)
    const battleship = shipFactory(4)
    const carrier = shipFactory(5)

    //Write logic that modertes the games (turns and GameOver etc.)

    const [playerOne, setPlayerOne] = useState(player("Player"))
    const [computer, setComputer] = useState(player("Player"))
    //^^Should I use functions instead of State? Because I don't know if I ever use "setPlayerOne"

    // const [pCarrier, setPCarrier] = useState(0)
    // const [pBattleship, setPBattleship] = useState(0)
    // const [pCruiser, setPCruiser] = useState(0)
    // const [pSubmarine, setPSubmarine] = useState(0)
    // const [pDestroyer, setPDestroyer] = useState(0)

    console.log("here", playerOne)
    console.log("comp", computer)

    const placeShipsPlayer = ({ pCarrier }, pBattleship, pCruiser, pSubmarine, pDestroyer) => {
        // console.log("Placements:")
        // console.log(pCarrier)
        // console.log(pBattleship)
        // console.log(pCruiser)
        // console.log(pSubmarine)
        // console.log(pDestroyer)
        // playerOne.gameboard.placeShip(carrier, 5, pCarrier[0], pCarrier[1]);
        playerOne.gameboard.placeShip(carrier, 5, pCarrier, "vertical";
        playerOne.gameboard.placeShip(battleship, 4, pBattleship, "horizontal");
        playerOne.gameboard.placeShip(cruiser, 3, pCruiser, "horizontal");
        playerOne.gameboard.placeShip(submarine, 3, pSubmarine, "vertical");
        playerOne.gameboard.placeShip(destroyer, 2, pDestroyer, "horizontal");
    }

    // useEffect(() => {
    //     setPCarrier(11);
    //     setPBattleship(14);
    //     setPCruiser(82);
    //     setPSubmarine(19);
    //     setPDestroyer(6);
    //     // console.log("State")
    //     // console.log(pCarrier)
    //     // console.log(pBattleship)
    //     // console.log(pCruiser)
    //     // console.log(pSubmarine)
    //     // console.log(pDestroyer)
    //     placeShipsPlayer(pCarrier, pBattleship, pCruiser, pSubmarine, pDestroyer);
    // }, []);

    //handleClick funciton to change these:
    // let pCarrier = [11, "vertical"];
    let pCarrier = 11;
    let pBattleship = 14;
    let pCruiser = 82;
    let pSubmarine = 19;
    let pDestroyer = 6;
    placeShipsPlayer(pCarrier, pBattleship, pCruiser, pSubmarine, pDestroyer);


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