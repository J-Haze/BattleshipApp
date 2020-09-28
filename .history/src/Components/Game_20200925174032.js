import React, { useState, useEffect } from "react"
import shipFactory from "../factories/ship"
import gameboardFactory from "../factories/gameboard"
import player from "../factories/player"
import Board from "./Board.js"
import Row from "./Row.js"
import PlayerFleet from "./PlayerFleet.js"
import Fleet from "./ComputerFleet.js"
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



    function handlePlaceShip(id) {
        playerState.gameboard.placeShip(placingShip, id, orientation);
        setPlayer(playerState)
        setUpdate(!update)
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

    let randomID = "";
    let orientationNumber = "";
    let randomOrientation = ""

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function autoPlaceShipPlayer(ship) {
        while (!playerState.gameboard.boatsPlaced.includes(ship)) {
            randomID = getRandomInt(0, 99);
            orientationNumber = getRandomInt(0, 1);
            (orientationNumber == 0) ? randomOrientation = "horizontal" : randomOrientation = "vertical";
            playerState.gameboard.placeShip(ship, randomID, randomOrientation);
        }
    }

    function autoPlaceShipComputer(ship) {
        while (!computer.gameboard.boatsPlaced.includes(ship)) {
            console.log("SSS while")
            randomID = getRandomInt(0, 99);
            orientationNumber = getRandomInt(0, 1);
            (orientationNumber == 0) ? randomOrientation = "horizontal" : randomOrientation = "vertical";
            computer.gameboard.placeShip(ship, randomID, randomOrientation);
        }
    }

    function autoPlace(user) {
        if (user == "player") {
            resetBoard();
            autoPlaceShipPlayer("carrier");
            setPlayer(playerState);
            autoPlaceShipPlayer("battleship");
            setPlayer(playerState);
            autoPlaceShipPlayer("cruiser");
            setPlayer(playerState);
            autoPlaceShipPlayer("submarine");
            setPlayer(playerState);
            autoPlaceShipPlayer("destroyer");
            setPlayer(playerState);
            setUpdate(!update);
            console.log("boats Placed", playerState.gameboard.boatsPlaced);
            console.log("allPlaced:", playerState.gameboard.allPlaced);
        };

        if (user == "computer") {
            console.log("SSS computer")
            autoPlaceShipComputer("carrier");
            setComputer(computer);
            autoPlaceShipComputer("battleship");
            setComputer(computer);
            autoPlaceShipComputer("cruiser");
            setComputer(computer);
            autoPlaceShipComputer("submarine");
            setComputer(computer);
            autoPlaceShipComputer("destroyer");
            setComputer(computer);
            setUpdate(!update);
            setRefresh(!refresh);
        };
    };

    function resetBoard() {
        setPlayer(player("Player"));
        setComputer(player("Player"));
        setPlacingShip(null);
        setUpdate(!update);
        setRefresh(!refresh);

    }

    let attackCoord = "";

    function startGame() {
        console.log("start here all Placed:", (playerState.gameboard.allPlaced))
        console.log(playerState.gameboard.boatsPlaced.length)
        if (playerState.gameboard.boatsPlaced.length > 4) {
            console.log("start")
            autoPlace("computer")
            setPhase("playerTurn")
            console.log("sss", computer.gameboard.board)
            //Something to change start button to reset button
        }
    };

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
                    {(phase == "setup") ?
                    <div id="setup-container">
                    <PlayerFleet
                        id="setup-fleet"
                        className="player-fleet"
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
                        :
                        <Fleet
                            id="player-fleet"
                            phase={phase}
                            boatsSunk={computer.gameboard.boatsSunk}
                            refresh={refresh}
                        />
                    }
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
                                    update={update}
                                />
                            );
                        })
                        }
                    </div>
                </div>

                {/* <div id="computer-fleet" className="fleet"></div> */}
                <Fleet
                    id="computer-fleet"
                    phase={phase}
                    boatsSunk={computer.gameboard.boatsSunk}
                    refresh={refresh}
                />
            </div>
            <div id="bottom-row">
                <div id="start-button" onClick={() => startGame()}>Start</div>
            </div>
        </div>
    )
}

export default Game;