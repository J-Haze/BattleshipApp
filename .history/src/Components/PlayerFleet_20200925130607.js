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

    let carrierClickable = "clickable";
    let battleshipClickable = "clickable";
    let cruiserClickable = "clickable";
    let submarineClickable = "clickable";
    let destroyerClickable = "clickable";

    useEffect(() => {
        console.log("boatsPlaced:", props.boatsPlaced)
    }, [props.boatsPlaced, props.update]
    );

    if (props.placingShip == "carrier" || props.boatsPlaced.includes("carrier")) {
        toggledCarrier = " toggle";
    } else {
        toggledCarrier = "";
    };

    if (props.placingShip == "battleship" || props.boatsPlaced.includes("battleship")) {
        toggledBattleship = " toggle";
    } else {
        toggledBattleship = "";
    };

    if (props.placingShip == "cruiser" || props.boatsPlaced.includes("cruiser")) {
        toggledCruiser = " toggle";
    } else {
        toggledCruiser = "";
    };

    if (props.placingShip == "submarine" || props.boatsPlaced.includes("submarine")) {
        toggledSubmarine = " toggle";
    } else {
        toggledSubmarine = "";
    };

    if (props.placingShip == "destroyer" || props.boatsPlaced.includes("destroyer")) {
        toggledDestroyer = " toggle";
    } else {
        toggledDestroyer = "";
    };

    if (props.boatsPlaced.includes("carrier")) {
        carrierClickable = "";
    } else {
        carrierClickable = "clickable"
    }

    if (props.boatsPlaced.includes("battleship")) {
        battleshipClickable = "";
    } else {
        battleshipClickable = "clickable"
    }

    if (props.boatsPlaced.includes("cruiser")) {
        cruiserClickable = "";
    } else {
        cruiserClickable = "clickable"
    }

    if (props.boatsPlaced.includes("submarine")) {
        submarineClickable = "";
    } else {
        submarineClickable = "clickable"
    }

    if (props.boatsPlaced.includes("destroyer")) {
        destroyerClickable = "";
    } else {
        destroyerClickable = "clickable"
    }

    //fleet-square, toggled, placed
    let squareClass = "fleet-square";


    if (props.orient == "horizontal") {
        return (
            <div id={props.id} className="fleet-horizontal" >
                <div className={`carrier-horizontal ${carrierClickable} ship-harbor-horizontal${toggledCarrier}`} onClick={() => props.togglePlacement("carrier")}>
                    <div className={carrierClass}></div>
                    <div className={carrierClass}></div>
                    <div className={carrierClass}></div>
                    <div className={carrierClass}></div>
                    <div className={carrierClass}></div>
                </div>
                <div className={`battleship-horizontal ${battleshipClickable} ship-harbor-horizontal${toggledBattleship}`} onClick={() => props.togglePlacement("battleship")}>
                    <div className={battleshipClass}></div>
                    <div className={battleshipClass}></div>
                    <div className={battleshipClass}></div>
                    <div className={battleshipClass}></div>
                </div>
                <div className={`cruiser-horizontal ${cruiserClickable} ship-harbor-horizontal${toggledCruiser}`} onClick={() => props.togglePlacement("cruiser")}>
                    <div className={cruiserClass}></div>
                    <div className={cruiserClass}></div>
                    <div className={cruiserClass}></div>
                </div>
                <div className={`submarine-horizontal ${submarineClickable} ship-harbor-horizontal${toggledSubmarine}`} onClick={() => props.togglePlacement("submarine")}>
                    <div className={submarineClass}></div>
                    <div className={submarineClass}></div>
                    <div className={submarineClass}></div>
                </div>
                <div className={`destroyer-horizontal ${destroyerClickable} ship-harbor-horizontal${toggledDestroyer}`} onClick={() => props.togglePlacement("destroyer")}>
                    <div className={destroyerClass}></div>
                    <div className={destroyerClass}></div>
                </div>
            </div >
        )
    } else {
        return (
            <div id={props.id} className="fleet-vertical" >
                <div className={`carrier-vertical ${carrierClickable} ship-harbor-vertical${toggledCarrier}`} onClick={() => props.togglePlacement("carrier")} >
                    <div className={carrierClass}></div>
                    <div className={carrierClass}></div>
                    <div className={carrierClass}></div>
                    <div className={carrierClass}></div>
                    <div className={carrierClass}></div>
                </div>
                <div className={`battleship-vertical ${battleshipClickable} ship-harbor-vertical${toggledBattleship}`} onClick={() => props.togglePlacement("battleship")} >
                    <div className={battleshipClass}></div>
                    <div className={battleshipClass}></div>
                    <div className={battleshipClass}></div>
                    <div className={battleshipClass}></div>
                </div>
                <div className={`cruiser-vertical ${cruiserClickable} ship-harbor-vertical${toggledCruiser}`} onClick={() => props.togglePlacement("cruiser")} >
                    <div className={cruiserClass}></div>
                    <div className={cruiserClass}></div>
                    <div className={cruiserClass}></div>
                </div>
                <div className={`submarine-vertical ${submarineClickable} ship-harbor-vertical${toggledSubmarine}`} onClick={() => props.togglePlacement("submarine")} >
                    <div className={submarineClass}></div>
                    <div className={submarineClass}></div>
                    <div className={submarineClass}></div>
                </div>
                <div className={`destroyer-vertical ${destroyerClickable} ship-harbor-vertical${toggledDestroyer}`} onClick={() => props.togglePlacement("destroyer")} >
                    <div className={destroyerClass}></div>
                    <div className={destroyerClass}></div>
                </div>
            </div >
        )
    }


};

export default PlayerFleet;