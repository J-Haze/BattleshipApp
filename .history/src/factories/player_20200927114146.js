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
        if (playerName == "Player") {
            attackCoord = coord;
            index = squaresToGuess.indexOf(attackCoord);
            squaresToGuess.splice(index, 1);
        } else {
            attackCoord = Math.floor(Math.random() * (squaresToGuess.length - 1));
            index = squaresToGuess.indexOf(attackCoord);
            squaresToGuess.splice(index, 1);
        }

        return attackCoord
    }

    return {
        gameboard,
        squaresToGuess,
        sendAttack
    }
}








export default player;