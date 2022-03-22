import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import "../App.css";

const DisplayCat = () => {
    return(
        <div>
            <div className="top-bar-breeds">
            <h1 className="pet-shelter-form">Dog Breeds</h1>
            <div>
                <Link className="back-to-home-link" to={"/"}>back to home</Link>
            </div>
            </div>
            <div className="breeds-details-container">
                <p><Link to={"/pet/catbreeds/Americanshorthair"}>American Short Hair</Link></p>
                <p><Link to={"/pet/catbreeds/Americanwirehair"}>American Wire Hair</Link></p>
                <p><Link to={"/pet/catbreeds/Persian"}>Persian</Link></p>
                <p><Link to={"/pet/catbreeds/Ragdoll"}>Ragdoll</Link></p>
                <p><Link to={"/pet/catbreeds/Siamese"}>Siamese</Link></p>
            </div>
            
        </div>
    )
}

export default DisplayCat;