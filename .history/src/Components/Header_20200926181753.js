import React, { useState, useEffect } from "react"
import ModalHowTo from "./ModalHowTo.js"
// import shipFactory from "../factories/ship"
// import gameboardFactory from "../factories/gameboard"
// import player from "../factories/player"


function Header() {
    const [howToOpen, setHowToOpen] = useState(false);


    function howTo() {
        setHowToOpen(true)
    }

    function hideHowTo() {
        setHowToOpen(false)
    }

    return (
        <header>
            <div>BattleShip</div>
            <div> Image of battleship </div>
            <div id="how-to" onClick={() => howTo()}> How To Play
            </div>
            {howToOpen && <ModalHowTo
                hideHowTo={hideHowTo}
            />}
        </header>
    )
}


export default Header;
