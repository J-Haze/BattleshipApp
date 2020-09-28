import gameboardFactory from "./gameboard"

const player = (playerName) => {
    const getBoard = gameboardFactory();
    const gameboard = getBoard;
    let attackCoord = 100;
    let index = 100;

    const squaresToGuess = [];

    for (let i = 0; i <= 99; i++) {
        squaresToGuess.push(i);
    }

    //Randomly sends an attack
    const sendAttack = (coord) => {
        // if (playerName == "Computer") {
        // }
        // console.log("yes", playerName)
        if (playerName == "Player") {
            attackCoord = coord;
            index = squaresToGuess.indexOf(attackCoord);
            squaresToGuess.splice(index, 1);
        } else {
            // console.log("s2g", squaresToGuess.length - 1)
            attackCoord = Math.floor(Math.random() * (squaresToGuess.length - 1));
            index = squaresToGuess.indexOf(attackCoord);
            squaresToGuess.splice(index, 1);
            // console.log("index:", index)
        }

        // console.log({ attackCoord })
        // console.log("squares to guess:", squaresToGuess)
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