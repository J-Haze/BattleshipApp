import React, { useState, useEffect } from "react"
// import shipFactory from "../factories/ship"
// import gameboardFactory from "../factories/gameboard"
// import player from "../factories/player"

function Square(props) {
    const { row, col, squareObj, handleClick } = props;

    // const [newSquareObj, setSquareObj] = useState('squareObj')
    // useEffect(() => {
    //     console.log("New squareObj:", squareObj)
    // }, [newSquareObj])

    const renderedSquare = () => {
        if (squareObj != null) {
            if (squareObj[0] == false) {
                return <div className="ship">O</div>
            } else if (squareObj[0] == true) {
                return <div className="hit">X</div>
            } else if (squareObj[0] == "sunk") {
                return <div className="sunk">X</div>
            } else if (squareObj[0] == "miss") {
                return <div className="miss">X</div>
            } else {
                return <div className="empty" handleClick={handleClick}></div>
            }
        }
    };


    return (
        <div className="square">
            {/* {row}
            {col} */}
            {renderedSquare()}
        </div>
    )
}

export default Square;