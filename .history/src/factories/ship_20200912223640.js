
const shipFactory = (shipLength) => {
    let ship = [];
    for (let i = 0; i < shipLength; i++) {
        ship.push([false, i])
    }

    const shipNames = {
        2: 'Destroyer',
        3: 'Cruiser',
        4: 'Battleship',
        5: 'Carrier',
    };

    const name = shipNames[shipLength];

    let hit = (hitLocation) => {
        ship[hitLocation] = [true, hitLocation];
        console.log("Hit!", ship)
        console.log(`You've hit my ${name}`)
        // console.log("hits length", hit.length)
        // console.log("ship.length", ship.length)
        return ship
    }

    let isSunk = () => {
        let sunkStatus = ship[0].every(Boolean);
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

// const destroyer = shipFactory(2)
// const cruiser = shipFactory(3)
// const battleship = shipFactory(4)
// const carrier = shipFactory(5)

export default shipFactory;

//export default {shipFactory, destroyer, cruiser, battleship, carrier}

//Comment out with not testing
// module.exports = shipFactory;