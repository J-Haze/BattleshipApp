import React, { useState, useEffect } from "react"

function Fleet(props) {

    console.log("key", props.key)
    console.log("id", props.id)
    return (
        <div id={props.id} className="fleet" >
        Yeet
    </div >
    )

};

export default Fleet;