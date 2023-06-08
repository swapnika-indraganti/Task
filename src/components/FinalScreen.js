import React from "react";

import { useLocation } from "react-router-dom"

import bodylogo from "./../img/body.png"
import headboard from './../img/headboard.png'
import legs from './../img/legs.png'
import matress from './../img/matress.png'
import pillow from './../img/pillow.png'


export function FinalScreen() {
    
    var location = useLocation();
    var items = location.state.items;

    return (

        <div>
            <header className="home-header">
                <h1>Assembled Selected Parts</h1>
            </header>

            <div class = "final-container">
                
                {items[4] === 1 &&
                <img class = "pillow-img" src = {pillow} alt = "Pillow"></img>
                }
                {items[1] === 1 &&
                <img class = "headboard-img" src = {headboard} alt = "Headboard"></img>
                }
                {items[0] === 1 &&
                <img class = "cot-img" src = {bodylogo} alt = "Cot"></img>
                }
                {items[2] === 1 &&
                <img class = "legs-img" src = {legs} alt = "Legs"></img>
                }
                {items[3] === 1 &&
                <img class = "matress-img" src = {matress} alt = "Matress"></img>
                }

            </div>

        </div>
    )

}
