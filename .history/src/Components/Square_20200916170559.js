import React from "react"
import shipFactory from "../factories/ship"
import gameboardFactory from "../factories/gameboard"
import player from "../factories/player"

function Square(props) {
    const { row, col, squareObj } = props;

    console.log("squareObj:", squareObj)

    return (
        <div className="square">
            {row}
            {col}
            {squareObj}
        </div>
    )
}

export default Square;