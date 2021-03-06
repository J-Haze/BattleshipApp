import React, { useState, useEffect } from "react";

function ModalEnd(props) {

    if (props.winner == "Player") {
        return (
            <div className="modal">
            <div id="player-wins" className="modalContent">
            <div className="message">You Win!</div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="modal">
            <div id="computer-wins" className="modalContent">
            <div className="message"> You Lose.</div>
                </div>
            </div>
        )
    }
}

export default ModalEnd;