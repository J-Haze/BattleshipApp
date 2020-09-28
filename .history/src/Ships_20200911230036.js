//Will probably have to rename and reformat this file (to a helper function?)
import React from 'react';

//I'm not sure if this is supposed to be javascript or react. Need to console.log it? Or mock with it?

//Factory function pattern:
const personFactory = (name, age) => {
    const sayHello = () => console.log('hello!');
    return { name, age, sayHello };
};

const shipFactory = (length) => {
    let ship = [];
    for (i = 0; i < length; i++){
        ship.push('O')
    }
}