import shipFactory from "./ship"

const gameboardFactory = () => {
    let board = [];
    for (let i = 1; i <= 100; i++) {
        board.push(null)
    }
    console.log({ board })

    let placeShip = (shipLength, position, orient) = > {
        let placementRoom = true;
        //and something that checks if move is legal
        for(let i in board) {
            if (position === i && placementRoom && orient == "horizontal"){
        for (let z = position; z <= shipLength; z++) {
            board[z] = ship.name;
        }
    }

}
    console.log({board})
    }

    placeShip(3,5,"horizontal")
}

gameboardFactory();


export default gameboardFactory;