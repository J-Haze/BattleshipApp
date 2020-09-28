import React, { useState, useEffect } from "react";
import winningImage from "../assets/winning-image.png"
import losingImage from "../assets/losing-image.png"

function ModalEnd(props) {


        return (
            <div className="modal">
                <div id="computer-wins" className="modal-content">
                    <span className="close" onClick={props.hideModal}>&times;</span>
                    <div className="message"> You Lose.</div>
                    <img id="losing-img" className="image" src={losingImage} />
                    <div id="newGame" onClick={() => props.newGame()}>Play again?</div>
                </div>
            </div>
        )
}

export default ModalEnd;