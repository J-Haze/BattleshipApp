import shipFactory from "./ship"

const gameboardFactory = () => {
    let gameboard = [];
    for (let i = 1; i <= 100; i++) {
        gameboard.push(null)
    }
    console.log({ gameboard })
}

gameboardFactory();

export default gameboardFactory;