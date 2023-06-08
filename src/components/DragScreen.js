import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"

import cot from "./../img1/cot.jpg"
import headboard from "./../img1/headboard.jpg"
import legs from "./../img1/legs.jpg"
import matress from "./../img1/matress.jpg"
import pillow from "./../img1/pillow.jpg"

export function Assemble() {

    var location = useLocation();
    var items = location.state.items;

    console.log("The receied items ", items);

    const [parts, setParts] = useState([0, 0, 0, 0, 0]);


    const [selectedPart, setPartId] = useState();

    function updateState(id, value) {
        console.log("Calling update state with ", id , " ", value);
        // switch (id) {
        //     case "body":

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
                        
                        { items[0] === 1 && 
                        <div draggable = "true" onDragStart={() => setPartId(0)}>
                            <img class = "s-img" src={cot} alt="body"></img>
                            <h3 class = "part-text">Cot(body)</h3>
                        </div>
                        }

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
                    
                    { parts[0]=== 1 &&
                        <h2 class = "selected-text"> Cot is selected </h2>
                    }

                    { parts[1] === 1 &&
                        <h2 class = "selected-text"> HeadBoard is selected </h2>
                    }

                    { parts[2] === 1 &&
                        <h2 class = "selected-text"> Legs are selected </h2>
                    }

                    { parts[3] === 1 &&
                        <h2 class = "selected-text"> Matress is selected </h2>
                    }

                    { parts[4] === 1 &&
                        <h2 class = "selected-text"> Pillow is selected </h2>
                    }

                </div>
            </div>

            <Link to = "/FinalScreen" class="start-button" state = {{ items : parts}} > Assemble the selected parts </Link>
        </div>
    )
}