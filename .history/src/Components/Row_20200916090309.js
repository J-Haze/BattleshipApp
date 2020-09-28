import React from "react"
import shipFactory from "../factories/ship"
import gameboardFactory from "../factories/gameboard"
import player from "../factories/player"

function Row(props) {
    const { rowObj } = props;



    return (
        <div className="row">
            {rowObj}
        </div>
    )
}

export default Row;