import React, { useState, useEffect } from "react"

function Fleet(props) {

    let sunkCarrier = "";
    let sunkBattleship = "";
    let sunkCruiser = "";
    let sunkSubmarine = "";
    let sunkDestroyer = "";

    if (props.boatsSunk.includes("Carrier")) {
        sunkCarrier = "sunk";
    } else {
        sunkCarrier = "";
    };

    if (props.boatsSunk.includes("Battleship")) {
        sunkBattleship = "sunk";
    } else {
        sunkBattleship = "";
    };

    if (props.boatsSunk.includes("Cruiser")) {
        sunkCruiser = "sunk";
    } else {
        sunkCruiser = "";
    };

    if (props.boatsSunk.includes("Submarine")) {
        sunkSubmarine = "sunk";
    } else {
        sunkSubmarine = "";
    };

    if (props.boatsSunk.includes("Destroyer")) {
        sunkDestroyer = "sunk";
    } else {
        sunkDestroyer = "";
    };

    return (
        <div id={props.id} >
            <div className="ship-text">Aircraft Carrier</div>
            <div className={`carrier-horizontal ship-harbor-horizontal`} >
                <div className={`fleet-square ${sunkCarrier}`}></div>
                <div className={`fleet-square ${sunkCarrier}`}></div>
                <div className={`fleet-square ${sunkCarrier}`}></div>
                <div className={`fleet-square ${sunkCarrier}`}></div>
                <div className={`fleet-square ${sunkCarrier}`}></div>
            </div>
            <div className="ship-text"> Battleship </div>
            <div className={`battleship-horizontal ship-harbor-horizontal`} >
                <div className={`fleet-square ${sunkBattleship}`}></div>
                <div className={`fleet-square ${sunkBattleship}`}></div>
                <div className={`fleet-square ${sunkBattleship}`}></div>
                <div className={`fleet-square ${sunkBattleship}`}></div>
            </div>
            <div className="ship-text">Cruiser</div>
            <div className={`cruiser-horizontal ship-harbor-horizontal`} >
                <div className={`fleet-square ${sunkCruiser}`}></div>
                <div className={`fleet-square ${sunkCruiser}`}></div>
                <div className={`fleet-square ${sunkCruiser}`}></div>
            </div>
            <div className="ship-text">Submarine</div>
            <div className={`submarine-horizontal ship-harbor-horizontal`} >
                <div className={`fleet-square ${sunkSubmarine}`}></div>
                <div className={`fleet-square ${sunkSubmarine}`}></div>
                <div className={`fleet-square ${sunkSubmarine}`}></div>
            </div>
            <div className="ship-text">Destroyer</div>
            <div className={`destroyer-horizontal ship-harbor-horizontal`} >
                <div className={`fleet-square ${sunkDestroyer}`}></div>
                <div className={`fleet-square ${sunkDestroyer}`}></div>
            </div>
        </div >
    )


};

export default Fleet;