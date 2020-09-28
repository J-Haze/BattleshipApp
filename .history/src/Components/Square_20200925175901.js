import React, { useState, useEffect } from "react"
// import shipFactory from "../factories/ship"
// import gameboardFactory from "../factories/gameboard"
// import player from "../factories/player"

function Square(props) {

    const id = (props.row * 10 + props.col)

    // console.log("Square Props", { props })

    // if (props.squareObj != null) {
    //     console.log("ID and Object:", id, props.squareObj[0])
    // }

    // let renderedSquare = () => {

    // };


    let attackClick = () => props.handleClick(id);
    let placementClick = () => props.handlePlaceShip(id);

    let placementMode = null;
    let playerAttack = null;

    if (props.phase == "setup") {
        placementMode = placementClick;
        playerAttack = null;
    } else if (props.phase == "playerTurn") {
        placementMode = null;
        playerAttack = attackClick;
    }

    let playerClickable = "";
    if (props.phase == "setup") {
        playerClickable = " clickable"
    } else {
        playerClickable = "";
    }

    let computerClickable = "";
    if (props.phase == "playerTurn") {
        computerClickable = "clickable"
    } else {
        computerClickable = "";
        console.log("not playerTurn")
    }

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
                    (<div className={`empty ${playerClickable}`} key={id} onClick={placementMode}></div>)
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
                    (<div className="empty ${computerClickable}" key={id} onClick={playerAttack}></div>)
                }
            </div>
        )
    }


}

export default Square;