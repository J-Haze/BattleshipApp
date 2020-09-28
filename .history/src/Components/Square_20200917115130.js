import React, { useState, useEffect } from "react"
// import shipFactory from "../factories/ship"
// import gameboardFactory from "../factories/gameboard"
// import player from "../factories/player"

function Square(props) {
    // const { row, col, squareObj, handleClick } = props;
    const { row, col, squareObj, handleClick } = props;

    // const handleClick = (event) => {
    //     event.preventDefault();
    //     console.log("clicked")
    // };

    // const [newSquareObj, setSquareObj] = useState('squareObj')
    // useEffect(() => {
    //     console.log("New squareObj:", squareObj)
    // }, [newSquareObj])

    let id = (row*10 + col)

    // console.log("id:", id)

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
            }
        } else {
            return <div className="empty" onClick={handleClick(event, id)}></div>
            // return <div className="empty" onClick={() => handleClick(key)}></div>
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