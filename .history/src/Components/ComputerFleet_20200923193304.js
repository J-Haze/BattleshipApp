import React, { useState, useEffect } from "react"

function ComputerFleet(props) {

    console.log("key", props.key)
    console.log("id", props.id)

    console.log("orient", props.orient)

    let sunkCarrier = "";
    let sunkBattleship = "";
    let sunkCruiser = "";
    let sunkSubmarine = "";
    let sunkDestroyer = "";

    // useEffect(() => {
    //     if (props.placingShip == "carrier") {
    //         toggledCarrier = " toggle";
    //     } else {
    //         toggledCarrier = "";
    //     };
    // }, []
    // );

    // if (props.sunkCarrier == true) {
    //     toggledCarrier = " sunk";
    // } else {
    //     toggledCarrier = "";
    // };

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
            <div id={props.id} className="fleet" >
                <div className={`carrier ship-harbor horizontal${sunkCarrier}`} onClick={() => props.togglePlacement("carrier")}></div>
                <div className={`battleship ship-harbor horizontal${sunkBattleship}`} onClick={() => props.togglePlacement("battleship")}></div>
                <div className={`cruiser ship-harbor horizontal${sunkCruiser}`} onClick={() => props.togglePlacement("cruiser")}></div>
                <div className={`submarine ship-harbor horizontal${sunkSubmarine}`} onClick={() => props.togglePlacement("submarine")}></div>
                <div className={`destroyer ship-harbor horizontal${sunkDestroyer}`} onClick={() => props.togglePlacement("destroyer")}></div>
            </div >
        )


};

export default ComputerFleet;