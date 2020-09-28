import shipFactory from "./ship"

const gameboardFactory = () => {
    let board = [];
    for (let a = 0; a <= 99; a++) {
        board.push(null)
    }
    console.log({ board })

    let placeShip = (shipLength, position, orient) => {
        
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
                    board.splice(z, 1, shipFactory(shipLength).ship[z-position])
                }
            } else if ((position == square && (orient == "vertical"))) {
                for (let z = position; z < (position + shipLength * 10); z += 10) {
                    console.log(z)
                    board.splice(z, 1, shipFactory(shipLength))
                }
            }

        }
        console.log({ board })
    }

    placeShip(5, 23, "horizontal")
    // placeShip(4, 11, "vertical")

    const receiveAttack = (x, y) => {
        let attackPosition = (x * 10) + y;
        console.log({ attackPosition })
        console.log("RA board:", { board })

        if (board[attackPosition] == null) {
            return
        }

        if (board[attackPosition] == false) {
            console.log("RA hit")
        }
        // for (let square in board) {
        //     if ()
        // }
    }

    receiveAttack(2, 4);

}

gameboardFactory();


export default gameboardFactory;