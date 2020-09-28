import React, { useState, useEffect } from "react"
import shipFactory from "../factories/ship"
import gameboardFactory from "../factories/gameboard"
import player from "../factories/player"
import Board from "./Board.js"
import Row from "./Row.js"
import PlayerFleet from "./PlayerFleet.js"
import ComputerFleet from "./ComputerFleet.js"
// import { set } from "date-fns"

function Game() {
    const [playerState, setPlayer] = useState(player("Player"))
    const [computer, setComputer] = useState(player("Player")) //Eventually change to "computer"
    // ^^^ or get rid of argument


    const [rowState, setRowState] = useState([]);
    let rows = [];

    const [orientation, setOrientation] = useState("horizontal");
    const [placingShip, setPlacingShip] = useState(null);

    const [refresh, setRefresh] = useState(false);
    const [update, setUpdate] = useState(false);

    // const [phase, setPhase] = useState("playerTurn")
    const [phase, setPhase] = useState("setup")

    //     const destroyer = shipFactory(2)
    //     const submarine = shipFactory(3)
    //     const cruiser = shipFactory(3)
    //     const battleship = shipFactory(4)
    //     const carrier = shipFactory(5)

    //May have to use state for this, but try with variables first
    // let pCarrier = "";
    // let pBattleship = "";
    // let pCruiser = "";
    // let pSubmarine = "";
    // let pDestroyer = "";

    // let pCarrierOrient = orientation;
    // let pBattleshipOrient = orientation;
    // let pCruiserOrient = orientation;
    // let pSubmarineOrient = orientation;
    // let pDestroyerOrient = orientation;

    // let cCarrier = "";
    // let cBattleship = "";
    // let cCruiser = "";
    // let cSubmarine = "";
    // let cDestroyer = "";

    // let cCarrierOrient = "horizontal";
    // let cBattleshipOrient = "horizontal";
    // let cCruiserOrient = "horizontal";
    // let cSubmarineOrient = "horizontal";
    // let cDestroyerOrient = "horizontal";



    // const placeShipsPlayer = (pCarrier, pBattleship, pCruiser, pSubmarine, pDestroyer, pCarrierOrient, pBattleshipOrient, pCruiserOrient, pSubmarineOrient, pDestroyerOrient) => {
    //     const destroyer = shipFactory(2)
    //     const submarine = shipFactory(3)
    //     const cruiser = shipFactory(3)
    //     const battleship = shipFactory(4)
    //     const carrier = shipFactory(5)

    //     playerState.gameboard.placeShip(carrier, 5, pCarrier, pCarrierOrient);
    //     playerState.gameboard.placeShip(battleship, 4, pBattleship, pBattleshipOrient);
    //     playerState.gameboard.placeShip(cruiser, 3, pCruiser, pCruiserOrient);
    //     playerState.gameboard.placeShip(submarine, 3, pSubmarine, pSubmarineOrient);
    //     playerState.gameboard.placeShip(destroyer, 2, pDestroyer, pDestroyerOrient);
    // }

    // pCarrier = 11;
    // pBattleship = 14;
    // pCruiser = 82;
    // pSubmarine = 19;
    // pDestroyer = 6;

    // pCarrierOrient = "vertical";
    // pBattleshipOrient = "horizontal";
    // pCruiserOrient = "horizontal";
    // pSubmarineOrient = "vertical";
    // pDestroyerOrient = "horizontal";

    // placeShipsPlayer(pCarrier, pBattleship, pCruiser, pSubmarine, pDestroyer, pCarrierOrient, pBattleshipOrient, pCruiserOrient, pSubmarineOrient, pDestroyerOrient);


    const placeShipsComputer = (cCarrier, pBattleship, pCruiser, pSubmarine, pDestroyer, cCarrierOrient, pBattleshipOrient, pCruiserOrient, pSubmarineOrient, pDestroyerOrient) => {
        // const destroyer = shipFactory(2)
        // const submarine = shipFactory(3)
        // const cruiser = shipFactory(3)
        // const battleship = shipFactory(4)
        // const carrier = shipFactory(5)

        computer.gameboard.placeShip("carrier", cCarrier, cCarrierOrient);
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

    // useEffect(() => {
    //     setPlayer(playerState)
    // }, [update]
    // );

    function handlePlaceShip(id) {
        console.log("placing:", { placingShip }, { id }, { orientation })
        playerState.gameboard.placeShip(placingShip, id, orientation);
        setPlayer(playerState)
        setUpdate(!update)
        computer.gameboard.placeShip("battleship", cBattleship, cBattleshipOrient);
        console.log("new board player:", playerState.gameboard.board)
        console.log("new board computer:", computer.gameboard.board)
    }


    function togglePlacement(toggledShip) {
        if (playerState.gameboard.boatsPlaced.includes(toggledShip)) {
            console.log("Ship already placed")
            return
        }

        if (placingShip == toggledShip) {
            setPlacingShip(null)
        } else {
            setPlacingShip(toggledShip)
        }
    }

    function rotateShips() {
        if (orientation == "vertical") {
            setOrientation("horizontal")
        } else if (orientation == "horizontal") {
            setOrientation("vertical")
        } else {
            console.log("error- rotation")
        }
    }

    function autoPlace(user) {
        console.log("auto place")
    }

    function resetBoard() {
        setPlayer(player("Player"))
        // setComputer(player("player"))
        setUpdate(!update)
    }

    let attackCoord = "";

    function startGame() {
        if (playerState.gameboard.allPlaced == true) {
            setPhase("playerTurn")
            //Something to change start button to reset button
        }
    }

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
            <div id="top-row">
                <div id="setup">
                    {/* if phase is setup, display player fleet, else display PlayerGame Fleet */}
                    {/* Make it same as computer's fleet but with different ID */}
                    <PlayerFleet
                        id="player-fleet"
                        orient={orientation}
                        togglePlacement={togglePlacement}
                        placingShip={placingShip}
                        phase={phase}
                        boatsPlaced={playerState.gameboard.boatsPlaced}
                        update={update}
                    />
                    <div id="setup-buttons">
                        <div id="rotate" className="btn" onClick={() => rotateShips()}>Rotate</div>
                        <div id="auto-place" className="btn" onClick={() => autoPlace("player")}>Auto Place</div>
                        <div id="reset" className="btn" onClick={() => resetBoard()}>Reset</div>
                    </div>
                </div>

                <div id="col-one" className="column">
                    <Board
                        key={"player"}
                        id="player-board"
                        board={playerState.gameboard.board}
                        phase={phase}
                        boardID={"player"}
                        handlePlaceShip={handlePlaceShip}
                        update={update}
                    // handleClick={}
                    // handleTest={handleTest}
                    />


                </div>
                <div id="col-two" className="column">
                    <div id="computer-board" className="board">
                        {rowState.map((row, i) => {
                            return (
                                <Row
                                    key={i}
                                    roww={i}
                                    rowObj={row}
                                    handleClick={handleClick}
                                    phase={phase}
                                    boardID={"computer"}
                                />
                            );
                        })
                        }
                    </div>
                </div>

                {/* <div id="computer-fleet" className="fleet"></div> */}
                <ComputerFleet
                    id="computer-fleet"
                    phase={phase}
                />
            </div>
            <div id="bottom-row">
                <div id="start-button" onClick={() => startGame()}>Start</div>
            </div>
        </div>
    )
}

export default Game;