import shipFactory from "./ship"
import gameboardFactory from "./gameboard"

const player = (playerName) => {
    // const submarine = shipFactory(1)
    // const destroyer = shipFactory(2)
    // const cruiser = shipFactory(3)
    // const battleship = shipFactory(4)
    // const carrier = shipFactory(5)
    const gameboard_player = gameboardFactory();

    const squaresToGuess = []

    if (playerName == "Computer") {




    }

    //send attack will take coordinates and "send an attack" to the OPPOSING board
    //Need to make sure it has an array of 0-99 and takes away the guessed numbers from that array.
    //random between 0 and array.length


    gameboard_player.placeShip(carrier, 5, 23, "horizontal")
    gameboard_player.placeShip(battleship, 4, 11, "vertical");
    gameboard_player.placeShip(cruiser, 3, 82, "horizontal");

    gameboard_player.placeShip(destroyer, 2, 6, "horizontal");
    gameboard_player.placeShip(submarine, 1, 19, "horizontal");

    //random attacks
    gameboard_player.receiveAttack(2, 4);
    gameboard_player.receiveAttack(1, 2);
    gameboard_player.receiveAttack(2, 1);

    //Sinks destroyer
    gameboard_player.receiveAttack(0, 6);
    gameboard_player.receiveAttack(0, 7);
    // gameboard_1.receiveAttack(0, 7);
}



const playerOne = player("Player One")
const computer = player("Computer")



export default player;