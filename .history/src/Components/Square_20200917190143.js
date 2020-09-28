import React, { useState, useEffect } from "react"
// import shipFactory from "../factories/ship"
// import gameboardFactory from "../factories/gameboard"
// import player from "../factories/player"

function Square(props) {
    // const { row, col, squareObj, handleClick } = props;
    let { row, col, squareObj, handleClick } = props;

    // function handleClick(id){
    //     console.log("clicked", id)
    // };

    // const [newSquareObj, setSquareObj] = useState('squareObj')
    // useEffect(() => {
    //     console.log("New squareObj:", squareObj)
    // }, [newSquareObj])

    let id = (row * 10 + col)

    const [squareState, setSquare] = useState(s);

    useEffect(() => {
        setSquare(squareObj);
        console.log("squareObj2:", squareObj)
        console.log("squareState:", squareState)
    },
        [squareObj]
    );



    if (squareObj != null) {
        console.log(id, squareObj[0])
    }

    const renderedSquare = () => {
        if (squareState != null) {
            if (squareState[0] == false) {
                return <div className="ship" key={id}>O</div>
            } else if (squareState[0] == true) {
                return <div className="hit" key={id}>X</div>
            } else if (squareState[0] == "sunk") {
                return <div className="sunk" key={id}>X</div>
            } else if (squareState[0] == "miss") {
                console.log("MISS")
                return <div className="miss" key={id}>X</div>
            }
        } else {
            return <div className="empty" key={id} onClick={() => handleClick(id)}></div>
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