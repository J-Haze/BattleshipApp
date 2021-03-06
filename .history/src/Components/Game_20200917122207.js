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

    const playerOne = player("Player");
    const computer = useState(player("Player"))
    //^^Should I use functions instead of State? Because I don't know if I ever use "setPlayerOne"

    //^^ And then i need to make the gameboard a state instead




    // const [pCarrier, setPCarrier] = useState(0)
    // const [pBattleship, setPBattleship] = useState(0)
    // const [pCruiser, setPCruiser] = useState(0)
    // const [pSubmarine, setPSubmarine] = useState(0)
    // const [pDestroyer, setPDestroyer] = useState(0)

    console.log("here", playerOne)
    console.log("comp", computer)

    const placeShipsPlayer = (pCarrier, pBattleship, pCruiser, pSubmarine, pDestroyer, pCarrierOrient, pBattleshipOrient, pCruiserOrient, pSubmarineOrient, pDestroyerOrient) => {
        // console.log("Placements:")
        // console.log(pCarrier)
        // console.log(pBattleship)
        // console.log(pCruiser)
        // console.log(pSubmarine)
        // console.log(pDestroyer)
        // playerOne.gameboard.placeShip(carrier, 5, pCarrier[0], pCarrier[1]);
        playerOne.gameboard.placeShip(carrier, 5, pCarrier, pCarrierOrient);
        playerOne.gameboard.placeShip(battleship, 4, pBattleship, pBattleshipOrient);
        playerOne.gameboard.placeShip(cruiser, 3, pCruiser, pCruiserOrient);
        playerOne.gameboard.placeShip(submarine, 3, pSubmarine, pSubmarineOrient);
        playerOne.gameboard.placeShip(destroyer, 2, pDestroyer, pDestroyerOrient);
    };

    const placeShipsComputer = (pCarrier, pBattleship, pCruiser, pSubmarine, pDestroyer, pCarrierOrient, pBattleshipOrient, pCruiserOrient, pSubmarineOrient, pDestroyerOrient) => {
        // console.log("Placements:")
        // console.log(pCarrier)
        // console.log(pBattleship)
        // console.log(pCruiser)
        // console.log(pSubmarine)
        // console.log(pDestroyer)
        // playerOne.gameboard.placeShip(carrier, 5, pCarrier[0], pCarrier[1]);
        computer.gameboard.placeShip(carrier, 5, pCarrier, pCarrierOrient);
        computer.gameboard.placeShip(battleship, 4, pBattleship, pBattleshipOrient);
        computer.gameboard.placeShip(cruiser, 3, pCruiser, pCruiserOrient);
        computer.gameboard.placeShip(submarine, 3, pSubmarine, pSubmarineOrient);
        computer.gameboard.placeShip(destroyer, 2, pDestroyer, pDestroyerOrient);
    };

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

    let pCarrierOrient = "vertical";
    let pBattleshipOrient = "horizontal";
    let pCruiserOrient = "horizontal";
    let pSubmarineOrient = "vertical";
    let pDestroyerOrient = "horizontal";

    placeShipsPlayer(pCarrier, pBattleship, pCruiser, pSubmarine, pDestroyer, pCarrierOrient, pBattleshipOrient, pCruiserOrient, pSubmarineOrient, pDestroyerOrient);

    let cCarrier = 10;
    let cBattleship = 12;
    let cCruiser = 82;
    let cSubmarine = 19;
    let cDestroyer = 66;

    let cCarrierOrient = "vertical";
    let cBattleshipOrient = "horizontal";
    let cCruiserOrient = "horizontal";
    let cSubmarineOrient = "vertical";
    let cDestroyerOrient = "vertical";

    placeShipsComputer(cCarrier, cBattleship, cCruiser, cSubmarine, cDestroyer, cCarrierOrient, cBattleshipOrient, cCruiserOrient, cSubmarineOrient, cDestroyerOrient);

    // const handleClick = (id) => {
    //     // event.preventDefault();
    //     console.log("clicked", id)
    // }

    function handleClick(id) {
        console.log("clicked", id)
        let attackCoord = playerOne.sendAttack(id);
        computer.gameboard.receiveAttack(attackCoord);
    };

    //    function handleClick(event){
    //         event.preventDefault();
    //         console.log("clicked")
    //     }


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
                    handleClick={handleClick}
                />
            </div>

        </div>
    )
}

export default Game;