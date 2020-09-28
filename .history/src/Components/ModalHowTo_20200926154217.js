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
                        <p> <strong>Objective:</strong> <br/> The object of Battleship is to try and sink all of the Computer's ships before they sink all of your ships. <br/> All of the Computer's ships are hidden somewhere on their board. On your turns, you will select squares on the Computer's board to attack. On the Computer's turns, the computer will guess squares on your board to attack. Neither you nor the Computer can see the other's ships so you must try to guess where they are. 
                        </p>
                        
                    </div>
                </div>
            </div>
        )
}

export default ModalEnd;