import React from "react"
import shipFactory from "../factories/ship"
import gameboardFactory from "../factories/gameboard"
import player from "../factories/player"

function Square(props) {
    const { squareObj, position,} = props;



    return (
        <div className="row">
            {squareObj}
        </div>
    )
}

export default Square;