import React from "react"
import shipFactory from "./factories/ship"

function Ships() {

    const destroyer = shipFactory(2)
    const cruiser = shipFactory(3)
    const battleship = shipFactory(4)
    const carrier = shipFactory(5)

    //testing
    console.log(destroyer.name)
    console.log(destroyer.shipLength)
    console.log(destroyer.ship)
    console.log(destroyer.hit(1))

    function sinkBattleship() {
        
    }

    console.log(shipFactory(3).name)
    console.log(shipFactory(2).name)


    return (
        <div>Hello World!</div>
    )
}

export default Ships;