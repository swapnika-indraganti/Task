import React from "react";
import { Link } from "react-router-dom";

import $ from "jquery";

import bodyLogo from "./../img1/cot.jpg"
import headBoard from "./../img1/headboard.jpg"
import legs from "./../img1/legs.jpg"
import matress from "./../img1/matress.jpg"
import pillow from "./../img1/pillow.jpg"

var checkBoxIds = ["body", "head", "legs", "matress", "pillow"];

var checkedBoxes = [0, 0, 0, 0, 0]; // Array representing if the part is selected.  0 - Not selected   , 1 - Selected

export function SelectScreen() {

    return (
        <div>
        <header className="home-header">
            <h1>Select Parts</h1>
        </header>
    
        <div class="select-container">
            <div class="horizontal-scrollable-list">
                <div class="card">
                    <img src={bodyLogo} alt="Part 1" />
                    <div class="card-content">
                    <h3>Cot(body)</h3>
                    <input type="checkbox" id = "body" onChange={() => setCheckedArray(0)}/>
                    </div>
                </div>
                <div class="card">
                    <img src={headBoard} alt="Part 2" />
                    <div class="card-content">
                    <h3>HeadBoard</h3>
                    <input type="checkbox" id = "head" onClick={() => setCheckedArray(1)}/>
                    </div>
                </div>
                <div class="card">
                    <img src={legs} alt="Part 3" />
                    <div class="card-content">
                    <h3>Legs</h3>
                    <input type="checkbox" id = "legs" onClick={() => setCheckedArray(2)}/>
                    </div>
                </div>
                <div class="card">
                    <img src={matress} alt="Part 4" />
                    <div class="card-content">
                    <h3>Matress</h3>
                    <input type="checkbox" id = "matress" onClick={() => setCheckedArray(3)}/>
                    </div>
                </div> 
                <div class="card">
                    <img src={pillow} alt="Part 5" />
                    <div class="card-content">
                    <h3>pillow</h3>
                    <input type="checkbox" id = "pillow" onClick={() => setCheckedArray(4)}/>
                    </div>
                </div>
            </div>
        </div>
        <Link to = "/AssembleScreen" class="start-button" state = {{ items : checkedBoxes}} > Assemble </Link>
        </div>
    );
}

function setCheckedArray(i) {
    const isChecked = $("#" + checkBoxIds[i]).is(":checked");
    if (isChecked) {
        checkedBoxes[i] = 1;
    } else {
        checkedBoxes[i] = 0;
    }
    console.log("The state is ", checkedBoxes);
}