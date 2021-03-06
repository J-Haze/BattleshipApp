import shipFactory from "./ship"

const gameboardFactory = () => {
    let board = [];
    for (let a = 0; a <= 99; a++) {
        board.push(null)
    }
    console.log({ board })

    //define ships
    // const destroyer = shipFactory(2)
    // const cruiser = shipFactory(3)
    // const battleship = shipFactory(4)
    // const carrier = shipFactory(5)



    const placeShip = (shipName, shipLength, position, orient) => {
        console.log("shipName.ship:", shipName.ship)
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
            console.log({ endPoint })
            console.log({ closestEdge })
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
            console.log({ endPoint })
            console.log({ closestEdge })
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
        console.log({ attackPosition })
        console.log("RA board:", { board })

        //Change to if (board[attackPosition] != "false")
        if (board[attackPosition] == null) {
            console.log("Attack missed")
            return
        }

        if (attackID[0] == false) {
            console.log("Receive Attack hit!")
            console.log({ attackID })
            let hitLocation = attackID[1];
            let boatHitString = attackID[2];
            console.log({ boatHitString })
            let boatHit = "";
            
            if (boatHitString == "Carrier") {
                boatHit = carrier;
            } else if (boatHitString == "Battleship") {
                boatHit = battleship;
            }
            console.log({boatHit})

            boatHit.hit(hitLocation)
            // shipFactory(5).hit(attackID)
            console.log("New Board:", { board })
            console.log("New Ship:", {boatHit})
        }
        // for (let square in board) {
        //     if ()
        // }
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

export default gameboardFactory;