import React from "react"
import shipFactory from "../factories/ship"
import gameboardFactory from "../factories/gameboard"
import player from "../factories/player"

function Game() {

    //Write logic that modertes the games (turns and GameOver etc.)

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
            <div id="col-one" class="column">
                {/* <Player /> */}
            </div>
            <div id="col-one" class="column">
                {/* <Computer /> */}
            </div>

        </div>
    )
}

export default Game;