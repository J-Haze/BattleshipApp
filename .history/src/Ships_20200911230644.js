//Will probably have to rename and reformat this file (to a helper function?)
import React from 'react';

//I'm not sure if this is supposed to be javascript or react. Need to console.log it? Or mock with it?

//Factory function pattern:
const personFactory = (name, age) => {
    const sayHello = () => console.log('hello!');
    return { name, age, sayHello };
};

//Use tic-tac-toe project to help with this?
const shipFactory = (length) => {
    let ship = [];
    for (i = 0; i < length; i++){
        ship.push('')
    }
    //!!how do I attach a function to an object/array? or should the ship be an object with an array and with a hit function?

    let hit = (location, ship) => {
        ship[location] = 'hit'
    }

    console.log({ship})
}

shipFactory(5)