import React, { useState, useEffect } from "react"

function Fleet(props) {

    console.log("key", props.key)
    console.log("id", props.id)

    console.log("orient", props.orient)

    if (props.orient == "horizontal") {
        return (
            <div id={props.id} className="fleet" >
                <div className="carrier ship-harbor horizontal" ></div>
                <div className="battleship ship-harbor horizontal"></div>
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