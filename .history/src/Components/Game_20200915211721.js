import React, { useState, useEffect } from "react"
import shipFactory from "../factories/ship"
import gameboardFactory from "../factories/gameboard"
import player from "../factories/player"
import Board from "./Board.js"

function Game() {

    //Write logic that modertes the games (turns and GameOver etc.)

    const [playerOne, setPlayerOne] = useState(player("Player"))
    const [pGameboard, setPGameboard] = useState(playerOne.gameboard)
    const [pSquares, setPSquares] = useState(playerOne.gameboard.board)

    console.log("here", pSquares)

    // const playerOne = player("Player");
    // const computer = player("Computer");

    

    // let squares = playerOne.gameboard.board;
    // console.log("squares:", squares)


    // console.log(playerOne.squaresToGuess)



    //    playerOne.gameboard.placeShip(carrier, 5, 23, "horizontal")


    // gameboard.placeShip(battleship, 4, 11, "vertical");
    // gameboard.placeShip(cruiser, 3, 82, "horizontal");

    // gameboard.placeShip(destroyer, 2, 6, "horizontal");
    // gameboard.placeShip(submarine, 1, 19, "horizontal");

    // //random attacks
    // gameboard.receiveAttack(2, 4);
    // gameboard.receiveAttack(1, 2);
    // gameboard.receiveAttack(2, 1);

    // //Sinks destroyer
    // gameboard.receiveAttack(0, 6);
    // gameboard.receiveAttack(0, 7);
    // // gameboard_1.receiveAttack(0, 7);



    // computer.gameboard.receiveAttack(playerOne.sendAttack(2))
    // playerOne.gameboard.receiveAttack(computer.sendAttack(2))

    // playerOne.sendAttack()
    // playerOne.sendAttack()


    // const computer = player("Computer")







    //Return "Board" and other components, with state being passed into it (turn, coordinates, etc.)


    // const destroyer = shipFactory(2)
    // const cruiser = shipFactory(3)
    // const battleship = shipFactory(4)
    // const carrier = shipFactory(5)

    // //Start testing
    // console.log(destroyer.name)
    // console.log(destroyer.shipLength)
    // console.log(destroyer.ship)
    // console.log(destroyer.hit(1))

    // function sinkBattleship() {
    //     battleship.hit(0);
    //     battleship.hit(1);
    //     battleship.hit(2);
    //     battleship.hit(3);
    //     battleship.hit(4);
    //     console.log("Battleship Sunk?", (battleship.isSunk()))
    // };

    // function sinkCruiser() {
    //     cruiser.hit(1);
    //     console.log("Cruiser Sunk?", (cruiser.isSunk()))
    // };

    // sinkBattleship();
    // sinkCruiser();
    // //End Testing


    return (
        <div id="game">
            <div id="col-one" className="column">
                <Board
                    playerOne={playerOne}
                    pGameboard={pGameboard}
                    pSquares={pSquares} 
                    
                    />


            </div>
            <div id="col-one" className="column">
                {/* <Board computer={computer} /> */}
            </div>

        </div>
    )
}

export default Game;