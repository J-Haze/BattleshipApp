import shipFactory from "./ship"

const gameboardFactory = () => {
    let board = [];
    for (let a = 0; a <= 99; a++) {
        board.push(null)
    }
    console.log({ board })

    //define ships
    const destroyer = shipFactory(2)
    const cruiser = shipFactory(3)
    const battleship = shipFactory(4)
    const carrier = shipFactory(5)



    let placeShip = (shipName, shipLength, position, orient) => {
        console.log("shipName.ship:", shipName.ship)
        //Checks for valid move
        let endPoint = 0;
        let closestEdge = 99;

        if (orient == "horizontal") {
            for (let b = position; b < (position + shipLength); b++) {
                if (board[b] != null) {
                    console.log("Illegal placement: ship already on square")
                    return
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
                    return
                }
            };

            endPoint = ((position + ((shipLength - 1) * 10)));
            closestEdge = 99;
            console.log({ endPoint })
            console.log({ closestEdge })
        }


        if ((endPoint > closestEdge)) {
            console.log("Illegal placement: over edge of board")
            return
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
    }

    const receiveAttack = (x, y) => {
        let attackPosition = (x * 10) + y;
        console.log({ attackPosition })
        console.log("RA board:", { board })

        //Change to if (board[attackPosition] != "false")
        if (board[attackPosition] == null) {
            return
        }

        if (board[attackPosition][0] == false) {
            console.log("RA hit")
            let attackID = board[attackPosition][1];
            console.log({ attackID })
            shipFactory(5).hit(attackID)
            console.log("New Board:", { board })
        }
        // for (let square in board) {
        //     if ()
        // }
    }

    receiveAttack(2, 4);

}

gameboardFactory.placeShip(carrier, 5, 23, "horizontal")
// placeShip(battleship, 4, 11, "vertical");


export default gameboardFactory;