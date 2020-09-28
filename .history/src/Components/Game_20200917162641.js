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

    let playerOne = player("Player");
    let computer = player("Player"); //Eventually change to "computer"

    const [playerBoard, setPlayerBoard] = useState(playerOne.gameboard.board);
    const [computerBoard, setComputerBoard] = useState(computer.gameboard.board);



    // const [pCarrier, setPCarrier] = useState(0)
    // const [pBattleship, setPBattleship] = useState(0)
    // const [pCruiser, setPCruiser] = useState(0)
    // const [pSubmarine, setPSubmarine] = useState(0)
    // const [pDestroyer, setPDestroyer] = useState(0)

    console.log("here", playerOne)
    console.log("comp", computer)


    let pBoard = playerOne.gameboard.board;
    let cBoard = computer.gameboard.board;

    console.log({ pBoard })

    let pCarrier = "";
    let pBattleship = "";
    let pCruiser = "";
    let pSubmarine = "";
    let pDestroyer = "";

    let pCarrierOrient = "";
    let pBattleshipOrient = "";
    let pCruiserOrient = "";
    let pSubmarineOrient = "";
    let pDestroyerOrient = "";

    // const placeShipsPlayer = (pCarrier, pBattleship, pCruiser, pSubmarine, pDestroyer, pCarrierOrient, pBattleshipOrient, pCruiserOrient, pSubmarineOrient, pDestroyerOrient) => {
    useEffect(() => {
        setPlayerBoard(pBoard)
    },
        [pBoard]
    );

    const placeShipsPlayer = (pCarrier, pBattleship, pCruiser, pSubmarine, pDestroyer, pCarrierOrient, pBattleshipOrient, pCruiserOrient, pSubmarineOrient, pDestroyerOrient) => {
        pBoard = playerOne.gameboard.placeShip(carrier, 5, pCarrier, pCarrierOrient);
        pBoard = playerOne.gameboard.placeShip(battleship, 4, pBattleship, pBattleshipOrient);
        pBoard = playerOne.gameboard.placeShip(cruiser, 3, pCruiser, pCruiserOrient);
        pBoard = playerOne.gameboard.placeShip(submarine, 3, pSubmarine, pSubmarineOrient);
        pBoard = playerOne.gameboard.placeShip(destroyer, 2, pDestroyer, pDestroyerOrient);
        return pBoard
    }

    pCarrier = 11;
    pBattleship = 14;
    pCruiser = 82;
    pSubmarine = 19;
    pDestroyer = 6;

    pCarrierOrient = "vertical";
    pBattleshipOrient = "horizontal";
    pCruiserOrient = "horizontal";
    pSubmarineOrient = "vertical";
    pDestroyerOrient = "horizontal";

    placeShipsPlayer(pCarrier, pBattleship, pCruiser, pSubmarine, pDestroyer, pCarrierOrient, pBattleshipOrient, pCruiserOrient, pSubmarineOrient, pDestroyerOrient);



    useEffect(() => {
        setComputerBoard(cBoard)
        console.log("cBoard Changed")
        console.log(computerBoard)
    },
        [cBoard]
    );

    const placeShipsComputer = (pCarrier, pBattleship, pCruiser, pSubmarine, pDestroyer, pCarrierOrient, pBattleshipOrient, pCruiserOrient, pSubmarineOrient, pDestroyerOrient) => {
        cBoard = computer.gameboard.placeShip(carrier, 5, pCarrier, pCarrierOrient);
        cBoard = computer.gameboard.placeShip(battleship, 4, pBattleship, pBattleshipOrient);
        cBoard = computer.gameboard.placeShip(cruiser, 3, pCruiser, pCruiserOrient);
        cBoard = computer.gameboard.placeShip(submarine, 3, pSubmarine, pSubmarineOrient);
        cBoard = computer.gameboard.placeShip(destroyer, 2, pDestroyer, pDestroyerOrient);
        return cBoard
    };

    // placeShipsPlayer(pCarrier, pBattleship, pCruiser, pSubmarine, pDestroyer, pCarrierOrient, pBattleshipOrient, pCruiserOrient, pSubmarineOrient, pDestroyerOrient);

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

    let attackCoord = "";

    function handleClick(id) {
        console.log("clicked", id)
        attackCoord = playerOne.sendAttack(id);
        console.log("attackCoord", attackCoord)
        // console.log("what:", computer.gameboard.receiveAttack(attackCoord))
        cBoard = computer.gameboard.receiveAttack(attackCoord);
        console.log("new cBoard", cBoard)
    };

    //    function handleClick(event){
    //         event.preventDefault();
    //         console.log("clicked")
    //     }


    return (
        <div id="game">
            <div id="col-one" className="column">
                <Board
                    board={playerBoard}
                />


            </div>
            <div id="col-two" className="column">
                <Board
                    board={computer.gameboard.board}
                    handleClick={handleClick}
                />
            </div>

        </div>
    )
}

export default Game;