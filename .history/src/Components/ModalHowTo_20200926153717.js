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
                        <p> <strong>Objective:</strong> The object of Battleship is to try and sink all of the Computer's ships before they sink all of your ships. <br/> All of the Computer's ships are hidden somewhere on their board.  On your turn, you will seleYou try and hit them by calling out the coordinates of one of the squares on the board.  The other player also tries to hit your ships by calling out coordinates.  Neither you nor the other player can see the other's board so you must try to guess where they are. 
                        </p>     
                    </div>
                </div>
            </div>
        )
}

export default ModalEnd;