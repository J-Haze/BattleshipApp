import React, { useState, useEffect } from "react"
import Square from "./Square"

function Row(props) {
    let { roww, rowObj, handleClick, phase, boardID, handlePlaceShip, update } = props;

    useEffect(() => {
        rowObj = rowObj;
    },
        [update]
    );

    return (
        <div className="row">
            {rowObj.map((square, j) => {
                return (
                    <Square
                        key={j}
                        row={roww}
                        col={j}
                        squareObj={square}
                        handleClick={handleClick}
                        phase={phase}
                        boardID={boardID}
                        handlePlaceShip={handlePlaceShip}
                    />
                );
            })
            }
        </div>
    )
};
export default Row;