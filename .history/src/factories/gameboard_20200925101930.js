import shipFactory from "./ship"

const destroyer = shipFactory(2)
const submarine = shipFactory(3)
const cruiser = shipFactory(3)
const battleship = shipFactory(4)
const carrier = shipFactory(5)

const gameboardFactory = () => {
    let board = [];
    for (let a = 0; a <= 99; a++) {
        board.push(null)
    }
    // let boatsSunk = ["cruiser", "battleship", "carrier"];
    let boatsSunk = [];
    let allSunk = false;

    let boatsPlaced = [];
    let allPlaced = false;

    const placeShip = (shipName, position, orient) => {
        
        // console.log("incoming ship:", typeof(shipName))

        if (boatsPlaced.includes(shipName)) {
            console.log("Ship already placed")
            return board
        }

        let shipLength = "";

        if (shipName == "carrier") {
            boatsPlaced.push(shipName);
            shipLength = 5;
            shipName = shipFactory(5);
        } else if (shipName == "battleship") {
            boatsPlaced.push(shipName);
            shipLength = 4;
            shipName = shipFactory(4);
        } else if (shipName == "cruiser" || shipName == "submarine") {
            boatsPlaced.push(shipName);
            shipLength = 3;
            shipName = shipFactory(3);
        } else if (shipName == "destroyer") {
            boatsPlaced.push(shipName);
            shipLength = 2;
            shipName = shipFactory(2);
        } else {
            console.log("Error- in gameboard.placeShip")
            return board
        };

        console.log(shipName)

        //Checks for valid move
        let endPoint = 0;
        let closestEdge = 99;

        if (orient == "horizontal") {
            for (let b = position; b < (position + shipLength); b++) {
                if (board[b] != null) {
                    console.log("Illegal placement: ship already on square")
                    return board
                }
            };

            endPoint = ((position + shipLength - 1) / 10);
            closestEdge = ((Math.ceil(position / 10)) - 0.1);
        }

        if (orient == "vertical") {
            for (let c = position; c < (position + shipLength * 10); c += 10) {
                if (board[c] != null) {
                    console.log(`Illegal placement: ship already on square: ${c}`)
                    return board
                }
            };

            endPoint = ((position + ((shipLength - 1) * 10)));
            closestEdge = 99;
        }


        if ((endPoint > closestEdge)) {
            console.log("Illegal placement: over edge of board")
            return board
        }

        //Places the ship
        for (let square in board) {
            if ((position == square && (orient == "horizontal"))) {
                for (let z = position; z < (position + shipLength); z++) {
                    board.splice(z, 1, shipName.ship[z - position])
                }
                // console.log("HERE", shipName.ship)
                // boatsPlaced.push(shipName)
            } else if ((position == square && (orient == "vertical"))) {
                for (let z = position; z < (position + shipLength * 10); z += 10) {
                    // let w = Math.round(z/10)
                    // console.log(z)
                    board.splice(z, 1, shipName.ship[(z - position) / 10])
                }
            }
        }
        // console.log({ board })
        return board
    }

    const receiveAttack = (attackPosition) => {
        let attackID = board[attackPosition];

        //Change to if (board[attackPosition] != "false")
        if (board[attackPosition] == null) {
            console.log("Attack missed")
            board[attackPosition] = "miss";
            console.log("New Board Internal:", { board })
            return board
        }

        if ((attackID[0] == true) || (board[attackPosition] == "miss")) {
            console.log("Already guessed this position")
            return board
        }

        if (attackID[0] == false) {
            console.log("Receive Attack hit!")
            let hitLocation = attackID[1];
            let boatHitString = attackID[2];
            let boatHit = "";

            if (boatHitString == "Carrier") {
                boatHit = carrier;
            } else if (boatHitString == "Battleship") {
                boatHit = battleship;
            } else if (boatHitString == "Cruiser") {
                boatHit = cruiser;
            } else if (boatHitString == "Destroyer") {
                boatHit = destroyer;
            } else if (boatHitString == "Submarine") {
                boatHit = submarine;
            }

            console.log({ boatHit })

            boatHit.hit(hitLocation);
            board[attackPosition][0] = true;

            console.log("isSunk?", boatHit.isSunk())

            if (boatHit.isSunk()) {
                console.log(`Player's ${boatHitString} is sunk!`)
                //change all squares in boatHit from "hit" to "sunk"?
                //Or just have a pop up (i think the board game doesn't change to "sunk")
                boatsSunk.push(boatHitString)
                console.log({ boatsSunk })
            }

            if (boatsSunk.length > 4) {
                allSunk = true;
                console.log("ALL BOATS SUNK")
            }

            console.log("everyBoolean:", boatHit.ship[0])
            console.log("New Board:", { board })
            console.log("New Ship:", { boatHit })
        }

        return board

    }

    const getBoard = () => board;

    return {
        board,
        placeShip,
        // allPlaced,
        receiveAttack,
        allSunk
    }
}



export default gameboardFactory;