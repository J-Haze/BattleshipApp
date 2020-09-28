import React from "react"
import shipFactory from "./factories/ship"

function Ships() {

    const destroyer = shipFactory(5)
    const cruiser = shipFactory(5)
    const battleship = shipFactory(5)
    const carrier = shipFactory(5)
    console.log(shipFactory(2).name)

    return (
        <div>Hello World!</div>
    )
}

export default Ships;