
const shipFactory = (shipLength) => {
    let ship = [];
    for (let i = 0; i < shipLength; i++) {
        ship.push(false)
    }

    const shipNames = {
        2: 'Destroyer',
        3: 'Cruiser',
        4: 'Battleship',
        5: 'Carrier',
    };

    const name = shipNames[shipLength];

    let hit = (hitLocation) => {
        ship[hitLocation] = true;
        console.log("Hit!", ship)
        console.log("hits length", hit.length)
        console.log("ship.length", ship.length)
        return ship
    }

    let isSunk = () => {
        let sunkStatus = false;
        (hit.length === ship.length) ? sunkStatus = true : sunkStatus = false;
        return sunkStatus
    }

    return {
        //id,
        name,
        shipLength,
        ship,
        hit,
        isSunk
    }
}

const destroyer = shipFactory(5)
const cruiser = shipFactory(5)
const battleship = shipFactory(5)
const carrier = shipFactory(5)

export default shipFactory;

//Comment out with not testing
// module.exports = shipFactory;