import React, { useState, useEffect } from "react"

function Fleet(props) {

    console.log("key", props.key)
    console.log("id", props.id)

    if (props.orient == "horizontal") {
        let shipFleet = {
        <div id = { props.id } className = "fleet" >
            <div className = "carrier horizontal" ></div>
            <div className="battleship horizontal"></div>
            <div className="cruiser horizontal"></div>
            <div className="submarine horizontal"></div>
            <div className="destroyer horizontal"></div>
        </div >
        }
    }
    return (
        
        {shipFleet}

    
    )

};

export default Fleet;