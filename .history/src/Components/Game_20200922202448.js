import React, { useState, useEffect } from "react"
import shipFactory from "../factories/ship"
import gameboardFactory from "../factories/gameboard"
import player from "../factories/player"
import Board from "./Board.js"
import Row from "./Row.js"
// import { set } from "date-fns"

function Game() {

    const destroyer = shipFactory(2)
    const submarine = shipFactory(3)
    const cruiser = shipFactory(3)
    const battleship = shipFactory(4)
    const carrier = shipFactory(5)

    //Write logic that modertes the games (turns and GameOver etc.)

    // let playerOne = player("Player");
    // let computer = player("Player"); //Eventually change to "computer"

    // let pBoard = playerOne.gameboard.board;
    // let cBoard = computer.gameboard.board;

    const [playerState, setPlayer] = useState(player("Player"))
    const [computer, setComputer] = useState(player("Player")) //Eventually change to "computer"
    // const [playerBoard, setPlayerBoard] = useState(pBoard);
    // const [computerBoard, setComputerBoard] = useState(cBoard);

    // console.log("computer.gameboard", computer.gameboard)
    // console.log("computer.gameboard.placeShip()", computer.gameboard.placeShip())

    // console.log("playerState.gameboard.sendAttack()", playerState)

    const [rowState, setRowState] = useState([]);
    let rows = [];

    const [refresh, setRefresh] = useState(false);

    // const [pCarrier, setPCarrier] = useState(0)
    // const [pBattleship, setPBattleship] = useState(0)
    // const [pCruiser, setPCruiser] = useState(0)
    // const [pSubmarine, setPSubmarine] = useState(0)
    // const [pDestroyer, setPDestroyer] = useState(0)

    // console.log("here", playerOne)
    // console.log("comp", computer)

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

    const placeShipsPlayer = (pCarrier, pBattleship, pCruiser, pSubmarine, pDestroyer, pCarrierOrient, pBattleshipOrient, pCruiserOrient, pSubmarineOrient, pDestroyerOrient) => {
        playerState.gameboard.placeShip(carrier, 5, pCarrier, pCarrierOrient);
        playerState.gameboard.placeShip(battleship, 4, pBattleship, pBattleshipOrient);
        playerState.gameboard.placeShip(cruiser, 3, pCruiser, pCruiserOrient);
        playerState.gameboard.placeShip(submarine, 3, pSubmarine, pSubmarineOrient);
        playerState.gameboard.placeShip(destroyer, 2, pDestroyer, pDestroyerOrient);
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


    const placeShipsComputer = (pCarrier, pBattleship, pCruiser, pSubmarine, pDestroyer, pCarrierOrient, pBattleshipOrient, pCruiserOrient, pSubmarineOrient, pDestroyerOrient) => {
        // cBoard = computer.gameboard.placeShip(carrier, 5, pCarrier, pCarrierOrient);
        // cBoard = computer.gameboard.placeShip(battleship, 4, pBattleship, pBattleshipOrient);
        // cBoard = computer.gameboard.placeShip(cruiser, 3, pCruiser, pCruiserOrient);
        // cBoard = computer.gameboard.placeShip(submarine, 3, pSubmarine, pSubmarineOrient);
        // cBoard = computer.gameboard.placeShip(destroyer, 2, pDestroyer, pDestroyerOrient);

        // setComputer(computer.gameboard.placeShip(carrier, 5, pCarrier, pCarrierOrient));

        // computer.gameboard.placeShip(battleship, 4, pBattleship, pBattleshipOrient);
        // computer.gameboard.placeShip(cruiser, 3, pCruiser, pCruiserOrient);
        // computer.gameboard.placeShip(submarine, 3, pSubmarine, pSubmarineOrient);
        // computer.gameboard.placeShip(destroyer, 2, pDestroyer, pDestroyerOrient);

    };

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

    let attackCoord = "";

    function handleClick(id) {
        attackCoord = playerState.sendAttack(id);
        computer.gameboard.receiveAttack(attackCoord)
        setRefresh(!refresh)
        console.log("computer:", computer)
    };

    function createRows(board) {
        rows = [];
        for (let i = 0; i < board.length; i += 10) {
            rows.push(board.slice(i, i + 10));
        }
        setRowState(rows);
    }

    useEffect(() => {
        createRows(computer.gameboard.board);

    }, [computer, refresh]
    );

    return (
        <div id="game">
            <div id="col-one" className="column">
                <Board
                    key={"player"}
                    board={playerState.gameboard.board}
                // handleClick={}
                // handleTest={handleTest}
                />


            </div>
            <div id="col-two" className="column">

                {rowState.map((row, i) => {
                    return (
                        <Row
                            key={i}
                            roww={i}
                            rowObj={row}
                            handleClick={handleClick}
                        />
                    );
                })
                }
            </div>

        </div>
    )
}

export default Game;