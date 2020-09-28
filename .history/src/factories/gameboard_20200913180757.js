import shipFactory from "./ship"

const gameboardFactory = () => {
    let board = [];
    for (let a = 0; a <= 99; a++) {
        board.push(null)
    }

    const placeShip = (shipName, shipLength, position, orient) => {
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
            } else if ((position == square && (orient == "vertical"))) {
                for (let z = position; z < (position + shipLength * 10); z += 10) {
                    // let w = Math.round(z/10)
                    console.log(z)
                    board.splice(z, 1, shipName.ship[(z - position) / 10])
                }
            }

        }
        console.log({ board })
        return board
    }

    const receiveAttack = (x, y) => {
        let attackPosition = (x * 10) + y;
        let attackID = board[attackPosition];

        //Change to if (board[attackPosition] != "false")
        if (board[attackPosition] == null) {
            console.log("Attack missed")
            board[attackPosition] = "miss";
            return
        }

        if ((attackID[0] == true) || (board[attackPosition] == "miss")) {
            console.log("Already guessed this position")
            return
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
            }

            console.log({ boatHit })

            boatHit.hit(hitLocation);
            board[attackPosition][0] = true;

            console.log({ boatHit.isSunk() })
            
            boatHit.isSunk() ? console.log(`Player's ${boatHitString} is sunk!`)

            console.log("New Board:", { board })
            console.log("New Ship:", { boatHit })
        }
        return {
            board
        }

    }

    return {
        board,
        placeShip,
        receiveAttack
    }
}

const destroyer = shipFactory(2)
const cruiser = shipFactory(3)
const battleship = shipFactory(4)
const carrier = shipFactory(5)


const gameboard_1 = gameboardFactory();
gameboard_1.placeShip(carrier, 5, 23, "horizontal")
gameboard_1.placeShip(battleship, 4, 11, "vertical");

gameboard_1.receiveAttack(2, 4);
gameboard_1.receiveAttack(1, 2);
gameboard_1.receiveAttack(2, 1);

export default gameboardFactory;