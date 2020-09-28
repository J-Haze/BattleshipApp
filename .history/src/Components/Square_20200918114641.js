import React, { useState, useEffect } from "react"
// import shipFactory from "../factories/ship"
// import gameboardFactory from "../factories/gameboard"
// import player from "../factories/player"

function Square(props) {
    // const { row, col, squareObj, handleClick } = props;
    // let { row, col, squareObj, handleClick } = props;

    // function handleClick(id){
    //     console.log("clicked", id)
    // };

    // const [newSquareObj, setSquareObj] = useState('squareObj')
    // useEffect(() => {
    //     console.log("New squareObj:", squareObj)
    // }, [newSquareObj])

    const id = (props.row * 10 + props.col)

    // const [squareState, setSquare] = useState(squareObj);

    // useEffect(() => {
    //     setSquare(squareObj);
    //     renderedSquare = () => {
    //         if (squareObj != null) {
    //             if (squareObj == "miss") {
    //                 console.log("MISS")
    //                 return <div className="miss" key={id}>X</div>
    //             } else {
    //                 if (squareObj[0] == false) {
    //                     return <div className="ship" key={id}>O</div>
    //                 } else if (squareObj[0] == true) {
    //                     return <div className="hit" key={id}>X</div>
    //                 } else if (squareObj[0] == "sunk") {
    //                     return <div className="sunk" key={id}>X</div>
    //                 } 
    //             }    

    //         } else {
    //             return <div className="empty" key={id} onClick={() => handleClick(id)}></div>
    //             // return <div className="empty" onClick={() => handleClick(key)}></div>
    //         }
    //     };
    //     console.log("squareObj2:", squareObj)
    //     console.log("squareState:", squareState)
    // },
    //     [squareObj]
    // );


    if (props.squareObj != null) {
        console.log("ID and Object:", props.id, props.squareObj[0])
    }

    // let renderedSquare = () => {

    // };

    return (
        <div className="square">
            {/* {row}
            {col} */}
            {(props.squareObj != null) ?
                ((props.squareObj[0] == false) ?
                    (<div className="ship" key={id}>O</div>) :
                    (props.squareObj[0] == true) ?
                        (<div className="hit" key={id}>X</div>) :
                        (props.squareObj[0] == "sunk") ?
                            (<div className="sunk" key={id}>X</div>) :
                            (props.squareObj[0] == "miss") ?
                                (<div className="miss" key={id}>X</div>) :
                                (<div>error</div>)) :
                (<div className="empty" key={id} onClick={() => props.handleClick(id)}></div>)
                // return <div className="empty" onClick={() => handleClick(key)}></div>
            }
        </div>
    )
}

export default Square;