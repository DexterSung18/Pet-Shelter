import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import "../App.css";

const DisplayDog = () => {
    return(
        <div>
            <div className="top-bar-breeds">
            <h1 className="pet-shelter-form">Dog Breeds</h1>
            <div>
                <Link className="back-to-home-link" to={"/"}>back to home</Link>
            </div>
            </div>
            <div className="breeds-details-container">
                <p><Link to={"/pet/dogbreeds/Akita"}>Akita</Link></p>
                <p><Link to={"/pet/dogbreeds/Boxer"}>Boxer</Link></p>
                <p><Link to={"/pet/dogbreeds/GermanShepherd"}>German Shepherd</Link></p>
                <p><Link to={"/pet/dogbreeds/GoldenRetriever"}>Golden Retriever</Link></p>
                <p><Link to={"/pet/dogbreeds/Pug"}>Pug</Link></p>
            </div>
            
        </div>
    )
}

export default DisplayDog;