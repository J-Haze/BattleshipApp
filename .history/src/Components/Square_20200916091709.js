import React from "react"
import shipFactory from "../factories/ship"
import gameboardFactory from "../factories/gameboard"
import player from "../factories/player"

function Square(props) {
    const { squareObj, position, } = props;

    console.log("squareObj:", squareObj)

    return (
        <div className="square">
            {squareObj}

        </div>
    )
}

export default Square;