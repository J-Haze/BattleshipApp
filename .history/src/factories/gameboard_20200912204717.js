import shipFactory from "./ship"

const gameboardFactory = () => {
    let board = [];
    for (let i = 0; i <= 99; i++) {
        board.push(null)
    }
    console.log({ board })

    let placeShip = (shipLength, position, orient) => {
        let placementRoom = true;
        //and something that checks if move is legal
        for (let square in board) {
            if ((position == square && (placementRoom) && (orient == "horizontal"))) {
                for (let z = position; z <= (position + shipLength); z++) {
                    board.splice(z, 1, shipFactory(shipLength).name)
                    // board[z] = { shipFactory(shipLength).name, 1};
                }
                // for (let z = position; z <= (position + shipLength); z++) {
                //     board[z] = shipFactory(shipLength).ship[z];
                // }
            }

        }
        console.log({ board })
    }

    placeShip(3, 5, "horizontal")
}

gameboardFactory();


export default gameboardFactory;