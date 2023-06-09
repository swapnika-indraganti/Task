import React, { useState } from "react";
import { Link } from "react-router-dom";

import $ from "jquery";

import bodyLogo from "./../img1/cot.jpg"
import headBoard from "./../img1/headboard.jpg"
import legs from "./../img1/legs.jpg"
import matress from "./../img1/matress.jpg"
import pillow from "./../img1/pillow.jpg"

var checkBoxIds = ["body", "head", "legs", "matress", "pillow"];

var checkedBoxes; // Array representing if the part is selected.  0 - Not selected   , 1 - Selected
// index 0 - represents cot body, 1 - head, 2 - legs, 3 - matress, 4 -  pillow

export function SelectScreen() {

    var checkedItems = window.sessionStorage.getItem('selectedItems');
    if (checkedItems !== null) {
        checkedBoxes = JSON.parse(checkedItems);
    }
    window.sessionStorage.setItem('partsState', JSON.stringify([1, 0, 0, 0, 0])); // This is for the DragScreen's parts purpose, to handle edge case

    const [count, rerender] = useState(0);
    function setCheckedArray(i) {
        const isChecked = $("#" + checkBoxIds[i]).is(":checked");
        if (isChecked) {
            checkedBoxes[i] = 1;
        } else {
            checkedBoxes[i] = 0;
        }
        window.sessionStorage.setItem('selectedItems', JSON.stringify(checkedBoxes));
        console.log("The state is ", checkedBoxes);
        rerender(count + 1); // This is just to rerender the component, to show the change in checkbox
    }

    return (
        <div>
        <header className="home-header">
            <h1>Select Parts</h1>
        </header>
    
        <div class="select-container">
            { <div class="horizontal-scrollable-list">
                <div class="card">
                    <img src={bodyLogo} alt="Part 1" />
                    <div class="card-content">
                    <h3>Cot(body)</h3>
                    <input type="checkbox" id = "body" checked = {true} readOnly = {true} />
                    </div>
                </div>
                <div class="card">
                    <img src={headBoard} alt="Part 2" />
                    <div class="card-content">
                    <h3>HeadBoard</h3>
                    <input type="checkbox" id = "head" onChange={() => setCheckedArray(1)} checked = {checkedBoxes[1]}/>
                    </div>
                </div>
                <div class="card">
                    <img src={legs} alt="Part 3" />
                    <div class="card-content">
                    <h3>Legs</h3>
                    <input type="checkbox" id = "legs" onChange={() => setCheckedArray(2)} checked = {checkedBoxes[2]}/>
                    </div>
                </div>
                <div class="card">
                    <img src={matress} alt="Part 4" />
                    <div class="card-content">
                    <h3>Matress</h3>
                    <input type="checkbox" id = "matress" onChange={() => setCheckedArray(3)} checked = {checkedBoxes[3]}/>
                    </div>
                </div> 
                <div class="card">
                    <img src={pillow} alt="Part 5" />
                    <div class="card-content">
                    <h3>pillow</h3>
                    <input type="checkbox" id = "pillow" onChange={() => setCheckedArray(4)} checked = {checkedBoxes[4]}/>
                    </div>
                </div>
            </div>
            }
        </div>
        <Link to = "/AssembleScreen" class="start-button" state = {{ items : checkedBoxes}} > Assemble </Link>
        </div>
    );
}