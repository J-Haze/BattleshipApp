import React, { useState, useEffect } from "react"

function PlayerFleet(props) {

    console.log("key", props.key)
    console.log("id", props.id)

    console.log("orient", props.orient)


    let toggledCarrier = "";
    let toggledBattleship = "";
    let toggledCruiser = "";
    let toggledSubmarine = "";
    let toggledDestroyer = "";

    let carrierClass = "fleet-square";
    let battleshipClass = "fleet-square";
    let cruiserClass = "fleet-square";
    let submarineClass = "fleet-square";
    let destroyerClass = "fleet-square";

    useEffect(() => {
        console.log("boatsPlaced:", props.boatsPlaced)
    }, [props.boatsPlaced, props.update]
    );

    if (props.placingShip == "carrier") {
        toggledCarrier = " toggle";

    } else {
        toggledCarrier = "";
    };

    if (props.placingShip == "battleship") {
        toggledBattleship = " toggle";
    } else {
        toggledBattleship = "";
    };

    if (props.placingShip == "cruiser") {
        toggledCruiser = " toggle";
    } else {
        toggledCruiser = "";
    };

    if (props.placingShip == "submarine") {
        toggledSubmarine = " toggle";
    } else {
        toggledSubmarine = "";
    };

    if (props.placingShip == "destroyer") {
        toggledDestroyer = " toggle";
    } else {
        toggledDestroyer = "";
    };

    //fleet-square, toggled, placed
    let squareClass = "fleet-square";

    //props.

    if (props.orient == "horizontal") {
        return (
            <div id={props.id} className="fleet-horizontal" >
                <div className={`carrier-horizontal ship-harbor-horizontal${toggledCarrier}`} onClick={() => props.togglePlacement("carrier")}>
                    <div className={carrierClass}></div>
                    <div className={carrierClass}></div>
                    <div className={carrierClass}></div>
                    <div className={carrierClass}></div>
                    <div className={carrierClass}></div>
                </div>
                <div className={`battleship-horizontal ship-harbor-horizontal${toggledBattleship}`} onClick={() => props.togglePlacement("battleship")}>
                    <div className={battleshipClass}></div>
                    <div className={battleshipClass}></div>
                    <div className={battleshipClass}></div>
                    <div className={battleshipClass}></div>
                </div>
                <div className={`cruiser-horizontal ship-harbor-horizontal${toggledCruiser}`} onClick={() => props.togglePlacement("cruiser")}>
                    <div className={cruiserClass}></div>
                    <div className={cruiserClass}></div>
                    <div className={cruiserClass}></div>
                </div>
                <div className={`submarine-horizontal ship-harbor-horizontal${toggledSubmarine}`} onClick={() => props.togglePlacement("submarine")}>
                    <div className={submarineClass}></div>
                    <div className={submarineClass}></div>
                    <div className={submarineClass}></div>
                </div>
                <div className={`destroyer-horizontal ship-harbor-horizontal${toggledDestroyer}`} onClick={() => props.togglePlacement("destroyer")}>
                    <div className={destroyerClass}></div>
                    <div className={destroyerClass}></div>
                </div>
            </div >
        )
    } else {
        return (
            <div id={props.id} className="fleet-vertical" >
                <div className={`carrier-vertical ship-harbor-vertical${toggledCarrier}`} onClick={() => props.togglePlacement("carrier")} >
                    <div className={carrierClass}></div>
                    <div className={carrierClass}></div>
                    <div className={carrierClass}></div>
                    <div className={carrierClass}></div>
                    <div className={carrierClass}></div>
                </div>
                <div className={`battleship-vertical ship-harbor-vertical${toggledBattleship}`} onClick={() => props.togglePlacement("battleship")} >
                    <div className={battleshipClass}></div>
                    <div className={battleshipClass}></div>
                    <div className={battleshipClass}></div>
                    <div className={battleshipClass}></div>
                </div>
                <div className={`cruiser-vertical ship-harbor-vertical${toggledCruiser}`} onClick={() => props.togglePlacement("cruiser")} >
                    <div className={cruiserClass}></div>
                    <div className={cruiserClass}></div>
                    <div className={cruiserClass}></div>
                </div>
                <div className={`submarine-vertical ship-harbor-vertical${toggledSubmarine}`} onClick={() => props.togglePlacement("submarine")} >
                    <div className={submarineClass}></div>
                    <div className={submarineClass}></div>
                    <div className={submarineClass}></div>
                </div>
                <div className={`destroyer-vertical ship-harbor-vertical${toggledDestroyer}`} onClick={() => props.togglePlacement("destroyer")} >
                    <div className={destroyerClass}></div>
                    <div className={destroyerClass}></div>
                </div>
            </div >
        )
    }


};

export default PlayerFleet;