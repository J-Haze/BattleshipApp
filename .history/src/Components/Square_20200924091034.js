import React, { useState, useEffect } from "react"
// import shipFactory from "../factories/ship"
// import gameboardFactory from "../factories/gameboard"
// import player from "../factories/player"

function Square(props) {

    const id = (props.row * 10 + props.col)

    console.log("Square Props", { props })

    // if (props.squareObj != null) {
    //     console.log("ID and Object:", id, props.squareObj[0])
    // }

    // let renderedSquare = () => {

    // };

    let placementMode = null;
    // let placementClick = () => 

    let playerAttack = null;
    let click = () => props.handleClick(id)

    if (props.phase == "setup") {
        placementMode = click;
        playerAttack = null;
    } else if (props.phase == "playerTurn") {
        placementMode = null;
        playerAttack = click;
    }

    console.log("props.boardID", props.boardID)

    if (props.boardID == "player") {
        return (
            <div className="square">
                {(props.squareObj != null) ?
                    ((props.squareObj[0] == false) ?
                        (<div className="ship" key={id}>O</div>) :
                        (props.squareObj[0] == true) ?
                            (<div className="hit" key={id}>X</div>) :
                            (props.squareObj[0] == "sunk") ?
                                (<div className="sunk" key={id}>X</div>) :
                                (props.squareObj == "miss") ?
                                    (<div className="miss" key={id}>X</div>) :
                                    (<div>error</div>)) :
                    (<div className="empty" key={id} onClick={placementMode}></div>)
                }
            </div>
        )
    } else {
        return (
            <div className="square">
                {(props.squareObj != null) ?
                    ((props.squareObj[0] == false) ?
                        (<div className="ship" key={id} onClick={playerAttack}>O</div>) :
                        (props.squareObj[0] == true) ?
                            (<div className="hit" key={id}>X</div>) :
                            (props.squareObj[0] == "sunk") ?
                                (<div className="sunk" key={id}>X</div>) :
                                (props.squareObj == "miss") ?
                                    (<div className="miss" key={id}>X</div>) :
                                    (<div>error</div>)) :
                    (<div className="empty" key={id} onClick={playerAttack}></div>)
                }
            </div>
        )
    }


}

export default Square;