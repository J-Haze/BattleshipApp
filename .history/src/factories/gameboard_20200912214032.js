import shipFactory from "./ship"

const gameboardFactory = () => {
    let board = [];
    for (let i = 0; i <= 99; i++) {
        board.push(null)
    }
    console.log({ board })

    let placeShip = (shipLength, position, orient) => {
        let placementRoom = true;
        for (let i = position; i < (position + shipLength); i++) {
            if (board[i] != null) {
                console.log("Illegal placement: ship already on square")
                return
            }
        };
        if (orient == "horizontal") {
            let endPoint = ((position + shipLength - 1) / 10);
            let closestEdge = ((Math.ceil(position / 10)) - 0.1);
            console.log({ endPoint })
            console.log({ closestEdge })
        }


        // if ((endPoint > closestEdge)) {
        //     console.log("Illegal placement: over edge of board")
        //     return
        // }

        //and something that checks if move is legal
        //Can remove "&& placementRoom" if you're using returns above
        for (let square in board) {
            if ((position == square && (orient == "horizontal"))) {
                for (let z = position; z < (position + shipLength); z++) {
                    board.splice(z, 1, shipFactory(shipLength))
                } else if((position == square && (orient == "vertical"))){
                    for(let z = position; z < (position + shipLength); z+= 10) {
                    board.splice(z, 1, shipFactory(shipLength))
                }
                }
            }

        }
        console.log({ board })
    }

    placeShip(3, 5, "vertical")
    // placeShip(4, 6, "horizontal")
}

gameboardFactory();


export default gameboardFactory;