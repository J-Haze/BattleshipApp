
const shipFactory = (shipLength) => {
    const shipNames = {
        1: 'Submarine',
        2: 'Destroyer',
        3: 'Cruiser',
        4: 'Battleship',
        5: 'Carrier',
    };

    const name = shipNames[shipLength];

    if (shipLength == 1) {
        shipLength = 3;
    }


    let ship = [];
    for (let i = 0; i < shipLength; i++) {
        ship.push([false, i, name])
    }

    let hit = (hitLocation) => {
        ship[hitLocation] = [true, hitLocation, name];
        console.log("Hit!", ship)
        console.log(`You've hit my ${name}`)
        return ship
    }

    let isSunk = () => {
        let sunkStatus = false
        ship[0][0] == true ? sunkStatus = true : sunkStatus = false
        for (let square in ship) {
            sunkStatus = (ship[square][0] && sunkStatus)
        }
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

export default shipFactory;