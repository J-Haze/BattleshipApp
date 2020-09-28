import React, { useState, useEffect } from "react";
import winningImage from "../assets/winning-image.png"
import losingImage from "../assets/losing-image.png"

function ModalEnd(props) {

    if (props.winner == "Player") {
        return (
            <div className="modal">
                <div id="player-wins" className="modal-content">
                    <div className="message">You Win!</div>
                    <img id="winning-img" className="image" src={winningImage} />
                    <div id="newGame" onClick={() => props.newGame()}>Play again?</div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="modal">
                <div id="computer-wins" className="modal-content">
                    <span className="close" onClick={hideModal}>
                        &times;
                     </span>
                    <div className="message"> You Lose.</div>
                    <img id="losing-img" className="image" src={losingImage} />
                    <div id="newGame" onClick={() => props.newGame()}>Play again?</div>
                </div>
            </div>
        )
    }
}

export default ModalEnd;