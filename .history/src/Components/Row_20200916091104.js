import React from "react"
import shipFactory from "../factories/ship"
import gameboardFactory from "../factories/gameboard"
import player from "../factories/player"

function Row(props) {
    const { rowObj } = props;

    console.log({ rowObj });

    return (
        // <div className="row">
        //     {rowObj}
        // </div>
        <div>
        {rowObj.map((square) => {
            return (
                <Square
                    key={square}
                    squareObj={square}
                />
            );
        })
            }
        </div>
        )
};
export default Row;