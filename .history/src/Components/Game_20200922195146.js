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

    // // const placeShipsPlayer = (pCarrier, pBattleship, pCruiser, pSubmarine, pDestroyer, pCarrierOrient, pBattleshipOrient, pCruiserOrient, pSubmarineOrient, pDestroyerOrient) => {
    // useEffect(() => {
    //     setPlayerBoard(pBoard)
    // }, []
    //     // [pBoard]
    //     //^^This creates an infinite loop
    // );

    const placeShipsPlayer = (pCarrier, pBattleship, pCruiser, pSubmarine, pDestroyer, pCarrierOrient, pBattleshipOrient, pCruiserOrient, pSubmarineOrient, pDestroyerOrient) => {
        // pBoard = playerOne.gameboard.placeShip(carrier, 5, pCarrier, pCarrierOrient);
        // pBoard = playerOne.gameboard.placeShip(battleship, 4, pBattleship, pBattleshipOrient);
        // pBoard = playerOne.gameboard.placeShip(cruiser, 3, pCruiser, pCruiserOrient);
        // pBoard = playerOne.gameboard.placeShip(submarine, 3, pSubmarine, pSubmarineOrient);
        // pBoard = playerOne.gameboard.placeShip(destroyer, 2, pDestroyer, pDestroyerOrient);



        playerState.gameboard.placeShip(carrier, 5, pCarrier, pCarrierOrient);

        // player.gameboard.placeShip(battleship, 4, pBattleship, pBattleshipOrient);
        // player.gameboard.placeShip(cruiser, 3, pCruiser, pCruiserOrient);
        // player.gameboard.placeShip(submarine, 3, pSubmarine, pSubmarineOrient);
        // player.gameboard.placeShip(destroyer, 2, pDestroyer, pDestroyerOrient);

        // return pBoard
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
        // const updatedBoard = [...computer.gameboard.board];

        attackCoord = playerState.sendAttack(id);
        // const updatedBoard = [computer.gameboard.receiveAttack(attackCoord)];
        computer.gameboard.receiveAttack(attackCoord)

        // console.log("updatedBoard", updatedBoard)

        // setComputer(computer.gameboard.receiveAttack(attackCoord))
        // setComputer(updatedBoard)
        // setComputer(computer)

        setRefresh(!refresh)
        console.log("computer:", computer)

        // console.log("new cBoard", computer.gameboard)
        // console.log("computerBoard!!", computerBoard)
    };

    // function handleClick(id) {
    //     console.log("clicked", id)
    //     attackCoord = playerOne.sendAttack(id);
    //     console.log("attackCoord", attackCoord)
    //     // console.log("what:", computer.gameboard.receiveAttack(attackCoord))
    //     // cBoard = computer.gameboard.receiveAttack(attackCoord);
    //     computer.gameboard.receiveAttack(attackCoord)
    //     console.log("(computer.gameboard", computer.gameboard)
    //     // cBoard = computerBoard.receiveAttack(attackCoord);
    //     // setComputerBoard(computer.gameboard)
    //     console.log("computer.gameboard.receiveAttack(attackCoord)", computer.gameboard.receiveAttack(attackCoord))
    //     // setComputerBoard(computer.gameboard.board)
    //     console.log("new cBoard", computer.gameboard)
    //     // console.log("computerBoard!!", computerBoard)
    // };

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

    // useEffect(() => {
    //     createRows(computer.gameboard);  
    // }, [computer.gameboard]
    // );

    return (
        <div id="game">
            <div id="col-one" className="column">
                <Board
                    key={"player"}
                    board={playerState.gameboard.board}
                // handleClick={}
                // handleTest={handleTest}
                />

                {/* {rowState.map((row, i) => {
                    return (
                        <Row
                            key={i}
                            roww={i}
                            rowObj={row}
                        />
                    );
                })
                } */}


            </div>
            <div id="col-two" className="column">
                {/* <Board
                    key={computerBoard}
                    board={computerBoard}
                    handleClick={handleClick}
                    handleTest={handleTest}
                /> */}

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