import React from "react"
// import shipFactory from "../factories/ship"
// import gameboardFactory from "../factories/gameboard"
// import player from "../factories/player"
import Square from "./Square"

function Row(props) {
    const { roww, rowObj } = props;

    console.log({ rowObj });

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
                    />
                );
            })
            }
        </div>
    )
};
export default Row;