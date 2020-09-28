import React, { useState, useEffect } from "react";
import winningImage from "../assets/winning-image.png"
import losingImage from "../assets/losing-image.png"

function ModalEnd(props) {


    return (
        <div className="modal">
            <div id="howToModal" className="modal-content">
                <span className="close" onClick={props.hideModal}>&times;</span>
                <div className="howToTop"> <strong>How To Play:</strong></div>
                <div className="howToBottom">
                    <div> <strong>Objective:</strong> The object of Battleship is to try and sink all of the Computer's ships before they sink all of your ships. </div>
                    <div className="space">All of the Computer's ships are hidden somewhere on their board. On your turns, you will select squares on the Computer's board to attack. On the Computer's turns, the computer will guess squares on your board to attack. Neither you nor the Computer can see the other's ships so you must try to guess where they are.
                        </div>
                    <div className="space"><strong>Phases:</strong></div>
                    <div className="space"><strong>1. Setup:</strong></div>
                    <div>Place your ships somewhere on the board. Or select "Auto Place" to have the ships randomly placed on your board. Then select the "Start" button to begin the game.</div>
                    <div className="space"><strong>2. Player Turn:</strong></div>
                    <div>Select a square on the Computer's board to attack. If the attack hits one of the Computer's ships, the square will turn red. If the attack misses the Computer's ships, the square will turn blue.</div>
                    <div className="space"><strong>3. Computer Turn:</strong></div>
                    <div>Select a square on the Computer's board to attack. If the attack hits one of the Computer's ships, the square will turn red.</div>
                    <div className="space"><strong>4. Repeat 2 & 3: </strong></div>
                    <div>Player and Computer alternate turns until a player sinks all of the other player's ships. When a ship is sunk, the ship in the player's fleet will fade. The first person to sink all 5 of the other player's ships is declared the winner!</div>
                </div>
            </div>
        </div>
    )
}

export default ModalEnd;