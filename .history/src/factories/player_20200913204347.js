import shipFactory from "./ship"
import gameboard from "./gameboard"

const player = () => {
    const destroyer = shipFactory(2)
    const cruiser = shipFactory(3)
    const battleship = shipFactory(4)
    const carrier = shipFactory(5)


    const gameboard_player = gameboardFactory();
    gameboard_player.placeShip(carrier, 5, 23, "horizontal")
    gameboard_player.placeShip(battleship, 4, 11, "vertical");
    gameboard_player.placeShip(cruiser, 3, 82, "horizontal");

    gameboard_player.placeShip(destroyer, 2, 6, "horizontal");

    //random attacks
    gameboard_player.receiveAttack(2, 4);
    gameboard_player.receiveAttack(1, 2);
    gameboard_player.receiveAttack(2, 1);

    //Sinks destroyer
    gameboard_player.receiveAttack(0, 6);
    gameboard_player.receiveAttack(0, 7);
// gameboard_1.receiveAttack(0, 7);
}



export default player;