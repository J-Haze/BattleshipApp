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
                        <p> <strong>Objective:</strong> The object of Battleship is to try and sink all of the Computer's ships before they sink all of your ships. <br /><br /> All of the Computer's ships are hidden somewhere on their board. On your turns, you will select squares on the Computer's board to attack. On the Computer's turns, the computer will guess squares on your board to attack. Neither you nor the Computer can see the other's ships so you must try to guess where they are. 
                        </p>
                        <p><strong>Phases:</strong></p>
                        <p><strong>1. Setup:</strong></p>
                        <p><strong>2. Player Turn</strong></p>
                    <p><strong>3. Computer Turn</strong></p>
                    <p><strong>4. </strong>Player and Computer alternate turns until a player sinks all of the other player's ships. The first person to sink all 5 of the other player's ships is declared the winner!</p>
                    </div>
                </div>
            </div>
        )
}

export default ModalEnd;