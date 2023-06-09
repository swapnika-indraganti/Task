import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"

import headboard from "./../img1/headboard.jpg"
import legs from "./../img1/legs.jpg"
import matress from "./../img1/matress.jpg"
import pillow from "./../img1/pillow.jpg"

import bodylogo from "./../img/body.png"
import headboardlogo from './../img/headboard.png'
import legslogo from './../img/legs.png'
import matresslogo from './../img/matress.png'
import pillowlogo from './../img/pillow.png'

export function Assemble() {

    var location = useLocation();
    var items = location.state.items;

    const [parts, setParts] = useState([1, 0, 0, 0, 0]);
    const [selectedPart, setPartId] = useState();

    useEffect(() => {
        const handlePopstate = () => {
            console.log("Triggered use Effect []");
            var partsState = window.sessionStorage.getItem('partsState');
            if (partsState) {
                var partsArray = JSON.parse(partsState);
                setParts(partsArray);
            }
        }
        window.addEventListener('popstate', handlePopstate);
    },[]);

    useEffect(() => {
        console.log("Triggered use effect with [parts] and state is ", parts);
        window.sessionStorage.setItem('partsState', JSON.stringify(parts));
    },[parts]);

    function updateState(id, value) {
        console.log("Calling update state with ", id , " ", value);
        setParts(previousState => {
            previousState[id] = value
            return [...previousState];
        });
    }

    function logId (e) {
        e.preventDefault();
        console.log(selectedPart, " is stored in state ");
    }

    function logState() {
        console.log(parts, " is the state");
    }


    return (
        <div>
            {/* <p> Received items are {items} </p> */}
            <header className="home-header" >
                <h1>Parts Assembly</h1>
            </header>
    
            <div class="s-container">
                <div class="s-part-list">
                    <header class = "selected-header">    <h2>Selected Parts </h2>  </header>

                    <div class="s-scrollable-panel" id="selected-parts-panel">

                        {items[1] === 1 &&
                        <div draggable = "true" onDragStart={() => setPartId(1)}>
                            <img class = "s-img" src={headboard} alt="headboard"></img>
                            <h3 class = "part-text">HeadBoard</h3>
                        </div>
                        }

                        {items[2] === 1 &&
                        <div draggable = "true" onDragStart={() => setPartId(2)}>
                            <img class = "s-img" src={legs} alt="legs"></img>
                            <h3 class = "part-text">Legs</h3>
                        </div>
                        }

                        {items[3] === 1 &&
                        <div draggable = "true" onDragStart={() => setPartId(3)}>
                            <img class = "s-img" src={matress} alt="matress"></img>
                            <h3 class = "part-text">Matress</h3>
                        </div>
                        }

                        {items[4] === 1 &&
                        <div draggable = "true" onDragStart={() => setPartId(4)}>
                            <img class = "s-img" src={pillow} alt="pillow"></img>
                            <h3 class = "part-text">Pillow</h3>
                        </div>
                        }

                    
                    </div>
                </div>
                <div class="assembly-area" onDrop={() => updateState(selectedPart, 1)} onDragOver={logId}>
                    <header class = "selected-header">
                        <h2 onClick={logState}>Assembly Area </h2>
                    </header>
                    
                    {parts[4] === 1 &&
                    <img class = "pillow-img" src = {pillowlogo} alt = "Pillow"></img>
                    }
                    {parts[1] === 1 &&
                    <img class = "headboard-img" src = {headboardlogo} alt = "Headboard"></img>
                    }
                    {parts[0] === 1 &&
                    <img class = "cot-img" src = {bodylogo} alt = "Cot"></img>
                    }
                    {parts[2] === 1 &&
                    <img class = "legs-img" src = {legslogo} alt = "Legs"></img>
                    }
                    {parts[3] === 1 &&
                    <img class = "matress-img" src = {matresslogo} alt = "Matress"></img>
                    }

                </div>
            </div>

            <Link to = "/FinalScreen" class="start-button" state = {{ items : parts}} > Assemble the selected parts </Link>
        </div>
    )
}