import React, { useState, useEffect } from "react"
// import shipFactory from "../factories/ship"
// import gameboardFactory from "../factories/gameboard"
// import player from "../factories/player"

function Square(props) {

    const id = (props.row * 10 + props.col)

    console.log("Square Props", {props})

    // if (props.squareObj != null) {
    //     console.log("ID and Object:", id, props.squareObj[0])
    // }

    // let renderedSquare = () => {

    // };

    let playerAttack = "";

    onClick = {() => props.handleClick(id)

    if (props.phase == "setup") {

        playerAttack = ""
    } else if (props.phase == "playerTurn") {
        
        playerAttack = onClick
    }
    }

    return (
        <div className="square">
            {/* {row}
            {col} */}
            {(props.squareObj != null) ?
                ((props.squareObj[0] == false) ?
                    (<div className="ship" key={id} {`${playerAttack}`}>O</div>) :
                    (props.squareObj[0] == true) ?
                        (<div className="hit" key={id}>X</div>) :
                        (props.squareObj[0] == "sunk") ?
                            (<div className="sunk" key={id}>X</div>) :
                            (props.squareObj == "miss") ?
                                (<div className="miss" key={id}>X</div>) :
                                (<div>error</div>)) :
                (<div className="empty" key={id} {`${playerAttack}`}></div>)
                // return <div className="empty" onClick={() => handleClick(key)}></div>
            }
        </div>
    )
}

export default Square;