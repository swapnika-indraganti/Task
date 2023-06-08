
import React from "react";

import bed from "./../img1/cot_splash.jpg"

import './../css/Home.css'
import { Link } from "react-router-dom";

export function Home() {
    return (
        <div>
            <header className="home-header">
                <h1>Assemble App</h1>
            </header>

            <div class="home-container">
                <div class="description">
                    <h2>About Us</h2>
                    <p><b>Introducing our <i>Exquisite bed:</i></b> 
                    a sanctuary of comfort and rest,
                    crafted with precision and attention to detail for unparalleled comfort and support.
                    With a sturdy frame and a plush mattress, it offers a luxurious sleeping surface that gently cradles your body.
                    Its elegant design adds a touch of sophistication to any bedroom decor,
                    seamlessly blending into any aesthetic. Experience the ultimate in comfort and style with our meticulously designed bed.
                    </p>
                </div>
                <img class = "home-img" src={bed} alt="bed-img" />
            </div>

            <Link to = "/SelectScreen" class="start-button">Start </Link>
        </div>
    )
} 