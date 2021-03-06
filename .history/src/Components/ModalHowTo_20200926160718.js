import React, { useState, useEffect } from "react";
import winningImage from "../assets/winning-image.png"
import losingImage from "../assets/losing-image.png"

function ModalEnd(props) {


        return (
            <div className="modal">
                <div id="howToModal" className="modal-content">
                    <span className="close" onClick={props.hideModal}>&times;</span>
                    <div className="howToTop"> How To Play:</div>
                    <div className="howToBottom">
                        <div> <strong>Objective:</strong> The object of Battleship is to try and sink all of the Computer's ships before they sink all of your ships. <br /><br /> All of the Computer's ships are hidden somewhere on their board. On your turns, you will select squares on the Computer's board to attack. On the Computer's turns, the computer will guess squares on your board to attack. Neither you nor the Computer can see the other's ships so you must try to guess where they are. 
                        </div>
                        <div><strong>Phases:</strong></div>
                        <div><strong>1. Setudiv:</strong></div>
                        <div><strong>2. Player Turn:</strong></div>
                    <div><strong>3. Computer Turn:</strong></div>
                        <div><strong>4. Repeat 2 & 3: </strong></div>
                        <div>Player and Computer alternate turns until a player sinks all of the other player's ships. The first person to sink all 5 of the other player's ships is declared the winner!</div>
                    </div>
                </div>
            </div>
        )
}

export default ModalEnd;