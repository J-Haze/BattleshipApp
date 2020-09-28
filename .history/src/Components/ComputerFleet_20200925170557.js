import React, { useState, useEffect } from "react"

function ComputerFleet(props) {

    console.log("key", props.key)
    console.log("id", props.id)

    let sunkCarrier = "";
    let sunkBattleship = "";
    let sunkCruiser = "";
    let sunkSubmarine = "";
    let sunkDestroyer = "";

    console.log("fleet sunk", props.boatsSunk)

    // useEffect(() => {
    //     if (props.placingShip == "carrier") {
    //         toggledCarrier = " toggle";
    //     } else {
    //         toggledCarrier = "";
    //     };
    // }, []
    // );

    if (props.boatsSunk.includes("carrier")) {
        sunkCarrier = " sunk";
    } else {
        sunkCarrier = "";
    };

    // if (props.placingShip == "battleship") {
    //     toggledBattleship = " sunk";
    // } else {
    //     toggledBattleship = "";
    // };

    // if (props.placingShip == "cruiser") {
    //     toggledCruiser = " sunk";
    // } else {
    //     toggledCruiser = "";
    // };

    // if (props.placingShip == "submarine") {
    //     toggledSubmarine = " sunk";
    // } else {
    //     toggledSubmarine = "";
    // };

    // if (props.placingShip == "destroyer") {
    //     toggledDestroyer = " sunk";
    // } else {
    //     toggledDestroyer = "";
    // };

    // props.sunkShips





    return (
        <div id={props.id} className="fleet-horizontal" >
            <div className={`carrier-horizontal ship-harbor-horizontal${sunkCarrier}`} >
                <div className="fleet-square"></div>
                <div className="fleet-square"></div>
                <div className="fleet-square"></div>
                <div className="fleet-square"></div>
                <div className="fleet-square"></div>
            </div>
            <div className={`battleship-horizontal ship-harbor-horizontal${sunkBattleship}`} >
                <div className="fleet-square"></div>
                <div className="fleet-square"></div>
                <div className="fleet-square"></div>
                <div className="fleet-square"></div>
            </div>
            <div className={`cruiser-horizontal ship-harbor-horizontal${sunkCruiser}`} >
                <div className="fleet-square"></div>
                <div className="fleet-square"></div>
                <div className="fleet-square"></div>
            </div>
            <div className={`submarine-horizontal ship-harbor-horizontal${sunkSubmarine}`} >
                <div className="fleet-square"></div>
                <div className="fleet-square"></div>
                <div className="fleet-square"></div>
            </div>
            <div className={`destroyer-horizontal ship-harbor-horizontal${sunkDestroyer}`} >
                <div className="fleet-square"></div>
                <div className="fleet-square"></div>
            </div>
        </div >
    )


};

export default ComputerFleet;