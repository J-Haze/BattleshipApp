import shipFactory from "./ship"

const gameboardFactory = () => {
    const destroyer = shipFactory(2)
    const submarine = shipFactory(3)
    const cruiser = shipFactory(3)
    const battleship = shipFactory(4)
    const carrier = shipFactory(5)

    let board = [];
    for (let a = 0; a <= 99; a++) {
        board.push(null)
    }
    
    let boatsSunk = [];
    let allSunk = false;

    let boatsPlaced = [];
    let allPlaced = false;

    const placeShip = (shipName, position, orient) => {

        if (boatsPlaced.includes(shipName)) {
            return board
        }

        let shipLength = "";
        let shipNameVar = "";

        if (shipName == "carrier") {
            shipLength = 5;
            shipNameVar = shipFactory(5);
        } else if (shipName == "battleship") {
            shipLength = 4;
            shipNameVar = shipFactory(4);
        } else if (shipName == "cruiser") {
            shipLength = 3;
            shipNameVar = shipFactory(3);
        } else if (shipName == "submarine") {
            shipLength = 3;
            shipNameVar = shipFactory(1);
        } else if (shipName == "destroyer") {
            shipLength = 2;
            shipNameVar = shipFactory(2);
        } else {
            return board
        };

        //Checks for valid move
        let endPoint = 0;
        let closestEdge = 99;

        if (orient == "horizontal") {
            for (let b = position; b < (position + shipLength); b++) {
                if (board[b] != null) {
                    return board
                }
            };

            endPoint = ((position + shipLength - 1) / 10);
            if (position % 10 == 0) {
                closestEdge = position / 10 + .9;
            } else {
                closestEdge = ((Math.ceil(position / 10)) - 0.1);
            }
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
                    board.splice(z, 1, shipNameVar.ship[z - position])
                }
                // console.log("HERE", shipNameVar.ship)
                // boatsPlaced.push(shipNameVar)
            } else if ((position == square && (orient == "vertical"))) {
                for (let z = position; z < (position + shipLength * 10); z += 10) {
                    // let w = Math.round(z/10)
                    // console.log(z)
                    board.splice(z, 1, shipNameVar.ship[(z - position) / 10])
                }
            }
            if (!boatsPlaced.includes(shipName)) {
                boatsPlaced.push(shipName);
            }

            if (boatsPlaced.length > 4) {
                allPlaced = true;
                // console.log("ALL BOATS PLACED")
            } else {
                allPlaced = false;
            }
            // console.log("inner all placed:", allPlaced)
        }
        // console.log({ board })
        // console.log("inner all placed2:", allPlaced)
        return {
            board,
            allPlaced,
            boatsPlaced,
        }
    }

    const receiveAttack = (attackPosition) => {
        let attackID = board[attackPosition];

        //Change to if (board[attackPosition] != "false")
        if (board[attackPosition] == null) {
            console.log("Attack missed")
            board[attackPosition] = "miss";
            // console.log("New Board Internal:", { board })
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

            // console.log({ boatHit })

            boatHit.hit(hitLocation);
            board[attackPosition][0] = true;

            // console.log("isSunk?", boatHit.isSunk())

            if (boatHit.isSunk()) {
                console.log(`Player's ${boatHitString} is sunk!`)
                //change all squares in boatHit from "hit" to "sunk"?
                //Or just have a pop up (i think the board game doesn't change to "sunk")
                boatsSunk.push(boatHitString)
                // console.log({ boatsSunk })
            }

            if (boatsSunk.length > 4) {
                allSunk = true;
                console.log("ALL BOATS SUNK")
            }

            // console.log("everyBoolean:", boatHit.ship[0])
            // console.log("New Board:", { board })
            // console.log("New Ship:", { boatHit })
        }

        return {
            board,
            allSunk,
            boatsSunk
        }

    }

    const getBoard = () => board;

    // console.log("inner all placed3:", allPlaced)
    return {
        board,
        placeShip,
        boatsPlaced,
        allPlaced,
        receiveAttack,
        allSunk,
        boatsSunk
    }
}



export default gameboardFactory;