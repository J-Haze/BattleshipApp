import shipFactory from "./ship"

const gameboardFactory = () => {
    let gameboard = [];
    for (let x = 0; x <= 9; x++){
        for (let y = 0; x <= 9; y++){
            // x y = null;
        }
    }

    let board = Array(10)
        .fill(0)
        .map(() =>
            Array(10)
                .fill(0)
                .map(() => {
                    return {
                        isEmpty: true,
                        wasAttacked: false,
                    };
                })
        );
            console.log(board)

}

gameboardFactory();

export default gameboardFactory;