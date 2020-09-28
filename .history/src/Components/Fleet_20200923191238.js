import React, { useState, useEffect } from "react"

function Fleet(props) {

    console.log("key", props.key)
    console.log("id", props.id)

    console.log("orient", props.orient)

    let toggledCarrier = "";
    let toggledBattleship = "";

    // useEffect(() => {
    //     if (props.placingShip == "carrier") {
    //         toggledCarrier = " toggle";
    //     } else {
    //         toggledCarrier = "";
    //     };
    // }, []
    // );

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

    if (props.orient == "horizontal") {
        return (
            <div id={props.id} className="fleet" >
                <div className={`carrier ship-harbor horizontal${toggledCarrier}`} onClick={() => props.togglePlacement("carrier")}></div>
                <div className={`battleship ship-harbor horizontal${toggledBattleship}`} onClick={() => props.togglePlacement("battleship")}></div>
                <div className="cruiser ship-harbor horizontal"></div>
                <div className="submarine ship-harbor horizontal"></div>
                <div className="destroyer ship-harbor horizontal"></div>
            </div >
        )
    } else {
        return (
            <div id={props.id} className="fleet" > Error
                <div className="carrier ship-harbor horizontal" ></div>
                <div className="battleship ship-harbor horizontal"></div>
                <div className="cruiser ship-harbor horizontal"></div>
                <div className="submarine ship-harbor horizontal"></div>
                <div className="destroyer ship-harbor horizontal"></div>
            </div >
        )
    }


};

export default Fleet;