import shipFactory from "./ship"
import gameboardFactory from "./gameboard"

const player = (playerName) => {
    // const submarine = shipFactory(1)
    // const destroyer = shipFactory(2)
    // const cruiser = shipFactory(3)
    // const battleship = shipFactory(4)
    // const carrier = shipFactory(5)
    const gameboard = gameboardFactory();
    let attackCoord = 100;
    let index = 100;

    const squaresToGuess = [];

    for (let i = 0; i <= 99; i++) {
        squaresToGuess.push(i);
    }
    // console.log(squaresToGuess)

    //Randomly sends an attack
    const sendAttack = () => {
        console.log("s2g", squaresToGuess.length - 1)
        attackCoord = Math.floor(Math.random() * (squaresToGuess.length - 1));
        index = squaresToGuess.indexOf(attackCoord);
        squaresToGuess.splice(index, 1);

        console.log({ attackCoord })
        console.log("squares to guess:", squaresToGuess)
        return attackCoord
    }

    if (playerName == "Computer") {




    }

    //send attack will take coordinates and "send an attack" to the OPPOSING board
    //Need to make sure it has an array of 0-99 and takes away the guessed numbers from that array.
    //random between 0 and array.length


    // gameboard.placeShip(carrier, 5, 23, "horizontal")
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

    return {
        gameboard,
        squaresToGuess,
        sendAttack
    }
}

const playerOne = player("Player One");
console.log(playerOne.squaresToGuess)

playerOne.sendAttack()
playerOne.sendAttack()


// const computer = player("Computer")



export default player;