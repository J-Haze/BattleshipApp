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
    
    // let renderedSquare = 

    return (
        <div className="square">
            {row}
            {col}
            {
                if(squareObj != null) {
                if( squareObj[0] == false){
                <div className="ship"></div>
            } else{
                <div className=""></div>
            }     
            }
            }
        </div>
    )
}

export default Square;