import React from "react"
import shipFactory from "./factories/ship"

function Ships() {

    console.log(shipFactory.name(2))

    return (
        <div>Hello World!</div>
    )
}

export default Ships;