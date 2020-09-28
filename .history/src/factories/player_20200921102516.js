// import shipFactory from "./ship"
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
    const sendAttack = (coord) => {
        // if (playerName == "Computer") {
        // }

        if (playerName == "Player") {
            attackCoord = coord;
            index = squaresToGuess.indexOf(attackCoord);
            squaresToGuess.splice(index, 1);
        } else {
            console.log("s2g", squaresToGuess.length - 1)
            attackCoord = Math.floor(Math.random() * (squaresToGuess.length - 1));
            index = squaresToGuess.indexOf(attackCoord);
            squaresToGuess.splice(index, 1);
        }

        console.log({ attackCoord })
        console.log("squares to guess:", squaresToGuess)
        return attackCoord
    }



    //send attack will take coordinates and "send an attack" to the OPPOSING board
    //Need to make sure it has an array of 0-99 and takes away the guessed numbers from that array.
    //random between 0 and array.length

    return {
        gameboard,
        squaresToGuess,
        sendAttack
    }
}








export default player;