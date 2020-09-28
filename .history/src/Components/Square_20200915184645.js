import React from "react"
import shipFactory from "../factories/ship"
import gameboardFactory from "../factories/gameboard"
import player from "../factories/player"

function Square(props) {
    
    return (
        <div>
        <div>{props.square}</div>
        </div>
    )
}

export default Square;