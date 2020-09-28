import React, { useState, useEffect } from "react";

function ModalEnd(props) {

    if (props.winner == "Player") {
        return (
            <div id="player-wins">
            <div className="message">You Win!</div>
        </div>
        )
    } else {
        return (
            <div id="computer-wins">
            <div className="message"> You Lose.</div>
            </div>
        )
    }
}

export default ModalEnd;