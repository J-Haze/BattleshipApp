//Will probably have to rename and reformat this file (to a helper function?)
import React from 'react';

//I'm not sure if this is supposed to be javascript or react. Need to console.log it? Or mock with it?

// //Factory function pattern:
// const personFactory = (name, age) => {
//     const sayHello = () => console.log('hello!');
//     return { name, age, sayHello };
// };

//Use tic-tac-toe project to help with this?
const shipFactory = (shipLength) => {
    let ship = [];
    for (i = 0; i < shipLength; i++) {
        ship.push(false)
    }
    //!!how do I attach a function to an object/array? or should the ship be an object with an array and with a hit function?

    const shipNames = {
        2: 'Destroyer',
        3: 'Cruiser',
        4: 'Battleship',
        5: 'Carrier',
    };

    const name = shipNames[length];


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
    // console.log(ship)
    //     console.log(hit(3, ship(7)))


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
destroyer.hit(2)


shipFactory(5)
