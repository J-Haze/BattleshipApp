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
            let endPoint = ((position + shipLength) / 10);
            let closestEdge = (Math.round(position / 10));
            if (orient = "horizontal" && ( endPoint > closestEdge)){
                console.log("Illegal placement: over edge of board")
            return
        }

        //and something that checks if move is legal
        for (let square in board) {
            if ((position == square && (placementRoom) && (orient == "horizontal"))) {
                for (let z = position; z < (position + shipLength); z++) {
                    board.splice(z, 1, shipFactory(shipLength))
                }
            }

        }
        console.log({ board })
    }

    placeShip(3, 5, "horizontal")
    placeShip(4, 6, "horizontal")
}

gameboardFactory();


export default gameboardFactory;