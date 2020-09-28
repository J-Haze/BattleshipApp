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

    const [rowState, setRowState] = useState([]);
    let rows = [];

    const [orientation, setOrientation] = useState("vertical");
    const [placingShip, setPlacingShip] = useState(null);

    const [refresh, setRefresh] = useState(false);

    // const [phase, setPhase] = useState("playerTurn")
    const [phase, setPhase] = useState("setup")

    //     const destroyer = shipFactory(2)
    //     const submarine = shipFactory(3)
    //     const cruiser = shipFactory(3)
    //     const battleship = shipFactory(4)
    //     const carrier = shipFactory(5)

    //May have to use state for this, but try with variables first
    let pCarrier = "";
    let pBattleship = "";
    let pCruiser = "";
    let pSubmarine = "";
    let pDestroyer = "";

    let pCarrierOrient = orientation;
    let pBattleshipOrient = orientation;
    let pCruiserOrient = orientation;
    let pSubmarineOrient = orientation;
    let pDestroyerOrient = orientation;

    let cCarrier = "";
    let cBattleship = "";
    let cCruiser = "";
    let cSubmarine = "";
    let cDestroyer = "";

    let cCarrierOrient = "horizontal";
    let cBattleshipOrient = "horizontal";
    let cCruiserOrient = "horizontal";
    let cSubmarineOrient = "horizontal";
    let cDestroyerOrient = "horizontal";

    // useEffect(() => {
    //     createRows(computer.gameboard.board);

    // }, [refresh]
    // );
    
    function handlePlaceShip(id) {
        console.log("placing:", { placingShip }, { id }, { orientation })
        playerState.gameboard.placeShip(placingShip, id, orientation);
        console.log("new board:", playerState.gameboard)
    }

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


    // const placeShipsComputer = (pCarrier, pBattleship, pCruiser, pSubmarine, pDestroyer, pCarrierOrient, pBattleshipOrient, pCruiserOrient, pSubmarineOrient, pDestroyerOrient) => {
    //     const destroyer = shipFactory(2)
    //     const submarine = shipFactory(3)
    //     const cruiser = shipFactory(3)
    //     const battleship = shipFactory(4)
    //     const carrier = shipFactory(5)

    //     computer.gameboard.placeShip(carrier, 5, pCarrier, pCarrierOrient);
    //     computer.gameboard.placeShip(battleship, 4, pBattleship, pBattleshipOrient);
    //     computer.gameboard.placeShip(cruiser, 3, pCruiser, pCruiserOrient);
    //     computer.gameboard.placeShip(submarine, 3, pSubmarine, pSubmarineOrient);
    //     computer.gameboard.placeShip(destroyer, 2, pDestroyer, pDestroyerOrient);

    // };

    // let cCarrier = 10;
    // let cBattleship = 12;
    // let cCruiser = 82;
    // let cSubmarine = 19;
    // let cDestroyer = 66;

    // let cCarrierOrient = "vertical";
    // let cBattleshipOrient = "horizontal";
    // let cCruiserOrient = "horizontal";
    // let cSubmarineOrient = "vertical";
    // let cDestroyerOrient = "vertical";

    // placeShipsComputer(cCarrier, cBattleship, cCruiser, cSubmarine, cDestroyer, cCarrierOrient, cBattleshipOrient, cCruiserOrient, cSubmarineOrient, cDestroyerOrient);

    function togglePlacement(toggledShip) {
        //add Classname to make ship selected? Or do this in "Fleet"
        //^^ Look at "toggleRead"

        // console.log("orig", placingShip)
        // console.log("toggledShip", toggledShip)

        //if (placingShip is in "placed ships"){return}

        if (placingShip == toggledShip) {
            setPlacingShip(null)
            // console.log("match")
            // console.log("placingShip:", placingShip)
        } else {
            setPlacingShip(toggledShip)
            // console.log("placingShip:", placingShip)
        }
        // console.log("placingShip:", placingShip)
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
            <div id="top-row">
                <div id="setup">
                    <PlayerFleet
                        id="player-fleet"
                        orient={orientation}
                        togglePlacement={togglePlacement}
                        placingShip={placingShip}
                        phase={phase}
                    />
                    <div id="setup-buttons">
                        <div id="rotate" className="btn" onClick={() => rotateShips()}>Rotate</div>
                        <div id="auto-place" className="btn">Auto Place</div>
                        <div id="reset" className="btn">Reset</div>
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
                <button id="start-button">Start</button>
            </div>
        </div>
    )
}

export default Game;