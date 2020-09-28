import React, { useState, useEffect } from "react"
// import shipFactory from "../factories/ship"
// import gameboardFactory from "../factories/gameboard"
// import player from "../factories/player"
import Square from "./Square"

function Row(props) {
    let { roww, rowObj, handleClick } = props;

    // console.log({ rowObj });
    // const [rowwState, setRoww] = useState([roww]);

    // useEffect(() => {
    //     setRoww(roww);
    // },
    //     [roww]
    // );

    return (
        // <div className="row">
        //     {rowObj}
        // </div>
        <div className="row">
            {rowObj.map((square, j) => {
                return (
                    <Square
                        key={j}
                        row={roww}
                        col={j}
                        squareObj={square}
                        handleClick={handleClick}
                    />
                );
            })
            }
        </div>
    )
};
export default Row;