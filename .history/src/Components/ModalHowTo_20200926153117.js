import React, { useState, useEffect } from "react";
import winningImage from "../assets/winning-image.png"
import losingImage from "../assets/losing-image.png"

function ModalEnd(props) {


        return (
            <div className="modal">
                <div id="howToModal" className="modal-content">
                    <span className="close" onClick={props.hideModal}>&times;</span>
                    <div className="howToTop"> How To</div>
                    <div className="howToBottom">
                        The goal of the game is to 
                    </div>
                </div>
            </div>
        )
}

export default ModalEnd;