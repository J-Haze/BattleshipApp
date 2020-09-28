import React, { useState, useEffect } from "react"

function Fleet(props) {

    console.log("key", props.key)
    console.log("id", props.id)

    console.log("orient", props.orient)

    if (props.orient == "horizontal") {
        return (
        <div id = { props.id } className = "fleet" >
            <div className = "carrier horizontal" ></div>
            <div className="battleship horizontal"></div>
            <div className="cruiser horizontal"></div>
            <div className="submarine horizontal"></div>
            <div className="destroyer horizontal"></div>
            </div >
        )
    } else {
        return (
            <div id={props.id} className="fleet" > Error
                <div className="carrier horizontal" ></div>
                <div className="battleship horizontal"></div>
                <div className="cruiser horizontal"></div>
                <div className="submarine horizontal"></div>
                <div className="destroyer horizontal"></div>
            </div >
        )
    }


};

export default Fleet;