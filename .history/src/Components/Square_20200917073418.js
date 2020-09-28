import React, {useState, useEffect} from "react"
import shipFactory from "../factories/ship"
import gameboardFactory from "../factories/gameboard"
import player from "../factories/player"

function Square(props) {
    const { row, col, squareObj } = props;

    // const [newSquareObj, setSquareObj] = useState('squareObj')
    // useEffect(() => {
    //     console.log("New squareObj:", squareObj)
    // }, [newSquareObj])
    

    return (
        <div className="square">
            {row}
            {col}
            {squareObj[0] == false ? <div className="ship"></div> : <div className=""></div>}
        </div>
    )
}

export default Square;