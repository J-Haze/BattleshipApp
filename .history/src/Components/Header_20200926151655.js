import React, { useState, useEffect } from "react"
// import shipFactory from "../factories/ship"
// import gameboardFactory from "../factories/gameboard"
// import player from "../factories/player"
const [howToOpen, setHowToOpen] = useState(null);

function Header() {
    
    function howTo() {
        setHowToOpen(true)
    }
    
    return (
        <header>
            <div>BattleShip</div>
            <div> Image of battleship </div>
            <div id="how-to" onClick={() => howTo()}> How To Play </div>
            {howToOpen && <ModalEnd
                hideModal={hideModal}
            />}
        </header>
    )
}


export default Header;
